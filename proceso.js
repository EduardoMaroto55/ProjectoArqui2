
var Program = {
    memory: [],
    regs: [0, 1, 2, 3],
    pc: 0,
    HALT: false,
    load: function (prg) {
        let text = prg;
 
        const myArray = text.split(",")
        // for (let i = 0; i < myArray.length; i++) {
        //     let n = myArray[i].
        //     n.replace(/^\s+|\s+$/gm,'');
        //     myArray[i] = n+""
        // }
        Program.memory = myArray;
    },
    runone: function () {
        if (this.HALT)
            return;

        for (let i = 0; i < Program.memory.length; i++) {
            if (Program.memory[i] == "R0") {
                Program.memory[i] = this.regs[0]
            }else if (Program.memory[i] == "R1") {
                Program.memory[i] = this.regs[1]
            }else if (Program.memory[i] == "R2") {
                Program.memory[i] = this.regs[2]
            }else if(Program.memory[i] == "R3"){
                Program.memory[i] = this.regs[3]
            }
        }

        console.log(Program.memory)
        var instr = Program.memory[Program.pc];

        console.log(instr)
        switch (instr) {
            // movr rdst, rsrc 
            case 'MOVR':
                console.log("move")
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                this.regs[rdst] = this.regs[rsrc];

                break;
            // movv rdst, val
            case 'MOVV':
                Program.pc++;
                var rdst = this.memory[pc++];
                var val = this.memory[pc++];
                regs[rdst] = val;
                break;
            // add rdst, rsrc
            case 20:
                console.log("add")
                break;

            // sub rdst, rsrc
            case 21:
                console.log("sub")
                break;

                
            // mul rdst, rsrc
            case 21:
                console.log("mul")
                break;

            // print reg
            case 60:
                console.log("Print")
                break;

            // halt
            case 255:
            default:
                Program.HALT = true;
                break;
        }
        fillTable();
        if (Program.pc >= Program.memory.length) {
            Program.HALT = true;
        }
    },
    run: function () {
        while (!this.HALT) {
            Program.runone();
        }
    }
}



function iniciar() {
    //console.log(document.getElementById("code"))
    var textarea = document.getElementById('textarea');
    var value = textarea.value;
    Program.load(value);
    Program.run();
    Program.HALT=false
}


//console.log("This program prints Fibonacci numbers");


function loop() {
    document.getElementById("code");

}

function fillTable() {
    document.getElementById("R0D").value = Program.regs[0],
        document.getElementById("R1D").value = Program.regs[1],
        document.getElementById("R2D").value = Program.regs[2],
        document.getElementById("R3D").value = Program.regs[3]
    console.log(Program.regs)
}

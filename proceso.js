var textarea = document.getElementById('textarea');
var R0E0 = document.getElementById("R0D")
var R0E1 = document.getElementById("R1D")
var R0E2 = document.getElementById("R2D")
var R0E3 = document.getElementById("R3D")
var R0HE0 = document.getElementById("R0H")
var R0HE1 = document.getElementById("R1H")
var R0HE2 = document.getElementById("R2H")
var R0HE3 = document.getElementById("R3H")
var Program = {
    memory: [],
    regs: [0, 0, 0, 0],
    pc: 0,
    HALT: false,
    codigo: 0,
    load: function (prg) {
        let text = prg;
        let myArray = text.split(",")
        // for (let i = 0; i < myArray.length; i++) {
        //     let n = myArray[i].
        //     n.replace(/^\s+|\s+$/gm,'');
        //     myArray[i] = n+""
        // }
        this.memory.push(...myArray);
    },
    runone: function () {
        if (this.HALT)
            return;
        Program.codigo += Program.memory.length;
        for (let i = 0; i < Program.memory.length; i++) {
            if (Program.memory[i] == "R0") {
                Program.memory[i] = 0
            } else if (Program.memory[i] == "R1") {
                Program.memory[i] = 1
            } else if (Program.memory[i] == "R2") {
                Program.memory[i] = 2
            } else if (Program.memory[i] == "R3") {
                Program.memory[i] = 3
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
                var rdst = this.memory[this.pc++];
                var val = this.memory[this.pc++];
                this.regs[rdst] = parseInt(val);
                break;
            // add rdst, rsrc
            case 'ADD':
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                this.regs[rdst] += this.regs[rsrc];
                break;

            // sub rdst, rsrc
            case 'SUB':
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                this.regs[rdst] -= this.regs[rsrc];
                break;


            // mul rdst, rsrc
            case "MUL":
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                this.regs[rdst] *= this.regs[rsrc];
                break;

         

            // halt
            case 255:
            default:
                Program.HALT = true;
                break;
        }
        fillTable();
        if (Program.pc >= Program.codigo) {
            Program.HALT = true;
        }
    },
    run: function () {
        while (!this.HALT && Program.memory.length <= 256) {
            Program.runone();
        }
    }
}



function iniciar() {
    var value = textarea.value;
    Program.HALT = false
    Program.load(value);
    Program.run();
}
function clean() {
    textarea.value = ""
    Program.memory = []
    Program.regs = [0, 0, 0, 0]
    Program.pc = 0,
        Program.HALT = false,
        Program.codigo = 0
    clearTable()
}
function clearTable() {
    R0E0.textContent = 0
    R0E1.textContent = 0
    R0E2.textContent = 0
    R0E3.textContent = 0
}


function fillTable() {
    R0E0.textContent = Program.regs[0]
    R0HE0.textContent = "0"
    R0E1.textContent = Program.regs[1]
    R0E2.textContent = Program.regs[2]
    R0E3.textContent = Program.regs[3]
}


var textarea = document.getElementById('textarea');
var R0E0 = document.getElementById('A')
var R0E1 = document.getElementById("R1D")
var R0E2 = document.getElementById("R2D")
var R0E3 = document.getElementById("R3D")
var R0HE0 = document.getElementById("R0H")
var R0HE1 = document.getElementById("R1H")
var R0HE2 = document.getElementById("R2H")
var R0HE3 = document.getElementById("R3H");
var Acu = document.getElementById("Acumulador")
var Est = document.getElementById("Estado")
var Es1 = document.getElementById("Es1")
var Es2 = document.getElementById("Es2")
var Counter = document.getElementById("programCounter")

var Program = {
    memory: [],
    regs: [0, 0, 0, 0],
    pc: 0,
    HALT: false,
    codigo: 0,
    load: function (prg) {
        R0E0.style.backgroundColor = "white"
        R0E1.style.backgroundColor = "white"
        R0E2.style.backgroundColor = "white"
        R0E3.style.backgroundColor = "white"
        let text = prg;
        let myArray = text.split(/,|\n/)
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

        var instr = Program.memory[Program.pc];
        var estado = 0
        switch (instr) {
            // movr rdst, rsrc 
            case 'MOVR':
                console.log("move")
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                this.regs[rdst] = this.regs[rsrc];
                grafico("","","","",rdst, rsrc)
                break;
            // movv rdst, val
            case 'MOVV':
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var val = this.memory[this.pc++];
                if (val < 0) {
                    estado = 1
                }
                this.regs[rdst] = parseInt(val);
                grafico("","","","",rdst)
                break;
            // add rdst, rsrc
            case 'ADD':
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                var registro1 = this.regs[rdst]
                this.regs[rdst] += this.regs[rsrc];
                if (this.regs[rdst] < 0) {
                    estado = 1
                }
                grafico(this.regs[rdst], estado, registro1, this.regs[rsrc],rdst,rsrc)
                break;

            // sub rdst, rsrc
            case 'SUB':
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                var registro1 = this.regs[rdst]
                this.regs[rdst] -= this.regs[rsrc];
                if (this.regs[rdst] < 0) {
                    estado = 1
                }
                grafico(this.regs[rdst], estado, registro1, this.regs[rsrc],rdst,rsrc)
                break;


            // mul rdst, rsrc
            case "MUL":
                Program.pc++;
                var rdst = this.memory[this.pc++];
                var rsrc = this.memory[this.pc++];
                var registro1 = this.regs[rdst]
                this.regs[rdst] *= this.regs[rsrc];
                if (this.regs[rdst] < 0) {
                    estado = 1
                }
                grafico(this.regs[rdst], estado, registro1, this.regs[rsrc],rdst,rsrc)
                break;



            // halt
            case 255:
            default:
                Program.HALT = true;
                break;
        }
        Counter.textContent = "Program counter: "+Program.pc
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
    R0HE0.textContent = 0
    R0HE1.textContent = 0
    R0HE2.textContent = 0
    R0HE3.textContent = 0
    Acu.value = ""
    Est.value = ""
    Es1.value = ""
    Es2.value = ""
    R0E0.style.backgroundColor = "white"
    R0E1.style.backgroundColor = "white"
    R0E2.style.backgroundColor = "white"
    R0E3.style.backgroundColor = "white"
    Counter.textContent= "Program counter:"
}

function tohex(params) {
    parseInt(params)
    return params.toString(16)
}

function fillTable() {
    R0E0.textContent = Program.regs[0]
    R0HE0.textContent = tohex(Program.regs[0])
    R0E1.textContent = Program.regs[1]
    R0HE1.textContent = tohex(Program.regs[1])
    R0E2.textContent = Program.regs[2]
    R0HE2.textContent = tohex(Program.regs[2])
    R0E3.textContent = Program.regs[3]
    R0HE3.textContent = tohex(Program.regs[3])
}

function grafico(p1, p2, p3, p4,r1,r2) {
    Acu.value = p1
    Est.value = p2
    Es1.value = p3
    Es2.value = p4

    switch (r1) {
        case 0:
            R0E0.style.backgroundColor = "#90EE90"
            break;
        case 1:
            R0E1.style.backgroundColor = "#90EE90"
            break;
        case 2:
            R0E2.style.backgroundColor = "#90EE90"
            break;
        case 3:
            R0E3.style.backgroundColor = "#90EE90"
            break;
        default:
            break;
    }switch (r2) {
        case 0:
            R0E0.style.backgroundColor = "#90EE90"
            break;
        case 1:
            R0E1.style.backgroundColor = "#90EE90"
            break;
        case 2:
            R0E2.style.backgroundColor = "#90EE90"
            break;
        case 3:
            R0E3.style.backgroundColor = "#90EE90"
            break;
        default:
            break;
    }
}

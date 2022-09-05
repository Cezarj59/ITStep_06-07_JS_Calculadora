//Variaveis/Constantes Globais (usada em mais de uma função)

const visor = document.getElementById('inputVisor');
const visor2 = document.getElementById('inputVisor2');
var operador = "";
var valor1 = 0;


function btn_numero(numero) {
    visor.value += numero;
}

function btn_operador(op) {
    valor1 = Number(visor.value.replace(",", "."));
    //replace(",",".") substitui a vírgula por ponto
    operador = op;
    visor.value = "";
    visor2.value = valor1 + " " + op;
    console.log(valor1 + " " + op)
}

function btn_clear() {
    visor.value = "";
    visor2.value = "";
    operador = "";
    valor1 = 0;
}


function igual() {
    let total = 0;
    let valor = Number(visor.value.replace(",", "."));
    if (operador == "+") {
        total = valor1 + valor;
    } else if (operador == "-") {
        total = valor1 - valor;
    } else if (operador == "x") {
        total = valor1 * valor;
    } else if (operador == '/') {
        total = valor1 / valor;
    } else if (operador == "pot") {
        total = Math.pow(valor1, valor);
    } else if (operador == "rad") {
        total = Math.sqrt(valor1);
    } else if (operador == "%") {
        total = (valor1 / 100) * valor;
    }

    visor2.value = (valor1 + operador + valor + " = " + total);
    visor.value = "";
    console.log(valor1 + " " + operador + " " + valor + " = " + total);
    console.log(valor);
    console.log(total);
}


function btn_inverter() {
    let x = visor.value;
//indexOf() verifica se possui um valor igual ao inserido na função
    if (x.indexOf('-') != -1)
        visor.value = x.substring(1);
        //substring retorna o valor a partir no indice indicado;
    else
        visor.value = '-' + x;
}
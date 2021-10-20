let cont = 0

function insert(num=0) {
    if (cont === 1) {
        document.querySelector('#val').innerHTML = num;
    } else {
        document.querySelector('#val').innerHTML += num;
        cont = 0;
    }
}

function insertOP(op=0) {
    document.querySelector('#val').innerHTML += op;
    cont = 0;
}

function clean() {
    document.querySelector('#val').innerHTML = "";
    cont = 0;
}

function back() {
    let result = document.querySelector('#val').innerHTML;
    document.querySelector('#val').innerHTML = result.substring(0, result.length - 1);
    cont = 0;
}

function calcular() {
    let resultado = document.querySelector('#val').innerHTML;
    if(resultado) {
        document.querySelector('#val').innerHTML = eval(resultado);
    } 
    else {
        document.querySelector('#val').innerHTML = ``;
    }
    cont = 1;
}





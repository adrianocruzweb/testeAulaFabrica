
function mostraTexto() {

document.getElementById("mostra").innerText = document.getElementById("texto").value;

}

function mudaTipo(){

var teste = document.getElementById("texto");

if(teste.type == "text"){
teste.type = "password"	;
}else{
teste.type = "text";
}

}

function mensagem(){

window.alert(document.getElementById("texto").value);

}

function entrada(){

var texto = prompt("digite um texto");

document.getElementById("texto").value = texto;

}

function mudaCor(value) {

var cor = document.getElementById("cor").value;

switch(value)
    {
        case 'b':
            color = "blue";
        break;
        case 'r':
            color = "red";
        break;
        case 'g':
            color = "green";
        break;
    }
    document.getElementById("mostra").style.backgroundColor = color;
}


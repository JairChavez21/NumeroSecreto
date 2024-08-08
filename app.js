function elementoTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function mensajesIniciales() {
    elementoTexto('h1','Juego del número secreto');
    elementoTexto('p',`Ingresa un número del 1 al ${numeroMaximo}:`);
}

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

mensajesIniciales();

function returnNumeroSecreto(){
    let numeroSorteado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        elementoTexto('p','Se han generado el máximo de números posibles.');
    } 
        else {
            if (listaDeNumerosSorteados.includes(numeroSorteado)) {
                return returnNumeroSecreto();
            } 
                else {
                    listaDeNumerosSorteados.push(numeroSorteado);
                    return numeroSorteado;
                }
        }
} 

function condicionesIniciales() {
    numeroSecreto = returnNumeroSecreto();
    contador = 1;
    mensajesIniciales();
}

let intentosMaximos = 3 
let contador = 1

function returnNumeroUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valueUsuario').value);
    if (numeroUsuario == numeroSecreto) {
        elementoTexto('p',`Felicidades, adivinaste el número secreto en: ${contador} ${(contador === 1) ? 'intento.' : 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
        else {
            if (numeroUsuario > numeroSecreto) {
            elementoTexto('p','Inténtalo de nuevo, el número secreto es menor.');
            }
            else {
                elementoTexto('p','Inténtalo de nuevo, el número secreto es mayor.');
            }
        limpiarCaja();
        contador ++;
        }
    return;
}

let numeroSecreto = returnNumeroSecreto();

function limpiarCaja() {
    let valorCaja = document.getElementById('valueUsuario').value = '';
}

function reintentoDeUsuario() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}




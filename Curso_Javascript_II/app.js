<<<<<<< HEAD
const limiteRandom = 10;
let n_intentos = 3;
const num_random = _generarRandom();


function _generarRandom() {
    return Math.floor(Math.random()*limiteRandom)+1;
}

function _asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

}

function _send(){
    let num_User = parseInt(document.getElementById('valor_User').value);
    
    n_intentos= n_intentos-1;

    if(num_User===num_random){
    _asignarTexto(`p`, `ADIVINASTE!`); 
    }
    else{
        if(num_User < num_random){
            _asignarTexto(`p`, `El numero secreto es menor || Tienes ${n_intentos} intentos :D`);
        }
        else{
            _asignarTexto(`p`, `El numero secreto es menor || Tienes ${n_intentos} intentos :D`);
        }
    } 

    if(n_intentos<0){
        alert(`LLEGASTE AL LIMITE DE INTENTOS`);
        _asignarTexto(`p`, `Te quedaste sin intentos, el numero era ${num_random}`);

        document.getElementById('valor_User').disabled = true;
    }


}

function _main(){
    _asignarTexto(`h1`, `Adivina el número || No es ${num_random}`);    
    _asignarTexto(`p`, `Tienes ${n_intentos} intentos :D`);
    _asignarTexto(`label`, `Adivina el numéro del 1 al ${limiteRandom}`);   
}


=======
const limiteRandom = 10;
let n_intentos = 3;
const num_random = _generarRandom();


function _generarRandom() {
    return Math.floor(Math.random()*limiteRandom)+1;
}

function _asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

}

function _send(){
    let num_User = parseInt(document.getElementById('valor_User').value);
    
    n_intentos= n_intentos-1;

    if(num_User===num_random){
    _asignarTexto(`p`, `ADIVINASTE!`); 
    }
    else{
        if(num_User < num_random){
            _asignarTexto(`p`, `El numero secreto es menor || Tienes ${n_intentos} intentos :D`);
        }
        else{
            _asignarTexto(`p`, `El numero secreto es menor || Tienes ${n_intentos} intentos :D`);
        }
    } 

    if(n_intentos<0){
        alert(`LLEGASTE AL LIMITE DE INTENTOS`);
        _asignarTexto(`p`, `Te quedaste sin intentos, el numero era ${num_random}`);

        document.getElementById('valor_User').disabled = true;
    }


}

function _main(){
    _asignarTexto(`h1`, `Adivina el número || No es ${num_random}`);    
    _asignarTexto(`p`, `Tienes ${n_intentos} intentos :D`);
    _asignarTexto(`label`, `Adivina el numéro del 1 al ${limiteRandom}`);   
}


>>>>>>> 8ff5e53b1a2e72214a89c916da676d32b940f7af
_main();
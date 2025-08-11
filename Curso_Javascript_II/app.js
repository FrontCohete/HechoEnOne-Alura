const limiteRandom = 10;
let n_intentos = 3;
let num_random = _generarRandom();


function _generarRandom() {
    return Math.floor(Math.random()*limiteRandom)+1;
}

function _asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

}

function _limpiarTxtBox(){
    let valorBox = document.querySelector('#valor_User');
    valorBox.value = '';
}
function _send(){
    let num_User = parseInt(document.getElementById('valor_User').value);
    
    n_intentos= n_intentos-1;
 

    if(n_intentos<0){
        alert(`LLEGASTE AL LIMITE DE INTENTOS`);
        _asignarTexto(`p`, `Te quedaste sin intentos, el numero era ${num_random}`);
        _end();
    }
    else{
        if(num_User===num_random){
        _asignarTexto(`p`, `ADIVINASTE!`); 
        _end();
        
        document.querySelector('#btn_Reward').removeAttribute('hidden');
        requestAnimationFrame(()=>{

        })
        }
        else{
            if(num_User < num_random){
                _asignarTexto(`p`, `El numero secreto es menor || Tienes ${n_intentos} intentos :D`);
            }
            else{
                _asignarTexto(`p`, `El numero secreto es mayor || Tienes ${n_intentos} intentos :D`);
            }
        }
    }

    _limpiarTxtBox();

}



function _end(){
    document.getElementById('valor_User').disabled = true;
    document.querySelector('#btn_Send_App').setAttribute('disabled', 'true');
    document.querySelector('#btn_Reset_App').removeAttribute('disabled');
}

function _reset(){

    alert(`Se generó un nuevo numero secreto`);
    //Reestablecer valores
    n_intentos = 3;
    num_random = _generarRandom() ;
    // Habilitar btnSend & txtBx y Deshabilitar btnReset & btnReward
    document.querySelector('#btn_Send_App').removeAttribute('disabled');
    document.getElementById('valor_User').disabled = false;
    document.querySelector('#btn_Reset_App').setAttribute('disabled', 'true');
    document.querySelector('#btn_Reward').hidden=true;
    document.querySelector('section').hidden=true;
    // Habilitar Mensajes iniciales
    _main();
    

    // |-> Funcion para recargar la página //location.reload(); 
}

function _main(){

    _asignarTexto(`h1`, `Adivina el número || No es ${num_random}`);    
    _asignarTexto(`p`, `Tienes ${n_intentos} intentos :D`);
    _asignarTexto(`label`, `Adivina el numéro del 1 al ${limiteRandom}`);   
    
}

_main();

function _reward(){
       document.getElementById('img_reward').innerHTML = '<img class="reward"  src="./img/pato♥.png" alt="Sino ves un pato, te mueres c:">';
}

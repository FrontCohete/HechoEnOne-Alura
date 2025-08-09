<<<<<<< HEAD
let maxRandom = 10;
let numeroSecreto = Math.floor(Math.random()*maxRandom)+1;
let entradaUser = 0;
let intentos = 1;
let maxIntentos = 3;

    console.log(numeroSecreto);

while(intentos <= maxIntentos){    

    entradaUser = prompt("Elija un número entre el 1 y 10: ");


    if(numeroSecreto == entradaUser){
        //alert("BIEN HECHO! ""   era el número a adivinar");
        alert(`BIEN HECHO!\n ${entradaUser} era el número a adivinar, lo conseguiste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
        //ALT + 96 para ``
        break;
    }
    else{
        if(entradaUser>numeroSecreto){
            alert(`El número es mayor al que se debe adivinar, llevas ${intentos} intentos, te restan ${maxIntentos-intentos}`);
        }
        else{   
            alert(`El número es menor al que se debe adivinar, llevas ${intentos} intentos, te restan ${maxIntentos-intentos}`);
        } 
        
        if(intentos>maxIntentos){
            alert("Llegaste al numero maximo de intentos");
            break;
            
        }

    }   

    intentos = intentos +1;
}

function _mostrar_Numero(item, texto){
    let itemHTML = document.querySelector(item);
    itemHTML.innerHTML=texto;

}
=======
let maxRandom = 10;
let numeroSecreto = Math.floor(Math.random()*maxRandom)+1;
let entradaUser = 0;
let intentos = 1;
let maxIntentos = 3;

    console.log(numeroSecreto);

while(intentos <= maxIntentos){    

    entradaUser = prompt("Elija un número entre el 1 y 10: ");


    if(numeroSecreto == entradaUser){
        //alert("BIEN HECHO! ""   era el número a adivinar");
        alert(`BIEN HECHO!\n ${entradaUser} era el número a adivinar, lo conseguiste en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
        //ALT + 96 para ``
        break;
    }
    else{
        if(entradaUser>numeroSecreto){
            alert(`El número es mayor al que se debe adivinar, llevas ${intentos} intentos, te restan ${maxIntentos-intentos}`);
        }
        else{   
            alert(`El número es menor al que se debe adivinar, llevas ${intentos} intentos, te restan ${maxIntentos-intentos}`);
        } 
        
        if(intentos>maxIntentos){
            alert("Llegaste al numero maximo de intentos");
            break;
            
        }

    }   

    intentos = intentos +1;
}

function _mostrar_Numero(item, texto){
    let itemHTML = document.querySelector(item);
    itemHTML.innerHTML=texto;

}
>>>>>>> 8ff5e53b1a2e72214a89c916da676d32b940f7af

// Variables //
var form;
var tipod;
var montoIn;
var resultado;
var error;

// --------------- Funciones de evento ---------------- //
function convertirMoneda(event){
    const monto=parseFloat(montoIn.value);

    if(montoIn.value.match(/^[a-zA-Z]+$/))
    {
        console.log("error");
        event.preventDefault();
        error.innerText = "Debes colocar solo numeros"
        montoIn.focus();
        return false
    }

    if(montoIn.value <= 0) 
    {
        console.log("error el monto es menor a 0");
        event.preventDefault();
        error.innerText = "El monto es menor a 0"
        montoIn.focus();
        return false
    }

    if(montoIn.value.match(/^[0-9]+(\.[0-9]+)?$/)) {  
        if(tipod.value == "0")
        {
            console.log("error");
            event.preventDefault();
            error.innerText = "Debes seleccionar un tipo de cambio"
            tipod.focus();
            return false
        }
        if(tipod.value == "1")
        {
            
            event.preventDefault();
            return resultado.value = monto * 1.08 + " $";
        }

        if(tipod.value == "2")
        {
            
            event.preventDefault();
            return resultado.value = monto * 0.93 + " € ";
        }

        if(tipod.value == "3")
        {
            console.log("tercera opcion");
            event.preventDefault();
            return resultado.value = monto * 1000 + " $";
        }
    }
    if (montoIn.value.match(/^[^\w\s.]+$/))
    {
        console.log("Debes colocar solo numeros");
        event.preventDefault();
        error.innerText = "Debes colocar solo numeros"
        montoIn.focus();
        return false
    }
    return false
}

function domCargado(){
    form=document.getElementById("conversorForm");
    tipod=document.getElementById("tipod");
    montoIn=document.getElementById("monto");
    resultado=document.getElementById("resultado");
    error=document.getElementById("error")
}

//----------------- Inicio de eventos-------------------
document.addEventListener('DOMContentLoaded', domCargado);
document.addEventListener('submit',convertirMoneda);
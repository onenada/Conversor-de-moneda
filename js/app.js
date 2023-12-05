// ---------------Variables  y Objetos DOM---------------

const form=document.getElementById("conversorForm");
const tipod=document.getElementById("tipod");
const montoIn=document.getElementById("monto");
const resultado=document.getElementById("resultado");
const error=document.getElementById("error")

// --------------- Funciones de evento ----------------
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
        console.log("primera opcion");
        event.preventDefault();
        return resultado.value = monto * 1.08 + " $";
    }

    if(tipod.value == "2")
    {
        console.log("segunda opcion");
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

//----------------- Inicio de eventos-------------------
form.addEventListener('submit',convertirMoneda);
'use strict'

function createAlert(){
    //create de container - Alert
    let container = document.createElement("div");
    container.className= "alert";
    container.setAttribute("id", "ctn_alert");

    //create element inside the alert container
    let mensaje = document.createTextNode("Complete correctamente todos los compos");
    let buttonX = doButton();

    //add elements to alert
    container.appendChild(mensaje);
    container.appendChild(buttonX);

    document.body.appendChild(container);
    alertTimer();
}


const doButton = ()=>{
    let btn_close = document.createElement("button");
    btn_close.setAttribute("id", "close_alert");
    btn_close.className="btn_close";

    let mensaje_btn = document.createTextNode("X");
    btn_close.appendChild(mensaje_btn);
    btn_close.onclick = function () {
        removeAlert();
    };
    return btn_close;
}


const alertTimer =()=>{
    window.setTimeout(function(){
        removeAlert();
    }, 2500);
}

function removeAlert(){
    document.getElementById("ctn_alert").remove();
}
"use strict"
var botonEncriptar = document.getElementById("encriptar"),
    botonDesencriptar = document.getElementById("desencriptar"),
    botonCopiar = document.getElementById("copiarTexto"),
    cuadroImagen = document.getElementById("visto"),
    cuadroTexto = document.getElementById("oculto"),
    textoEncriptado = null,
    textoDesencriptado;

function condicionTexto(x){
    var key = x.keyCode || x.which,
        tecla = String.fromCharCode(key).toString(),
        parametros = "abcdefghijklmnñopqrstuvwxyz ",
        enterDelete = [8,13],
        tecla_enterDelete = false;

    for(var i in enterDelete){
        if(key == enterDelete[i]){
            tecla_enterDelete = true;
            break;
        }
    }
    
    if(parametros.indexOf(tecla) == -1 && !tecla_enterDelete){
        alert("Ingresar solo letras minúsculas y sin acentos");
        return false;
    }
}

botonEncriptar.addEventListener('click', function (){
    var txt = document.getElementById('textoIngresado').value;
    if (txt != "") {
        textoEncriptado = txt.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        cuadroImagen.className = 'cuadroOculto';
        cuadroTexto.className = 'cuadroVisto';
        document.getElementById('textoEncriptado').value = textoEncriptado;
        document.getElementById('textoIngresado').value = "";
    } else{
        alert("Ingrese un texto para encriptar o desencriptar");
    }    
});

botonDesencriptar.addEventListener('click', function (){
    var txt = document.getElementById('textoIngresado').value;
    if (txt != "") {
        textoDesencriptado = txt.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.getElementById('textoEncriptado').value = textoDesencriptado;
        document.getElementById('textoIngresado').value = "";
    } else{
        alert("Ingrese un texto para encriptar o desencriptar");
    }   
});

botonCopiar.addEventListener('click', function (){
    var txt = document.getElementById('textoEncriptado');
    txt.select();
    document.execCommand('copy');
    document.getElementById('textoEncriptado').value = "";
});

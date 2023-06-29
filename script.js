const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const etiqueta = document.querySelector(".etiqueta");


function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    var txtCifrado = stringEncriptado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return txtCifrado;
    }

function desencriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    var txtCifrado = stringEncriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return txtCifrado;
    }

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textotEncriptado = encriptar(textArea.value)
    mensaje.value = textotEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    etiqueta.style.display = "none";
}

function btnDesencriptar(){
    const textotEncriptado = desencriptar(textArea.value)
    mensaje.value = textotEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    etiqueta.style.display = "none";
}


function btnCopiar(){
    var text = mensaje.value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Texto copiado');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

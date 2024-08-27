function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("mensaje-encriptado").innerText = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("mensaje-encriptado").innerText = textoDesencriptado;
}

function copiarTexto() {
    let contenido = document.getElementById("mensaje-encriptado").innerText;
    navigator.clipboard.writeText(contenido)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.log('Algo salió mal', err));
}
function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/e/g, "enter")
                          .replace(/o/g, "ober")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/u/g, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/g, "e")
                          .replace(/ober/g, "o")
                          .replace(/imes/g, "i")
                          .replace(/ai/g, "a")
                          .replace(/ufat/g, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copió");
}

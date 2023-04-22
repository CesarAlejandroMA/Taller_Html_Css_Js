function contar(){
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "La cantidad de caracteres es: " + texto.length;
}
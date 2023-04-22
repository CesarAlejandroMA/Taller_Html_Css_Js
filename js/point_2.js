function tipoTexto(){
    var cajaTexto = document.getElementById("area").value;
    var result = document.getElementById("result");
    //result.innerHTML = "El texto es:" + cajaTexto;
    if(!cajaTexto){ //Es verdadero si una cadena es vacia, alert desplega un mensaje en el navegador
        alert('Debe ingresar un valor');
    }else{
        if(isNaN(cajaTexto)){
            result.innerHTML = "El tipo de dato ingresado es text";
        }else{
            result.innerHTML = "El tipo de dato ingresado es number";
        }
    }

}
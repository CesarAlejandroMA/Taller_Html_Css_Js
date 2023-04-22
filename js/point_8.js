function identificar(){
    var text = document.getElementById("numeros").value;
    var result = document.getElementById("result");

    var regularExp = /[\s,]+/;
    var finalText = "";

    if(!text){
        alert("El campo NO puede ser vacio");
    }else{

        var numeros = text.split(regularExp);
        //result.innerHTML = "Prueba: " + numeros + "Longitud: " + numeros.length;

        var numTest = 0;
        
        for(var i = 0; i < numeros.length; i++){

            if(parseInt(numeros[i]) == numeros[i]){ //El dato separado es número entero
                if(numeros[i] % 2 == 0){ //Es número par
                    finalText = finalText + "•  " + numeros[i] + '<label style="color: blue"> es número par</label><br>';
                }else{ //Es número impar
                    finalText = finalText + "•  " + numeros[i] + '<label style="color: green"> es número impar</label><br>';
                }
            }else{
                finalText = finalText + "•  " + numeros[i] + '<label style="color: red"> no es número entero</label><br>';
            }
        }

        result.innerHTML = finalText;

    }

}
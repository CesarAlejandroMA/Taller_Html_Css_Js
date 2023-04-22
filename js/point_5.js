function identificar(){
    var number = document.getElementById("number").value;
    var result = document.getElementById("resultado");

    if(!number){
        result.innerHTML = "";
        alert("El campo no puede ser vacio");
    }else{
        if(parseInt(number) == number){
            if(number < 1){
                result.innerHTML = "";
                alert("Debe ingresar números positivos");
            }else if(number % 2 == 0){
                result.innerHTML = "Par";
            }else{
                result.innerHTML = "Impar";
            }
        }
        else if(parseFloat(number) == number){
            if(number > 0){
                result.innerHTML = "";
                alert("Debe ingresar números enteros");
            }else{
                result.innerHTML = "";
                alert("Debe ingresar números enteros positivos");
            }
        }
    }

}
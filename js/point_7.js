function demostrarDivisible(){
    var divisible = document.getElementById("divisible").value;
    var divisor = document.getElementById("divisor").value;
    var result = document.getElementById("result");
    
    var condicion = false;

    if(!divisible || !divisor){
        alert("Es obligatorio completar todos los campos");
    }else{
        if(parseInt(divisible) == divisible && parseInt(divisor) == divisor){ //A entero, B Entero

            if(divisible <= 0 && divisor <= 0){
                result.innerHTML = "Los números "  + divisible + " y " + divisor +" deben ser positivos";
            }else if(divisible <= 0){
                result.innerHTML = "El número " + divisible + " debe ser positivo";
            }else if(divisor <= 0){
                result.innerHTML = "El número "  + divisor + " debe ser positivo";
            }else{
                if(divisible % divisor == 0){
                    condicion = true;
                    result.innerHTML = "El número " + divisible + " es divisible entre el numero " + divisor;
                }else{
                    result.innerHTML = "El número " + divisible + " NO es divisible entre el numero " + divisor;
                }
            }

        }else if(parseFloat(divisible) == divisible && parseInt(divisor) == divisor){//A decimal, B Entero

            if(divisible <= 0 && divisor <= 0){
                result.innerHTML = "El número "  + divisible + " debe ser entero positivo y el número " + divisor + " debe ser positivo";
            }else if(divisible >= 0 && divisor <= 0){
                result.innerHTML = "El número "  + divisible + " debe ser entero y el número " + divisor + " debe ser positivo";
            }else if(divisible <= 0 && divisor >= 0){
                result.innerHTML = "El número "  + divisible + " debe ser entero positivo";
            }else{
                result.innerHTML = "El número "  + divisible + " debe ser entero";
            }

        }else if(parseInt(divisible) == divisible && parseFloat(divisor) == divisor){//A entero, B decimal

            if(divisible <= 0 && divisor <= 0){
                result.innerHTML = "El número "  + divisible + " debe ser positivo y el número " + divisor + " debe ser entero positivo";
            }else if(divisible >= 0 && divisor <= 0){
                result.innerHTML = "El número " + divisor + " debe ser entero positivo";
            }else if(divisible <= 0 && divisor >= 0){
                result.innerHTML = "El número "  + divisible + " debe ser positivo y el número " + divisor + " debe ser entero";
            }else{
                result.innerHTML = "El número " + divisor + " debe ser entero";
            }

        }else{ //A decimal, B decimal

            if(divisible <= 0 && divisor <= 0){
                result.innerHTML = "Los números " + divisible + " y " + divisor + " deben ser enteros positivos";
            }else if(divisible >= 0 && divisor <= 0){
                result.innerHTML = "El número " + divisible + " debe ser entero y el número " + divisor + " debe ser entero positivo";
            }else if(divisible <= 0 && divisor >= 0){
                result.innerHTML = "El número " + divisible + " debe ser entero positivo y el número " + divisor + " debe ser entero";
            }else{
                result.innerHTML = "Los números " + divisible + " y " + divisor + " deben ser enteros";
            }

        }
    }

}
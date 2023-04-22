function verificarEdad(){
    var nombre = document.getElementById("namePerson").value;
    var edad = document.getElementById("yearPerson").value;
    var result = document.getElementById("result");
    
    if(!nombre || !edad){
        result.innerHTML = "";
        alert("Debe completar los campos");
    }else{
        if(edad <= 0){
            result.innerHTML = "";
            alert("La edad no es valida");
        }else{
            if(edad >= 18 && edad <= 125){
                result.innerHTML = "Hola " + nombre + ", eres mayor de edad";
            }else if(edad > 125){
                result.innerHTML = "";
                alert("El limite de edad es 125");
            }else{
                result.innerHTML = "Hola " + nombre + ", aun NO eres mayor de edad";
            }
        }
    }

}
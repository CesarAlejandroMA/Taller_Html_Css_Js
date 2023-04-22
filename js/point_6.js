function buscar(){

    var credencial = document.getElementById("credenciales").value;
    var text = document.getElementById("texto").value;
    var result = document.getElementById("result");

    if(!credencial || !text){
        result.innerHTML = "";
        alert("No pueden hacer campos sin completar");
    }else{
        let arrayCred = [];
        let arrayText = [];
        
        //Guardar cada letra del credencial en un espacio del arreglo arrayCred
        for(var i = 0; i < credencial.length; i++){
            arrayCred.push(credencial[i]);
        }
    
        //AJUSTAR EL FORMATO DE LA CREDENCIAL
    
        //Eliminar espacios del arreglo antes del primer caracter
        for(var i = 0; i < credencial.length; i++){
            if(arrayCred[0] == ' '){
                arrayCred.splice(0,1);
                i = i - 1;
            }
        }
    
        //Eliminar doble espacio después de una palabra
        for(var i = 0; i < arrayCred.length; i++){
            if(i < arrayCred.length-2){
                if(arrayCred[i+1] == " " && arrayCred[i + 2] == " "){
                    arrayCred.splice((i+1),1);
                    i = i - 1;
                }
            }
        }
    
        //Eliminar ultima posición del arreglo si es un espacio
        let posicionCred = arrayCred.length-1;
        if(arrayCred[posicionCred] == " "){
            arrayCred.splice(posicionCred,1);
        }
    
        //AJUSTAR EL FORMATO DEL TEXTO
    
        //Guardar cada letra del texto en un espacio del arreglo arrayText
        for(var i = 0; i < text.length; i++){
            arrayText.push(text[i]);
        }
    
        //Eliminar espacios del arreglo antes del primer caracter
        for(var i = 0; i < text.length; i++){
            if(arrayText[0] == ' '){
                arrayText.splice(0,1);
                i = i - 1;
            }
        }
    
        //Eliminar doble espacio después de una palabra
        for(var i = 0; i < arrayText.length; i++){
            if(i < arrayText.length-2){
                if(arrayText[i+1] == " " && arrayText[i + 2] == " "){
                    arrayText.splice((i+1),1);
                    i = i - 1;
                }
            }
        }
    
        //Eliminar ultima posición del arreglo si es un espacio
        let posicionText = arrayText.length-1;
        if(arrayText[posicionText] == " "){
            arrayText.splice(posicionText,1);
        }
    
        //BUSQUEDA DEL TEXTO
        var j = 0;
        var limite = 0;
        var sumatoria = 0;
        limite = posicionText - posicionCred;
        var textoFinal = "";
        for(var index = 0; index < arrayText.length; index++){
            if(index <= limite){
                sumatoria = 0;
                for(var k = 0; k < arrayCred.length; k++){
                    if(arrayText[k+index] == arrayCred[k]){
                        sumatoria ++;
                    }
                }
                if(sumatoria == posicionCred + 1){
                    //SON EQUIVALENTES - IMPRIMIR arrayCred EN ROJO y sumar su length -1 al index
                    for(var k = 0; k < arrayCred.length; k++){
                        textoFinal = textoFinal + '<label style="color: red">' + arrayCred[k];
                    }
                    index = index + posicionCred;
                }else{
                    //NO SON EQUIVALENTES - IMPRIMIR UNA LETRA EN NEGRO
                    textoFinal = textoFinal + '<label style="color: white">' + arrayText[index];
                }
            }else{
                //IMPRIMIR LAS POSICIONES RESTANTES EN NEGRO
                textoFinal = textoFinal + '<label style="color: white">' + arrayText[index];
            }
        }
        result.innerHTML = "El texto se genera de la siguiente manera: " + '<br>' + textoFinal;
    }

}
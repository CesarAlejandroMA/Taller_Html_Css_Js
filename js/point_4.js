function calculateAge(){
    var name = document.getElementById("namePerson").value;
    var subject = document.getElementById("nameSubject").value;
    var note_1 = document.getElementById("note1").value;
    var note_2 = document.getElementById("note2").value;
    var note_3 = document.getElementById("note3").value;
    var result = document.getElementById("result");

    if(!name || !subject || !note_1 || !note_2 || !note_3){
        result.innerHTML = "";
        alert("Hay campos sin completar");
    }else{
        if(note_1 < 0 || note_1 > 5 || note_2 < 0 || note_2 > 5 || note_3 < 0 || note_3 > 5){
            result.innerHTML = "";
            alert("Las notas no cumplen con el formato adecuado");
        }else{

            var average = 0;
            var summa = 0;
            summa = parseFloat(note_1) + parseFloat(note_2) + parseFloat(note_3);
            average = summa/3;

            if(average >= 3){
                result.innerHTML = "Felicitaciones " + name + "," + '<label style="color: green"> el promedio es de: ' + average + '<label style="color: white">, pasaste la materia ' + subject;
            }else{
                result.innerHTML = "Lo siento " + name + "," + '<label style="color: red"> el promedio es de: ' + average + '<label style="color: white">, lamentablemente NO pasaste la materia ' + subject;
            }
        }
    }

}
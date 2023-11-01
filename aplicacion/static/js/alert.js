// Jquery
$(document).ready(function(){
    $("#idboton").click(function(){

        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var especialidad = $("#especialidad").val();
        var telefono = $("#telefono").val();

        if(rut == ""){
            alert("El campo de rut esta vacio");
        }


        if(nombre == ""){
            alert("El campo de nombre esta vacio");
        }

        if(apellido == ""){
            alert("El campo de apellido esta vacio");
        }

        if(especialidad == ""){
            alert("El campo de especialidad esta vacio");
        }

        if(telefono == ""){
            alert("El campo de telefono esta vacio");
        }

    })
});
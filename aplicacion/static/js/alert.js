var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}   

$(document).ready(function(){
    $("#idbotonmedico").click(function(){

        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var especialidad = $("#especialidad").val();
        var telefono = $("#telefono").val();

        if (Fn.validaRut( $("#txt_rut").val() )){
            $("#msgerror").html("El rut ingresado es válido :D");
        } else {
            $("#msgerror").html("El Rut no es válido :'( ");
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
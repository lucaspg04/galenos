//validar RUT
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

//input especialidad
/* $(document).ready(function() {
    $.get('https://api-tareas-03.lucpoblete.repl.co/api/especialidad', function(data) {

        var selectEspecialidad = $('#especialidad');

        selectEspecialidad.find('option').not(':first').remove();

        data.forEach(function(especialidad) {
            selectEspecialidad.append($('<option>', {
                value: especialidad.Id_esp,
                text: especialidad.Nombre_esp
            }));
        });
    });
}); */




/* $(document).ready(function () {
    $('#FormMedico').submit(function (event) {
        event.preventDefault(); 

        $('#nombre, #apellido').each(function () {
            var words = $(this).val().toLowerCase().split(' ');
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            $(this).val(words.join(' '));
        });

        const rut = $('#txt_rut').val();
        const nombre = $('#nombre').val();
        const apellido = $('#apellido').val();
        const especialidad = $('#especialidad').val();
        const telefono = $('#telefono').val();

        if (Fn.validaRut(rut)) {
            alert("RUT válido, Campos VALIDOS");

            const formData = {
                rut: rut,
                nombre: nombre,
                apellido: apellido,
                especialidad: especialidad,
                telefono: telefono
            };

            const formDataJSON = JSON.stringify(formData);

            $.ajax({
                type: "POST",
                url: "https://api-tareas-03.lucpoblete.repl.co/api/medicos/add-medico",
                data: formDataJSON,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    console.log("Respuesta del servidor:", response);

                },
                error: function (error) {
                    console.error("Error al enviar los datos:", error);
                }
            });
        } else {
            alert("RUT INVÁLIDO");
        }
    });
});
 */
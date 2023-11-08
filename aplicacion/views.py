from django.shortcuts import render
import requests
from django.http import JsonResponse
import json
from .forms import medicoForm

def index(request):
    return render(request,'index.html')

def reservaHora(request):
    return render(request, 'aplicacion/reserva.html')

def get_especialidades():
    api_url = 'https://api-tareas-03.lucpoblete.repl.co/api/especialidad'
    
    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            especialidades = response.json()
            # Mapea los datos para que puedan ser utilizados en el campo especialidad
            choices = [(esp['Id_esp'], esp['Nombre_esp']) for esp in especialidades]
            return choices
    except requests.exceptions.RequestException as e:
        # Maneja cualquier error que pueda ocurrir durante la solicitud
        pass

def registroMedico(request):
    form = medicoForm()
    
    # Obtiene las opciones de especialidad desde la API
    especialidades = get_especialidades()
    
    if especialidades:
        form.fields['especialidad'].choices = especialidades
        

    if request.method == 'POST':
        if form.is_valid():
            rut = form.cleaned_data['rut']
            nombre = form.cleaned_data['nombre']
            apellido = form.cleaned_data['apellido']
            especialidad = form.cleaned_data['especialidad']
            telefono = form.cleaned_data['telefono']
            
            data = {
                "rut" : rut,
                "nombre" : nombre,
                "apellido" : apellido,
                "especialidad": especialidad,
                "telefono" : telefono
            }
            
            data_json = json.dumps(data)
            
            return JsonResponse({'message': data_json})

            url = "https://api-tareas-03.lucpoblete.repl.co/api/medicos/medico_add"
            
            try:
                # Realizar una solicitud POST a la API con los datos JSON
                response = requests.post(url, data=data_json, headers={'Content-Type': 'application/json'})

                if response.status_code == 200:
                    # Manejar una respuesta exitosa
                    return render(request, 'aplicacion/exito.html')
                else:
                    # Manejar errores o respuestas no exitosas
                    return render(request, 'aplicacion/error.html', {'error_message': 'Error al enviar datos a la API'})
            except requests.exceptions.RequestException as e:
                # Manejar errores de solicitud
                return render(request, 'aplicacion/error.html', {'error_message': str(e)})
    
    return render(request, 'aplicacion/registro_medico.html', {'form': form})


def registroPaciente(request):
    return render(request, 'aplicacion/registro_paciente.html')
from django.contrib import admin
from django.urls import include, path
from .views import index, reservaHora, registroMedico, registroPaciente


urlpatterns = [
    path('',index,name='index'),
    path('reserva-hora', reservaHora, name='reservaHora'),
    path('registro-medico', registroMedico, name='registroMedico'),
    path('registro-paciente', registroPaciente, name='registroPaciente')
]
from django import forms

class medicoForm(forms.Form):
    rut = forms.CharField()
    nombre = forms.CharField()
    apellido = forms.CharField()
    especialidad = forms.ChoiceField(choices=[])
    telefono = forms.CharField()
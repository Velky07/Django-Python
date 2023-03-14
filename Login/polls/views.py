from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render, redirect
from .models import Pessoa

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return HttpResponseRedirect(reverse('index'))
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def cadastro(request):
    if request.method == 'POST':
        nome = request.POST['nome']
        email = request.POST['email']
        datanascimento = request.POST['datanascimento']
        estadocivil = request.POST['estadocivil']
        sexo = request.POST['sexo']
        
        # Salvar os dados no banco de dados aqui
        pessoa = Pessoa(nome=nome, email=email, datanascimento=datanascimento, estadocivil=estadocivil, sexo=sexo)
        pessoa.save()
        
        # Redirecionar o usuário para uma página de sucesso
        return render(request, 'sucesso.html')
    else:
        return render(request, 'cadastro.html')

def home(request):
    return render(request, 'home.html')

def sucesso(request):
    return render(request, 'sucesso.html')

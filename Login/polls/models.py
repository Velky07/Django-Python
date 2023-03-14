from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    datanascimento = models.DateField()
    estadocivil = models.CharField(max_length=20)
    sexo = models.CharField(max_length=10)

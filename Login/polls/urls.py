from django.conf import settings
from django.urls import path
from . import views
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('cadastro/', views.cadastro, name='cadastro'),
    path('sucesso/', views.sucesso, name='sucesso'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)    
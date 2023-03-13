from django.conf import settings
from django.urls import path
from . import views
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name='login'),
    path('cadastro/', views.cadastro_view, name='cadastro'),
    path('mudar-tema/', views.mudar_tema_view, name='mudar_tema'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)    
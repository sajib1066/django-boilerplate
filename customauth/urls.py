from django.urls import path

from customauth import views

app_name = 'customauth'


urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
]

from django.urls import path

from customauth import views

app_name = 'customauth'


urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('<int:pk>/profile/', views.UserProfileView.as_view(), name='user_profile'),
]

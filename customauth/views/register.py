import logging
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.http import HttpResponseRedirect

from customauth.forms import RegisterForm
from customauth.models import User

logger = logging.getLogger(__name__)


class RegisterView(LoginView):
    """ Custom login view """
    template_name = 'customauth/register.html'
    form_class = RegisterForm

    def get(self, request, *args, **kwargs):
        form = self.form_class
        context = {
            'form': form,
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            confirm_password = form.cleaned_data['confirm_password']
            if password == confirm_password:
                user = User.objects.create_user(
                    email=email,
                    password=password
                )
                user.profile.name = name
                user.profile.save()
                return redirect('customauth:login')
            else:
                messages.warning(request, "Passwords do not match")
        else:
            print(form.errors)
            logger.error(f'Invalid form data: {form.errors}')
            messages.warning(
                request, 'Invalid email or password. Please enter correctly.'
            )
        context = {
            'form': form,
        }
        return render(request, self.template_name, context)

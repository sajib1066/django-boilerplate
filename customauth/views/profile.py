from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404

from customauth.models import User


class ProfileView(LoginRequiredMixin, View):
    """ My Profile view """
    template_name = 'users/profile.html'

    def get(self, request):
        context = {
            'user': request.user,
        }
        return render(request, self.template_name, context)


class UserProfileView(LoginRequiredMixin, View):
    """ User Profile view """
    template_name = 'users/profile.html'

    def get(self, request, *args, **kwargs):
        user = get_object_or_404(User, pk=self.kwargs.get('pk'))
        context = {
            'user': user
        }
        return render(request, self.template_name, context)

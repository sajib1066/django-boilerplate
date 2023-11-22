from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render


class DashboardView(LoginRequiredMixin, View):
    """ Dashboard view """
    template_name = 'dashboard.html'

    def get(self, request):
        return render(request, self.template_name)

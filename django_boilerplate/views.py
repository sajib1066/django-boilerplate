from django.views.generic import View
from django.shortcuts import redirect


class HomeView(View):
    """ Home view """

    def get(self, request):
        return redirect('dashboard:dashboard')

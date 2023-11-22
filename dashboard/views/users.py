from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

from customauth.models import User


class AdminListView(LoginRequiredMixin, ListView):
    template_name = 'dashboard/admin/list.html'
    model = User

from django.db import models
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
from django.db.models.signals import post_save

from customauth.models import User


def avatar_upload_path(instance, filename):
    return f'avatars/{instance.pk}_{filename}'


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(_('Name'), max_length=255, blank=True, null=True)
    avatar = models.ImageField(
        upload_to=avatar_upload_path, null=True, blank=True
    )
    bio = models.TextField(
        _('Bio'), max_length=500, blank=True
    )
    address = models.CharField(
        _('Address'), max_length=255, blank=True, null=True
    )
    birth_date = models.DateField(
        _('Date of Birth'), null=True, blank=True
    )

    def __str__(self):
        return self.user.email


@receiver(post_save, sender=User)
def create_or_update_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)
    instance.profile.save()

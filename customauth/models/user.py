from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin
)
from django.utils.translation import gettext_lazy as _


class Usermanager(BaseUserManager):
    """ User manager for user model """
    def _create_user(self, email, password, **extra_fields):
        """ Create and save a user with given email and password """
        if not email:
            raise ValueError('Email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Encrypt password
        user.save(using=self._db)  # safe for multiple databases
        return user

    def create_user(self, email, password=None, **extra_fields):
        """ Create and save a user with given email and password """
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_staffuser(self, email, password, **extra_fields):
        """ Create and save a staff user with given email and password """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """ Create and save a superuser with given email and password """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.CharField(
        _("Email Address"), max_length=255, unique=True, db_index=True
    )
    is_staff = models.BooleanField(_("Staff Status"), default=False)
    is_active = models.BooleanField(_("Active Status"), default=True)
    accepted_terms = models.BooleanField(_("accepted terms"), default=False)
    read_terms = models.BooleanField(_("terms read"), default=False)
    date_joined = models.DateTimeField(_("Date Joined"), auto_now_add=True)
    last_updated = models.DateTimeField(_("Last Updated"), auto_now=True)
    email_token = models.CharField(
        max_length=255, null=True, blank=True,
        verbose_name=_("email token")
    )
    additional_email = models.EmailField(
        _("additional email address"), null=True, blank=True
    )
    verified_email = models.BooleanField(default=False)

    objects = Usermanager()  # Custom user manager

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email

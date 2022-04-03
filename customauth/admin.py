from django.contrib import admin

from customauth.models import User, Profile


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    max_num = 1
    verbose_name = 'Profile'
    verbose_name_plural = 'Profile'
    fk_name = 'user'


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'email', 'accepted_terms', 'read_terms', 'is_staff',
        'is_superuser', 'is_active', 'date_joined', 'last_updated',
        'verified_email', 'last_login'
    )
    search_fields = ('email',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'verified_email')
    readonly_fields = ('last_login', 'last_updated', 'date_joined')
    list_display_links = ('id', 'email')

    inlines = (ProfileInline, )

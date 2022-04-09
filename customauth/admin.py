import logging
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.admin.models import LogEntry, DELETION
from django.utils.html import escape
from django.utils.safestring import mark_safe
from django.urls import reverse

from customauth.models import User, Profile


logger = logging.getLogger(__name__)


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    max_num = 1
    verbose_name = 'Profile'
    verbose_name_plural = 'Profile'
    fk_name = 'user'


@admin.register(User)
class UserAdmin(UserAdmin):
    ordering = ('email', )
    list_display = (
        'id', 'email', 'verified_email', 'accepted_terms', 'read_terms',
        'is_staff', 'is_superuser', 'is_active', 'date_joined', 'last_updated',
        'last_login'
    )
    search_fields = ('email',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'verified_email')
    readonly_fields = (
        'email_token', 'last_login', 'last_updated', 'date_joined'
    )
    list_display_links = ('id', 'email')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('groups', 'user_permissions')}),
        ('Roles', {'fields': ('is_staff', 'is_superuser', 'is_active')}),
        ('Additional', {'fields': (
            'verified_email', 'email_token', 'accepted_terms', 'read_terms'
        )}),
        ('Dates', {'fields': ('last_login', 'last_updated', 'date_joined')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': (
                'email', 'password1', 'password2'
            )
        }),
    )

    inlines = (ProfileInline, )


@admin.register(LogEntry)
class LogEntryAdmin(admin.ModelAdmin):
    """Django Admin Log Entries"""
    list_display = (
        'action_time', 'user_link', 'content_type', 'object_link',
        'action_flag', 'change_message'
    )
    list_filter = ('action_flag', 'content_type')
    search_fields = ('user__email', 'object_repr', 'change_message')

    def has_add_permission(self, request):
        """Permission to ADD a LogEntry"""
        return False

    def has_change_permission(self, request, obj=None):
        """Permission to CHANGE a LogEntry"""
        return False

    def has_delete_permission(self, request, obj=None):
        """Permission to DELETE a LogEntry"""
        return False

    def has_view_permission(self, request, obj=None):
        """Permission to VIEW a LogEntry"""
        return request.user.is_superuser

    def user_link(self, obj):
        """Show link to the User"""
        try:
            url = reverse('admin:core_user_change', args=[obj.user_id])
            link = f'<a href="{url}">{escape(obj.user)}</a>'
        except Exception as e:
            logger.debug(e)
            link = escape(obj.user)
        return mark_safe(link)

    user_link.admin_order_field = "user"
    user_link.short_description = "user"

    def object_link(self, obj):
        """Show link to the object"""
        if obj.action_flag == DELETION:
            link = escape(obj.object_repr)
        else:
            try:
                ct = obj.content_type
                url = reverse(f'admin:{ct.app_label}_{ct.model}_change',
                              args=[obj.object_id])
                link = f'<a href="{url}">{escape(obj.object_repr)}</a>'
            except Exception as e:
                logger.debug(e)
                link = escape(obj.object_repr)
        return mark_safe(link)

    object_link.admin_order_field = "object_repr"
    object_link.short_description = "object"

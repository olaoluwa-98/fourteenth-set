from django.contrib import admin
from django.contrib.auth import admin as auth_admin, get_user_model
from django import forms
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.forms import UserChangeForm as DUserChangeForm, UserCreationForm as DUserCreationForm
from .models import User


class UserCreationForm(DUserCreationForm):
    class Meta:
        model = User
        fields = ("username",)
        field_classes = {"username": forms.CharField}


class UserChangeForm(DUserChangeForm):
    class Meta:
        model = User
        fields = "__all__"
        field_classes = {"username": forms.CharField}


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (_("Personal info"), {"fields": ("first_name", "last_name")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )
    form = UserChangeForm
    add_form = UserCreationForm
    list_display = ("email", "first_name", "last_name", "is_superuser")
    list_filter = ("is_staff",)
    search_fields = ["email"]
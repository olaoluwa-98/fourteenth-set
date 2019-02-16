from .models import Suggestion
from django.contrib import admin

# from django.utils.translation import gettext, gettext_lazy as _


@admin.register(Suggestion)
class SuggestionAdmin(admin.ModelAdmin):
    list_display = (
        "user_name",
        "matric_no",
        "user_email",
        "created_at",
        "set_name",
        "set_name_reason",
        "community_projects",
        "souvenirs",
        "events",
    )

from django.db import models

# from django.utils.translation import ugettext_lazy as _


class Suggestion(models.Model):
    user_name = models.CharField(max_length=50, blank=True, null=True)
    matric_no = models.CharField(max_length=10, null=True, blank=True)
    user_email = models.EmailField(max_length=50, blank=False, db_index=True)
    set_name = models.CharField(max_length=50, blank=True, null=True)
    set_name_reason = models.TextField(blank=True, null=True)
    community_projects = models.TextField(blank=True, null=True)
    souvenirs = models.TextField(blank=True, null=True)
    events = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_name}'s suggestion"

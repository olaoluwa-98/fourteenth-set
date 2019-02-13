from django.urls import path

from fourteenth_set.api.views import add_suggestion

app_name = "api"
urlpatterns = [path("suggestion", view=add_suggestion, name="suggestion")]

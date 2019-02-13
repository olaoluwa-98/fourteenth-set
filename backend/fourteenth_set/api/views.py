from django.urls import reverse
import json
from django.http import JsonResponse
from .models import Suggestion
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def add_suggestion(request):
    data = json.loads(request.body.decode("utf-8"))
    suggestion = Suggestion.objects.create(**data)
    return JsonResponse({"error": False, "msg": "Suggestion received"})
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CheckboxState, ListItem
import json


def checkbox_view(request):
    state, created = CheckboxState.objects.get_or_create(id=1)
    if request.method == 'POST':
        state.is_checked = not state.is_checked
        state.save()
        return JsonResponse({'is_checked': state.is_checked})
    return render(request, 'checkbox.html', {'is_checked': state.is_checked})


def dynamic_list_view(request):
    return render(request, "daily_checklist.html")


@csrf_exempt
def list_items(request):
    if request.method == "GET":
        items = ListItem.objects.filter(is_removed=False).values("id", "name")
        return JsonResponse(list(items), safe=False)

    elif request.method == "POST":
        data = json.loads(request.body)
        item = ListItem.objects.create(name=data.get("name"))
        return JsonResponse({"id": item.id, "name": item.name})

@csrf_exempt
def delete_item(request, item_id):
    if request.method == "POST":
        try:
            item = ListItem.objects.get(id=item_id)
            item.is_removed = True
            item.save()
            return JsonResponse({"status": "success"})
        except ListItem.DoesNotExist:
            return JsonResponse({"status": "error", "message": "Item not found"}, status=404)

@csrf_exempt
def restore_items(request):
    if request.method == "POST":
        ListItem.objects.filter(is_removed=True).update(is_removed=False)
        return JsonResponse({"status": "success"})
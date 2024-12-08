"""
URL configuration for sarosigergely project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from daily import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.checkbox_view, name='checkbox_view'),
    path("dynamic-list/", views.dynamic_list_view, name="dynamic-list"),
    path("api/list-items/", views.list_items, name="list-items"),
    path("api/delete-item/<int:item_id>/", views.delete_item, name="delete-item"),
    path("api/restore-items/", views.restore_items, name="restore-items"),
]

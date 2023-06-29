from django.urls import path
from . import views

urlpatterns = [
    path("create-pet/<str:habitat>", views.create_pet, name="create-pet"),
]

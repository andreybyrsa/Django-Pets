from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    user_id = models.CharField(unique=True, null=True, max_length=500)
    first_name = models.CharField(null=True, max_length=50)
    last_name = models.CharField(null=True, max_length=50)
    profile_picture = models.FileField(null=True, blank=True, max_length=500)
    user_pets = models.ManyToManyField("petApp.Pet", blank=True)
    groups = None

    def get_user(self) -> dict:
        return {
            "id": self.user_id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "profile_picture": self.profile_picture,
            "user_pets": self.user_pets.all(),
        }

    def __str__(self) -> str:
        return self.username

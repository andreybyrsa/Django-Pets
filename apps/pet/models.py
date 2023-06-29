from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Habitat(models.Model):
    name = models.CharField(unique=True, max_length=30, null=True)
    place = models.CharField(max_length=20, null=True)
    habitat_temperature = models.CharField(max_length=10, null=True)

    def get_habitat(self) -> dict:
        return {
            "name": self.name,
            "place": self.place,
            "habitat_temperature": self.habitat_temperature,
        }

    def __str__(self) -> str:
        return str(self.place)


class Pet(models.Model):
    owner = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=30, null=True)
    habitat = models.ForeignKey(Habitat, null=True, on_delete=models.CASCADE)
    image = models.FileField(null=True, max_length=500)
    description = models.TextField(max_length=255, null=True, blank=True)

    def get_pet(self) -> dict:
        return {
            "owner": self.owner.get_user(),
            "name": self.name,
            "habitat": self.habitat.get_habitat(),
            "image": self.image.url,
            "description": self.description,
        }

    def __str__(self) -> str:
        return f"{self.name} - {self.owner}'s pet"

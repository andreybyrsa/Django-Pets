from django.shortcuts import render, redirect
from django.contrib import messages

from .forms import CreatePetForm

from .models import Habitat

from core.utils.get_current_pets import get_current_pets


def create_pet(request, habitat):
    current_user = request.user

    if (current_user.is_authenticated):
        current_pets = get_current_pets(habitat)
        create_pet_form = CreatePetForm(request.POST or None, choices=current_pets)

        data = {
            "habitat": habitat,
            "current_pets": current_pets,
            "create_pet_form": create_pet_form,
        }

        if (request.method == "POST"):
            if (create_pet_form.is_valid()):
                pet_habitat = Habitat.objects.get(name=habitat)

                try:
                    current_pet = create_pet_form.save(current_user, pet_habitat)

                    current_user.user_pets.add(current_pet)
                    current_user.save()

                    messages.success(request, "Прекрасно, создан питомец!")

                    return redirect("pets")

                except:
                    messages.error(request, "Ошибка процесса создания")

                    return redirect("create-pet", habitat)

            messages.error(request, "Некорректный ввод")

            return redirect("create-pet", habitat)

        return render(request, "pet/CreatePetPage.html", data)

    return redirect("login")

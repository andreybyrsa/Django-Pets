from django.shortcuts import render, redirect
from django.contrib import messages

from .forms import UpdateProfileForm

from core.utils.upload_image import upload_image


def index(request):
    current_user = request.user

    if (current_user.is_authenticated):
        return render(request, "index/IndexPage.html")

    return redirect("login")


def profile(request):
    current_user = request.user

    if (current_user.is_authenticated):
        update_form = UpdateProfileForm(request.POST or None, instance=current_user)

        data = {"user": current_user, "update_form": update_form}

        if (request.method == "POST"):
            if (update_form.is_valid()):
                user_id = current_user.user_id

                new_profile_picture = request.FILES or None
                if (new_profile_picture):
                    update_form.cleaned_data["profile_picture"] = upload_image(
                        new_profile_picture["profile_picture"], user_id
                    )

                try:
                    update_form.save(user_id)
                    messages.success(request, "Данные сохранены")

                    return redirect("profile")

                except:
                    messages.error(request, "Ошибка сохранения пользователя")

                    return redirect("profile")

            messages.error(request, "Некорректный ввод полей")

            return redirect("profile")

        return render(request, "index/ProfilePage.html", data)

    return redirect("login")


def pets(request):
    current_user = request.user

    if (current_user.is_authenticated):
        user_pets = current_user.user_pets.all()
        list_pets = list(pet.get_pet() for pet in user_pets)

        data = {"pets": list_pets}

        if (request.method == "POST"):
            messages.info(request, "Выберите среду обитания")

            return redirect("index")

        return render(request, "index/PetsPage.html", data)

    return redirect("login")

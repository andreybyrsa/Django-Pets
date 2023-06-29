from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from .forms import LoginForm, RegisterForm

import uuid
from core.utils.get_current_time import get_current_time
from core.utils.upload_image import upload_image


def user_login(request):
    current_user = request.user

    if (current_user.is_authenticated):
        return redirect("index")

    login_form = LoginForm(request.POST or None)
    data = {"login_form": login_form}

    if (request.method == "POST"):
        if (login_form.is_valid()):
            username = login_form.cleaned_data["username"]
            password = login_form.cleaned_data["password"]

            try:
                user = authenticate(request, username=username, password=password)
                login(request, user)
                messages.success(request, "Успешный вход в аккаунт")

                return redirect("index")

            except:
                messages.error(request, "Неверный логин или пароль")

                return redirect("login")

        messages.error(request, "Некорректный ввод полей")

        return redirect("login")

    return render(request, "auth/LoginPage.html", data)


def user_register(request):
    current_user = request.user

    if (current_user.is_authenticated):
        return redirect("index")

    register_form = RegisterForm(request.POST or None)

    current_time = get_current_time()
    data = {"time": current_time, "register_form": register_form}

    if (request.method == "POST"):
        if (register_form.is_valid()):
            user_id = uuid.uuid4()

            profile_picture = request.FILES or None
            if (profile_picture):
                register_form.cleaned_data["profile_picture"] = upload_image(
                    profile_picture["profile_picture"], user_id
                )

            try:
                user = register_form.save(user_id)
                login(request, user)
                messages.success(request, "Успешная регистрация")

                return redirect("index")

            except:
                messages.error(request, "Ошибка регистрации")

                return redirect("register")

        messages.error(request, "Некорректный ввод полей")

        return redirect('register')

    return render(request, "auth/RegisterPage.html", data)


def user_logout(request):
    current_user = request.user

    if (current_user.is_authenticated):
        logout(request)

    return redirect("login")

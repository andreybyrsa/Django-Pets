from django import forms
from core.utils.get_field_widgets import get_field_widgets

from django.contrib.auth import get_user_model

User = get_user_model()
auth_field_class = "auth-page__form-input"


class LoginForm(forms.Form):
    username = forms.CharField(
        widget=get_field_widgets(field_class=auth_field_class, placeholder="Логин"),
        max_length=30,
    )
    password = forms.CharField(
        widget=get_field_widgets(
            field_class=auth_field_class, placeholder="Пароль", type="password"
        ),
        max_length=50,
    )


class RegisterForm(LoginForm):
    first_name = forms.CharField(
        widget=get_field_widgets(field_class=auth_field_class, placeholder="Имя"),
        max_length=50,
    )
    last_name = forms.CharField(
        widget=get_field_widgets(field_class=auth_field_class, placeholder="Фамилия"),
        max_length=50,
    )
    profile_picture = forms.FileField(
        widget=get_field_widgets(
            type="file",
            id="image-input",
            field_class="auth-page__upload-input",
        ),
        required=False,
    )

    def save(self, user_id) -> User:
        form_data = self.cleaned_data

        user = User.objects.create_user(
            user_id=user_id,
            username=form_data["username"],
            first_name=form_data["first_name"],
            last_name=form_data["last_name"],
            password=form_data["password"],
            profile_picture=form_data["profile_picture"],
        )

        return user

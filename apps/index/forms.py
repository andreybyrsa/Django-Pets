from django import forms

from django.contrib.auth import get_user_model

from core.utils.get_field_widgets import get_field_widgets

User = get_user_model()
profile_field_class = "bottom-side-bar__input"


class UpdateProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["username", "first_name", "last_name", "profile_picture"]
        widgets = {
            "username": get_field_widgets(
                field_class=profile_field_class, placeholder="Логин"
            ),
            "first_name": get_field_widgets(
                field_class=profile_field_class, placeholder="Имя"
            ),
            "last_name": get_field_widgets(
                field_class=profile_field_class, placeholder="Фамилия"
            ),
            "profile_picture": get_field_widgets(
                type="file",
                id="image-input",
                field_class="bottom-side-bar__image-input",
            ),
        }

    def save(self, user_id):
        UserDB = User.objects.get(user_id=user_id)
        form_data = self.cleaned_data

        UserDB.username = form_data["username"]
        UserDB.first_name = form_data["first_name"]
        UserDB.last_name = form_data["last_name"]
        UserDB.profile_picture = form_data["profile_picture"]

        UserDB.save()

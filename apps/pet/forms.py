from django import forms
from .models import Pet

from core.utils.get_field_widgets import get_field_widgets


class CreatePetForm(forms.Form):
    def __init__(self, *args, choices, **kwargs):
        super(CreatePetForm, self).__init__(*args, **kwargs)

        self.fields["select_image"] = forms.ChoiceField(
            widget=get_field_widgets(
                field_type="Select",
                id="select-pet-image",
                field_class="create-pet-page__form-select",
            ),
            choices=choices,
        )

    name = forms.CharField(
        widget=get_field_widgets(
            field_class="create-pet-page__form-input", placeholder="Имя питомца"
        ),
        max_length=30,
    )
    description = forms.CharField(
        widget=get_field_widgets(
            field_type="Textarea",
            field_class="create-pet-page__form-text-area",
            placeholder="Описание",
        ),
        max_length=255,
        required=False,
    )

    def save(self, owner, habitat) -> Pet:
        form_data = self.cleaned_data

        pet = Pet.objects.create(
            owner=owner,
            name=form_data["name"],
            habitat=habitat,
            image=form_data["select_image"],
            description=form_data["description"],
        )

        return pet

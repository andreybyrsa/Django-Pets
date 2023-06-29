from django import forms


def get_field_widgets(
    field_type: str = "TextInput",
    type: str = "text",
    id: str = "",
    field_class: str = "",
    value: str = "",
    placeholder: str = "",
) -> tuple[forms.TextInput, forms.Textarea, forms.Select]:
    attrs = {
        "type": type,
        "class": field_class,
        "placeholder": placeholder,
        "value": value,
    }

    if (id):
        attrs["id"] = id

    if (field_type == "TextInput"):
        return forms.TextInput(attrs=attrs)

    if (field_type == "Textarea"):
        return forms.Textarea(attrs=attrs)

    if (field_type == "Select"):
        return forms.Select(attrs=attrs)

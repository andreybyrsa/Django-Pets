from django import template

register = template.Library()


@register.filter(name="split")
def split(value, key):
    value.split(f"{key}")
    return value.split(key)


@register.filter(name="pathName")
def pathName(path):
    if path == "index":
        return "Главная"
    if path == "profile":
        return "Профиль"
    if path == "pets":
        return "Питомцы"

from django.contrib import admin
from .models import User
from django.contrib.auth.models import Group


class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            "User info",
            {"fields": ["user_id", "username", "first_name", "last_name", "password"]},
        ),
        ("User data", {"fields": ["profile_picture"]}),
        ("User pets", {"fields": ["user_pets"]}),
    ]


admin.site.unregister(Group)
admin.site.register(User, UserAdmin)

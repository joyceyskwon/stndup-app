from django.contrib import admin
from .models import Stndup


class StndupAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')


admin.site.register(Stndup, StndupAdmin)

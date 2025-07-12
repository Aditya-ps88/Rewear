from django.contrib import admin
from .models import ClothingItem, SwapRequest
# Register your models here.

admin.site.register(ClothingItem)
admin.site.register(SwapRequest)
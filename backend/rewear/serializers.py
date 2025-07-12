from rest_framework import serializers
from .models import ClothingItem
from .models import SwapRequest

#Items Available
class ClothingItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothingItem
        fields = '__all__'

#Swap Request
class SwapRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SwapRequest
        fields = '__all__'

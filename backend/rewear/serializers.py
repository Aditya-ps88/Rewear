from rest_framework import serializers
from .models import ClothingItem, UserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    profile_picture_url = serializers.ReadOnlyField()
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'profile_picture', 'profile_picture_url', 'bio', 'points', 'created_at']

class ClothingItemSerializer(serializers.ModelSerializer):
    owner = UserProfileSerializer(read_only=True)
    
    class Meta:
        model = ClothingItem
        fields = '__all__'

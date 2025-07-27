from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import ClothingItem
from .serializers import ClothingItemSerializer

class ClothingItemViewSet(viewsets.ModelViewSet):
    queryset = ClothingItem.objects.all().order_by('-id')
    serializer_class = ClothingItemSerializer
    permission_classes = [permissions.AllowAny]  # Allow all requests for testing



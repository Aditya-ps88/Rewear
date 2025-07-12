from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import ClothingItem
from .serializers import ClothingItemSerializer
from .models import SwapRequest
from .serializers import SwapRequestSerializer


class ClothingItemViewSet(viewsets.ModelViewSet):
    queryset = ClothingItem.objects.all().order_by('-id')
    serializer_class = ClothingItemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class SwapRequestViewSet(viewsets.ModelViewSet):
    queryset = SwapRequest.objects.all().order_by('-created_at')
    serializer_class = SwapRequestSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]



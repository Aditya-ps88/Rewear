from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from .views import ClothingItemViewSet, SwapRequestViewSet


router = DefaultRouter()
router.register(r'items', ClothingItemViewSet, basename='ClothingItem')
router.register(r'swap-requests', SwapRequestViewSet , basename='SwapItems')

urlpatterns = [
    path('', include(router.urls)),
]

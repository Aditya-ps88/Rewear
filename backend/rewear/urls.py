from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClothingItemViewSet, UserProfileViewSet


router = DefaultRouter()
router.register(r'items', ClothingItemViewSet)
router.register(r'profiles', UserProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

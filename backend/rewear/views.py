from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import ClothingItem, UserProfile
from .serializers import ClothingItemSerializer, UserProfileSerializer, UserSerializer

class ClothingItemViewSet(viewsets.ModelViewSet):
    queryset = ClothingItem.objects.all()
    serializer_class = ClothingItemSerializer
    permission_classes = [permissions.AllowAny]  # For testing, change to IsAuthenticatedOrReadOnly later

    def perform_create(self, serializer):
        # For now, create without owner. Later you can link to authenticated user's profile
        serializer.save()

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]  # For testing

    @action(detail=True, methods=['post'])
    def upload_profile_picture(self, request, pk=None):
        profile = self.get_object()
        if 'profile_picture' in request.FILES:
            profile.profile_picture = request.FILES['profile_picture']
            profile.save()
            return Response({'message': 'Profile picture uploaded successfully'})
        return Response({'error': 'No profile picture provided'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['get'])
    def get_user_items(self, request, pk=None):
        profile = self.get_object()
        items = ClothingItem.objects.filter(owner=profile)
        serializer = ClothingItemSerializer(items, many=True)
        return Response(serializer.data)



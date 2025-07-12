from django.db import models
from django.contrib.auth.models import User

#Shows The items available
class ClothingItem(models.Model):
    CATEGORY_CHOICES = [
        ('top', 'Top'),
        ('bottom', 'Bottom'),
        ('footwear', 'Footwear'),
        ('accessory', 'Accessory'),
        ('other', 'Other'),
    ]

    TYPE_CHOICES = [
        ('men', 'Men'),
        ('women', 'Women'),
        ('kids', 'Kids'),
        ('unisex', 'Unisex'),
    ]

    CONDITION_CHOICES = [
        ('new', 'New'),
        ('like_new', 'Like New'),
        ('used', 'Used'),
        ('worn_out', 'Worn Out'),
    ]

    STATUS_CHOICES = [
        ('available', 'Available'),
        ('swapped', 'Swapped'),
        ('reserved', 'Reserved'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='clothing_images/', blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    size = models.CharField(max_length=10)
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES)
    tags = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='available')
    is_featured = models.BooleanField(default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

#Swap Request Class
class SwapRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
        ('completed', 'Completed'),
    ]

    requester = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_requests')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_requests')
    item_offered = models.ForeignKey(ClothingItem, on_delete=models.CASCADE, related_name='offered_swaps')
    item_requested = models.ForeignKey(ClothingItem, on_delete=models.CASCADE, related_name='requested_swaps')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.requester} wants to swap with {self.receiver}"

export interface User {
  id: number;
  username: string;
  email: string;
  points: number;
  created_at: string;
  profile_picture?: string;
  profile_picture_url?: string;
}

export interface UserProfile {
  id: number;
  user: User;
  profile_picture?: string;
  profile_picture_url: string;
  bio: string;
  points: number;
  created_at: string;
}

export interface ClothingItem {
  id: number;
  name: string;
  description: string;
  image?: string;
  category: 'top' | 'bottom' | 'footwear' | 'accessory' | 'other';
  type: 'men' | 'women' | 'kids' | 'unisex';
  size: string;
  condition: 'new' | 'like_new' | 'used' | 'worn_out';
  tags: string;
  status: 'available' | 'swapped' | 'reserved';
  is_featured: boolean;
  owner: UserProfile | null;
  created_at?: string;
}

export interface SwapRequest {
  id: number;
  requester: User;
  item_wanted: ClothingItem;
  item_offered: ClothingItem;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  created_at: string;
  message?: string;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  count: number;
}
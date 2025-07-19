export interface User {
  id: number;
  username: string;
  email: string;
  points: number;
  created_at: string;
}

export interface ClothingItem {
  id: number;
  title: string;
  description: string;
  category: 'men' | 'women' | 'kids' | 'unisex';
  size: string;
  condition: 'like-new' | 'good' | 'fair';
  images: string[];
  owner: User;
  available: boolean;
  created_at: string;
  points_value: number;
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
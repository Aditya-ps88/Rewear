import axios from 'axios';
import { ClothingItem, SwapRequest, User, UserProfile } from '../types';
import { mockItems, mockUsers } from '../data/mockData';

const API_BASE_URL = 'http://localhost:8000/api';

// Real API service (for production with Django backend)
export class RealApiService {
  private api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  async getItems(category?: string): Promise<ClothingItem[]> {
    try {
      const params = category ? { category } : {};
      const response = await this.api.get('/items/', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching items:', error);
      // Fallback to mock data if API fails
      return mockItems.filter(item => !category || item.category === category);
    }
  }

  async getItem(id: number): Promise<ClothingItem | null> {
    try {
      const response = await this.api.get(`/items/${id}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching item:', error);
      // Fallback to mock data if API fails
      return mockItems.find(item => item.id === id) || null;
    }
  }

  async createItem(itemData: FormData | Partial<ClothingItem>): Promise<ClothingItem> {
    try {
      let response;
      
      if (itemData instanceof FormData) {
        // For file uploads, don't set Content-Type header (browser will set it with boundary)
        response = await axios.post(`${API_BASE_URL}/items/`, itemData, {
          headers: {
            // Remove Content-Type header for FormData
          },
        });
      } else {
        // For regular JSON data
        response = await axios.post(`${API_BASE_URL}/items/`, itemData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      
      return response.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }

  async createSwapRequest(requestData: Partial<SwapRequest>): Promise<SwapRequest> {
    try {
      const response = await this.api.post('/swap-request/', requestData);
      return response.data;
    } catch (error) {
      console.error('Error creating swap request:', error);
      throw error;
    }
  }

  async getUserPoints(userId: number): Promise<number> {
    try {
      const response = await this.api.get(`/user/${userId}/points/`);
      return response.data.points;
    } catch (error) {
      console.error('Error fetching user points:', error);
      // Fallback to mock data if API fails
      const user = mockUsers.find(u => u.id === userId);
      return user?.points || 0;
    }
  }

  // User Profile methods
  async getUserProfile(userId: number): Promise<UserProfile | null> {
    try {
      const response = await this.api.get(`/profiles/${userId}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  async updateUserProfile(userId: number, profileData: Partial<UserProfile>): Promise<UserProfile> {
    try {
      const response = await this.api.patch(`/profiles/${userId}/`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  async uploadProfilePicture(userId: number, imageFile: File): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('profile_picture', imageFile);
      
      await axios.post(`${API_BASE_URL}/profiles/${userId}/upload_profile_picture/`, formData, {
        headers: {
          // Remove Content-Type header for FormData
        },
      });
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      throw error;
    }
  }

  async getUserItems(userId: number): Promise<ClothingItem[]> {
    try {
      const response = await this.api.get(`/profiles/${userId}/get_user_items/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user items:', error);
      return [];
    }
  }
}

// Use the real API service
export const apiService = new RealApiService();

// Keep the mock service for reference/testing
export class MockApiService {
  private items: ClothingItem[] = [...mockItems];
  private users: User[] = [...mockUsers];
  private swapRequests: SwapRequest[] = [];

  // Simulate network delay
  private delay(ms: number = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getItems(category?: string): Promise<ClothingItem[]> {
    await this.delay();
    if (category) {
      return this.items.filter(item => item.category === category);
    }
    return this.items;
  }

  async getItem(id: number): Promise<ClothingItem | null> {
    await this.delay();
    return this.items.find(item => item.id === id) || null;
  }

  async createItem(itemData: Partial<ClothingItem>): Promise<ClothingItem> {
    await this.delay();
    const newItem: ClothingItem = {
      id: this.items.length + 1,
      name: itemData.name || 'New Item',
      description: itemData.description || '',
      image: itemData.image || '',
      category: itemData.category || 'other',
      type: itemData.type || 'unisex',
      size: itemData.size || 'M',
      condition: itemData.condition || 'used',
      tags: itemData.tags || '',
      status: itemData.status || 'available',
      is_featured: false,
      owner: null,
      created_at: new Date().toISOString(),
    };
    this.items.push(newItem);
    return newItem;
  }

  async createSwapRequest(requestData: Partial<SwapRequest>): Promise<SwapRequest> {
    await this.delay();
    const newRequest: SwapRequest = {
      id: Date.now(),
      requester: this.users[0], // Mock current user
      item_wanted: requestData.item_wanted!,
      item_offered: requestData.item_offered!,
      status: 'pending',
      created_at: new Date().toISOString(),
      message: requestData.message
    };
    this.swapRequests.push(newRequest);
    return newRequest;
  }

  async getUserPoints(userId: number): Promise<number> {
    await this.delay();
    const user = this.users.find(u => u.id === userId);
    return user?.points || 0;
  }
}
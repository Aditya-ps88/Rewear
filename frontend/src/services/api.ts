import axios from 'axios';
import { ClothingItem, SwapRequest, User } from '../types';
import { mockItems, mockUsers } from '../data/mockData';

const API_BASE_URL = 'http://localhost:8000/api';

// Mock API service for demo purposes
class MockApiService {
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
      id: Date.now(),
      title: itemData.title || '',
      description: itemData.description || '',
      category: itemData.category || 'unisex',
      size: itemData.size || '',
      condition: itemData.condition || 'good',
      images: itemData.images || [],
      owner: this.users[0], // Mock current user
      available: true,
      created_at: new Date().toISOString(),
      points_value: itemData.points_value || 50
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

export const apiService = new MockApiService();

// Real API service (for production with Django backend)
export class RealApiService {
  private api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  async getItems(category?: string): Promise<ClothingItem[]> {
    const params = category ? { category } : {};
    const response = await this.api.get('/items/', { params });
    return response.data;
  }

  async getItem(id: number): Promise<ClothingItem> {
    const response = await this.api.get(`/items/${id}/`);
    return response.data;
  }

  async createItem(itemData: Partial<ClothingItem>): Promise<ClothingItem> {
    const response = await this.api.post('/items/', itemData);
    return response.data;
  }

  async createSwapRequest(requestData: Partial<SwapRequest>): Promise<SwapRequest> {
    const response = await this.api.post('/swap-request/', requestData);
    return response.data;
  }

  async getUserPoints(userId: number): Promise<number> {
    const response = await this.api.get(`/user/${userId}/points/`);
    return response.data.points;
  }
}
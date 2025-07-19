import { ClothingItem, User, Category } from '../types';

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'eco_sarah',
    email: 'sarah@example.com',
    points: 150,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    username: 'green_mike',
    email: 'mike@example.com',
    points: 89,
    created_at: '2024-01-20T14:30:00Z'
  }
];

export const mockItems: ClothingItem[] = [
  {
    id: 1,
    title: 'Vintage Denim Jacket',
    description: 'Beautiful vintage denim jacket in excellent condition. Perfect for sustainable fashion lovers.',
    category: 'unisex',
    size: 'M',
    condition: 'good',
    images: ['https://i.pinimg.com/736x/55/0d/50/550d50c57923ec5dc1198edb26f9016d.jpg '],
    owner: mockUsers[0],
    available: true,
    created_at: '2024-01-22T09:15:00Z',
    points_value: 45
  },
  {
    id: 2,
    title: 'Organic Cotton Dress',
    description: 'Flowing organic cotton dress, perfect for summer. Barely worn, like new condition.',
    category: 'women',
    size: 'S',
    condition: 'like-new',
    images: ['https://i.pinimg.com/1200x/50/77/8a/50778a92f2a5490280e135b63432fc08.jpg'],
    owner: mockUsers[1],
    available: true,
    created_at: '2024-01-23T16:20:00Z',
    points_value: 55
  },
  {
    id: 3,
    title: 'Kids Rainbow Sweater',
    description: 'Colorful hand-knit sweater for kids. Made with eco-friendly yarn.',
    category: 'kids',
    size: '6-8 years',
    condition: 'good',
    images: ['https://i.pinimg.com/736x/cb/d9/a4/cbd9a46ecea94540ae8b3ad3bbc00883.jpg'],
    owner: mockUsers[0],
    available: true,
    created_at: '2024-01-24T11:45:00Z',
    points_value: 30
  },
  {
    id: 4,
    title: 'Sustainable Wool Coat',
    description: 'High-quality wool coat from sustainable sources. Professional and stylish.',
    category: 'men',
    size: 'L',
    condition: 'like-new',
    images: ['https://i.pinimg.com/736x/1c/e9/77/1ce977a1998f3f523a5080e732de14d8.jpg'],
    owner: mockUsers[1],
    available: true,
    created_at: '2024-01-25T08:30:00Z',
    points_value: 75
  }
];

export const categories: Category[] = [
  {
    name: 'Men',
    slug: 'men',
    image: 'https://i.pinimg.com/736x/55/0d/50/550d50c57923ec5dc1198edb26f9016d.jpg ',
    count: 45
  },
  {
    name: 'Women',
    slug: 'women',
    image: 'https://i.pinimg.com/1200x/50/77/8a/50778a92f2a5490280e135b63432fc08.jpg',
    count: 78
  },
  {
    name: 'Kids',
    slug: 'kids',
    image: 'https://i.pinimg.com/1200x/ad/bb/08/adbb08ade1cbf1d744db48f0e854d99e.jpg',
    count: 32
  },
  {
    name: 'Unisex',
    slug: 'unisex',
    image: 'https://i.pinimg.com/736x/a2/3c/13/a23c134ebdc47581fa854c248633a8f5.jpg',
    count: 23
  }
];
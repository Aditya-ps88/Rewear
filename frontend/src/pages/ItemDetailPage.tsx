import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, User, MessageCircle } from 'lucide-react';
import { ClothingItem } from '../types';
import { apiService } from '../services/api';
import { getImageUrl } from '../lib/utils';

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ClothingItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchItem = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const fetchedItem = await apiService.getItem(parseInt(id));
        setItem(fetchedItem);
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-eco-cream flex items-center justify-center">
        <div className="text-eco-brown">Loading...</div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-eco-cream flex items-center justify-center">
        <div className="text-eco-brown">Item not found</div>
      </div>
    );
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'text-eco-green-primary bg-eco-green-primary/10';
      case 'like_new': return 'text-eco-green-secondary bg-eco-green-secondary/10';
      case 'used': return 'text-eco-tan bg-eco-tan/10';
      case 'worn_out': return 'text-gray-500 bg-gray-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-eco-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/browse"
          className="inline-flex items-center space-x-2 text-eco-green-primary hover:text-eco-green-primary/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to browse</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={getImageUrl(item.image)}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Removed image gallery since we only have one image field */}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-eco-brown">{item.name}</h1>
                <button className="p-2 text-eco-brown hover:text-eco-green-primary">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(item.condition)} capitalize`}>
                  {item.condition.replace('_', ' ')}
                </span>
                {item.is_featured && (
                  <span className="text-eco-green-primary font-semibold">
                    Featured
                  </span>
                )}
                <span className="text-gray-500 capitalize">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Listed by</span>
                <span className="font-medium text-eco-brown">
                  {item.owner ? item.owner.username : 'Anonymous'}
                </span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-eco-tan fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-eco-brown mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">Size</span>
                <p className="text-eco-brown font-semibold">{item.size}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Category</span>
                <p className="text-eco-brown font-semibold capitalize">{item.category}</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-eco-green-primary text-white py-3 rounded-lg font-semibold hover:bg-eco-green-primary/90 transition-colors">
                Request Swap
              </button>
              <button className="w-full border-2 border-eco-green-primary text-eco-green-primary py-3 rounded-lg font-semibold hover:bg-eco-green-primary/5 transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Message Owner</span>
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-eco-brown mb-2">Swap Information</h4>
              <p className="text-sm text-gray-600">
                This item is available for swapping. Start a conversation with the owner to propose your trade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
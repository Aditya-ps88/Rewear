import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { ClothingItem } from '../types';
import { getImageUrl } from '../lib/utils';

interface ItemCardProps {
  item: ClothingItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'like_new': return 'text-eco-green-primary';
      case 'new': return 'text-eco-green-secondary';
      case 'used': return 'text-eco-tan';
      case 'worn_out': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link to={`/item/${item.id}`}>
        <div className="relative">
          <img
            src={getImageUrl(item.image)}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-eco-brown" />
          </button>
          {item.is_featured && (
            <div className="absolute bottom-3 left-3 bg-eco-green-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/item/${item.id}`}>
          <h3 className="font-semibold text-eco-brown mb-2 hover:text-eco-green-primary transition-colors">
            {item.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Size: {item.size}</span>
          <span className={`text-sm font-medium ${getConditionColor(item.condition)} capitalize`}>
            {item.condition.replace('_', ' ')}
          </span>
        </div>

        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-eco-tan fill-current" />
            <span className="text-sm text-gray-600">
              {item.owner ? `by ${item.owner.username}` : 'Anonymous'}
            </span>
          </div>
          <span className="text-xs text-gray-500 capitalize">
            {item.category} {/* Assuming category is now correct */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
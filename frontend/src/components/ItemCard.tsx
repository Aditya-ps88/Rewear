import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { ClothingItem } from '../types';
import { getImageUrl, getProfilePictureUrl } from '../lib/utils';

interface ItemCardProps {
  item: ClothingItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'like_new':
        return 'text-eco-green-primary';
      case 'new':
        return 'text-eco-green-secondary';
      case 'used':
        return 'text-eco-tan';
      case 'worn_out':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-eco-brown/10 bg-white/80 shadow-[0_16px_45px_rgba(93,62,47,0.11)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(93,62,47,0.17)]">
      <Link to={`/item/${item.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={getImageUrl(item.image)}
            alt={item.name}
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <button className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/75 p-2 text-eco-brown backdrop-blur hover:bg-white">
            <Heart className="h-4 w-4" />
          </button>

          {item.is_featured && (
            <div className="absolute bottom-3 left-3 rounded-full bg-eco-green-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              Top Deal
            </div>
          )}
        </div>
      </Link>

      <div className="space-y-3 p-4">
        <Link to={`/item/${item.id}`}>
          <h3 className="line-clamp-1 text-base font-semibold text-eco-brown transition-colors group-hover:text-eco-green-primary">
            {item.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between text-sm">
          <span className="rounded-full bg-eco-cream px-2.5 py-1 text-eco-brown/80">Size: {item.size}</span>
          <span className={`font-semibold capitalize ${getConditionColor(item.condition)}`}>
            {item.condition.replace('_', ' ')}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-eco-brown/75">{item.description}</p>

        <div className="flex items-center justify-between border-t border-eco-brown/10 pt-3">
          <div className="flex items-center gap-2">
            <img
              src={item.owner ? getProfilePictureUrl(item.owner.profile_picture_url) : getProfilePictureUrl()}
              alt={item.owner ? item.owner.user.username : 'Anonymous'}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span className="text-xs text-eco-brown/70">
              {item.owner ? `Seller: ${item.owner.user.username}` : 'Seller: Anonymous'}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-eco-brown/65">
            <Star className="h-3.5 w-3.5 fill-eco-tan text-eco-tan" />
            <span className="capitalize">{item.category}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;

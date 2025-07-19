import React, { useState, useEffect } from 'react';
import { ClothingItem } from '../types';
import { apiService } from '../services/api';
import ItemCard from './ItemCard';
import { Loader2 } from 'lucide-react';

const FeaturedItems: React.FC = () => {
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const allItems = await apiService.getItems();
        // Show first 4 items as featured
        setItems(allItems.slice(0, 4));
      } catch (error) {
        console.error('Error fetching featured items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-32">
            <Loader2 className="h-8 w-8 text-eco-green-primary animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-eco-brown mb-4">Featured Items</h2>
          <p className="text-eco-green-primary max-w-2xl mx-auto">
            Discover the latest additions to our sustainable marketplace. 
            These carefully curated pieces are ready for their next adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/browse"
            className="inline-block bg-eco-green-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-eco-green-primary/90 transition-colors"
          >
            View All Items
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
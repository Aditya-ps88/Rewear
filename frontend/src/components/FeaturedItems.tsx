import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClothingItem } from '../types';
import { apiService } from '../services/api';
import ItemCard from './ItemCard';
import { Loader2, ArrowRight } from 'lucide-react';

const FeaturedItems: React.FC = () => {
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const allItems = await apiService.getItems();
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
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-44 max-w-7xl items-center justify-center rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_20px_55px_rgba(93,62,47,0.12)] backdrop-blur">
          <Loader2 className="h-8 w-8 animate-spin text-eco-green-primary" />
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-gradient-to-b from-white/85 to-white/55 p-6 shadow-[0_20px_65px_rgba(93,62,47,0.13)] backdrop-blur sm:p-8 lg:p-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-eco-brown/65">
              Best Price Drops
            </p>
            <h2 className="rewear-display text-3xl text-eco-brown sm:text-4xl">
              Featured thrift picks from the community
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-eco-brown/75 sm:text-base">
            Fresh low-price listings selected for quality and style. Swapping stays available as an optional path.
          </p>
        </div>

        {items.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/browse"
                className="group inline-flex items-center gap-2 rounded-full border border-eco-brown/20 bg-eco-brown px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-eco-brown/92"
              >
                Browse More Deals
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-eco-brown/25 bg-white/70 p-8 text-center">
            <p className="text-eco-brown/80">No featured deals yet. Add an item or enable swapping for exchange-based offers.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedItems;

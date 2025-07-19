import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';

const CategoryCards: React.FC = () => {
  return (
    <section className="py-16 bg-eco-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-eco-brown mb-4">Shop by Category</h2>
          <p className="text-eco-green-primary max-w-2xl mx-auto">
            Discover sustainable fashion across all categories. Every swap saves the planet one piece at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/browse?category=${category.slug}`}
              className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {category.count} items available
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
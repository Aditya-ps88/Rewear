import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

const CategoryCards: React.FC = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-eco-green-primary/90">
              Thrift Categories
            </p>
            <h2 className="rewear-display text-3xl text-eco-brown sm:text-4xl">
              Shop by style,
              <span className="ml-2 text-eco-green-primary">save by default</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-eco-brown/75 sm:text-base">
            Browse affordable picks across every category, then use swap only when you want to exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category, index) => {
            const isFeatured = index === 0;

            return (
              <Link
                key={category.slug}
                to={`/browse?category=${category.slug}`}
                className={`group relative overflow-hidden rounded-[1.8rem] shadow-[0_18px_50px_rgba(93,62,47,0.14)] ${
                  isFeatured ? 'md:col-span-2 md:h-[23rem]' : 'h-[17.5rem] md:h-[23rem]'
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <div className="mb-3 inline-flex rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-eco-brown">
                    {category.count}+ budget listings
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="rewear-display text-2xl text-white sm:text-3xl">{category.name}</h3>
                      <p className="mt-1 text-sm text-white/80">Affordable finds updated daily</p>
                    </div>

                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;

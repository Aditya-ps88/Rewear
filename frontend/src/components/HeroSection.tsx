import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Recycle, Sparkles, Shirt, Leaf } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleListItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const userData = localStorage.getItem('user');
    navigate(userData ? '/list-item' : '/signup');
  };

  return (
    <section className="rewear-mesh relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10 animate-[rise-in_600ms_ease-out]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-eco-green-primary/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-eco-green-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Community Thrift Marketplace
          </div>

          <h1 className="rewear-display max-w-2xl text-4xl leading-tight text-eco-brown sm:text-5xl lg:text-6xl">
            Thrift smart,
            <span className="ml-2 text-eco-green-primary">dress better for less.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-eco-brown/80 sm:text-lg">
            ReWear helps you discover quality pre-loved clothes at lower prices. Swapping is available as a side feature when you want to exchange instead of buying.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/browse"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-eco-brown px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-eco-brown/90"
            >
              Shop Thrift Deals
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/list-item"
              onClick={handleListItemClick}
              className="inline-flex items-center justify-center rounded-full border border-eco-green-primary/30 bg-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-eco-green-primary transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              List Your Item
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              { label: 'Items Under Budget', value: '8.7K' },
              { label: 'Avg. Savings', value: '42%' },
              { label: 'Trusted Buyers', value: '4.9/5' },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rewear-glass rounded-2xl px-4 py-4 shadow-[0_12px_35px_rgba(93,62,47,0.08)]"
              >
                <p className="rewear-display text-xl text-eco-brown">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-eco-brown/65">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 rewear-grain animate-[rise-in_800ms_ease-out]">
          <div className="absolute -left-6 top-16 h-24 w-24 rounded-full bg-eco-green-secondary/20 blur-2xl animate-[pulse-soft_4s_ease-in-out_infinite]" />
          <div className="absolute -right-8 bottom-12 h-28 w-28 rounded-full bg-eco-tan/50 blur-2xl animate-[pulse-soft_5s_ease-in-out_infinite]" />

          <div className="rewear-glass relative rounded-[2rem] p-5 shadow-[0_25px_70px_rgba(93,62,47,0.18)]">
            <img
              src="https://i.pinimg.com/1200x/ea/6e/04/ea6e042cae1220d654f74379190f203a.jpg"
              alt="Curated sustainable fashion"
              className="h-[420px] w-full rounded-[1.6rem] object-cover"
            />

            <div className="absolute -left-4 top-7 rounded-2xl bg-white px-4 py-3 shadow-lg animate-[float-slow_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-eco-brown/70">
                <Recycle className="h-3.5 w-3.5 text-eco-green-primary" />
                Best deals refreshed daily
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 w-56 rounded-2xl bg-eco-brown px-4 py-4 text-white shadow-xl animate-[float-slow_7s_ease-in-out_infinite]">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-eco-tan">
                <Leaf className="h-3.5 w-3.5" />
                Swap Corner
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                "Want to trade instead? List an item and swap with nearby members."
              </p>
            </div>

            <div className="absolute left-5 bottom-6 rounded-xl border border-white/60 bg-white/80 px-3 py-2 text-xs font-medium text-eco-brown/80 backdrop-blur">
              <span className="inline-flex items-center gap-1">
                <Shirt className="h-3.5 w-3.5 text-eco-green-primary" />
                Low-cost looks, premium vibe.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

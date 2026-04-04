import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-eco-brown px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-0 h-56 w-56 rounded-full bg-eco-green-secondary/35 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-eco-tan/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2">
              <Recycle className="h-4 w-4 text-eco-tan" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-eco-tan">ReWear Collective</span>
            </div>
            <h3 className="rewear-display text-3xl leading-tight text-white sm:text-4xl">
              Swap. Save. Sustain.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              We are building a community-owned circular fashion network where every swap lowers waste and extends the life of great clothing.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-sm">12K+ items recirculated</div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-sm">4.9 member rating</div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-sm">Zero fast-fashion mindset</div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-eco-tan">Explore</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/browse" className="inline-flex items-center gap-1 hover:text-white">
                  Browse Items
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/list-item" className="inline-flex items-center gap-1 hover:text-white">
                  List an Item
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="inline-flex items-center gap-1 hover:text-white">
                  Dashboard
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/help" className="inline-flex items-center gap-1 hover:text-white">
                  Help Center
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-eco-tan">Connect</h4>
            <div className="space-y-4 text-white/85">
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-eco-tan" />
                <span>hello@rewear.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-eco-tan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-eco-tan" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-xs uppercase tracking-[0.14em] text-white/65 sm:text-sm">
          © 2026 ReWear. Built for circular fashion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

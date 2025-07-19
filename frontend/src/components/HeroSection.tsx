import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-eco-cream py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-eco-green-primary"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-eco-tan"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-eco-green-secondary"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-eco-brown"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Recycle className="h-12 w-12 text-eco-green-primary mr-3" />
              <h1 className="text-5xl lg:text-6xl font-bold text-eco-brown">
                Eco Exchange
              </h1>
            </div>
            
            <p className="text-xl text-eco-green-primary mb-8 leading-relaxed">
              Join the sustainable fashion revolution. Swap, trade, and discover pre-loved clothing 
              while earning points for every eco-friendly exchange.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/browse"
                className="bg-eco-green-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-eco-green-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Browsing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/list-item"
                className="bg-eco-tan text-eco-brown px-8 py-3 rounded-full font-semibold hover:bg-eco-tan/80 transition-colors"
              >
                List Your Items
              </Link>
            </div>
          </div>
          
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://i.pinimg.com/736x/a1/8e/7e/a18e7e47fe28fa03edb3fa8e9baaf70f.jpg"
                  alt="Sustainable fashion"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img
                  src="https://i.pinimg.com/736x/f7/9f/16/f79f16cc44f29010d81a5821dc1f4e43.jpg"
                  alt="Eco clothing"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://i.pinimg.com/1200x/ea/6e/04/ea6e042cae1220d654f74379190f203a.jpg"
                  alt="Fashion exchange"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <img
                  src="https://i.pinimg.com/736x/5c/ca/61/5cca6184f15a60f127ef399ff3da95f1.jpg"
                  alt="Sustainable style"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-eco-green-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              50+ Points Earned
            </div>
            <div className="absolute -bottom-4 -left-4 bg-eco-tan text-eco-brown px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              100% Sustainable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
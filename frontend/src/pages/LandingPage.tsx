import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryCards from '../components/CategoryCards';
import FeaturedItems from '../components/FeaturedItems';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryCards />
      <FeaturedItems />
    </div>
  );
};

export default LandingPage;
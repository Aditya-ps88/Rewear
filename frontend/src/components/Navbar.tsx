import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Recycle, User, Plus, LeafIcon, LucideLeaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-eco-cream shadow-sm border-b border-eco-green-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <LucideLeaf className="h-8 w-8 text-eco-green-primary" />
            <span className="text-xl font-bold text-eco-brown">ReWear</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/list-item" 
              className="flex items-center space-x-2 text-eco-brown hover:text-eco-green-primary transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>List Item</span>
            </Link>
            <Link 
              to="/browse" 
              className="text-eco-brown hover:text-eco-green-primary transition-colors"
            >
              Browse Items
            </Link>
            <Link 
              to="/help" 
              className="text-eco-brown hover:text-eco-green-primary transition-colors"
            >
              Help
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/login')}
              className="bg-eco-tan text-eco-brown px-6 py-2 rounded-full font-medium hover:bg-eco-tan/80 transition-colors flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Recycle, User, Plus, LeafIcon, LucideLeaf, LogOut, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface UserData {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    // Close user menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowUserMenu(false);
    navigate('/login');
  };

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

          {/* User Menu / Login Button */}
          <div className="flex items-center">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || user.email}
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <User className="h-5 w-5 text-eco-brown" />
                  )}
                  <span className="text-eco-brown font-medium">
                    {user.displayName || user.email.split('@')[0]}
                  </span>
                  <ChevronDown className="h-4 w-4 text-eco-brown" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-eco-brown hover:bg-eco-cream"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={() => navigate('/login')}
                className="bg-eco-tan text-eco-brown hover:bg-eco-tan/80 transition-colors flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
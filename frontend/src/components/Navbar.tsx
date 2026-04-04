import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, Plus, LucideLeaf, LogOut, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { getProfilePictureUrl } from '../lib/utils';

interface UserData {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<UserData | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      setUser(null);
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch {
      setUser(null);
      localStorage.removeItem('user');
    }
  }, [location.pathname]);

  useEffect(() => {
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

  const handleListItemClick = () => {
    if (user) {
      navigate('/list-item');
      return;
    }

    navigate('/signup');
  };

  const getProfilePicture = () => {
    return getProfilePictureUrl();
  };

  const navLinkClass = (path: string) =>
    `text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
      location.pathname === path ? 'text-eco-brown' : 'text-eco-brown/65 hover:text-eco-brown'
    }`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="rewear-glass mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl px-4 shadow-[0_10px_40px_rgba(93,62,47,0.12)] sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-eco-green-primary/15">
            <LucideLeaf className="h-5 w-5 text-eco-green-primary" />
          </span>
          <span className="rewear-display text-2xl text-eco-brown">ReWear</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            onClick={handleListItemClick}
            className="inline-flex items-center gap-1.5 rounded-full bg-eco-brown px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-eco-brown/90"
          >
            <Plus className="h-3.5 w-3.5" />
            List Item
          </button>

          <Link to="/browse" className={navLinkClass('/browse')}>
            Browse
          </Link>
          <Link to="/help" className={navLinkClass('/help')}>
            Help
          </Link>
        </div>

        <div className="flex items-center">
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 rounded-full border border-eco-brown/10 bg-white/75 px-3 py-2 shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={getProfilePicture()}
                  alt={user.displayName || user.email}
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="max-w-24 truncate text-sm font-semibold text-eco-brown">
                  {user.displayName || user.email.split('@')[0]}
                </span>
                <ChevronDown className="h-4 w-4 text-eco-brown" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-eco-brown/10 bg-white shadow-lg">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2.5 text-sm font-medium text-eco-brown hover:bg-eco-cream"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              onClick={() => navigate('/login')}
              className="rounded-full bg-eco-tan px-5 text-eco-brown hover:bg-eco-tan/80"
            >
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

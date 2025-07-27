import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { LogOut, User, Mail, Star, Camera, Edit } from 'lucide-react';
import { getProfilePictureUrl } from '../lib/utils';
import { apiService } from '../services/api';

interface UserData {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

interface UserProfile {
  id: number;
  user: {
    id: number;
    username: string;
    email: string;
  };
  profile_picture?: string;
  profile_picture_url: string;
  bio: string;
  points: number;
  created_at: string;
}

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Fetch user profile from backend
      fetchUserProfile(parsedUser.uid);
    } else {
      // No user data, redirect to login
      navigate('/login');
    }
    setLoading(false);
  }, [navigate]);

  const fetchUserProfile = async (uid: string) => {
    try {
      // For now, we'll use a mock profile. In a real app, you'd map Firebase UID to Django user ID
      const profile = await apiService.getUserProfile(1); // Mock user ID
      if (profile) {
        setUserProfile(profile);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleProfilePictureUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !userProfile) return;

    setUploading(true);
    try {
      await apiService.uploadProfilePicture(userProfile.id, file);
      
      // Refresh profile data
      const updatedProfile = await apiService.getUserProfile(userProfile.id);
      if (updatedProfile) {
        setUserProfile(updatedProfile);
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert('Failed to upload profile picture. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-eco-cream">
        <div className="text-eco-brown">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-eco-cream">
        <div className="text-eco-brown">Please log in to access your dashboard.</div>
      </div>
    );
  }

  const profilePictureUrl = userProfile ? getProfilePictureUrl(userProfile.profile_picture_url) : getProfilePictureUrl();

  return (
    <div className="min-h-screen bg-eco-cream py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={profilePictureUrl}
                  alt={user.displayName || user.email}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <label className="absolute -bottom-1 -right-1 bg-eco-green-primary text-white rounded-full p-1 cursor-pointer hover:bg-eco-green-primary/90 transition-colors">
                  <Camera className="h-3 w-3" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePictureUpload}
                    disabled={uploading}
                  />
                </label>
                {uploading && (
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs">Uploading...</div>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-eco-brown">
                  Welcome back, {user.displayName || user.email}!
                </h1>
                <p className="text-gray-600">Manage your ReWear account</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-eco-brown flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile Info
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProfileEdit(!showProfileEdit)}
                className="flex items-center space-x-1"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </Button>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-500">Name</span>
                <p className="font-medium">{user.displayName || 'Not provided'}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Email</span>
                <p className="font-medium flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">User ID</span>
                <p className="font-mono text-sm text-gray-600">{user.uid}</p>
              </div>
              {userProfile && (
                <div>
                  <span className="text-sm text-gray-500">Bio</span>
                  <p className="text-sm text-gray-600">{userProfile.bio || 'No bio yet'}</p>
                </div>
              )}
            </div>
          </div>

          {/* Points */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-eco-brown mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Points
            </h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-eco-green-primary mb-2">
                {userProfile?.points || 120}
              </div>
              <p className="text-gray-600">Earn points by swapping items!</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-eco-brown mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <p>• Listed a new item</p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
              <div className="text-sm text-gray-600">
                <p>• Completed a swap</p>
                <p className="text-xs text-gray-400">1 day ago</p>
              </div>
              <div className="text-sm text-gray-600">
                <p>• Earned 50 points</p>
                <p className="text-xs text-gray-400">3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-eco-brown mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              onClick={() => navigate('/list-item')}
              className="w-full"
            >
              List New Item
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/browse')}
              className="w-full"
            >
              Browse Items
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/help')}
              className="w-full"
            >
              Get Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 
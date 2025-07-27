import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X } from 'lucide-react';
import { apiService } from '../services/api';

interface FormData {
  name: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  tags: string;
  status: string;
}

const ListItemPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    category: 'top',
    type: 'unisex',
    size: '',
    condition: 'used',
    tags: '',
    status: 'available',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create FormData to send files
      const submitData = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      
      // Add the first image (Django model only supports one image for now)
      if (images.length > 0) {
        submitData.append('image', images[0]);
      }

      // Send to backend
      await apiService.createItem(submitData);
      
      // Redirect to browse page
      navigate('/browse');
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Failed to create item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages([...images, ...newImages].slice(0, 1)); // Only allow 1 image for now
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-eco-cream py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-eco-brown mb-8">List Your Item</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-eco-brown mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g., Vintage Denim Jacket"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-eco-brown mb-2">
                Description *
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your item's condition, style, and any special features..."
              />
            </div>

            {/* Category and Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-eco-brown mb-2">
                  Category *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="footwear">Footwear</option>
                  <option value="accessory">Accessory</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-eco-brown mb-2">
                  Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>

            {/* Size and Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-eco-brown mb-2">
                  Size *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                  placeholder="e.g., M, L, XL, 42"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-eco-brown mb-2">
                  Condition *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                  value={formData.condition}
                  onChange={(e) => setFormData({...formData, condition: e.target.value})}
                >
                  <option value="new">New</option>
                  <option value="like_new">Like New</option>
                  <option value="used">Used</option>
                  <option value="worn_out">Worn Out</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-eco-brown mb-2">
                Tags
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                placeholder="e.g., vintage, denim, casual"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-eco-brown mb-2">
                Photo *
              </label>
              
              {/* Upload Button */}
              <div className="mb-4">
                <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-eco-green-primary transition-colors">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">
                      {images.length > 0 ? 'Click to change photo' : 'Click to upload photo'}
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              {/* Image Preview */}
              {images.length > 0 && (
                <div className="grid grid-cols-1 gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-eco-green-primary text-white py-3 rounded-lg font-semibold hover:bg-eco-green-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? 'Listing Item...' : 'List Item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListItemPage;
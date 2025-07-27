import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ClothingItem } from '../types';
import { apiService } from '../services/api';
import ItemCard from '../components/ItemCard';
import { Search, Filter, Loader2 } from 'lucide-react';

const BrowsePage: React.FC = () => {
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const fetchedItems = await apiService.getItems(selectedCategory || undefined);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-eco-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-eco-brown mb-4">Browse Items</h1>
          <p className="text-eco-green-primary">
            Discover sustainable fashion pieces ready for their next adventure
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-primary focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="unisex">Unisex</option>
              </select>
            </div>

            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Loader2 className="h-8 w-8 text-eco-green-primary animate-spin" />
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-eco-green-primary">
                {filteredItems.length} items found
                {selectedCategory && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
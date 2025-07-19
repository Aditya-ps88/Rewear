import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import BrowsePage from './pages/BrowsePage';
import ItemDetailPage from './pages/ItemDetailPage';
import ListItemPage from './pages/ListItemPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-eco-cream flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/list-item" element={<ListItemPage />} />
            {/* Placeholder routes */}
            <Route path="/login" element={<div className="min-h-screen flex items-center justify-center bg-eco-cream"><div className="text-eco-brown text-xl">Login page coming soon!</div></div>} />
            <Route path="/help" element={<div className="min-h-screen flex items-center justify-center bg-eco-cream"><div className="text-eco-brown text-xl">Help page coming soon!</div></div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
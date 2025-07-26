import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import BrowsePage from './pages/BrowsePage';
import ItemDetailPage from './pages/ItemDetailPage';
import ListItemPage from './pages/ListItemPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage';
import HelpPage from './pages/HelpPage';

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
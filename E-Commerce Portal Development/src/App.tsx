import React, { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { ProductDetail } from './components/ProductDetail';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { OrdersList } from './components/OrdersList';
import { Wishlist } from './components/Wishlist';
import { ReviewsSection } from './components/ReviewsSection';
import { CustomerCare } from './components/CustomerCare';
import { ReportingOptions } from './components/ReportingOptions';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';

export type Page = 
  | 'home' 
  | 'products' 
  | 'product-detail'
  | 'contact' 
  | 'about' 
  | 'login' 
  | 'register'
  | 'orders'
  | 'wishlist'
  | 'reviews'
  | 'customer-care'
  | 'reporting';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentPage('home');
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onProductClick={handleProductClick} />;
      case 'products':
        return <ProductsPage onProductClick={handleProductClick} />;
      case 'product-detail':
        return <ProductDetail productId={selectedProductId} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactUs />;
      case 'about':
        return <AboutUs />;
      case 'login':
        return <LoginForm onLogin={handleLogin} onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterForm onNavigate={handleNavigate} />;
      case 'orders':
        return <OrdersList />;
      case 'wishlist':
        return <Wishlist onProductClick={handleProductClick} />;
      case 'reviews':
        return <ReviewsSection />;
      case 'customer-care':
        return <CustomerCare />;
      case 'reporting':
        return <ReportingOptions />;
      default:
        return <HomePage onNavigate={handleNavigate} onProductClick={handleProductClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />
      
      <main>
        {renderPage()}
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">About Shopify</h3>
              <p className="text-gray-400">
                Your trusted online shopping destination for quality products at competitive prices.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => handleNavigate('about')}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('customer-care')}
                    className="hover:text-white transition-colors"
                  >
                    Customer Care
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('reporting')}
                    className="hover:text-white transition-colors"
                  >
                    Report an Issue
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">My Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => handleNavigate(isLoggedIn ? 'orders' : 'login')}
                    className="hover:text-white transition-colors"
                  >
                    My Orders
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate(isLoggedIn ? 'wishlist' : 'login')}
                    className="hover:text-white transition-colors"
                  >
                    Wishlist
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate(isLoggedIn ? 'reviews' : 'login')}
                    className="hover:text-white transition-colors"
                  >
                    My Reviews
                  </button>
                </li>
                {!isLoggedIn && (
                  <li>
                    <button 
                      onClick={() => handleNavigate('login')}
                      className="hover:text-white transition-colors"
                    >
                      Login
                    </button>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Refunds</li>
                <li>Track Order</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Shopify. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

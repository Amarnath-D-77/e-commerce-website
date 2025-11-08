import React from 'react';
import { Page } from '../App';
import { ShoppingCart, Heart, Package, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
}

export function Header({ currentPage, onNavigate, isLoggedIn, userName, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Products', page: 'products' as Page },
    { label: 'Contact Us', page: 'contact' as Page },
    { label: 'About Us', page: 'about' as Page },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-blue-600">Shopify</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('wishlist')}
              className="relative"
            >
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                3
              </Badge>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('orders')}
              className="relative"
            >
              <Package className="h-5 w-5" />
            </Button>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    {userName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onNavigate('orders')}>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('wishlist')}>
                    Wishlist
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('reviews')}>
                    My Reviews
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('customer-care')}>
                    Customer Care
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('reporting')}>
                    Report Issue
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button size="sm" onClick={() => onNavigate('login')}>
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-left ${
                    currentPage === item.page
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t pt-2 mt-2">
                <button
                  onClick={() => {
                    onNavigate('wishlist');
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-left text-gray-700 w-full flex items-center"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </button>
                <button
                  onClick={() => {
                    onNavigate('orders');
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-left text-gray-700 w-full flex items-center"
                >
                  <Package className="h-4 w-4 mr-2" />
                  Orders
                </button>
                
                {isLoggedIn ? (
                  <>
                    <button
                      onClick={() => {
                        onNavigate('reviews');
                        setMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 text-left text-gray-700 w-full"
                    >
                      My Reviews
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('customer-care');
                        setMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 text-left text-gray-700 w-full"
                    >
                      Customer Care
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('reporting');
                        setMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 text-left text-gray-700 w-full"
                    >
                      Report Issue
                    </button>
                    <button
                      onClick={() => {
                        onLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="px-3 py-2 text-left text-gray-700 w-full flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate('login');
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-2 text-left text-blue-600 w-full"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

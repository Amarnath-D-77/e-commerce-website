import React from 'react';
import { Page } from '../App';
import { products } from '../lib/mockData';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Star, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onProductClick: (productId: number) => void;
}

export function HomePage({ onNavigate, onProductClick }: HomePageProps) {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4">Welcome to Shopify</h1>
            <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices. Shop the latest electronics,
              fashion, home goods, and more.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('products')}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2>Featured Products</h2>
            <Button 
              variant="outline"
              onClick={() => onNavigate('products')}
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="relative h-64 bg-gray-100 cursor-pointer"
                  onClick={() => onProductClick(product.id)}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-2 left-2" variant="destructive">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 
                    className="mb-2 cursor-pointer hover:text-blue-600"
                    onClick={() => onProductClick(product.id)}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-gray-600">{product.rating}</span>
                    </div>
                    <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <p className="text-blue-600">${product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button 
                    className="flex-1"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Electronics', 'Audio', 'Mobile', 'Photography', 'Wearables', 'Tablets'].map((category) => (
              <Card 
                key={category}
                className="p-6 text-center cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('products')}
              >
                <p>{category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card 
              className="p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate('orders')}
            >
              <h3 className="mb-2">My Orders</h3>
              <p className="text-gray-600">Track and manage your orders</p>
            </Card>
            <Card 
              className="p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate('wishlist')}
            >
              <h3 className="mb-2">Wishlist</h3>
              <p className="text-gray-600">Save your favorite items</p>
            </Card>
            <Card 
              className="p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate('customer-care')}
            >
              <h3 className="mb-2">Customer Care</h3>
              <p className="text-gray-600">Get help and support</p>
            </Card>
            <Card 
              className="p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate('reviews')}
            >
              <h3 className="mb-2">Reviews</h3>
              <p className="text-gray-600">Share your experiences</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

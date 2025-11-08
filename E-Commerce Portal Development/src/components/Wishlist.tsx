import React from 'react';
import { wishlistItems } from '../lib/mockData';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, ShoppingCart, X, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WishlistProps {
  onProductClick: (productId: number) => void;
}

export function Wishlist({ onProductClick }: WishlistProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="mb-8">My Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div 
                className="relative h-48 bg-gray-100 cursor-pointer group"
                onClick={() => onProductClick(product.id)}
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </Button>
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
                  className="mb-2 cursor-pointer hover:text-blue-600 line-clamp-2"
                  onClick={() => onProductClick(product.id)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                  <span className="ml-2 text-gray-500">({product.reviews})</span>
                </div>
                <p className="text-blue-600">${product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600">Save items you love for later</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

import React from 'react';
import { Page } from '../App';
import { products, mockReviews } from '../lib/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailProps {
  productId: number | null;
  onNavigate: (page: Page) => void;
}

export function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find(p => p.id === productId);
  const productReviews = mockReviews.filter(r => r.productId === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button
        variant="ghost"
        onClick={() => onNavigate('products')}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-96 lg:h-[500px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          <h1 className="mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="mb-6">
            <p className="text-blue-600 mb-2">${product.price}</p>
            {product.inStock ? (
              <Badge variant="default">In Stock</Badge>
            ) : (
              <Badge variant="destructive">Out of Stock</Badge>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4 mb-8">
            <Button 
              size="lg"
              className="flex-1"
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Separator className="my-6" />

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p>Free Shipping</p>
                <p className="text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p>Secure Payment</p>
                <p className="text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p>30-Day Returns</p>
                <p className="text-gray-600">Easy return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="mb-6">Customer Reviews</h2>
        {productReviews.length > 0 ? (
          <div className="space-y-4">
            {productReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p>{review.userName}</p>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

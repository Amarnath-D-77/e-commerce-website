import React from 'react';
import { mockReviews } from '../lib/mockData';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Edit, Trash2 } from 'lucide-react';

export function ReviewsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1>My Reviews & Comments</h1>
        <Button>Write a Review</Button>
      </div>

      {mockReviews.length > 0 ? (
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="mb-1">{review.productName}</h3>
                    <p className="text-gray-600">{review.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{review.rating} out of 5</span>
                </div>
                
                <p className="text-gray-700">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Star className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="mb-2">No reviews yet</h3>
            <p className="text-gray-600 mb-4">Share your experience with products you've purchased</p>
            <Button>Write Your First Review</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

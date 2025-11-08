import React from 'react';
import { Card, CardContent } from './ui/card';
import { ShoppingCart, Users, Award, Globe } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="mb-4">About Shopify</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Welcome to Shopify, your trusted online shopping destination. We are committed to
          providing you with the best products at competitive prices, backed by exceptional
          customer service.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <ShoppingCart className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h2 className="mb-2">10M+</h2>
            <p className="text-gray-600">Products Sold</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h2 className="mb-2">5M+</h2>
            <p className="text-gray-600">Happy Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h2 className="mb-2">15+</h2>
            <p className="text-gray-600">Years Experience</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h2 className="mb-2">100+</h2>
            <p className="text-gray-600">Countries Served</p>
          </CardContent>
        </Card>
      </div>

      {/* Our Story */}
      <div className="mb-12">
        <h2 className="mb-6 text-center">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Our Mission</h3>
              <p className="text-gray-700">
                At Shopify, our mission is to make online shopping accessible, convenient, and
                enjoyable for everyone. We strive to offer a curated selection of high-quality
                products from trusted brands while maintaining competitive prices and excellent
                customer service.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Our Vision</h3>
              <p className="text-gray-700">
                We envision a world where online shopping is seamless, transparent, and customer-centric.
                Through continuous innovation and dedication to quality, we aim to become the most
                trusted e-commerce platform globally, setting new standards for the industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Values */}
      <div>
        <h2 className="mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Customer First</h3>
              <p className="text-gray-700">
                Every decision we make is centered around providing the best experience for our
                customers. Your satisfaction is our top priority.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                We carefully vet all products and sellers to ensure you receive only authentic,
                high-quality items that meet our strict standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Trust & Transparency</h3>
              <p className="text-gray-700">
                We believe in honest communication, fair pricing, and transparent policies. What
                you see is what you get, every time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously invest in technology and processes to make your shopping experience
                faster, easier, and more enjoyable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to reducing our environmental impact through eco-friendly packaging
                and sustainable business practices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-3">Community</h3>
              <p className="text-gray-700">
                We actively support local communities and charitable causes, believing that business
                success should benefit society as a whole.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

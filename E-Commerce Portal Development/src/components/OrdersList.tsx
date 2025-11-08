import React from 'react';
import { mockOrders } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Package, Truck, CheckCircle, XCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OrdersList() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Package className="h-5 w-5" />;
      case 'Shipped':
        return <Truck className="h-5 w-5" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5" />;
      case 'Cancelled':
        return <XCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'Processing':
        return 'secondary';
      case 'Shipped':
        return 'default';
      case 'Delivered':
        return 'outline';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="mb-8">My Orders</h1>

      {mockOrders.length > 0 ? (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Order {order.id}</CardTitle>
                    <p className="text-gray-600">Placed on {order.orderDate}</p>
                  </div>
                  <Badge variant={getStatusVariant(order.status)} className="w-fit">
                    <span className="mr-2">{getStatusIcon(order.status)}</span>
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={order.product.image}
                      alt={order.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{order.product.name}</h3>
                    <p className="text-gray-600 mb-2">Quantity: {order.quantity}</p>
                    <p className="text-blue-600">${order.total.toFixed(2)}</p>
                    {order.deliveryDate && (
                      <p className="text-gray-600 mt-2">
                        Delivered on {order.deliveryDate}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      Track Order
                    </Button>
                    {order.status === 'Delivered' && (
                      <Button variant="outline" size="sm">
                        Write Review
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="mb-2">No orders yet</h3>
            <p className="text-gray-600">Start shopping to see your orders here</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

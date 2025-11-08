export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Laptop Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1589482837194-b525e51b093a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2h8ZW58MXx8fHwxNzYyNTIyODE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.5,
    reviews: 124,
    description: 'Powerful laptop with latest processor, 16GB RAM, and stunning display.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MXx8fHwxNzYyNTQyMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    rating: 4.7,
    reviews: 89,
    description: 'Premium noise-cancelling headphones with exceptional sound quality.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Smartphone X Pro',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlfGVufDF8fHx8MTc2MjU2NDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mobile',
    rating: 4.8,
    reviews: 256,
    description: 'Latest flagship smartphone with advanced camera system and 5G.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Professional Camera',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjI1OTM0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Photography',
    rating: 4.9,
    reviews: 178,
    description: 'High-end mirrorless camera for professional photography.',
    inStock: false,
  },
  {
    id: 5,
    name: 'Smart Watch Elite',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzYyNTA4NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    rating: 4.6,
    reviews: 145,
    description: 'Feature-rich smartwatch with health tracking and notifications.',
    inStock: true,
  },
  {
    id: 6,
    name: 'Tablet Pro Max',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1760708369071-e8a50a8979cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYyNTU3OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tablets',
    rating: 4.4,
    reviews: 92,
    description: 'Versatile tablet perfect for work and entertainment.',
    inStock: true,
  },
];

export interface Order {
  id: string;
  product: Product;
  quantity: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  orderDate: string;
  deliveryDate?: string;
  total: number;
}

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    product: products[0],
    quantity: 1,
    status: 'Delivered',
    orderDate: '2025-10-15',
    deliveryDate: '2025-10-20',
    total: 1299.99,
  },
  {
    id: 'ORD-002',
    product: products[1],
    quantity: 2,
    status: 'Shipped',
    orderDate: '2025-11-01',
    total: 399.98,
  },
  {
    id: 'ORD-003',
    product: products[4],
    quantity: 1,
    status: 'Processing',
    orderDate: '2025-11-05',
    total: 399.99,
  },
];

export interface Review {
  id: string;
  productId: number;
  productName: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockReviews: Review[] = [
  {
    id: 'REV-001',
    productId: 1,
    productName: 'Premium Laptop Pro',
    userName: 'John Doe',
    rating: 5,
    comment: 'Excellent laptop! Fast performance and great build quality.',
    date: '2025-10-25',
  },
  {
    id: 'REV-002',
    productId: 2,
    productName: 'Wireless Headphones',
    userName: 'Jane Smith',
    rating: 4,
    comment: 'Great sound quality, but battery could be better.',
    date: '2025-11-02',
  },
  {
    id: 'REV-003',
    productId: 3,
    productName: 'Smartphone X Pro',
    userName: 'Mike Johnson',
    rating: 5,
    comment: 'Best phone I have ever owned. Camera is amazing!',
    date: '2025-11-03',
  },
];

export const wishlistItems = [products[2], products[3], products[5]];

# Shopify E-Commerce Portal

A full-featured e-commerce web application built with React, TypeScript, and Tailwind CSS.

## Features

### 1. Navigation Menu
- **Home**: Landing page with featured products and categories
- **Products**: Complete product catalog with filtering and sorting
- **Contact Us**: Contact form with validation and company information
- **About Us**: Company information, mission, vision, and values

### 2. User Authentication
- **Registration Form** with comprehensive validation:
  - First Name & Last Name (minimum 2 characters)
  - Email validation (proper email format)
  - Phone number validation
  - Password strength requirements (8+ characters, uppercase, lowercase, numbers)
  - Confirm password matching
  - Terms and conditions acceptance
  
- **Login Form** with validation:
  - Email format validation
  - Password minimum length
  - Error messages for invalid inputs

### 3. E-Commerce Features
- **Product Catalog**: Browse products with filters and sorting options
- **Product Details**: Detailed product view with reviews and specifications
- **Orders List**: View order history with status tracking
- **Wishlist**: Save favorite products for later
- **Reviews & Comments**: View and manage product reviews
- **Customer Care**: FAQ section, contact options, and support hours
- **Reporting Options**: Submit issues with detailed forms and tracking

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Hook Form** - Form validation
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Project Structure

```
├── App.tsx                      # Main application component
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── HomePage.tsx            # Home page
│   ├── ProductsPage.tsx        # Product listing
│   ├── ProductDetail.tsx       # Product detail view
│   ├── LoginForm.tsx           # Login form with validation
│   ├── RegisterForm.tsx        # Registration form with validation
│   ├── OrdersList.tsx          # Order history
│   ├── Wishlist.tsx            # Saved items
│   ├── ReviewsSection.tsx      # User reviews
│   ├── CustomerCare.tsx        # Support and FAQ
│   ├── ReportingOptions.tsx    # Issue reporting
│   ├── AboutUs.tsx             # About page
│   ├── ContactUs.tsx           # Contact page
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── mockData.ts             # Mock data for products and orders
└── styles/
    └── globals.css             # Global styles
```

## Getting Started

This project was built using Figma Make and can be run in compatible React environments.

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shopify-ecommerce.git
cd shopify-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Form Validation Details

### Registration Form Validations
- **First Name**: Required, minimum 2 characters
- **Last Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Phone**: Required, valid phone number format
- **Password**: Required, minimum 8 characters, must contain uppercase, lowercase, and number
- **Confirm Password**: Required, must match password
- **Terms**: Required acceptance

### Login Form Validations
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters

### Contact & Reporting Forms
- **Name/Email**: Required with proper validation
- **Subject**: Required, minimum 5 characters
- **Message/Description**: Required, minimum 10-20 characters
- **Phone**: Valid phone number format

## Features Overview

### Shopping Experience
- Featured products on homepage
- Category-based browsing
- Product filtering and sorting
- Detailed product views with reviews
- Wishlist functionality
- Order tracking

### User Account
- User registration and login
- Profile management (via header dropdown)
- Order history
- Review management
- Wishlist management

### Customer Support
- FAQ section
- Multiple contact options (Phone, Email, Live Chat)
- Issue reporting system
- Support hours information

## Mock Data

The application includes mock data for:
- Products (6 sample products across different categories)
- Orders (3 sample orders with different statuses)
- Reviews (3 sample product reviews)
- Wishlist items

## Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

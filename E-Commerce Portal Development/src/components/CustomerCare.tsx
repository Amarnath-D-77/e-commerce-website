import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { MessageCircle, Phone, Mail, HelpCircle, Clock } from 'lucide-react';

export function CustomerCare() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="mb-8">Customer Care</h1>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="p-6">
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri, 9am-6pm</p>
            <Button>1-800-SHOPIFY</Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Average wait: 2 minutes</p>
            <Button>Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Response within 24 hours</p>
            <Button>Send Email</Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="h-6 w-6 mr-2" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I track my order?</AccordionTrigger>
              <AccordionContent>
                You can track your order by going to the "My Orders" section and clicking on the "Track Order" button. You'll receive real-time updates on your order's status and location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy for most items. Products must be in original condition with all tags and packaging. Simply initiate a return from your order history and we'll provide a prepaid shipping label.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>
                Standard shipping typically takes 5-7 business days. Express shipping (2-3 days) and next-day delivery options are also available at checkout for an additional fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to over 100 countries worldwide. Shipping times and costs vary by destination. International orders may be subject to customs fees and import duties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I change or cancel my order?</AccordionTrigger>
              <AccordionContent>
                Orders can be modified or cancelled within 1 hour of placement. After that, please contact customer support immediately and we'll do our best to accommodate your request before the item ships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Support Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-6 w-6 mr-2" />
            Support Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span className="text-gray-600">10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-gray-600">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

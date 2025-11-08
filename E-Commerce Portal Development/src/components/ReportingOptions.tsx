import React from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ReportFormData {
  issueType: string;
  orderId: string;
  subject: string;
  description: string;
  email: string;
}

export function ReportingOptions() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ReportFormData>();

  const onSubmit = (data: ReportFormData) => {
    console.log('Report submitted:', data);
    toast.success('Report submitted successfully! We will get back to you within 24 hours.');
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="mb-8">Report an Issue</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <h3 className="mb-1">Quick Response</h3>
            <p className="text-gray-600">We respond within 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="mb-1">Track Status</h3>
            <p className="text-gray-600">Monitor your report progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-10 w-10 text-orange-600 mx-auto mb-3" />
            <h3 className="mb-1">Priority Support</h3>
            <p className="text-gray-600">Urgent issues handled first</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submit a Report</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="issueType">Issue Type</Label>
              <Select 
                onValueChange={(value) => setValue('issueType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="order-issue">Order Issue</SelectItem>
                  <SelectItem value="product-defect">Product Defect</SelectItem>
                  <SelectItem value="delivery-problem">Delivery Problem</SelectItem>
                  <SelectItem value="payment-issue">Payment Issue</SelectItem>
                  <SelectItem value="refund-request">Refund Request</SelectItem>
                  <SelectItem value="account-issue">Account Issue</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderId">Order ID (Optional)</Label>
              <Input
                id="orderId"
                placeholder="e.g., ORD-001"
                {...register('orderId')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Brief description of the issue"
                {...register('subject', {
                  required: 'Subject is required',
                  minLength: {
                    value: 5,
                    message: 'Subject must be at least 5 characters',
                  },
                })}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description</Label>
              <Textarea
                id="description"
                placeholder="Please provide as much detail as possible about the issue..."
                rows={6}
                {...register('description', {
                  required: 'Description is required',
                  minLength: {
                    value: 20,
                    message: 'Description must be at least 20 characters',
                  },
                })}
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Submit Report
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => reset()}
              >
                Clear Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Common Issues & Quick Solutions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-1">Order Not Received</h3>
            <p className="text-gray-600">
              Check your tracking information first. If it shows delivered but you haven't received it, contact us immediately.
            </p>
          </div>
          <div>
            <h3 className="mb-1">Wrong Item Delivered</h3>
            <p className="text-gray-600">
              We apologize for the inconvenience. Please report this issue and we'll arrange for a free return and send the correct item.
            </p>
          </div>
          <div>
            <h3 className="mb-1">Product Damaged</h3>
            <p className="text-gray-600">
              Take photos of the damage and packaging, then submit a report. We'll provide a replacement or full refund.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

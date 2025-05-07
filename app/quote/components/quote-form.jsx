/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState, useRef } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MdOutlineFileUpload } from 'react-icons/md';
import { ContactFormSchema } from '@/lib/schema';
import { VALID_TYPES } from '@/lib/constants/validFileType';
import { insuranceOptions } from '@/lib/constants';

// Constants
const apiKey = '5183a9d1-1c74-4a10-8456-6fd98586a5ac';
const userKey = '62baa5e7-b9da-4a2a-a231-01c31d9c53f1';

const QuoteForm = ({ formTitle }) => {
  const [capVal, setCapVal] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      email: '',
      product: '',
      contactNo: '',
      message: '',
    },
  });

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const sendEmail = async (values) => {
    const emailData = {
      UserKey: userKey,
      APIKey: apiKey,
      ToEmail: values.email,
      Subject: 'Your Insurance Inquiry',
      SenderEmail: 'support@acprimeinsurance.com',
      SenderName: 'AC Prime',
      SubmittedContent: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${values.firstName} ${values.lastName}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Contact No:</strong> ${values.contactNo}</p>
        <p><strong>Product:</strong> ${values.product}</p>
        <p><strong>Message:</strong> ${values.message}</p>
      `,
      CCEmails: ['galvanrodnie@gmail.com'],
    };
    console.log('API Key:', apiKey);

    const response = await axios.post(
      'https://api.enginemailer.com/RESTAPI/Submission/SendEmail',
      emailData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Email API response:', response); // Log the response

    if (response.status === 200) {
      toast('Your email has been sent.');
    } else {
      toast('Failed to send email. Please try again later.');
    }
  };

  const onSubmit = (values) => {
    if (!capVal) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    sendEmail(values);
  };

  return (
    <div>
      <div className="w-full rounded-md sm:border sm:border-gray-300 sm:p-6 lg:p-8">
        <p className="mb-6 text-center text-navy-100">
          {formTitle ||
            'Fill up the information box below and we’ll get in touch you within 48 business hours'}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="gap-1.2 grid grid-cols-1 sm:grid-cols-2 sm:gap-2.5">
              {['lastName', 'firstName', 'email', 'contactNo'].map((name) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {name
                          .replace(/([A-Z])/g, ' $1')
                          .charAt(0)
                          .toUpperCase() +
                          name.replace(/([A-Z])/g, ' $1').slice(1)}{' '}
                        *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-9 rounded"
                          placeholder={`Enter your ${name}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>I want to get a quote for *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="text-navy-100">
                        <SelectTrigger className="h-9 rounded">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {insuranceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[60px] resize-none rounded"
                      placeholder="Write your message (optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2 pt-4">
              <Checkbox id="terms1" />
              <Label
                htmlFor="terms"
                className="text-xs font-normal text-navy-100"
              >
                I agree to receive regular updates, promotions, and
                recommendations regarding insurance and investments.
              </Label>
            </div>
            <div className="flex items-center gap-2 pb-4 pt-2">
              <Checkbox id="terms2" />
              <Label
                htmlFor="terms"
                className="text-xs font-normal text-navy-100"
              >
                By submitting my personal data, I consent to AC Prime Insurance
                Brokers Inc. processing and storing my information in accordance
                with its Privacy Notice.
              </Label>
            </div>
            <div className="flex w-full flex-col justify-center">
              <ReCAPTCHA
                sitekey="6LdrIUUqAAAAAAmHYwAtY5Jp8n3JxxAdsZYZVHfT"
                onChange={setCapVal}
                className="mx-auto mb-2"
              />
              <Button
                variant="primary"
                type="submit"
                className="mx-auto h-9 rounded-[2px] px-8"
              >
                <>
                  {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {loading ? 'Submitting...' : 'SUBMIT'}
                </>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default QuoteForm;

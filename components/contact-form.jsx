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
import { IoIosClose } from 'react-icons/io';

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
import {
  EMAIL_INQUIRY_TEMPLATE,
  clientContent,
  csrContent,
} from '@/lib/email-templates';

// Constants
const apiKey = '5183a9d1-1c74-4a10-8456-6fd98586a5ac';
const userKey = '62baa5e7-b9da-4a2a-a231-01c31d9c53f1';
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const MAX_FILES = 5;

const ContactForm = ({ formTitle }) => {
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
      file: [],
    },
  });

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const sendEmail = async (data) => {
    try {
      const clientEmailContent = clientContent(data.firstName, data.lastName);
      const csrEmailContent = csrContent(
        data.firstName,
        data.lastName,
        data.email,
        data.contactNo,
        data.message
      );

      const attachments = await Promise.all(
        data.file.map(convertToBase64)
      ).then((files) =>
        files.map((base64, idx) => ({
          Filename: data.file[idx].name,
          Content: base64.split(',')[1],
        }))
      );

      await Promise.all([
        sendEmailToClient(data.email, clientEmailContent, attachments),
        sendEmailToSupport(csrEmailContent, attachments),
      ]);

      toast('Your email has been sent.');
    } catch (error) {
      console.error('Error sending email:', error);
      toast('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const sendEmailToClient = (toEmail, content, attachments) => {
    const emailData = {
      UserKey: userKey, // Use the correct variable
      APIKey: apiKey, // Use the correct variable
      ToEmail: toEmail,
      Subject: 'Your Insurance Inquiry',
      SenderEmail: 'support@acprimeinsurance.com',
      SenderName: 'AC Prime',
      SubmittedContent: EMAIL_INQUIRY_TEMPLATE.replace('{{content}}', content),
      Attachments: attachments,
      CCEmails: ['support@acprimeinsurance.com'],
    };
    return axios.post(
      'https://api.enginemailer.com/RESTAPI/Submission/SendEmail',
      emailData,
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  const sendEmailToSupport = (content, attachments) => {
    const emailData = {
      UserKey: userKey, // Use the correct variable
      APIKey: apiKey, // Use the correct variable
      ToEmail: 'galvanrodnie@gmail.com',
      Subject: 'New Insurance Inquiry',
      SenderEmail: 'support@acprimeinsurance.com',
      SenderName: 'AC Prime',
      SubmittedContent: EMAIL_INQUIRY_TEMPLATE.replace('{{content}}', content),
      Attachments: attachments,
    };
    return axios.post(
      'https://api.enginemailer.com/RESTAPI/Submission/SendEmail',
      emailData,
      { headers: { 'Content-Type': 'application/json' } }
    );
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const existingFiles = selectedFiles.map((file) => file.name);
    const uniqueFiles = newFiles.filter(
      (file) => !existingFiles.includes(file.name)
    );

    // Validate files
    const filteredFiles = uniqueFiles.filter(
      (file) => VALID_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE
    );

    if (filteredFiles.length + selectedFiles.length > MAX_FILES) {
      setFeedbackMessage('You can only upload a maximum of 5 files.');
      return;
    }

    const invalidFiles = uniqueFiles.filter(
      (file) => !VALID_TYPES.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      setFeedbackMessage(
        'Invalid file type. Please upload only images, documents, or PDFs.'
      );
      return;
    }

    const tooBigFiles = uniqueFiles.filter((file) => file.size > MAX_FILE_SIZE);
    if (tooBigFiles.length > 0) {
      setFeedbackMessage('Files are too big (maximum size is 3MB).');
      return;
    }

    setFeedbackMessage('');
    setSelectedFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
    form.setValue('file', [...form.getValues('file'), ...filteredFiles]);
  };
  const removeFile = (fileToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileToRemove.name)
    );
    form.setValue(
      'file',
      form.getValues('file').filter((file) => file.name !== fileToRemove.name)
    );
  };
  const onSubmit = (values) => {
    if (!capVal) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    setLoading(true);
    sendEmail(values);
  };

  return (
    <div className="py-12">
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <div className="w-full lg:w-2/5">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/contact/bg-1.png"
              alt="Calling"
              width={450}
              height={300}
              className="w-full max-w-md rounded-md"
            />
          </div>
        </div>
        <div className="w-full rounded-md sm:border sm:border-gray-300 sm:p-6 lg:w-3/5 lg:p-8">
          <p className="mb-6 text-center text-navy-100">
            {formTitle || 'You can reach us by submitting this form'}
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
                      <FormLabel>I am looking for *</FormLabel>
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
                    <FormLabel>Remarks</FormLabel>
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
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload</FormLabel>
                    <FormControl className="cursor-pointer">
                      <div className="relative">
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor="fileUpload"
                            className="z-0 flex w-[11rem] cursor-pointer items-center rounded border bg-white px-4 py-2.5 text-xs text-navy-100 transition-colors hover:bg-navy-500/20"
                          >
                            <MdOutlineFileUpload className="mr-2 h-4 w-4 cursor-pointer" />
                            Click to Upload
                          </label>
                          <Input
                            id="fileUpload"
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="absolute left-0 top-0 z-10 w-[9.5rem] cursor-pointer opacity-0"
                          />
                          {selectedFiles.length > 0 && !feedbackMessage && (
                            <p className="text-sm text-navy-100">
                              {selectedFiles.length} file
                              {selectedFiles.length > 1 ? 's' : ''} chosen
                            </p>
                          )}
                          {feedbackMessage && (
                            <p className="w-auto text-sm text-red-500">
                              {feedbackMessage}
                            </p>
                          )}
                        </div>
                        {selectedFiles.length > 0 && (
                          <div className="mt-2">
                            <ul className="list-none text-sm text-navy-100">
                              {selectedFiles.map((file, index) => (
                                <li key={index} className="flex gap-1">
                                  <span>
                                    {file.name.length > 20
                                      ? `${file.name.substring(0, 10)}...${file.name.substring(file.name.length - 10)}`
                                      : file.name}
                                  </span>
                                  <span
                                    onClick={() => removeFile(file)}
                                    className="rounded text-2xl text-red-500 hover:bg-red-500/10 hover:underline"
                                  >
                                    <IoIosClose />
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
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
                  By submitting my personal data, I consent to AC Prime
                  Insurance Brokers Inc. processing and storing my information
                  in accordance with its Privacy Notice.
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
                    {loading && (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    )}
                    {loading ? 'Submitting...' : 'SUBMIT'}
                  </>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

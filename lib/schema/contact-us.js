import { z } from 'zod';

const ContactFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address.'),
  contactNo: z.string().min(11, 'Contact Number must be at least 11 digits.'),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().optional(),
  file: z.array(z.any()).optional(),
});

export { ContactFormSchema };

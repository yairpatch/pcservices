import { z } from 'zod';

export const ticketSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  customerName: z.string().min(1, 'Name is required'),
  customerEmail: z.string().email('Invalid email address'),
  device: z.string().min(1, 'Device type is required'),
  priority: z.enum(['low', 'medium', 'high']),
});

export const trackTicketSchema = z.object({
  ticketId: z.string().min(1, 'Ticket ID is required'),
  email: z.string().email('Invalid email address'),
});
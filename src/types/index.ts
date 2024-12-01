export type Language = 'en' | 'es' | 'he';

export type Status = 'pending' | 'in_progress' | 'resolved';
export type Priority = 'low' | 'medium' | 'high';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  customerName: string;
  customerEmail: string;
  device: string;
  status: Status;
  priority: Priority;
  createdAt: Date;
}
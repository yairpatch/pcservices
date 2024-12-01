export type Language = 'en' | 'ru' | 'he';

export type Status = 'pending' | 'in_progress' | 'resolved';
export type Priority = 'low' | 'medium' | 'high';
export type Device = 'laptop' | 'desktop' | 'tablet' | 'phone' | 'other';

export interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  authorType: 'staff' | 'customer';
  authorName: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  customerName: string;
  customerEmail: string;
  device: Device;
  status: Status;
  priority: Priority;
  createdAt: Date;
  comments: Comment[];
  canCustomerComment: boolean; // true only after a staff comment
}

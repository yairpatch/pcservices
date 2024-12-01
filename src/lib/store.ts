import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Language } from '../types';
import type { Ticket, Status, Priority, Comment } from '../types';

interface StoreState {
  tickets: Ticket[];
  trackedTicket: {
    ticketId: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
  user: { username: string } | null;
  language: Language;
}

interface StoreActions {
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt' | 'comments' | 'canCustomerComment'>) => void;
  updateTicket: (id: string, updates: Partial<Ticket>) => void;
  deleteTicket: (id: string) => void;
  addComment: (ticketId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
  updateTicketStatus: (ticketId: string, status: Status) => void;
  updateTicketPriority: (ticketId: string, priority: Priority) => void;
  setTrackedTicket: (data: { ticketId: string; email: string; } | null) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  setLanguage: (lang: Language) => void;
}

// Helper function to generate IDs
const generateId = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 10)}`;

const initialTickets: Ticket[] = [];

export const useAppStore = create<StoreState & StoreActions>()(
  persist(
    (set, get) => ({
      tickets: initialTickets,
      trackedTicket: null,
      isAuthenticated: false,
      user: null,
      language: 'he',

      login: (username: string, password: string) => {
        // In a real app, this would be an API call with proper encryption
        const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
        const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;
        
        if (!validUsername || !validPassword) {
          console.error('Admin credentials not properly configured');
          return false;
        }

        if (username === validUsername && password === validPassword) {
          set({ isAuthenticated: true, user: { username } });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ isAuthenticated: false, user: null });
      },

      setLanguage: (lang) => set({ language: lang }),

      addTicket: (ticket) =>
        set((state) => ({
          tickets: [
            ...state.tickets,
            {
              ...ticket,
              id: generateId('TIX'),
              createdAt: new Date().toISOString(),
              comments: [],
              canCustomerComment: false,
            },
          ],
        })),

      updateTicket: (id, updates) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === id ? { ...ticket, ...updates } : ticket
          ),
        })),

      deleteTicket: (id) =>
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== id),
          trackedTicket: state.trackedTicket?.ticketId === id ? null : state.trackedTicket,
        })),

      addComment: (ticketId, comment) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) => {
            if (ticket.id !== ticketId) return ticket;
            
            const newComment = {
              ...comment,
              id: generateId('COM'),
              createdAt: new Date().toISOString(),
            };

            return {
              ...ticket,
              comments: [...ticket.comments, newComment],
              // Allow customer to comment only after staff comment
              canCustomerComment: comment.authorType === 'staff',
            };
          }),
        })),

      updateTicketStatus: (ticketId, status) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, status } : ticket
          ),
        })),

      updateTicketPriority: (ticketId, priority) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, priority } : ticket
          ),
        })),

      setTrackedTicket: (data) => set({ trackedTicket: data }),
    }),
    {
      name: 'techfix-storage', // unique name for localStorage key
      partialize: (state) => ({
        tickets: state.tickets,
        isAuthenticated: state.isAuthenticated,
        language: state.language,
        trackedTicket: state.trackedTicket,
        user: state.user,
      }),
    }
  )
);
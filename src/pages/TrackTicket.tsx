import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Search } from 'lucide-react';
import { trackTicketSchema } from '../lib/validation';
import Input from '../components/ui/Input';
import TicketDetails from '../components/TicketDetails';
import { useAppStore } from '../lib/store';
import type { Ticket } from '../types';

type TrackTicketFormData = z.infer<typeof trackTicketSchema>;

export default function TrackTicket() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { tickets, trackedTicket, setTrackedTicket } = useAppStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TrackTicketFormData>({
    resolver: zodResolver(trackTicketSchema),
  });

  // Set form values if there's a tracked ticket
  useEffect(() => {
    if (trackedTicket) {
      setValue('ticketId', trackedTicket.ticketId);
      setValue('email', trackedTicket.email);
    }
  }, [trackedTicket, setValue]);

  // Find the current ticket if it exists
  const currentTicket = trackedTicket
    ? tickets.find(
        (t) => t.id === trackedTicket.ticketId && t.customerEmail === trackedTicket.email
      )
    : null;

  const onSubmit = async (data: TrackTicketFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const foundTicket = tickets.find(
        (t) => t.id === data.ticketId && t.customerEmail === data.email
      );

      if (foundTicket) {
        setTrackedTicket(data);
      } else {
        setError(t('trackTicket.error.notFound'));
      }
    } catch (err) {
      setError(t('trackTicket.error.generic'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">{t('trackTicket.title')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label={t('trackTicket.form.ticketId')}
              placeholder={t('trackTicket.form.ticketIdPlaceholder')}
              error={errors.ticketId?.message}
              {...register('ticketId')}
            />

            <Input
              label={t('trackTicket.form.email')}
              type="email"
              placeholder={t('trackTicket.form.emailPlaceholder')}
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="h-4 w-4" />
            {isLoading ? t('trackTicket.form.searching') : t('trackTicket.form.search')}
          </button>

          {error && (
            <div className="text-red-600 text-center">{error}</div>
          )}
        </form>
      </div>

      {currentTicket && <TicketDetails ticket={currentTicket} />}
    </div>
  );
}
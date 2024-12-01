import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { ticketSchema } from '../lib/validation';
import { useAppStore } from '../lib/store';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';
import Select from '../components/ui/Select';

type TicketFormData = z.infer<typeof ticketSchema>;

export default function SubmitTicket() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addTicket = useAppStore((state) => state.addTicket);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit = async (data: TicketFormData) => {
    try {
      addTicket(data);
      reset();
      // Navigate to track ticket page
      navigate('/track-ticket', { 
        state: { 
          message: t('submitTicket.success'),
          email: data.customerEmail 
        } 
      });
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert(t('submitTicket.error'));
    }
  };

  const priorityOptions = [
    { value: 'low', label: t('submitTicket.priority.low') },
    { value: 'medium', label: t('submitTicket.priority.medium') },
    { value: 'high', label: t('submitTicket.priority.high') },
  ];

  const deviceOptions = [
    { value: 'laptop', label: t('submitTicket.device.laptop') },
    { value: 'desktop', label: t('submitTicket.device.desktop') },
    { value: 'tablet', label: t('submitTicket.device.tablet') },
    { value: 'phone', label: t('submitTicket.device.phone') },
    { value: 'other', label: t('submitTicket.device.other') },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">{t('submitTicket.title')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label={t('submitTicket.form.title')}
            placeholder={t('submitTicket.form.titlePlaceholder')}
            error={errors.title?.message}
            {...register('title')}
          />

          <TextArea
            label={t('submitTicket.form.description')}
            placeholder={t('submitTicket.form.descriptionPlaceholder')}
            rows={4}
            error={errors.description?.message}
            {...register('description')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label={t('submitTicket.form.name')}
              placeholder={t('submitTicket.form.namePlaceholder')}
              error={errors.customerName?.message}
              {...register('customerName')}
            />

            <Input
              label={t('submitTicket.form.email')}
              type="email"
              placeholder={t('submitTicket.form.emailPlaceholder')}
              error={errors.customerEmail?.message}
              {...register('customerEmail')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label={t('submitTicket.form.device')}
              placeholder={t('submitTicket.form.devicePlaceholder')}
              options={deviceOptions}
              error={errors.device?.message}
              {...register('device')}
            />

            <Select
              label={t('submitTicket.form.priority')}
              placeholder={t('submitTicket.form.priorityPlaceholder')}
              options={priorityOptions}
              error={errors.priority?.message}
              {...register('priority')}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t('submitTicket.form.submitting') : t('submitTicket.form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
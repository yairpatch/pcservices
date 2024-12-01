import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import Badge from './ui/Badge';
import TicketComments from './TicketComments';
import type { Ticket } from '../types';

interface Props {
  ticket: Ticket;
}

export default function TicketDetails({ ticket }: Props) {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">{ticket.title}</h2>
        <Badge variant={ticket.status}>{t(`trackTicket.status.${ticket.status}`)}</Badge>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{t('trackTicket.description')}</h3>
          <p className="mt-1">{ticket.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">{t('trackTicket.customer')}</h3>
            <p className="mt-1">{ticket.customerName}</p>
            <p className="text-gray-500">{ticket.customerEmail}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">{t('trackTicket.device')}</h3>
            <p className="mt-1">{t(`submitTicket.device.${ticket.device}`)}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">{t('trackTicket.priority')}</h3>
            <Badge variant={ticket.priority} className="mt-1">
              {t(`submitTicket.priority.${ticket.priority}`)}
            </Badge>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">{t('trackTicket.created')}</h3>
            <p className="mt-1">{format(new Date(ticket.createdAt), 'PPP')}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <TicketComments ticket={ticket} isStaff={false} />
        </div>
      </div>
    </div>
  );
}
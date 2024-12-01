import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { useAppStore } from '../lib/store';
import TicketComments from '../components/TicketComments';

interface Props {
  isAdminView?: boolean;
}

export default function TicketDetails({ isAdminView = false }: Props) {
  const { t } = useTranslation();
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const { tickets, isAuthenticated } = useAppStore();
  
  const ticket = tickets.find((t) => t.id === ticketId);
  
  if (!ticket) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{t('ticket.notFound')}</h1>
        <button
          onClick={() => isAdminView ? navigate('/admin') : navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          {t('common.back')}
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => isAdminView ? navigate('/admin') : navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        {t('common.back')}
      </button>

      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-2">{ticket.title}</h1>
            <p className="text-gray-600 mb-4">
              {t('ticket.submittedBy')}: {ticket.customerName}
            </p>
          </div>
          <div className="text-left sm:text-right space-y-2">
            <div>
              <span className="font-medium mr-2">{t('ticket.status')}:</span>
              <span
                className={`inline-block px-2 py-1 rounded text-sm ${
                  ticket.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : ticket.status === 'in_progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {t(`admin.filters.status.${ticket.status}`)}
              </span>
            </div>
            <div>
              <span className="font-medium mr-2">{t('ticket.priority')}:</span>
              <span
                className={`inline-block px-2 py-1 rounded text-sm ${
                  ticket.priority === 'low'
                    ? 'bg-gray-100 text-gray-800'
                    : ticket.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {t(`admin.filters.priority.${ticket.priority}`)}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">{t('ticket.description')}</h2>
          <p className="text-gray-700 whitespace-pre-wrap break-words">{ticket.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="font-medium">{t('ticket.device')}:</span>{' '}
            {t(`submitTicket.device.${ticket.device}`)}
          </div>
          <div>
            <span className="font-medium">{t('ticket.created')}:</span>{' '}
            {format(new Date(ticket.createdAt), 'PPp')}
          </div>
          <div>
            <span className="font-medium">{t('ticket.email')}:</span>{' '}
            <span className="break-words">{ticket.customerEmail}</span>
          </div>
        </div>

        <hr className="my-6" />

        <TicketComments ticket={ticket} isStaff={isAdminView || isAuthenticated} />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { Send } from 'lucide-react';
import { Comment, Ticket } from '../types';
import { useAppStore } from '../lib/store';

interface TicketCommentsProps {
  ticket: Ticket;
  isStaff: boolean;
}

export default function TicketComments({ ticket, isStaff }: TicketCommentsProps) {
  const { t } = useTranslation();
  const [newComment, setNewComment] = useState('');
  const { addComment } = useAppStore();

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Omit<Comment, 'id' | 'createdAt'> = {
      content: newComment.trim(),
      authorType: isStaff ? 'staff' : 'customer',
      authorName: isStaff ? 'Support Staff' : ticket.customerName,
    };

    addComment(ticket.id, comment);
    setNewComment('');
  };

  const canAddComment = isStaff || ticket.canCustomerComment;

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">{t('ticket.comments.title')}</h2>
      <div className="space-y-4 mb-6">
        {ticket.comments.map((comment) => (
          <div
            key={comment.id}
            className={`p-4 rounded-lg ${
              comment.authorType === 'staff' ? 'bg-blue-50' : 'bg-gray-50'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 space-y-1 sm:space-y-0 sm:space-x-4">
              <span
                className={`inline-block px-2 py-1 rounded text-sm ${
                  comment.authorType === 'staff'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {t(`ticket.comments.${comment.authorType}`)}
              </span>
              <span className="text-sm text-gray-500">
                {format(new Date(comment.createdAt), 'PPp')}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap break-words">{comment.content}</p>
          </div>
        ))}

        {ticket.comments.length === 0 && (
          <p className="text-gray-500 italic">{t('ticket.comments.noComments')}</p>
        )}
      </div>

      {canAddComment && (
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            rows={4}
            className="w-full"
            placeholder={t('ticket.comments.placeholder')}
          />
          {!isStaff && (
            <p className="text-sm text-gray-500">{t('ticket.comments.customerNote')}</p>
          )}
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {t('ticket.comments.submit')}
          </button>
        </form>
      )}
      {!canAddComment && (
        <p className="text-sm text-gray-500">{t('ticket.comments.waitingForStaff')}</p>
      )}
    </div>
  );
}

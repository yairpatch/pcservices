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
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">{t('ticket.comments.title')}</h3>
      
      <div className="space-y-4 mb-6">
        {ticket.comments.map((comment) => (
          <div
            key={comment.id}
            className={`p-4 rounded-lg ${
              comment.authorType === 'staff'
                ? 'bg-blue-50 mr-12'
                : 'bg-gray-50 ml-12'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">
                {comment.authorName}
                <span className="text-sm text-gray-500 ml-2">
                  {format(new Date(comment.createdAt), 'PPp')}
                </span>
              </span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  comment.authorType === 'staff'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {t(`ticket.comments.${comment.authorType}`)}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
          </div>
        ))}
      </div>

      {canAddComment ? (
        <form onSubmit={handleSubmitComment} className="mt-4">
          <div className="flex gap-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 min-h-[100px] p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={t('ticket.comments.placeholder')}
            />
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed h-fit"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          {!isStaff && (
            <p className="text-sm text-gray-500 mt-2">
              {t('ticket.comments.customerNote')}
            </p>
          )}
        </form>
      ) : (
        <p className="text-sm text-gray-500 italic">
          {t('ticket.comments.waitingForStaff')}
        </p>
      )}
    </div>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ChevronDown, Edit2, Trash2, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Ticket, Status, Priority } from '../types';

interface TicketTableProps {
  tickets: Ticket[];
  onStatusChange: (ticketId: string, status: Status) => void;
  onPriorityChange: (ticketId: string, priority: Priority) => void;
  onEdit: (ticket: Ticket) => void;
  onDelete: (ticketId: string) => void;
}

export default function TicketTable({
  tickets,
  onStatusChange,
  onPriorityChange,
  onEdit,
  onDelete,
}: TicketTableProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const statusOptions: Status[] = ['pending', 'in_progress', 'resolved'];
  const priorityOptions: Priority[] = ['low', 'medium', 'high'];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['id', 'title', 'customer', 'status', 'priority', 'device', 'created', 'actions'].map(
              (header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t(`admin.table.${header}`)}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={(e) => {
                // Don't navigate if clicking on status, priority, or action buttons
                if (
                  (e.target as HTMLElement).closest('.status-select, .priority-select, .action-buttons')
                ) {
                  return;
                }
                navigate(`/admin/ticket/${ticket.id}`);
              }}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div className="flex items-center">
                  {ticket.title}
                  {ticket.comments.length > 0 && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {ticket.comments.length}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {ticket.customerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={ticket.status}
                  onChange={(e) => onStatusChange(ticket.id, e.target.value as Status)}
                  className="status-select block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {t(`admin.filters.status.${status}`)}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={ticket.priority}
                  onChange={(e) => onPriorityChange(ticket.id, e.target.value as Priority)}
                  className="priority-select block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  {priorityOptions.map((priority) => (
                    <option key={priority} value={priority}>
                      {t(`admin.filters.priority.${priority}`)}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {t(`submitTicket.device.${ticket.device}`)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(ticket.createdAt), 'PPp')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium action-buttons">
                <button
                  onClick={() => onEdit(ticket)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(ticket.id);
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
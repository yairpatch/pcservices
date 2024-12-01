import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import Filters from '../components/ui/Filters';
import TicketTable from '../components/TicketTable';
import { useAppStore } from '../lib/store';
import type { Ticket, Status, Priority } from '../types';

export default function Admin() {
  const { t } = useTranslation();
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');
  const { tickets, updateTicket, deleteTicket, isAuthenticated } = useAppStore();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
      return matchesStatus && matchesPriority;
    });
  }, [tickets, statusFilter, priorityFilter]);

  const handleStatusChange = (ticketId: string, newStatus: Status) => {
    updateTicket(ticketId, { status: newStatus });
  };

  const handlePriorityChange = (ticketId: string, newPriority: Priority) => {
    updateTicket(ticketId, { priority: newPriority });
  };

  const handleEdit = (ticket: Ticket) => {
    // For now, we'll just update the status and priority via dropdowns in the table
    console.log('Edit ticket:', ticket);
  };

  const handleDelete = (ticketId: string) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      deleteTicket(ticketId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t('admin.title')}</h1>
          <p className="text-gray-600">
            {t('admin.totalTickets', { count: filteredTickets.length })}
          </p>
        </div>

        <Filters
          status={statusFilter}
          priority={priorityFilter}
          onStatusChange={setStatusFilter}
          onPriorityChange={setPriorityFilter}
        />

        <TicketTable
          tickets={filteredTickets}
          onStatusChange={handleStatusChange}
          onPriorityChange={handlePriorityChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
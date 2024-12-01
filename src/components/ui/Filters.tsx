import React from 'react';
import Select from './Select';
import { Status, Priority } from '../../types';
import { useTranslation } from 'react-i18next';

interface FiltersProps {
  status: Status | 'all';
  priority: Priority | 'all';
  onStatusChange: (status: Status | 'all') => void;
  onPriorityChange: (priority: Priority | 'all') => void;
}

export default function Filters({
  status,
  priority,
  onStatusChange,
  onPriorityChange,
}: FiltersProps) {
  const { t } = useTranslation();

  const statusOptions = [
    { value: 'all', label: t('admin.filters.status.all') },
    { value: 'pending', label: t('admin.filters.status.pending') },
    { value: 'in_progress', label: t('admin.filters.status.in_progress') },
    { value: 'resolved', label: t('admin.filters.status.resolved') },
  ];

  const priorityOptions = [
    { value: 'all', label: t('admin.filters.priority.all') },
    { value: 'low', label: t('admin.filters.priority.low') },
    { value: 'medium', label: t('admin.filters.priority.medium') },
    { value: 'high', label: t('admin.filters.priority.high') },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Select
        label={t('admin.filters.status.label')}
        options={statusOptions}
        value={status}
        onChange={(e) => onStatusChange(e.target.value as Status | 'all')}
      />
      <Select
        label={t('admin.filters.priority.label')}
        options={priorityOptions}
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value as Priority | 'all')}
      />
    </div>
  );
}
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Status, Priority } from '../../types';

interface BadgeProps {
  variant: Status | Priority;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  // Status variants
  pending: 'bg-yellow-100 text-yellow-800',
  in_progress: 'bg-blue-100 text-blue-800',
  resolved: 'bg-green-100 text-green-800',
  // Priority variants
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-orange-100 text-orange-800',
  high: 'bg-red-100 text-red-800',
};

export default function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={twMerge('w-full text-sm text-left text-gray-500', className)}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      {children}
    </thead>
  );
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children, className }: TableProps) {
  return (
    <tr className={twMerge('bg-white border-b hover:bg-gray-50', className)}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className }: TableProps) {
  return (
    <th
      scope="col"
      className={twMerge('px-6 py-3 font-medium whitespace-nowrap', className)}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className }: TableProps) {
  return (
    <td className={twMerge('px-6 py-4', className)}>
      {children}
    </td>
  );
}
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useLanguageDirection } from '../hooks/useLanguageDirection';

export default function Layout() {
  // Add language direction hook
  useLanguageDirection();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
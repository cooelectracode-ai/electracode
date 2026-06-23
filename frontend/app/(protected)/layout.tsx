import React from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/sidebar.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  );
}

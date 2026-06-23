"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(auth === 'true');
    }
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
        <div className="logo"><img src="../assets/images/logo.png" alt="ElectraCode Logo" /></div>

    <ul className="nav-links">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/explore">Explore</a>
        </li>
        <li>
            <a href="/colleges">For Colleges</a>
        </li>
        <li>
            <a href="/industries">For Industries</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact Us</a>
        </li>

        {isAuthenticated && (
          <li id="dashboardNav">
              <a href="/dashboard">Dashboard</a>
          </li>
        )}

        <li>
            {isAuthenticated ? (
              <a href="#" id="authLink" onClick={handleLogout}>Logout</a>
            ) : (
              <a href="/login" id="authLink">Login</a>
            )}
        </li>
    </ul>
</nav>
  );
}

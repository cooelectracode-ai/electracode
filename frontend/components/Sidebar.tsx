"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={` ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className="sidebar">

        <div className="sidebar-header">

          <div className="sidebar-brand">
            <img
              src="/assets/images/logo.png"
              className="sidebar-logo-img"
              alt="ElectraCode"
            />
          </div>

          <button
            className="sidebar-toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>

        <nav>
          <Link href="/dashboard" className="sidebar-link">
            <i className="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </Link>

          <Link href="/learn" className="sidebar-link">
            <i className="fa-solid fa-book"></i>
            <span>Learn</span>
          </Link>

          <Link href="/practice" className="sidebar-link">
            <i className="fa-solid fa-code"></i>
            <span>Practice</span>
          </Link>

          <Link href="/rankings" className="sidebar-link">
            <i className="fa-solid fa-trophy"></i>
            <span>Rankings</span>
          </Link>

          <Link href="/hiring" className="sidebar-link">
            <i className="fa-solid fa-briefcase"></i>
            <span>Hiring</span>
          </Link>

          <Link href="/code" className="sidebar-link">
            <i className="fa-solid fa-laptop-code"></i>
            <span>Code</span>
          </Link>

          <Link href="/talent-passport" className="sidebar-link">
            <i className="fa-solid fa-id-card"></i>
            <span>Talent Passport</span>
          </Link>

          <Link href="/resume-builder" className="sidebar-link">
            <i className="fa-solid fa-file-lines"></i>
            <span>Resume Builder</span>
          </Link>

          <Link href="/profile" className="sidebar-link">
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </Link>
        </nav>

      </aside>

      {collapsed && (
        <button
          className="sidebar-restore-btn"
          onClick={() => setCollapsed(false)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
    </div>
  );
}
import React from 'react';
import '@/styles/resume-builder.css';

export default function ResumeBuilder() {
  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-card">
        <div className="coming-soon-icon">
          <i className="fa-solid fa-rocket"></i>
        </div>
        <h1>Resume Builder</h1>
        <div>
          <span className="status-badge">Coming Soon</span>
        </div>
        <p>
          We&apos;re building a powerful resume builder designed specifically for electronics engineering students.
          <br /><br />
          Soon you&apos;ll be able to create recruiter-ready resumes, showcase your{' '}
          <strong>Talent Passport</strong>, and generate industry-focused resumes in minutes.
        </p>
        <button className="coming-soon-btn" disabled>Coming Soon</button>
      </div>
    </div>
  );
}

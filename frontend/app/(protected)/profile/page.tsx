"use client";
import React, { useEffect } from 'react';
import '@/styles/profile.css';



export default function Profile() {
  return (
    <>
<section className="profile-section">

    <div className="profile-card">

        <h1>Complete Your Profile</h1>

        <p>
            Tell us about yourself before continuing.
        </p>

        <form id="profileForm">

            <label>Personal Email</label>
            <input
                type="email"
                id="personalEmail"
                placeholder="Enter personal email"
                required
             />

            <label>College Email</label>
            <input
                type="email"
                id="collegeEmail"
                placeholder="Enter college email"
                required
             />

            <label>Phone Number</label>
            <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter phone number"
                required
             />

            <label>Semester</label>

            <select id="semester" required>

                <option value="">Select Semester</option>

                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>

            </select>

            <label>Department</label>

            <select id="department" required>

                <option value="">Select Department</option>

                <option>Computer Science</option>
                <option>Information Science</option>
                <option>Electronics & Communication</option>
                <option>Electrical & Electronics</option>
                <option>Mechanical</option>
                <option>Civil</option>
                <option>Artificial Intelligence</option>

            </select>

            <label>Upload Resume</label>

            <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
             />

            <button type="submit">
                Save Profile
            </button>

        </form>

    </div>

</section>

    </>
  );
}

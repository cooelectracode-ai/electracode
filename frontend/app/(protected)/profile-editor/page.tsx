"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/profile-editor.css';
import '@/styles/sidebar.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';



export default function ProfileEditor() {
  return (
    <>
      

<Navbar />

<div className="dashboard-container">
    {/*  Sidebar  */}
    <Sidebar />

    <main className="main-content">
<section className="profile-section">

    <div className="profile-card">

        <h1>Profile Settings</h1>

        <p>
            View and update your account information.
        </p>

        {/*  Personal Information  */}

        <div className="settings-section">

            <div className="section-header">

                <h2>Personal Information</h2>

                <button
                    className="edit-icon"
                    onclick="openModal()"
                >
                    ✏️
                </button>

            </div>

            <div className="info-row">
                <span>Full Name</span>
                <span id="fullName"></span>
            </div>

            <div className="info-row">
                <span>Personal Email</span>
                <span id="personalEmail"></span>
            </div>

            <div className="info-row">
                <span>College Email</span>
                <span id="collegeEmail">-</span>
            </div>

            <div className="info-row">
                <span>Phone Number</span>
                <span id="phoneNumber"></span>
            </div>

            <div className="info-row">
                <span>Semester</span>
                <span id="semester">-</span>
            </div>

            <div className="info-row">
                <span>Department</span>
                <span id="department">-</span>
            </div>

        </div>

        {/*  Resume  */}

        <div className="settings-section">

            <div className="section-header">

                <h2>Resume</h2>

                <button
                    className="edit-icon"
                    onclick="document.getElementById('resumeUpload').click()"
                >
                    ✏️
                </button>

                <input
                    type="file"
                    id="resumeUpload"
                    accept=".pdf,.doc,.docx"
                    style={{display: 'none'}}
                    onchange="updateResume(this)"
                 />

            </div>

            <div className="info-row">
                <span>Current Resume</span>
                <span id="resumeName">No Resume Uploaded</span>
            </div>

        </div>

        {/*  Account  */}

        <div className="settings-section">

            <div className="section-header">

                <h2>Account</h2>

            </div>

            <div className="info-row">
                <span>Member Since</span>
                <span>June 2026</span>
            </div>

            <button
                type="button"
                className="logout-btn"
                onclick="logoutUser()"
            >
                Logout
            </button>

        </div>

    </div>

</section>

    </main>
</div>

<div id="editModal" className="modal">

    <div className="modal-content">

        <h2>Edit Personal Information</h2>

        <label>Full Name</label>
        <input type="text" id="editName" />

        <label>Personal Email</label>
        <input type="email" id="editEmail" />

        <label>Phone Number</label>
        <input type="text" id="editPhone" />

        <label>College Email</label>
        <input type="email" id="editCollegeEmail" />

        <label>Semester</label>
        <input type="number" id="editSemester" />

        <label>Department</label>
        <input type="text" id="editDepartment" />

        <div className="modal-buttons">

            <button
                type="button"
                className="cancel-btn"
                onclick="closeModal()"
            >
                Cancel
            </button>

            <button
                type="button"
                className="save-btn"
                onclick="saveChanges()"
            >
                Save
            </button>

        </div>

    </div>

</div>
<script type="module" src="../js/profile-editor.js"></script>
<script type="module" src="../js/navbar-auth.js"></script>
<script type="module" src="../js/auth-guard.js"></script>
<script type="module" src="../js/sidebar.js"></script>



    </>
  );
}

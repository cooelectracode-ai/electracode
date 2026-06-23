"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/auth.css';
import Navbar from '@/components/Navbar';



export default function Signup() {
  return (
    <>
      

<Navbar />

<section className="auth-section">

    <div className="auth-card">

        <h1>Create Account</h1>

        <p className="subtitle">
            Start your ElectraCode journey today
        </p>

        <form id="signupForm">

            <label>Full Name</label>
            <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
             />

            <label>Email Address</label>
            <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                required
             />

            <label>Password</label>
            <input
                type="password"
                id="password"
                placeholder="Create a password"
                required
             />

            <label>Confirm Password</label>
            <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
             />

            <button type="submit" className="login-btn">
                Create Account
            </button>

        </form>

        <div className="divider">
            <span>OR</span>
        </div>

        <button id="googleSignup" className="google-btn">
            Continue with Google
        </button>

        <p className="signup-text">
            Already have an account?
            <a href="/login">Login</a>
        </p>

    </div>

</section>

<script type="module" src="../js/auth.js"></script>
<script type="module" src="../js/navbar-auth.js"></script>

    </>
  );
}

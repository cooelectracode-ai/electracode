"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/auth.css';
import Navbar from '@/components/Navbar';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'ceoelectracode@gmail.com' && password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      alert('Invalid email or password. Only the CEO can sign in!');
    }
  };

  return (
    <>
      <Navbar />
      <section className="auth-section">
        <div className="auth-card">
            <h1>Welcome to ElectraCode</h1>
            <p className="subtitle">
                Sign in to continue your learning journey
            </p>

            <form id="loginForm" onSubmit={handleLogin}>
                <label>Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                 />

                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                 />

                <button type="submit" className="login-btn">
                    Sign In
                </button>
            </form>

            <div className="divider">
                <span>OR</span>
            </div>

            <button id="googleLogin" className="google-btn" type="button" onClick={() => alert('Only direct sign-in is allowed.')}>
                Continue with Google
            </button>

            <p className="signup-text">
                Don't have an account?
                <a href="/signup">Sign Up</a>
            </p>
        </div>
      </section>
    </>
  );
}

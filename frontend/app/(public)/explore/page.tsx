"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/explore.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function Explore() {
  return (
    <>
      

    <Navbar />

    <section className="explore-hero">
        <div className="container">
            <span className="hero-eyebrow"><span className="dot"></span> Explore ElectraCode</span>
            <h1>Explore <span className="gradient-text">ElectraCode</span></h1>
            <p>Your complete platform for mastering electronics engineering — from learning and practice to rankings and hiring.</p>
        </div>
    </section>

    <section className="explore-cards">
        <div className="container">
            <h2 className="section-title">What You'll Find</h2>
            <p className="section-subtitle">Explore each section of the platform and take your skills to the next level</p>
            <div className="explore-grid">

                <div className="explore-card">
                    <div className="card-screenshot">
                        <img src="../assets/images/learn.png" alt="Learn page screenshot" />
                    </div>
                    <div className="card-body">
                        <h3><span className="card-icon">📚</span> Learn</h3>
                        <p>Master electronics engineering with structured courses and hands-on training. Covers VLSI, Embedded Systems, HDL Programming, and Digital Design with tools training, study notes, and interview prep.</p>
                    </div>
                </div>

                <div className="explore-card">
                    <div className="card-screenshot">
                        <img src="../assets/images/practice.png" alt="Practice page screenshot" />
                    </div>
                    <div className="card-body">
                        <h3><span className="card-icon">⚙️</span> Practice</h3>
                        <p>Sharpen your skills with 150+ hands-on problems across 7 categories. From Digital Logic Gates to SoC Integration, practice in a 24/7 arena with real-time feedback and difficulty tiers.</p>
                    </div>
                </div>

                <div className="explore-card">
                    <div className="card-screenshot">
                        <img src="../assets/images/rankings.png" alt="Rankings page screenshot" />
                    </div>
                    <div className="card-body">
                        <h3><span className="card-icon">🏆</span> Rankings</h3>
                        <p>Track your progress alongside top electronics engineering talent worldwide. Build your Talent Passport, showcase your credentials, and get noticed by top companies like Samsung, TI, and Qualcomm.</p>
                    </div>
                </div>

                <div className="explore-card">
                    <div className="card-screenshot">
                        <img src="../assets/images/hiring.png" alt="Hiring page screenshot" />
                    </div>
                    <div className="card-body">
                        <h3><span className="card-icon">💼</span> Hiring</h3>
                        <p>Connect top electronics talent with leading companies. Browse skilled engineers ranked by performance in VLSI, Embedded, Digital Design, and FPGA — and hire the best candidates.</p>
                    </div>
                </div>

                <div className="explore-card">
                    <div className="card-screenshot">
                        <img src="../assets/images/code.png" alt="Code page screenshot" />
                    </div>
                    <div className="card-body">
                        <h3><span className="card-icon">💻</span> Code</h3>
                        <p>Write and test HDL code directly in your browser. Solve Verilog, VHDL, and SystemVerilog challenges with a built-in code editor, timer, and instant evaluation of your solutions.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <Footer />

    <script type="module" src="../js/navbar-auth.js"></script>

    </>
  );
}

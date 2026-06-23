"use client";
import React from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/pages.css';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="home" className="page active">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="container hero-grid">

            {/* Left: copy */}
            <div className="hero-content">
              <span className="eyebrow">
                <span className="dot"></span> Talent OS for Electronics Engineers
              </span>

              <h1 id="hero-headline">
                Build Skills. <br />
                Validate Potential.
                <br />
                <span className="gradient-text">Get Discovered.</span>
              </h1>

              <p id="hero-subtext">
                Building the talent infrastructure for electronics engineers.
              </p>

              <div className="pipeline">
                <span className="pipeline-step">Assess</span>
                <span className="pipeline-arrow">→</span>
                <span className="pipeline-step">Benchmark</span>
                <span className="pipeline-arrow">→</span>
                <span className="pipeline-step">Grow</span>
                <span className="pipeline-arrow">→</span>
                <span className="pipeline-step pipeline-final">Get Placed</span>
              </div>

              <div className="cta-buttons"></div>
            </div>

            {/* Right: floating cards */}
            <div className="hero-visual">

              {/* Talent Passport card */}
              <div className="float-card talent-passport">
                <span className="float-badge">Talent Passport™</span>
                <h4>Priya Sharma · VLSI Design</h4>
                <div className="skill-row">
                  <span>FPGA</span>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-row">
                  <span>Embedded C</span>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-row">
                  <span>Schematic</span>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              {/* Employability Score card */}
              <div className="float-card employability-score">
                <div className="float-icon">⚡</div>
                <h4>Employability Score</h4>
                <p>92 hardware competencies</p>
              </div>

              {/* Recruiter Matches card */}
              <div className="float-card recruiter-matches">
                <div className="float-icon">🎯</div>
                <h4>3 Recruiter Matches</h4>
                <p>Samsung Semi · Texas Instruments · Qualcomm</p>
                <a href="#" className="recruit-link">Instant Direct Recruit</a>
              </div>

            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="features">
          <div className="container">
            <h2 className="section-title">Why ElectraCode?</h2>
            <div className="feature-grid">

              <div className="card">
                <div className="card-icon">📚</div>
                <h3>Learn</h3>
                <p>Fast revision modules, tool training, and comprehensive courses in VLSI, Embedded Systems, and HDL</p>
              </div>

              <div className="card">
                <div className="card-icon">⚙️</div>
                <h3>Practice</h3>
                <p>MCQs, coding challenges, and real-world problems to sharpen your electronics engineering skills</p>
              </div>

              <div className="card">
                <div className="card-icon">🏆</div>
                <h3>Get Ranked</h3>
                <p>Showcase your skills, build your Talent Passport, and get noticed by top electronics companies</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── LEADERBOARD PREVIEW ── */}
        <section className="leaderboard-preview">
          <div className="container">
            <h2 className="section-title">Top Performers</h2>
            <div className="leaderboard-table">

              <div className="table-header table-row">
                <div>Rank</div>
                <div>Username</div>
                <div>Speed</div>
                <div>Accuracy</div>
              </div>

              <div className="table-row">
                <div className="rank">🥇 1</div>
                <div><strong>VLSIMaster</strong><span className="badge badge-gold">Gold</span></div>
                <div>98.5%</div>
                <div>99.2%</div>
              </div>

              <div className="table-row">
                <div className="rank">🥈 2</div>
                <div><strong>EmbedPro</strong><span className="badge badge-silver">Silver</span></div>
                <div>96.8%</div>
                <div>98.5%</div>
              </div>

              <div className="table-row">
                <div className="rank">🥉 3</div>
                <div><strong>HDLNinja</strong><span className="badge badge-bronze">Bronze</span></div>
                <div>95.3%</div>
                <div>97.8%</div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <h3>ElectraCode</h3>
              <p>Empowering electronics engineering students with industry-focused learning and real-world skills.</p>
            </div>
            <div className="footer-section">
              <h3>Learn</h3>
              <ul>
                <li>VLSI Design</li>
                <li>Embedded Systems</li>
                <li>HDL Programming</li>
                <li>Digital Design</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li>Careers</li>
                <li><a href="/contact">Contact Us</a></li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/electracode-private-limited/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/electra_code?igsh=ZWh0NzQ0M3pmbXQy" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ElectraCode. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}

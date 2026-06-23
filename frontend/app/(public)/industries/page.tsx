"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/industries.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function Industries() {
  return (
    <>
      

    <Navbar />

    <section className="industry-hero">
        <div className="industry-hero-content">
            <h1>Accelerating Workforce Readiness for the <span>Electronics & Semiconductor Industry</span></h1>
            <p>Helping industries discover, evaluate, develop, and engage future electronics talent through a unified talent intelligence ecosystem.</p>
        </div>
    </section>

    <section className="benefits-section">
        <div className="benefits-grid">

            {/*  Row 1  */}
            <div className="benefit-card">
                <h3>🎯 Talent Intelligence & Discovery</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Identify High-Potential Talent Efficiently</p>
                <ul>
                    <li>Access pre-assessed candidates</li>
                    <li>Domain-wise skill benchmarking</li>
                    <li>Talent Passport profiles</li>
                    <li>Competency-based evaluation</li>
                    <li>Shortlisting based on validated capabilities</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>🧠 AI Talent Intelligence</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Beyond Traditional Resumes</p>
                <ul>
                    <li>Multidimensional talent profiles</li>
                    <li>Skill graph generation</li>
                    <li>Domain suitability analysis</li>
                    <li>Behavioral and learning indicators</li>
                    <li>Career intelligence insights</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>📊 Assessment & Evaluation Platform</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Reduce Screening Time and Costs</p>
                <ul>
                    <li>Technical assessments</li>
                    <li>Domain-specific evaluations</li>
                    <li>Automated scoring</li>
                    <li>Candidate benchmarking</li>
                    <li>Interview readiness indicators</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>💼 Talent Pipeline & Hiring Support</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Access Skilled Talent Faster</p>
                <ul>
                    <li>Internship programs</li>
                    <li>Campus hiring support</li>
                    <li>Early talent identification</li>
                    <li>Role-based candidate pools</li>
                    <li>Reduced onboarding effort</li>
                </ul>
            </div>

            {/*  Row 2  */}
            <div className="benefit-card">
                <h3>🏭 Workforce Development Programs</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Build Industry-Ready Talent Pipelines</p>
                <ul>
                    <li>Industry tool training programs</li>
                    <li>Hands-on workshops</li>
                    <li>Project-based learning initiatives</li>
                    <li>Role-specific preparation</li>
                    <li>Practical engineering exposure</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>🚀 Innovation & Co-Creation</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Engage with Emerging Talent</p>
                <ul>
                    <li>Industry-sponsored challenges</li>
                    <li>Hackathons and competitions</li>
                    <li>Real-world problem statements</li>
                    <li>Product development initiatives</li>
                    <li>Innovation programs</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>🌐 Academia-Industry Collaboration</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Strengthening the Talent Ecosystem</p>
                <ul>
                    <li>College partnerships</li>
                    <li>Faculty interaction programs</li>
                    <li>Guest lectures and expert sessions</li>
                    <li>Collaborative initiatives</li>
                    <li>Industry engagement activities</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>📈 Workforce Analytics & Insights</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Data-Driven Talent Decisions</p>
                <ul>
                    <li>Skill gap analysis</li>
                    <li>Talent availability insights</li>
                    <li>Domain-wise performance metrics</li>
                    <li>Candidate benchmarking</li>
                    <li>Workforce readiness indicators</li>
                </ul>
            </div>

            {/*  Row 3 (Centered)  */}
            <div className="benefit-card">
                <h3>🔬 Research & Emerging Technologies</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Collaborate on Future Technologies</p>
                <ul>
                    <li>Semiconductor ecosystem initiatives</li>
                    <li>Embedded systems innovation</li>
                    <li>AI-enabled talent intelligence</li>
                    <li>Applied engineering projects</li>
                    <li>Emerging technology programs</li>
                </ul>
            </div>

            <div className="benefit-card">
                <h3>🏆 Employer Branding & Ecosystem Visibility</h3>
                <p style={{color: 'var(--text-white)', marginBottom: '12px', fontWeight: '600', fontSize: '0.95rem'}}>Build Presence Within the Talent Ecosystem</p>
                <ul>
                    <li>Brand visibility among students</li>
                    <li>Thought leadership opportunities</li>
                    <li>Technical communities</li>
                    <li>Innovation ecosystem participation</li>
                    <li>Access to future talent</li>
                </ul>
            </div>

        </div>
    </section>

    <section className="partner-section">
        <h2>Partner With ElectraCode</h2>
        <p>Collaborate with us to discover talent, strengthen workforce readiness, and build the future electronics ecosystem.</p>
        <a href="/contact" className="partner-btn">Contact Us</a>
    </section>

    {/*  Footer  */}
    <Footer />

    {/*  Auth Script for Navbar  */}
    <script type="module" src="../js/navbar-auth.js"></script>
    

    </>
  );
}

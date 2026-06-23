"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/colleges.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
    Target,
    Factory,
    BookOpen,
    Briefcase,
    Brain,
    ChartColumn,
    Rocket,
    Globe,
    Trophy,
    Sparkles,
} from "lucide-react";

export default function Colleges() {
    return (
        <>


            <Navbar />

            <section className="college-hero">

                <div className="college-hero-content">
                    <h1>
                        Empowering Electronics
                        <span>Departments</span>
                    </h1>

                    <p>
                        Partner with ElectraCode to enhance your curriculum
                        and boost placements
                    </p>
                </div>

            </section>

            <section className="benefits-section">

                <h2>Building Industry-Ready Electronics Talent Together</h2>

                <div className="benefits-grid">

                    <div className="benefit-card">
                        <h3>
                            <Target size={22} />
                            Skill Intelligence Platform
                        </h3>
                        <p>Transforming Assessment into Actionable Insights</p>
                        <ul>
                            <li>Technical assessments and evaluations</li>
                            <li>Domain-wise benchmarking</li>
                            <li>Student skill standings and talent directories</li>
                            <li>Skill profiling and competency mapping</li>
                            <li>Performance tracking and progress analytics</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Factory size={22} />
                            Industry Tool Ecosystem
                        </h3>
                        <p>Exposure to Industry-Standard Technologies</p>
                        <ul>
                            <li>Synopsys, Cadence, MATLAB, Xilinx, STM32 and more</li>
                            <li>Hands-on lab exercises</li>
                            <li>Expert-led workshops</li>
                            <li>Practical design workflows</li>
                            <li>Industry best practices</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <BookOpen size={22} />
                            Role-Specific Preparation Resources
                        </h3>
                        <p>Accelerating Career Readiness</p>
                        <ul>
                            <li>Embedded Systems revision packs</li>
                            <li>VLSI and Digital Electronics quick notes</li>
                            <li>Company-specific preparation resources</li>
                            <li>Interview preparation material</li>
                            <li>Role-based learning pathways</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Briefcase size={22} />
                            Employability & Talent Development
                        </h3>
                        <p>Preparing Students for Industry</p>
                        <ul>
                            <li>Industry readiness assessments</li>
                            <li>Career pathway guidance</li>
                            <li>Internship opportunities</li>
                            <li>Talent visibility to recruiters</li>
                            <li>Placement readiness support</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Brain size={22} />
                            AI Talent Intelligence
                        </h3>
                        <p>Multidimensional Talent Profiling</p>
                        <ul>
                            <li>Skill graph generation</li>
                            <li>Career intelligence engine</li>
                            <li>Domain suitability mapping</li>
                            <li>Behavioral indicators</li>
                            <li>Growth and learning analytics</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <ChartColumn size={22} />
                            Academic Analytics Dashboard
                        </h3>
                        <p>Data-Driven Institutional Insights</p>
                        <ul>
                            <li>Student performance metrics</li>
                            <li>Batch-wise benchmarking</li>
                            <li>Skill gap analysis</li>
                            <li>Placement readiness analytics</li>
                            <li>Department-wide reports</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Rocket size={22} />
                            Innovation & Technical Engagement
                        </h3>
                        <p>Building a Culture of Innovation</p>
                        <ul>
                            <li>Hackathons and design challenges</li>
                            <li>Industry-sponsored problem statements</li>
                            <li>Inter-college skill challenges</li>
                            <li>Technical events and workshops</li>
                            <li>Student innovation ecosystem</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Globe size={22} />
                            Industry Connect & Talent Access
                        </h3>
                        <p>Strengthening Academia-Industry Collaboration</p>
                        <ul>
                            <li>Industry collaborations</li>
                            <li>Internship and project opportunities</li>
                            <li>Campus hiring support</li>
                            <li>Recruiter access to talent</li>
                            <li>Expert talks and mentorship</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Trophy size={22} />
                            Institution Branding
                        </h3>
                        <p>Enhancing Institutional Reputation</p>
                        <ul>
                            <li>Student success stories</li>
                            <li>National-level visibility</li>
                            <li>Inter-college rankings</li>
                            <li>Industry partnership recognition</li>
                            <li>Participation in a growing ecosystem</li>
                        </ul>
                    </div>

                    <div className="benefit-card">
                        <h3>
                            <Sparkles size={22} />
                            Research & Product Development
                        </h3>
                        <p>Enabling Practical Engineering Experience</p>
                        <ul>
                            <li>Mini and major project support</li>
                            <li>Industry problem statements</li>
                            <li>Product design challenges</li>
                            <li>Collaborative innovation initiatives</li>
                            <li>Prototype development ecosystem</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section className="partner-section">

                <h2>Join 50+ Partner Institutions</h2>

                <p>
                    Transform your electronics engineering program with ElectraCode
                </p>

                <button className="partner-btn">
                    Partner With Us
                </button>

            </section>

            <Footer />
            <script src="https://unpkg.com/lucide@latest"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
        lucide.createIcons();
    `}} />
            <script type="module" src="../js/navbar-auth.js"></script>


        </>
    );
}

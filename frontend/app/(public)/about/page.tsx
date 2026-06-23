"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/about.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Target, Globe, Cpu } from "lucide-react";


export default function About() {
    return (
        <>

            <Navbar />
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About ElectraCode</h1>
                    <p>Building the future of electronics engineering education</p>
                </div>
            </section>
            <section className="mission-section">
                <h2 className="section-title">Our Mission</h2>

                <div className="mission-grid">

                    <div className="mission-card">
                        <h3>
                            <Target size={24} color="#f59e0b" />
                            <span>Mission</span>
                        </h3>

                        <p>
                            To bridge the gap between engineering education and industry expectations
                            by providing students with practical learning experiences, skill
                            intelligence, industry exposure, and career-focused opportunities that
                            prepare them for real-world technical roles.
                        </p>
                    </div>

                    <div className="mission-card">
                        <h3>
                            <Globe size={24} color="#0A66C2" />
                            <span>Vision</span>
                        </h3>

                        <p>
                            To become the world's most trusted electronics engineering ecosystem,
                            empowering students, institutions, and industry partners through a
                            unified platform for learning, innovation, talent discovery, and
                            workforce development.
                        </p>
                    </div>

                    <div className="mission-card">
                        <h3>
                            <Cpu size={24} color="#00E5FF" />
                            <span>Values</span>
                        </h3>

                        <p>
                            We are driven by excellence, innovation, accessibility, collaboration,
                            and continuous learning. We believe every aspiring engineer deserves
                            access to industry-relevant knowledge, hands-on experiences, and
                            opportunities that enable long-term professional growth.
                        </p>
                    </div>

                </div>
            </section>

            <section className="partners-section">
                <h3>Recognized & Supported By</h3>

                <div className="partners-grid">

                    <div className="partner-logo">
                        <img src="../assets/images/bmsce_ciie.png" alt="BMSCE CIIE" />
                    </div>

                    <div className="partner-logo">
                        <img src="../assets/images/startup-india-logo.png" alt="MSME" />
                    </div>

                    <div className="partner-logo">
                        <img src="../assets/images/MSME_logo.svg" alt="Startup India" />
                    </div>

                </div>
            </section>

            <section className="story-section">
                <div className="story-header">
                    <span className="story-tag">OUR JOURNEY</span>
                    <h2>Why We Built ElectraCode</h2>
                    <p>
                        Bridging the gap between education and industry,
                        one engineer at a time.
                    </p>
                </div>
                <div className="story-grid">
                    <div className="story-card">
                        <div className="story-icon">🎓</div>
                        <h3>The Student Challenge</h3>
                        <p>
                            Thousands of talented students graduate every year,
                            yet many struggle to secure opportunities in their
                            preferred domains due to limited practical exposure
                            and industry awareness.
                        </p>
                    </div>
                    <div className="story-card">
                        <div className="story-icon">🏢</div>
                        <h3>The Industry Challenge</h3>
                        <p>
                            Companies spend significant resources evaluating,
                            recruiting, and training candidates before they
                            become productive contributors.
                        </p>
                    </div>
                    <div className="story-card">
                        <div className="story-icon">📚</div>
                        <h3>The Academic Gap</h3>
                        <p>
                            Educational institutions provide strong theoretical
                            foundations, but students often lack exposure to
                            industry-standard tools and workflows.
                        </p>
                    </div>
                    <div className="story-card">
                        <div className="story-icon">⚡</div>
                        <h3>The Opportunity</h3>
                        <p>
                            We saw an opportunity to connect students,
                            colleges, and organizations through a single
                            ecosystem focused on skills and career readiness.
                        </p>
                    </div>
                </div>
                <div className="story-quote">
                    <span>THE REALIZATION</span>
                    <h3>
                        The problem wasn't a lack of talent.
                        <br />
                        It was a lack of alignment.
                    </h3>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="year">2025</div>
                        <h4>The Observation</h4>
                        <p>
                            We identified a growing disconnect between
                            classroom learning and industry expectations.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="year">2025</div>
                        <h4>The Research</h4>
                        <p>
                            We engaged with students, professors,
                            recruiters, and industry leaders to
                            understand the root causes.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="year">2026</div>
                        <h4>The Solution</h4>
                        <p>
                            ElectroCade was created to help students
                            become industry-ready and help companies
                            discover skilled talent faster.
                        </p>
                    </div>
                </div>

                <div className="vision-banner">
                    <h2>
                        We are building the future of electronics
                        engineering education.
                    </h2>
                    <p>
                        Empowering students, supporting institutions,
                        and enabling companies to hire job-ready talent.
                    </p>
                </div>
            </section>
            <section className="team-section">
                <h2 className="section-title">Our Team</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Shrinatha" src="../assets/images/shrinatha.jpg" /></div>
                        <div className="team-pill"><span className="team-name">Shrinatha</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/shrinatha-moudgallya-9729a221a/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Founder & CEO</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Syamala" src="../assets/images/syamala.png"
                            style={{ objectPosition: 'center 10%' }} /></div>
                        <div className="team-pill"><span className="team-name">Syamala Rashmi</span><a className="linkedin-icon"
                            href="https://linkedin.com/in/meera-patel-placeholder" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a>

                        </div>
                        <div className="team-role">Co-Founder</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Siddharth" src="../assets/images/sidd_profile.jpeg"
                            style={{ objectPosition: 'center 20%' }} /></div>
                        <div className="team-pill"><span className="team-name">Siddharth Shukla</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/siddharthshuklacs24?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android"
                            target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18"
                                height="18" fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Backend Developer Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="vishnu" src="../assets/images/vishnu.jpeg" /></div>
                        <div className="team-pill"><span className="team-name">Vishnu</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/vishnu-badasheshi-732202323/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Backend Developer Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Rohit" src="../assets/images/IMG-20260614-WA0007.jpg" /></div>
                        <div className="team-pill"><span className="team-name">Diya</span><a className="linkedin-icon"
                            href="https://linkedin.com/in/diya-placeholder" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Fullstack Developer Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Ananya" src="../assets/images/20260319_163006.jpg" /></div>
                        <div className="team-pill"><span className="team-name">Harini</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/harini-r-j-a17b083a3/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Front-End Developer Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Vikram" src="../assets/images/IMG_20260614_134922.jpg" /></div>
                        <div className="team-pill"><span className="team-name">Priyanka</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/priyanka-rajput-5134a332b" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Front-End Developer Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Neha" src="../assets/images/shreyansh.jpeg" /></div>
                        <div className="team-pill"><span className="team-name">Shreyansh</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/shreyansh-samaje-813699327/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Fullstack Developer Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Sharvani" src="../assets/images/sharavani.jpg" /></div>
                        <div className="team-pill"><span className="team-name">Sharvani</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/sharvani-g-bhaskar-358802279?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android"
                            target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18"
                                height="18" fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Design and Content Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Vishrutha" src="../assets/images/vishrutha.jpg"
                            style={{ objectPosition: 'center 15%' }} /></div>
                        <div className="team-pill"><span className="team-name">Vishrutha</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/vishrutha-bangle/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Founders Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Sonal" src="../assets/images/sonal.jpg"
                            style={{ objectPosition: 'center 90%', transform: 'scale(1.8)', transformOrigin: 'center 90%' }} />
                        </div>
                        <div className="team-pill"><span className="team-name">Sonal</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/sonal-vasudev/" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Founders Intern</div>
                    </div>
                    <div className="team-card">
                        <div className="card-img-wrap"><img alt="Navya" src="../assets/images/navya.jpg" /></div>
                        <div className="team-pill"><span className="team-name">Navya</span><a className="linkedin-icon"
                            href="https://www.linkedin.com/in/navya-agrawal21" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"
                                fill="currentColor">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg></a></div>
                        <div className="team-role">Design and Content Intern</div>
                    </div>
                </div>
            </section>
            <Footer />



        </>
    );
}

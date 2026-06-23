"use client";
import React, { useEffect } from 'react';
import '@/styles/hiring.css';

import Image from "next/image";

export default function Hiring() {
    return (
        <>
            <section className="hiring-hero">
                <div className="hero-content">
                    <h1>Hire Top Electronics Talent</h1>
                    <p>Connect with skilled engineers ready for your team</p>
                </div>
            </section>

            <div className="filters">

                <button className="filter-btn active" data-filter="all">
                    All Talent
                </button>

                <button className="filter-btn" data-filter="vlsi">
                    VLSI Engineers
                </button>

                <button className="filter-btn" data-filter="embedded">
                    Embedded Developers
                </button>

                <button className="filter-btn" data-filter="digital">
                    Digital Design
                </button>

                <button className="filter-btn" data-filter="fpga">
                    FPGA Specialists
                </button>

            </div>

            <section className="talent-section">

                <div className="talent-grid" id="talentGrid">

                    {/*  VLSI  */}

                    <div className="talent-card" data-category="vlsi">

                        <div className="candidate-header">

                            <div className="candidate-avatar">
                                <Image
                                    src="/assets/images/hire1.avif"
                                    alt="Rajesh Kumar"
                                    width={64}
                                    height={64}
                                    className="candidate-img"
                                />
                            </div>

                            <div>
                                <h3>Rajesh Kumar</h3>
                                <p>Rank #12 • VLSI Engineer</p>
                            </div>

                        </div>

                        <div className="skills">
                            <span>Verilog</span>
                            <span>SystemVerilog</span>
                            <span>UVM</span>
                            <span>Synthesis</span>
                        </div>

                        <div className="stats">
                            Score: 2340 | Speed: 96% | Accuracy: 98%
                        </div>

                        <button className="profile-btn">
                            View Profile
                        </button>

                    </div>

                    {/*  EMBEDDED  */}

                    <div className="talent-card" data-category="embedded">

                        <div className="candidate-header">

                            <div className="candidate-avatar">
                                <Image
                                    src="/assets/images/hire2.avif"
                                    alt="Anjali Desai"
                                    width={64}
                                    height={64}
                                    className="candidate-img"
                                />
                            </div>

                            <div>
                                <h3>Vaibhav chattopadhyay</h3>
                                <p>Rank #8 • Embedded Engineer</p>
                            </div>

                        </div>

                        <div className="skills">
                            <span>Embedded C</span>
                            <span>RTOS</span>
                            <span>ARM</span>
                            <span>IoT</span>
                        </div>

                        <div className="stats">
                            Score: 2480 | Speed: 98% | Accuracy: 99%
                        </div>

                        <button className="profile-btn">
                            View Profile
                        </button>

                    </div>
                    {/*  DIGITAL  */}

                    <div className="talent-card" data-category="digital">

                        <div className="candidate-header">

                            <div className="candidate-avatar">
                                <Image
                                    src="/assets/images/hire3.avif"
                                    alt="Amit Verma"
                                    width={64}
                                    height={64}
                                    className="candidate-img"
                                />
                            </div>

                            <div>
                                <h3>Amit Verma</h3>
                                <p>Rank #15 • Digital Designer</p>
                            </div>

                        </div>

                        <div className="skills">
                            <span>Digital Logic</span>
                            <span>VHDL</span>
                            <span>FPGA</span>
                            <span>Timing</span>
                        </div>

                        <div className="stats">
                            Score: 2280 | Speed: 94% | Accuracy: 97%
                        </div>

                        <button className="profile-btn">
                            View Profile
                        </button>

                    </div>

                    {/*  FPGA  */}

                    <div className="talent-card" data-category="fpga">

                        <div className="candidate-header">

                            <div className="candidate-avatar">
                                <Image
                                    src="/assets/images/hire4.jpg"
                                    alt="Divya Krishnan"
                                    width={64}
                                    height={64}
                                    className="candidate-img"
                                />
                            </div>

                            <div>
                                <h3>Divya Krishnan</h3>
                                <p>Rank #5 • FPGA Expert</p>
                            </div>

                        </div>

                        <div className="skills">
                            <span>RTL Design</span>
                            <span>Verification</span>
                            <span>DFT</span>
                            <span>STA</span>
                        </div>

                        <div className="stats">
                            Score: 2550 | Speed: 99% | Accuracy: 99%
                        </div>

                        <button className="profile-btn">
                            View Profile
                        </button>

                    </div>

                </div>

            </section>

            <section className="recruit-section">

                <h2>Ready to Recruit?</h2>

                <p>
                    Access detailed profiles, skill assessments,
                    and interview scores
                </p>

                <button className="recruit-btn">
                    Start Recruiting Now
                </button>

            </section>

        </>
    );
}

"use client";
import React, { useEffect } from 'react';
import '@/styles/talent-passport.css';



export default function TalentPassport() {
  return (
    <>
            <div className="welcome" style={{marginBottom: '25px'}}>
                <h1 style={{fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    Talent Passport™
                    <span style={{fontSize: '12px', color: '#7A869A', textTransform: 'uppercase', letterSpacing: '2px'}}>Talent Intelligence, Real Impact <span style={{color: '#00E5FF'}}>•</span></span>
                </h1>
            </div>

            <div className="tp-grid">

                {/*  TOP ROW  */}
                <div className="tp-top-row">

                    {/*  Profile Card  */}
                    <div className="tp-card">
                        <div className="tp-profile">
                            <div className="tp-profile-main">
                                <div className="tp-avatar">
                                    <img src="/assets/images/priyasharma.jpg" alt="Profile Avatar" style={{width: '100%', height: '100%', borderRadius: '50%'}} />
                                </div>
                                <div className="tp-profile-info">
                                    <h1>Priya Sharma</h1>
                                    <div className="role">VLSI Design Engineer</div>
                                </div>
                            </div>
                            
                            <div className="tp-profile-details">
                                <div className="tp-detail">
                                    <i className="fa-solid fa-microchip"></i>
                                    <div className="tp-detail-text">
                                        <small>Domain</small>
                                        <span>VLSI Design Engineering</span>
                                    </div>
                                </div>
                                <div className="tp-detail">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <div className="tp-detail-text">
                                        <small>Experience Level</small>
                                        <span>Mid-Level Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Employability Score  */}
                    <div className="tp-card">
                        <h3>Employability Score</h3>
                        <div className="tp-score-container">
                            <div className="tp-score-circle">
                                <h2>89</h2>
                                <span>/100</span>
                            </div>
                            <div className="tp-score-status">
                                <i className="fa-solid fa-sparkles"></i> Excellent Potential
                            </div>
                        </div>
                    </div>

                    {/*  Skill Graph  */}
                    <div className="tp-card">
                        <h3>Skill Graph</h3>
                        <div className="tp-skills-container">
                            
                            <div className="tp-skill-row">
                                <div className="tp-skill-head">
                                    <span>FPGA</span>
                                    <span>92</span>
                                </div>
                                <div className="tp-skill-bar"><div className="tp-skill-fill" style={{width: '92%'}}></div></div>
                            </div>

                            <div className="tp-skill-row">
                                <div className="tp-skill-head">
                                    <span>Embedded C</span>
                                    <span>81</span>
                                </div>
                                <div className="tp-skill-bar"><div className="tp-skill-fill" style={{width: '81%'}}></div></div>
                            </div>

                            <div className="tp-skill-row">
                                <div className="tp-skill-head">
                                    <span>Verilog</span>
                                    <span>87</span>
                                </div>
                                <div className="tp-skill-bar"><div className="tp-skill-fill" style={{width: '87%'}}></div></div>
                            </div>

                            <div className="tp-skill-row">
                                <div className="tp-skill-head">
                                    <span>Timing Analysis</span>
                                    <span>76</span>
                                </div>
                                <div className="tp-skill-bar"><div className="tp-skill-fill" style={{width: '76%'}}></div></div>
                            </div>

                        </div>
                    </div>

                </div>

                {/*  MIDDLE ROW  */}
                <div className="tp-middle-row">

                    {/*  Core Strengths  */}
                    <div className="tp-card">
                        <h3>Core Strengths</h3>
                        <div className="tp-strengths">
                            <div className="tp-pill tp-pill-1">
                                <i className="fa-solid fa-puzzle-piece"></i> Problem Solver
                            </div>
                            <div className="tp-pill tp-pill-2">
                                <i className="fa-solid fa-microchip"></i> Embedded Ready
                            </div>
                            <div className="tp-pill tp-pill-4">
                                <i className="fa-solid fa-bolt"></i> Fast Learner
                            </div>
                            <div className="tp-pill tp-pill-3">
                                <i className="fa-solid fa-users"></i> Team Contributor
                            </div>
                        </div>
                    </div>

                    {/*  Top Career Paths  */}
                    <div className="tp-card">
                        <h3>Top Career Paths</h3>
                        <div className="tp-career-paths">
                            
                            <div className="tp-career-row">
                                <div className="tp-career-icon"><i className="fa-solid fa-shield-check"></i></div>
                                <div className="tp-career-info">
                                    <div className="tp-career-name">Verification Engineer</div>
                                </div>
                                <div className="tp-career-match">91%</div>
                            </div>

                            <div className="tp-career-row">
                                <div className="tp-career-icon"><i className="fa-solid fa-code"></i></div>
                                <div className="tp-career-info">
                                    <div className="tp-career-name">Embedded Engineer</div>
                                </div>
                                <div className="tp-career-match">84%</div>
                            </div>

                            <div className="tp-career-row">
                                <div className="tp-career-icon"><i className="fa-solid fa-microchip"></i></div>
                                <div className="tp-career-info">
                                    <div className="tp-career-name">Physical Design Engineer</div>
                                </div>
                                <div className="tp-career-match">78%</div>
                            </div>

                            <div className="tp-career-row">
                                <div className="tp-career-icon"><i className="fa-solid fa-layer-group"></i></div>
                                <div className="tp-career-info">
                                    <div className="tp-career-name">RTL Engineer</div>
                                </div>
                                <div className="tp-career-match">75%</div>
                            </div>

                        </div>
                    </div>

                    {/*  Growth Trend  */}
                    <div className="tp-card">
                        <h3>Growth Trend</h3>
                        <div className="tp-trend-container">
                            <div className="tp-trend-badge">+24%</div>
                            
                            <div className="tp-trend-graph">
                                <div className="tp-trend-line"></div>
                            </div>
                            
                            <div className="tp-trend-labels">
                                <span>Mar '24</span>
                                <span>May '24</span>
                                <span>Jul '24</span>
                                <span>Sep '24</span>
                                <span>Nov '24</span>
                                <span>May '25</span>
                            </div>

                            <div className="tp-trend-footer">
                                Consistent improvement across assessments
                            </div>
                        </div>
                    </div>

                    {/*  Industry Readiness  */}
                    <div className="tp-card">
                        <h3>Industry Readiness</h3>
                        <div className="tp-readiness">
                            <div className="tp-readiness-shield">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <h2>High</h2>
                            <p>Strong skills, relevant experience and job readiness for top-tier roles.</p>
                        </div>
                    </div>

                </div>

                {/*  BOTTOM ROW  */}
                <div className="tp-bottom-bar">
                    <div className="tp-verified">
                        <i className="fa-solid fa-shield-check"></i> Verified Talent
                    </div>
                    <div>ElectraCode Assessment Framework</div>
                    <div>Last Updated: May 24, 2025</div>
                    <div>Passport ID: <span className="tp-passport-id">EC-PSP-7X9K2Q</span></div>
                </div>

            </div>

    </>
  );
}

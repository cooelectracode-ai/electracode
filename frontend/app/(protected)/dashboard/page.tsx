"use client";
import React, { useEffect } from 'react';
import '@/styles/dashboard.css';



export default function Dashboard() {
  return (
    <>
        <div className="welcome">

            <h1>
                Welcome back, CEO 👋
            </h1>

            <p>
                Here's your learning progress
            </p>

        </div>

        {/*  Top Cards  */}

        <div className="cards">

            <div className="card">

                <h3>Current Learning Path</h3>

                <h4>VLSI Design Fundamentals</h4>

                <p>Module 5 of 12</p>

                <div className="progress-bar">
                    <div className="progress" style={{width: '42%'}}></div>
                </div>

                <span>42% Complete</span>

                <a href="/practice" className="continue-btn">
                    Continue Learning
                </a>

            </div>

            <div className="card">

                <h3>Recent Challenge</h3>

<h4>Finite State Machine Design</h4>

<p>Completed 2 hours ago</p>

<div className="stats">

    <div>
        <span>Score</span>
        <h2>95%</h2>
    </div>

    <div>
        <span>Time</span>
        <h2>24m</h2>
    </div>

    <div>
        <span>Rank</span>
        <h2>#12</h2>
    </div>

</div>

            </div>

            <div className="card ranking-card">

                <h3>Your Ranking</h3>

                <div className="medal">
                    🏆
                </div>

                <h1>#28</h1>

                <p>Global Ranking</p>

                <small>
                    ↑ Up 5 places this week
                </small>

            </div>

        </div>

        {/*  Bottom Section  */}

        <div className="bottom-grid">

            <div className="card">

                <h3>Skill Progress</h3>

                <div className="skill">

                    <div className="skill-head">
                        <span>Verilog </span>
                        <span>85%</span>
                    </div>

                    <div className="progress-bar">
                        <div className="progress" style={{width: '85%'}}></div>
                    </div>

                </div>

                <div className="skill">

                    <div className="skill-head">
                        <span>Digital Design</span>
                        <span>72%</span>
                    </div>

                    <div className="progress-bar">
                        <div className="progress" style={{width: '72%'}}></div>
                    </div>

                </div>

                <div className="skill">

                    <div className="skill-head">
                        <span>Embedded C</span>
                        <span>68%</span>
                    </div>

                    <div className="progress-bar">
                        <div className="progress" style={{width: '68%'}}></div>
                    </div>

                </div>

            </div>

            <div className="card suggestions-card">

    <h3>Suggested Next Steps</h3>

    <div className="suggestions-grid">

        <div className="suggestion blue">
            <h4>Complete VLSI Module</h4>
            <p>Finish Module 5 to unlock certification</p>
        </div>

        <div className="suggestion green">
            <h4>Weekly Skill Challenge</h4>
            <p>Live in 2 days - solve real-world problems</p>
        </div>

        <div className="suggestion dark">
            <h4>Practice Weak Areas</h4>
            <p>Focus on timing analysis concepts</p>
        </div>

    </div>

</div>

        </div>

    </>
  );
}

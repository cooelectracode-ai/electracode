"use client";
import React, { useEffect } from 'react';
import '@/styles/practice.css';



export default function Practice() {
  return (
    <>
<section className="hero">

    <h1>Practice Problems & Challenges</h1>

    <p>
        Sharpen your skills with hands-on problems
    </p>

    <div className="stats">

        <div className="stat-card">
            <h2>150+</h2>
            <span>Questions</span>
        </div>

        <div className="stat-card">
            <h2>7</h2>
            <span>Categories</span>
        </div>

        <div className="stat-card">
            <h2>24/7</h2>
            <span>Practice Arena</span>
        </div>

    </div>

</section>

<section className="topics-section">

    <div className="topics">

        <div className="topic-card easy">

            <div className="card-top">

                <span className="badge easy-badge">Easy</span>

                <span className="duration">⏱ 15 min</span>

            </div>

            <h3>Digital Logic Gates</h3>

            <p>
                Implement basic logic gates using transistors and analyze their behavior
            </p>

            <div className="card-footer">
                📊 85% solved
            </div>

        </div>

        <div className="topic-card medium"
            >

            <div className="card-top">

                <span className="badge medium-badge">Medium</span>

                <span className="duration">⏱ 30 min</span>

            </div>

            <h3>Verilog FSM Design</h3>

            <p>
                Design a finite state machine for traffic light controller in Verilog
            </p>

            <div className="card-footer">
                📊 62% solved
            </div>

        </div>

        <div className="topic-card hard"
            >

            <div className="card-top">

                <span className="badge hard-badge">Hard</span>

                <span className="duration">⏱ 60 min</span>

            </div>

            <h3>RISC-V Pipeline</h3>

            <p>
                Implement a 5-stage pipelined processor with hazard detection
            </p>

            <div className="card-footer">
                📊 28% solved
            </div>

        </div>

        <div className="topic-card easy"
             >

            <div className="card-top">

                <span className="badge easy-badge">Easy</span>

                <span className="duration">⏱ 20 min</span>

            </div>

            <h3>UART Communication</h3>

            <p>
                Write embedded C code for UART serial communication protocol
            </p>

            <div className="card-footer">
                📊 78% solved
            </div>

        </div>

        <div className="topic-card medium"
             >

            <div className="card-top">

                <span className="badge medium-badge">Medium</span>

                <span className="duration">⏱ 45 min</span>

            </div>

            <h3>Memory Controller</h3>

            <p>
                Design a DDR4 memory controller with timing constraints
            </p>

            <div className="card-footer">
                📊 45% solved
            </div>

        </div>

        <div className="topic-card hard"
            >

            <div className="card-top">

                <span className="badge hard-badge">Hard</span>

                <span className="duration">⏱ 90 min</span>

            </div>

            <h3>SoC Integration</h3>

            <p>
                Integrate multiple IP blocks into a complete SoC design
            </p>

            <div className="card-footer">
                📊 15% solved
            </div>

        </div>

    </div>

</section>

    </>
  );
}

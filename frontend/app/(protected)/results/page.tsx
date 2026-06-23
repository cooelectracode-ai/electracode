"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/results.css';
import '@/styles/sidebar.css';
import Navbar from '@/components/Navbar';



export default function Results() {
  return (
    <>
      

<Navbar />

<div className="results-container">

    <div className="results-header">

        <h1>🎉 Quiz Completed</h1>

        <h2 id="topicTitle"></h2>

        <p id="assessmentType"></p>

    </div>

    <div className="stats-grid">

        <div className="stat-card">
            <h3>Score</h3>
            <span id="scoreValue"></span>
        </div>

        <div className="stat-card">
            <h3>Correct</h3>
            <span id="correctValue"></span>
        </div>

        <div className="stat-card">
            <h3>Wrong</h3>
            <span id="wrongValue"></span>
        </div>

        <div className="stat-card">
            <h3>Accuracy</h3>
            <span id="accuracyValue"></span>
        </div>

    </div>

    <div className="performance-card">

        <h3>Performance Level</h3>

        <p id="performanceText"></p>

    </div>

    <div className="action-buttons">

        <button onclick="retryQuiz()">
            Retry Quiz
        </button>

        <button onclick="goToPractice()">
            Back To Practice
        </button>

    </div>

    <div className="review-section">

        <h2>Question Review</h2>

        <div id="reviewContainer"></div>

    </div>

</div>

<script src="../js/results.js"></script>
<script type="module" src="../js/navbar-auth.js"></script>

    </>
  );
}

"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/quiz.css';
import '@/styles/sidebar.css';
import Navbar from '@/components/Navbar';



export default function Quiz() {
  return (
    <>
      

<Navbar />

<div className="quiz-container">

    <h1 id="quizTitle">Loading...</h1>

    <div className="progress-info">
        <span>Progress</span>
        <span id="progressPercent">10%</span>
    </div>

    


    <div className="progress-bar">
        <div className="progress" id="progress"></div>
    </div>

    <div id="questionNavigator" className="question-navigator">

    </div>

    <div className="navigator-legend">

        <div className="legend-item">
            <span className="legend-box current-box"></span>
            Current
        </div>

        <div className="legend-item">
            <span className="legend-box answered-box"></span>
            Answered
        </div>

        <div className="legend-item">
            <span className="legend-box unanswered-box"></span>
            Not Answered
        </div>

    </div>

    <p id="questionCount"></p>

    <div className="question-card">

        <h2 id="questionText"></h2>

        <div id="answerArea"></div>

    </div>

    <div className="buttons">

        <button onclick="previousQuestion()">
            Previous
        </button>

        <button onclick="nextQuestion()">
            Next
        </button>

        <button id="submitBtn"
                onclick="submitQuiz()">
            Submit Quiz
        </button>

    </div>

</div>

<script src="../js/quiz.js"></script>
<script type="module" src="../js/navbar-auth.js"></script>

    </>
  );
}

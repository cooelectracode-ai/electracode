"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/subject.css';
import '@/styles/sidebar.css';
import Navbar from '@/components/Navbar';



export default function Subject() {
  return (
    <>
      

<Navbar />

<section className="subject-header">

    <h1 id="topicTitle">
        Loading...
    </h1>

    <p>
        Choose a category to begin practicing.
    </p>

</section>

<section className="categories">

    <div className="category-card"
         onclick="openQuiz('mcq')">

        <h3>MCQ</h3>

        <p>Multiple choice questions</p>

    </div>

    <div className="category-card"
         onclick="openQuiz('numerical')">

        <h3>Numerical</h3>

        <p>Calculation based questions</p>

    </div>

    <div className="category-card"
         onclick="openQuiz('short_answer')">

        <h3>Short Answer</h3>

        <p>Concept based answers</p>

    </div>

    <div className="category-card"
         onclick="openQuiz('code_submit')">

        <h3>Code Submit</h3>

        <p>Implementation questions</p>

    </div>

    <div className="category-card"
         onclick="openQuiz('application_based')">

        <h3>Application Based</h3>

        <p>Real-world scenarios</p>

    </div>

    <div className="category-card"
         onclick="openQuiz('correlation_based')">

        <h3>Correlation Based</h3>

        <p>Multi-concept integration</p>

    </div>

    <div className="category-card"
         onclick="openQuiz('grey_zone')">

        <h3>Grey Zone</h3>

        <p>Tricky conceptual questions</p>

    </div>

</section>

<script src="../js/subject.js"></script>
<script type="module" src="../js/navbar-auth.js"></script>

    </>
  );
}

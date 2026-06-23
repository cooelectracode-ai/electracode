"use client";
import React, { useState } from 'react';
import '@/styles/learn.css';

export default function Learn() {
  const [activeTab, setActiveTab] = useState('tools');

  return (
    <>
      {/* HERO */}
          <section className="hero">
            <h1>Learn Faster. Learn Smarter.</h1>
            <p>Master electronics engineering with structured courses and hands-on training</p>
          </section>

          {/* TABS */}
          <div className="tabs-wrap">
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`} 
                onClick={() => setActiveTab('tools')}
              >
                Tools
              </button>
              <button 
                className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} 
                onClick={() => setActiveTab('notes')}
              >
                Notes
              </button>
              <button 
                className={`tab-btn ${activeTab === 'interview' ? 'active' : ''}`} 
                onClick={() => setActiveTab('interview')}
              >
                Interview Path
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <section className="content">
            {/* TOOLS TAB */}
            <div className={`tab-panel ${activeTab === 'tools' ? 'active' : ''}`} id="tab-tools">
              <p className="section-title">Industry Tools</p>
              <div className="cards-grid">
                <div className="card">
                  <div className="card-icon">🔧</div>
                  <h3>Synopsys Design Compiler</h3>
                  <p>RTL synthesis and optimization tool training</p>
                  <div className="card-meta">
                    <span>⏱ 20 hours</span>
                    <span>🗂 Industry Tool</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-icon">🎨</div>
                  <h3>Cadence Virtuoso</h3>
                  <p>Analog and mixed-signal IC design platform</p>
                  <div className="card-meta">
                    <span>⏱ 25 hours</span>
                    <span>🗂 Industry Tool</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-icon">🔩</div>
                  <h3>Xilinx Vivado</h3>
                  <p>FPGA design and implementation suite</p>
                  <div className="card-meta">
                    <span>⏱ 30 hours</span>
                    <span>🗂 Industry Tool</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NOTES TAB */}
            <div className={`tab-panel ${activeTab === 'notes' ? 'active' : ''}`} id="tab-notes">
              <p className="section-title">Study Notes</p>
              <div className="cards-grid">
                <div className="card">
                  <div className="card-icon">📝</div>
                  <h3>Quick Revision Notes</h3>
                  <p>Fast-track your revision with concise topic summaries</p>
                </div>
                <div className="card">
                  <div className="card-icon">📖</div>
                  <h3>Concept Cheat Sheets</h3>
                  <p>One-page guides for important electronics concepts</p>
                </div>
                <div className="card">
                  <div className="card-icon">💡</div>
                  <h3>Formula Collections</h3>
                  <p>All essential formulas organized by topic</p>
                </div>
              </div>
            </div>

            {/* INTERVIEW PATH TAB */}
            <div className={`tab-panel ${activeTab === 'interview' ? 'active' : ''}`} id="tab-interview">
              <p className="section-title">Interview Preparation</p>
              <div className="cards-grid">
                <div className="card">
                  <div className="card-icon">🎯</div>
                  <h3>VLSI Interview Prep</h3>
                  <p>Common questions and answers for VLSI roles</p>
                </div>
                <div className="card">
                  <div className="card-icon">💼</div>
                  <h3>Embedded Interview Guide</h3>
                  <p>Technical questions for embedded systems positions</p>
                </div>
                <div className="card">
                  <div className="card-icon">🚀</div>
                  <h3>HR & Behavioral</h3>
                  <p>Soft skills and behavioral interview preparation</p>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}

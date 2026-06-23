"use client";
import React, { useState } from 'react';
import '@/styles/rankings.css';

const sampleData = [
  { rank: 1, name: "Priya Sharma",  role: "VLSI",     score: 2450, badge: "Gold"   },
  { rank: 2, name: "Rahul Mehta",   role: "Embedded", score: 2380, badge: "Silver" },
  { rank: 3, name: "Ananya Iyer",   role: "Digital",  score: 2310, badge: "Bronze" },
  { rank: 4, name: "Vikram Singh",  role: "VLSI",     score: 2245, badge: null     },
  { rank: 5, name: "Deepa Nair",    role: "Embedded", score: 2190, badge: null     },
  { rank: 6, name: "Arjun Rao",     role: "Digital",  score: 2150, badge: null     },
  { rank: 7, name: "Sneha Patel",   role: "VLSI",     score: 2100, badge: null     },
];

function medal(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return "";
}

function BadgeEl({ badge }: { badge: string | null }) {
  if (!badge) return null;
  const cls =
    badge === "Gold"   ? "badge badge-gold"   :
    badge === "Silver" ? "badge badge-silver" :
                         "badge badge-bronze";
  return <span className={cls}>{badge}</span>;
}

export default function Rankings() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered =
    activeFilter === 'all' || activeFilter === 'college'
      ? sampleData
      : sampleData.filter(d => d.role === activeFilter);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>Global Skill Standings</h1>
        <p>Showcase skills alongside top electronics engineering talent worldwide</p>
        <div className="filters">
          {[
            { key: 'all',      label: 'Global'     },
            { key: 'college',  label: 'My College'  },
            { key: 'VLSI',     label: 'VLSI'        },
            { key: 'Embedded', label: 'Embedded'    },
            { key: 'Digital',  label: 'Digital'     },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* TABLE */}
      <section className="table-section">
        <div className="table-wrap">
          <div className="table-header">
            <span>Rank</span>
            <span>Name</span>
            <span>Role</span>
            <span>Score</span>
          </div>
          <div id="tableBody">
            {filtered.length === 0 ? (
              <div className="empty">No results found for this category.</div>
            ) : (
              filtered.map(d => (
                <div className="table-row" key={d.rank}>
                  <div className="rank-cell">
                    <span>{medal(d.rank)}</span>
                    <span className={d.rank > 3 ? 'rank-num' : ''}>{d.rank}</span>
                  </div>
                  <div className="name">{d.name}</div>
                  <div className="role-cell">
                    <BadgeEl badge={d.badge} />
                    <span className="role-text">{d.role}</span>
                  </div>
                  <div className="score">{d.score}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

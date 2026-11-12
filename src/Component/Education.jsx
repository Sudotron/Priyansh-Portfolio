import React from 'react';
import { projects, education } from '../data/config';

export default function Education() {
  return (
    <section className="section alt" id="education">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="section-title">Build timeline</h2>
            {projects.map((p) => (
              <div className="timeline-item" key={p.title}>
                <h5 className="fw-bold mb-0">{p.title}</h5>
                <div className="text-muted">{p.year}</div>
                <div className="tags mt-2 mb-0">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">Education</h2>
            {education.map((e) => (
              <div className="timeline-item" key={e.title}>
                <h5 className="fw-bold mb-0">{e.title}</h5>
                <div className="text-muted">{[e.org, e.date].filter(Boolean).join(' · ')}</div>
                <div className="fw-semibold">{e.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

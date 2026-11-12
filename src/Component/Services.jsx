import React from 'react';
import { services } from '../data/config';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">What I work on</h2>
        <p className="section-sub">Backend building blocks I've used across my projects.</p>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-md-6 col-lg-4" key={s.title}>
              <div className="card-x h-100">
                <div className="icon-box"><i className={`fas ${s.icon}`}></i></div>
                <h5 className="fw-bold">{s.title}</h5>
                <p className="mb-0">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

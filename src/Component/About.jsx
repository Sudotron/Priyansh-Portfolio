import React from 'react';

export default function About() {
  const stats = [['3', 'Backend projects built'], ['100+', 'Active players data on the tracking engine'], ['2028', 'B.Tech graduation'], ['Asyncio', 'Core specialty']];
  return (
    <section className="section alt" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <h2 className="section-title">About me</h2>
            <p>I'm a B.Tech Computer Science student and an aspiring Software Development Engineer with a focus on Python and backend work. I build asynchronous micro-services, event-driven telemetry engines and automated content pipelines using Asyncio and REST APIs.</p>
            <p>My foundation is in data structures, algorithms and OOP. I design non-blocking database layers, integrate web protocols, and ship resilient, self-healing automation tools. I'm looking for an SDE or backend role where I can keep building that kind of system.</p>
          </div>
          <div className="col-lg-5">
            <div className="row g-3">
              {stats.map(([n, l]) => (
                <div className="col-6" key={l}><div className="stat"><div className="num">{n}</div><div>{l}</div></div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

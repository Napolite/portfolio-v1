import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import { IoMdMail } from "react-icons/io";
import type { SocialLink } from "./lib/type";
import { skillGroups, projects, experiences } from "./lib/constants";

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Napolite", value: <FaGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dev-okon-emmanuel",
    value: <FaLinkedin />,
  },
  {
    label: "Email",
    href: "mailto:Okonemmanuelmma@gmail.com",
    value: <IoMdMail />,
  },
];

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      setPointer({
        x: event.clientX,
        y: event.clientY,
        active: true,
      });
    };

    const resetPointer = () => {
      setPointer((current) => ({ ...current, active: false }));
    };

    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
    };
  }, []);

  return (
    <main className="portfolio-shell">
      <div
        className="pointer-glow"
        aria-hidden="true"
        style={
          {
            "--pointer-x": `${pointer.x}px`,
            "--pointer-y": `${pointer.y}px`,
            opacity: pointer.active ? 1 : 0,
          } as React.CSSProperties
        }
      />
      <section className="hero-panel">
        <div className="eyebrow-row">
          <span className="eyebrow">Senior Frontend Engineer</span>
          <span className="eyebrow subtle">Lagos, Nigeria</span>
        </div>

        <div className="hero-grid">
          <header className="identity-card">
            <p className="kicker">Okon Emmanuel Israel</p>
            <h1>
              Technical systems, financial interfaces, and high-integrity
              frontend architecture.
            </h1>
            <p className="lede">
              Building complex data pipelines, high-performance web and desktop
              applications, and financial architectures with a bias toward
              correctness, density, and operational clarity.
            </p>

            <div className="social-row" aria-label="Quick links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="social-link"
                  href={link.href}
                  target="_blank"
                >
                  <span className="social-value">{link.value}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </header>

          <aside className="signal-card">
            <div className="signal-block">
              <span className="signal-label">Focus</span>
              <p>
                Distributed financial UIs, cross-platform tooling, and
                production-grade state orchestration.
              </p>
            </div>
            <hr />
            <div className="signal-block">
              <span className="signal-label">Operating Model</span>
              <p>
                Minimal surface area, precise data models, and interfaces that
                stay legible under load.
              </p>
            </div>
            <hr />
            <div className="signal-stats">
              <div>
                <span className="signal-label">Mode</span>
                <strong>Frontend Architecture</strong>
              </div>
              <div>
                <span className="signal-label">Stack</span>
                <strong>React / TypeScript / Tailwind</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="section-block">
        <div className="section-heading">
          <p className="section-label">Technical Matrix</p>
          <h2>Skills Grid</h2>
        </div>

        <div className="skills-grid" role="list" aria-label="Technical skills">
          {skillGroups.map((group) => (
            <article className="matrix-card" role="listitem" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      <section className="section-block">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>Projects</h2>
        </div>

        <div
          className="projects-grid"
          role="list"
          aria-label="Selected projects"
        >
          {projects.map((project) => (
            <article
              className="project-card"
              role="listitem"
              key={project.href}
            >
              <div className="project-meta">
                <span className="project-label">{project.label}</span>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>

              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      <section className="section-block">
        <div className="section-heading">
          <p className="section-label">Selected Engineering Architecture</p>
          <h2>Ship Logs</h2>
        </div>

        <div className="timeline" aria-label="Career timeline">
          {experiences.map((job, index) => (
            <article className="log-card" key={`${job.company}-${job.period}`}>
              <div className="log-meta">
                <span className="log-index">0{index + 1}</span>
                <span className="log-period">{job.period}</span>
              </div>

              <div className="log-body">
                <div className="log-header">
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                </div>

                <ul className="log-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <p>Designed and created with love by me.</p>
      </footer>
    </main>
  );
}

export default App;

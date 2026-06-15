import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import { IoMdMail } from "react-icons/io";

type SocialLink = {
  label: string;
  href: string;
  value: string | React.ReactNode;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

type Project = {
  name: string;
  href: string;
  summary: string;
  label: string;
};

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

const skillGroups: SkillGroup[] = [
  {
    title: "Core Languages",
    items: ["JavaScript", "TypeScript", "English (A1)"],
  },
  {
    title: "Frameworks & Runtimes",
    items: ["ReactJS", "NextJS", "React Native", "Tauri"],
  },
  {
    title: "State & Data Fetching",
    items: ["Redux Toolkit", "React Query", "Zustand", "Axios"],
  },
  {
    title: "Styling & Ecosystem",
    items: ["TailwindCSS", "Mantine UI", "GrapesJS", "Web3JS"],
  },
];

const projects: Project[] = [
  {
    name: "LR Protocol",
    href: "https://lrprotocol.com",
    summary: "Protocol marketing and product presence with a focused Web3 presentation.",
    label: "Live site",
  },
  {
    name: "Expense Tracker",
    href: "https://expense-tracker-swart-chi.vercel.app/",
    summary: "A financial tracking interface for organizing spend, balances, and visibility.",
    label: "Live demo",
  },
  {
    name: "Enver Digital",
    href: "https://enverdigital.vercel.app/",
    summary: "Agency-style brand and service showcase built for clarity and conversion.",
    label: "Live site",
  },
  {
    name: "Tori Gate",
    href: "https://tori-gate.vercel.app/",
    summary: "A polished web experience centered on visual identity and product storytelling.",
    label: "Live site",
  },
  {
    name: "Vision Dashboard",
    href: "https://vision-dahsboard.vercel.app/",
    summary: "A dashboard interface for turning operational data into readable signal.",
    label: "Live app",
  },
  {
    name: "Optimal Seven",
    href: "https://optimal-seven.vercel.app/",
    summary: "A modern landing experience with a strong product-first presentation layer.",
    label: "Live site",
  },
  {
    name: "Mainstack",
    href: "https://mainstack-gamma.vercel.app/",
    summary: "A product or platform interface focused on structure, flow, and engagement.",
    label: "Live app",
  },
  {
    name: "Brand Positive",
    href: "https://brand-positive.vercel.app/",
    summary: "A brand-forward website designed to feel clean, direct, and memorable.",
    label: "Live site",
  },
];

const experiences: Experience[] = [
  {
    company: "Freelancer",
    role: "Frontend Developer",
    period: "Mar '25 - Dec '25",
    highlights: [
      "Engineered a cross-platform logistics solution using React Native, implementing automated dispatch workflows via Google Maps SDK and background synchronization.",
      "Orchestrated the architectural transition of Crypto Launchpad from web to mobile; integrated WalletConnect v2 and Ethers.js to handle secure on-chain signatures and asset bridging.",
      "Developed a Real-World Asset (RWA) data aggregator, utilizing GraphQL and smart contract listeners to normalize yield data and asset valuation from fragmented on-chain protocols.",
    ],
  },
  {
    company: "Khaime",
    role: "Frontend Developer",
    period: "Jan '25 - Feb '25",
    highlights: [
      "Refactored the core builder interface by integrating GrapesJS with React, optimizing the DOM-based drag-and-drop engine for enhanced performance and custom component rendering.",
      "Engineered high-priority features and responsive UI iterations based on user feedback cycles.",
    ],
  },
  {
    company: "Revent Technologies",
    role: "Frontend Developer",
    period: "Jun '23 - Nov '24",
    highlights: [
      "Developed critical modules for Africa's first core banking platform.",
      "Orchestrated the architectural merge of five independent micro-frontends into a unified core feature; architected to improve data consistency, performance, and maintainability.",
      "Implemented complex middleware and service layers to consume financial microservices, extending platform capabilities via secure, high-availability APIs.",
    ],
  },
  {
    company: "Fusion Inc",
    role: "Frontend Developer",
    period: "Aug '23 - Nov '23",
    highlights: [
      "Spearheaded the end-to-end frontend architecture of a self-service portal, utilizing React and TypeScript to build a scalable codebase from the ground up.",
    ],
  },
  {
    company: "Lead Wallet",
    role: "Frontend Developer",
    period: "Feb '22 - Nov '22",
    highlights: [
      "Designed a cross-platform asset exchange module using React Native, implementing complex state transitions for real-time slippage and fee calculations.",
      "Integrated multi-chain protocols via Web3.js and Axios, orchestrating asynchronous data flows between smart contracts and RESTful backend APIs.",
      "Optimized transaction success rates and UX flow, directly contributing to a 50% revenue increase and facilitating strategic institutional partnerships.",
    ],
  },
  {
    company: "DeSpace Protocol",
    role: "Frontend Developer",
    period: "May '21 - Feb '22",
    highlights: [
      "Led the transition from static HTML/CSS to a Next.js/TypeScript architecture, improving SEO, performance, and type-safe data handling.",
      "Built a real-time liquidity aggregator using 1inch API and Web3.js, integrating data streams from 8 decentralized exchanges, optimizing for the lowest slippage and best exchange rates.",
    ],
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

        <div className="projects-grid" role="list" aria-label="Selected projects">
          {projects.map((project) => (
            <article className="project-card" role="listitem" key={project.href}>
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
    </main>
  );
}

export default App;

import './App.css'

type SocialLink = {
  label: string
  href: string
  value: string
}

type SkillGroup = {
  title: string
  items: string[]
}

type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', value: 'github.com/okonemmanuel' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', value: 'linkedin.com/in/okonemmanuel' },
  { label: 'Email', href: 'mailto:Okonemmanuelmma@gmail.com', value: 'Okonemmanuelmma@gmail.com' },
]

const skillGroups: SkillGroup[] = [
  {
    title: 'Core Languages',
    items: ['JavaScript', 'TypeScript', 'English (A1)'],
  },
  {
    title: 'Frameworks & Runtimes',
    items: ['ReactJS', 'NextJS', 'React Native', 'Tauri'],
  },
  {
    title: 'State & Data Fetching',
    items: ['Redux Toolkit', 'React Query', 'Zustand', 'Axios'],
  },
  {
    title: 'Styling & Ecosystem',
    items: ['TailwindCSS', 'Mantine UI', 'GrapesJS', 'Web3JS'],
  },
]

const experiences: Experience[] = [
  {
    company: 'Freelancer',
    role: 'Frontend Developer',
    period: "Mar '25 - Dec '25",
    highlights: [
      'Engineered a cross-platform logistics solution using React Native, implementing automated dispatch workflows via Google Maps SDK and background synchronization.',
      'Orchestrated the architectural transition of Crypto Launchpad from web to mobile; integrated WalletConnect v2 and Ethers.js to handle secure on-chain signatures and asset bridging.',
      'Developed a Real-World Asset (RWA) data aggregator, utilizing GraphQL and smart contract listeners to normalize yield data and asset valuation from fragmented on-chain protocols.',
    ],
  },
  {
    company: 'Khaime',
    role: 'Frontend Developer',
    period: "Jan '25 - Feb '25",
    highlights: [
      'Refactored the core builder interface by integrating GrapesJS with React, optimizing the DOM-based drag-and-drop engine for enhanced performance and custom component rendering.',
      'Engineered high-priority features and responsive UI iterations based on user feedback cycles.',
    ],
  },
  {
    company: 'Revent Technologies',
    role: 'Frontend Developer',
    period: "Jun '23 - Nov '24",
    highlights: [
      'Developed critical modules for Africa\'s first core banking platform.',
      'Orchestrated the architectural merge of five independent micro-frontends into a unified core feature; architected to improve data consistency, performance, and maintainability.',
      'Implemented complex middleware and service layers to consume financial microservices, extending platform capabilities via secure, high-availability APIs.',
    ],
  },
  {
    company: 'Fusion Inc',
    role: 'Frontend Developer',
    period: "Aug '23 - Nov '23",
    highlights: [
      'Spearheaded the end-to-end frontend architecture of a self-service portal, utilizing React and TypeScript to build a scalable codebase from the ground up.',
    ],
  },
  {
    company: 'Lead Wallet',
    role: 'Frontend Developer',
    period: "Feb '22 - Nov '22",
    highlights: [
      'Designed a cross-platform asset exchange module using React Native, implementing complex state transitions for real-time slippage and fee calculations.',
      'Integrated multi-chain protocols via Web3.js and Axios, orchestrating asynchronous data flows between smart contracts and RESTful backend APIs.',
      'Optimized transaction success rates and UX flow, directly contributing to a 50% revenue increase and facilitating strategic institutional partnerships.',
    ],
  },
  {
    company: 'DeSpace Protocol',
    role: 'Frontend Developer',
    period: "May '21 - Feb '22",
    highlights: [
      'Led the transition from static HTML/CSS to a Next.js/TypeScript architecture, improving SEO, performance, and type-safe data handling.',
      'Built a real-time liquidity aggregator using 1inch API and Web3.js, integrating data streams from 8 decentralized exchanges, optimizing for the lowest slippage and best exchange rates.',
    ],
  },
]

function App() {
  return (
    <main className="portfolio-shell">
      <section className="hero-panel">
        <div className="eyebrow-row">
          <span className="eyebrow">Senior Frontend Engineer</span>
          <span className="eyebrow subtle">Lagos, Nigeria</span>
        </div>

        <div className="hero-grid">
          <header className="identity-card">
            <p className="kicker">Okon Emmanuel Israel</p>
            <h1>Technical systems, financial interfaces, and high-integrity frontend architecture.</h1>
            <p className="lede">
              Building complex data pipelines, high-performance web and desktop applications,
              and financial architectures with a bias toward correctness, density, and operational clarity.
            </p>

            <div className="social-row" aria-label="Quick links">
              {socialLinks.map((link) => (
                <a key={link.label} className="social-link" href={link.href}>
                  <span>{link.label}</span>
                  <span className="social-value">{link.value}</span>
                </a>
              ))}
            </div>
          </header>

          <aside className="signal-card">
            <div className="signal-block">
              <span className="signal-label">Focus</span>
              <p>Distributed financial UIs, cross-platform tooling, and production-grade state orchestration.</p>
            </div>
            <hr />
            <div className="signal-block">
              <span className="signal-label">Operating Model</span>
              <p>Minimal surface area, precise data models, and interfaces that stay legible under load.</p>
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
  )
}

export default App

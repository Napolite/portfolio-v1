import type { SkillGroup, Project, Experience } from "./type";

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Languages",
    items: ["JavaScript", "TypeScript"],
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

export const projects: Project[] = [
  {
    name: "LR Protocol",
    href: "https://lrprotocol.com",
    summary:
      "Protocol marketing and product presence with a focused Web3 presentation.",
    label: "Live site",
  },
  {
    name: "Loan Engine Dashboard",
    href: "https://quant-test-lime.vercel.app/",
    summary:
      "System loan creation and agreement management, with a focus on clarity and operational control.",
    label: "Live site",
  },
  {
    name: "Expense Tracker",
    href: "https://expense-tracker-swart-chi.vercel.app/",
    summary:
      "A financial tracking interface for organizing spend, balances, and visibility.",
    label: "Live demo",
  },
  {
    name: "Enver Digital",
    href: "https://enverdigital.vercel.app/",
    summary:
      "Agency-style brand and service showcase built for clarity and conversion.",
    label: "Live site",
  },
  {
    name: "Tori Gate",
    href: "https://tori-gate.vercel.app/",
    summary:
      "A polished web experience centered on visual identity and product storytelling.",
    label: "Live site",
  },
  {
    name: "Vision Dashboard",
    href: "https://vision-dahsboard.vercel.app/",
    summary:
      "A dashboard interface for turning operational data into readable signal.",
    label: "Live app",
  },
  {
    name: "Optimal Seven",
    href: "https://optimal-seven.vercel.app/",
    summary:
      "A modern landing experience with a strong product-first presentation layer.",
    label: "Live site",
  },
  {
    name: "Mainstack",
    href: "https://mainstack-gamma.vercel.app/",
    summary:
      "A product or platform interface focused on structure, flow, and engagement.",
    label: "Live app",
  },
  {
    name: "Brand Positive",
    href: "https://brand-positive.vercel.app/",
    summary:
      "A brand-forward website designed to feel clean, direct, and memorable.",
    label: "Live site",
  },
];

export const experiences: Experience[] = [
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

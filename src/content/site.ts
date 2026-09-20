/**
 * Single source of truth for all site copy and data.
 *
 * Everything here is editable without touching components. Items marked
 * "CONFIRM" are working assumptions and must be verified before launch.
 */

type Site = {
  name: string;
  tagline: string;
  description: string;
  email: string;
  github: string;
  /** Optional channels: fill any of these in and they appear automatically. */
  linkedin?: string; // full URL
  x?: string; // full URL
  whatsapp?: string; // digits only, with country code
  bookingUrl?: string; // Calendly / Cal.com link
  location?: string; // e.g. "City, Country"
};

export const site: Site = {
  name: "Tevonax",
  tagline: "Software, built with precision.",
  description:
    "Tevonax is a software company that designs and engineers web platforms, mobile apps and custom software: clear in structure, careful in detail and built to last.",

  // CONFIRM: replace with the real business email before launch.
  email: "hello@tevonax.com",

  github: "https://github.com/tevonax",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Approach", href: "/#approach" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

/* ------------------------------------------------------------------
   Services   (CONFIRM: adjust to the services Tevonax actually offers)
------------------------------------------------------------------- */

export type ServiceIcon = "web" | "mobile" | "custom" | "design" | "cloud" | "ai";

export type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
  tags: readonly string[];
};

export const services: readonly Service[] = [
  {
    icon: "web",
    title: "Web applications",
    description:
      "Fast, accessible and scalable web platforms, from marketing sites to complex products, built on modern frameworks.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "mobile",
    title: "Mobile apps",
    description:
      "Cross-platform apps for iOS and Android that feel native, share one codebase and stay maintainable.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: "custom",
    title: "Custom software",
    description:
      "Internal tools, dashboards and systems shaped around how your business actually works, not the other way round.",
    tags: ["APIs", "Databases", "Integrations"],
  },
  {
    icon: "design",
    title: "UI/UX design",
    description:
      "Clear, consistent interfaces, from user flows and prototypes to a design system your team can build on.",
    tags: ["Product design", "Prototyping", "Design systems"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Reliable pipelines, hosting and monitoring so releases are routine and the product stays available.",
    tags: ["CI/CD", "Hosting", "Monitoring"],
  },
  {
    icon: "ai",
    title: "AI & automation",
    description:
      "Practical automation and AI features integrated into real workflows, where they save time or add capability.",
    tags: ["Automation", "LLM integrations", "Data pipelines"],
  },
];

/* ------------------------------------------------------------------
   Technology stack

   CONFIRM before launch: keep only what the team can genuinely deliver
   with. Clients probe this in technical conversations, so a shorter honest
   list is more credible than a long one you cannot back up.

   `core: true` = day-to-day tools (shown emphasised).
   Everything else is shown as "also": used when a project calls for it.
------------------------------------------------------------------- */

export type TechItem = { name: string; core?: boolean };
export type TechGroup = { group: string; summary: string; items: readonly TechItem[] };

export const techStack: readonly TechGroup[] = [
  {
    group: "Frontend",
    summary: "Fast, accessible interfaces",
    items: [
      { name: "Next.js", core: true },
      { name: "React", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript" },
      { name: "HTML5 & CSS3" },
      { name: "Tailwind CSS", core: true },
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "TanStack Query" },
      { name: "Framer Motion" },
      { name: "Storybook" },
    ],
  },
  {
    group: "Mobile",
    summary: "iOS and Android apps",
    items: [
      { name: "React Native", core: true },
      { name: "Expo" },
      { name: "Flutter" },
      { name: "Swift" },
      { name: "Kotlin" },
    ],
  },
  {
    group: "Backend",
    summary: "APIs and business logic",
    items: [
      { name: "Node.js", core: true },
      { name: "Express" },
      { name: "NestJS" },
      { name: "Python" },
      { name: "Django" },
      { name: "FastAPI" },
      { name: "Laravel" },
      { name: "REST APIs", core: true },
      { name: "GraphQL" },
      { name: "WebSockets" },
      { name: "OAuth & JWT" },
    ],
  },
  {
    group: "Data",
    summary: "Storage, caching and ORMs",
    items: [
      { name: "PostgreSQL", core: true },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Prisma" },
      { name: "Supabase" },
      { name: "Firebase" },
    ],
  },
  {
    group: "Cloud & DevOps",
    summary: "Hosting, pipelines and infrastructure",
    items: [
      { name: "Vercel", core: true },
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "Microsoft Azure" },
      { name: "Docker", core: true },
      { name: "Kubernetes" },
      { name: "CI/CD", core: true },
      { name: "GitHub Actions", core: true },
      { name: "Terraform" },
      { name: "Nginx" },
      { name: "Linux" },
    ],
  },
  {
    group: "Design",
    summary: "From user flows to design systems",
    items: [
      { name: "Figma" },
      { name: "Wireframing" },
      { name: "Prototyping" },
      { name: "Design systems" },
      { name: "Accessibility (WCAG)" },
    ],
  },
  {
    group: "Quality & workflow",
    summary: "Testing, review and monitoring",
    items: [
      { name: "Git & GitHub", core: true },
      { name: "Jest" },
      { name: "Vitest" },
      { name: "Playwright" },
      { name: "Cypress" },
      { name: "ESLint & Prettier" },
      { name: "Sentry" },
    ],
  },
  {
    group: "AI & automation",
    summary: "LLM features and workflow automation",
    items: [
      { name: "LLM APIs" },
      { name: "RAG pipelines" },
      { name: "LangChain" },
      { name: "Vector databases" },
      { name: "n8n" },
      { name: "Workflow automation" },
    ],
  },
];

/* ------------------------------------------------------------------
   Work
   Add real projects here and they appear automatically. Until then the
   section shows an honest "coming soon" state instead of placeholders.

   Example:
   {
     title: "Project name",
     category: "Web application",
     year: "2026",
     summary: "One or two sentences on the problem and the outcome.",
     tags: ["Next.js", "PostgreSQL"],
     href: "https://example.com",   // optional
   }
------------------------------------------------------------------- */

export type Project = {
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: readonly string[];
  href?: string;
};

export const projects: readonly Project[] = [];

/* ------------------------------------------------------------------
   Process
------------------------------------------------------------------- */

export const processSteps: readonly { title: string; description: string }[] = [
  {
    title: "Discover",
    description:
      "We learn your goals, users and constraints, then write down scope, priorities and what success looks like.",
  },
  {
    title: "Design",
    description:
      "Flows, wireframes and interface design, reviewed with you early so direction is settled before we build.",
  },
  {
    title: "Build",
    description:
      "Iterative development in short cycles, with working software you can review along the way.",
  },
  {
    title: "Launch",
    description:
      "Testing, performance and security checks, followed by a controlled release.",
  },
  {
    title: "Support",
    description:
      "Monitoring, fixes and continued improvement once the product is live.",
  },
];

/* ------------------------------------------------------------------
   Approach
------------------------------------------------------------------- */

export const principles: readonly { title: string; description: string }[] = [
  {
    title: "Clarity over cleverness",
    description:
      "Simple architecture, readable code and honest estimates. If something is hard, we say so early.",
  },
  {
    title: "Craft in the details",
    description:
      "Accessibility, performance and polish are part of the build from day one, not a coat of paint at the end.",
  },
  {
    title: "Transparent by default",
    description:
      "Clear scope, regular updates and direct communication, so there are no surprises in what you get or when.",
  },
  {
    title: "Built to last",
    description:
      "Maintainable, tested and documented software that your team can confidently run and extend.",
  },
];

/* ------------------------------------------------------------------
   FAQ   (CONFIRM: answers reflect current copy; adjust to real policy)
------------------------------------------------------------------- */

export const faqs: readonly { question: string; answer: string }[] = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Web applications, mobile apps and custom software, along with the design, cloud and automation work around them. If you are not sure which fits, describe the outcome you need and we will suggest an approach.",
  },
  {
    question: "How does a project start?",
    answer:
      "With a discovery phase. We learn your goals, users and constraints, then write down scope, priorities and what success looks like before any build begins.",
  },
  {
    question: "How will we communicate during the project?",
    answer:
      "Development runs in short cycles with working software you can review along the way, plus regular updates, so you always know where things stand.",
  },
  {
    question: "Do you support the product after launch?",
    answer:
      "Yes. Support is part of how we work: monitoring, fixes and continued improvement once the product is live.",
  },
  {
    question: "What should I include when I get in touch?",
    answer:
      "What you are building and who it is for, your timeline and any hard deadlines, and a rough budget range if you have one. Even a short description is enough to start a conversation.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We choose technology to fit the problem. Our core tools include Next.js, React, TypeScript, Node.js and PostgreSQL, with React Native for mobile apps. The full list is in the technology stack above.",
  },
];

/* ------------------------------------------------------------------
   Contact form options
------------------------------------------------------------------- */

export const projectTypes: readonly string[] = [
  ...services.map((service) => service.title),
  "Not sure yet",
];

export const timelines: readonly string[] = [
  "As soon as possible",
  "Within 1 to 3 months",
  "Within 3 to 6 months",
  "Flexible or not sure yet",
];

type MailtoPrefill = Partial<
  Record<"name" | "projectType" | "timeline" | "budget" | "message", string>
>;

/** mailto: link, optionally prefilled from the contact form (used as a fallback). */
export function mailtoHref(prefill: MailtoPrefill = {}): string {
  const subject = encodeURIComponent("Project enquiry");
  const body = encodeURIComponent(
    [
      "Hi Tevonax,",
      "",
      `What we are building: ${(prefill.message ?? "").slice(0, 1200)}`,
      "",
      `Project type: ${prefill.projectType ?? ""}`,
      `Timeline: ${prefill.timeline ?? ""}`,
      `Budget range (optional): ${prefill.budget ?? ""}`,
      "",
      "Thanks,",
      prefill.name ?? "",
    ].join("\n"),
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

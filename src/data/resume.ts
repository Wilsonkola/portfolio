export interface Experience {
  company: string;
  parentCompany?: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  dates: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Volunteer {
  org: string;
  role?: string;
  bullets: string[];
}

export interface Stat {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export const personalInfo = {
  name: "Wilson Kola",
  title: "CSPO Certified Product Owner",
  tagline:
    "Turning user insights into impactful product strategies at enterprise scale.",
  email: "willson.kola@gmail.com",
  phone: "+1 (469) 636-6454",
  linkedin: "https://linkedin.com/in/wilsonkola",
  location: "Dallas, TX",
  photo: "/wilson_profile.jpg",
};

export const summary =
  "I'm an outcome-driven Product Owner with a passion for building user-centric, data-driven solutions. From co-founding a media company in Hyderabad to earning my Master's at the University of North Texas, I've followed a path fueled by curiosity and impact. Today, I work at enterprise scale — shipping loyalty programs, customer ticketing systems, and engagement features across 2,000+ retail stores. I turn complex business problems into clear product strategies that drive revenue, adoption, and operational efficiency.";

export const stats: Stat[] = [
  {
    value: "$5M+",
    numericValue: 5,
    prefix: "$",
    suffix: "M+",
    label: "Incremental Revenue Driven",
  },
  {
    value: "2,000+",
    numericValue: 2000,
    prefix: "",
    suffix: "+",
    label: "Stores Impacted",
  },
  {
    value: "688K+",
    numericValue: 688,
    prefix: "",
    suffix: "K+",
    label: "Active Customers Served",
  },
  {
    value: "70,000+",
    numericValue: 70000,
    prefix: "",
    suffix: "+",
    label: "Customer Interactions Created",
  },
];

export const experiences: Experience[] = [
  {
    company: "Upbound Group",
    parentCompany: "Rent-A-Center",
    title: "Product Owner",
    location: "Dallas, TX",
    dates: "Jun 2025 — Jan 2026",
    bullets: [
      "Led end-to-end development of a Brand new Loyalty Program (Diamond/Platinum/Gold) and built a fully configurable Promo Builder, driving $5M+ in incremental revenue across 2,000+ stores.",
      "Owned and launched an in-house Customer Ticketing System, enabling agents to manage 10,000 customer inquiries per month, resulting in $500K annual cost savings.",
      "Championed the launch of a customer engagement reminder feature, introducing an intelligent pop-up that prompts coworkers to initiate timely conversations, resulting in 70,000+ additional interactions across 1,800+ stores.",
      "Eliminated a recurring $0.30 cost per agreement by removing unnecessary verification steps, delivering significant annual savings across a base of 688K+ active customers.",
      "Accelerated product delivery by leveraging AI tools for rapid prototyping, UX workflows, PRDs, and user stories, reducing design turnaround time from days to hours.",
    ],
  },
  {
    company: "U-Stor Midstates Management Inc",
    title: "Product Manager",
    location: "",
    dates: "Aug 2024 — Jun 2025",
    bullets: [
      "Led competitive and market analysis to identify a strategic opportunity, enabling the launch of a new initiative that expanded market presence in a saturated category.",
      "Identified and segmented target customers through market research and behavioral analysis, driving a 13% increase in qualified leads.",
      "Redesigned the user experience using data-driven insights, significantly reducing user drop-off rates and improving task completion efficiency.",
    ],
  },
  {
    company: "Kraftsmen Media",
    title: "Co-Founder",
    location: "Hyderabad, India",
    dates: "Jul 2019 — Aug 2022",
    bullets: [
      "Fostered and built a thriving community, contributing to a 13% rise in profits through engagement and collaboration.",
      "Conducted competitor and customer satisfaction research, uncovering insights behind a 43% CSAT and identifying clear improvement opportunities.",
      "Designed and executed marketing strategies, driving a 30% increase in client acquisition.",
      "Developed strategic business operations, resulting in the successful launch of a new product and ensuring long-term sustainability.",
    ],
  },
  {
    company: "University of North Texas",
    title: "AV Tech",
    location: "Denton, TX",
    dates: "Jan 2023 — May 2024",
    bullets: [
      "Gathered and analyzed AV requirements from customers and supervisors to provide tailored technical solutions.",
      "Optimized event experiences by setting up, operating, and troubleshooting AV equipment.",
      "Contributed to product improvements by identifying and recommending AV equipment upgrades.",
    ],
  },
];

export const skills = {
  "Product Management": [
    "Agile",
    "Scrum",
    "User Research",
    "A/B Testing",
    "Usability Testing",
    "Prototyping",
    "AI-Driven Workflows",
  ],
  Tools: ["Jira", "Confluence", "Figma", "Tableau", "MS Office"],
  Technical: ["SQL", "HTML/CSS", "Data Analysis"],
  Leadership: [
    "Cross-Functional Collaboration",
    "Product Strategy",
    "Roadmapping",
    "Backlog Grooming",
    "Stakeholder Management",
  ],
};

export const education: Education[] = [
  {
    school: "University of North Texas",
    degree: "Master of Science in Information Systems & Technologies",
    location: "Denton, TX",
    dates: "Aug 2023 — May 2024",
  },
  {
    school: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology in Information Technology",
    location: "Hyderabad, India",
    dates: "Jun 2016 — Sep 2020",
  },
];

export const certifications: Certification[] = [
  { name: "CSPO Certified", issuer: "Scrum Alliance" },
  { name: "Product Management Basics" },
  { name: "Databricks Generative AI Fundamentals", issuer: "Databricks" },
  {
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
  },
];

export const volunteer: Volunteer[] = [
  {
    org: "Toastmasters Plano",
    bullets: [
      "Active member demonstrating ownership in leadership development, communication excellence, and continuous personal growth.",
    ],
  },
  {
    org: "Swagath",
    role: "Planning Committee & Head of Media & Marketing",
    bullets: [
      "Supported international students with emotional support, guidance, and cultural transition assistance.",
      "Led planning and execution of live events; designed marketing campaigns driving significant growth in attendance.",
    ],
  },
  {
    org: "Servant International",
    role: "Project Coordinator",
    bullets: [
      "Led a team of five in implementing Salesforce CRM, collaborating with business stakeholders to gather requirements.",
    ],
  },
];

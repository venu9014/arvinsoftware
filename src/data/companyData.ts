export interface Project {
  id: string;
  name: string;
  status: 'Ongoing' | 'Completed' | 'In Planning';
  category: string;
  badge: string;
  gradient: string;
  placeholderText: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  category: 'Web' | 'Mobile' | 'Enterprise' | 'Design' | 'Infrastructure' | 'Emerging Tech';
  features: string[];
  isProposed: boolean;
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Databases' | 'Cloud & DevOps' | 'Tools';
  icon: string;
  description: string;
}

export interface ContactPerson {
  name: string;
  phoneDisplay: string;
  phoneRaw: string;
  roleHint?: string;
}

export const COMPANY_INFO = {
  name: 'ArvinSoftware',
  tagline: 'Turning Ideas Into Digital Reality.',
  heroHeadline: 'Turning Ideas Into Digital Reality.',
  heroDescription:
    'We transform ideas into powerful digital experiences through thoughtful design, modern technologies, and innovative software solutions.',
  aboutPreview:
    'ArvinSoftware is a forward-thinking software development company dedicated to engineering modern web, mobile, and custom digital solutions. We partner with founders, businesses, and enterprises to craft high-impact software experiences that combine elegant architecture with intuitive user design.',
  email: 'venugopalreddyc.in@gmail.com',
  contacts: [
    {
      name: 'Venugopal Reddy',
      phoneDisplay: '9014194696',
      phoneRaw: '9014194696',
    },
    {
      name: 'Venkatesh Shetty',
      phoneDisplay: '63632 67322',
      phoneRaw: '6363267322',
    },
  ] as ContactPerson[],
  // WhatsApp country prefix is intentionally configurable and links remain unconfirmed
  // until explicit international country code is established per Phase 1 scope.
  whatsAppConfig: {
    countryPrefix: '', // e.g., '+91' once verified
    isLive: false,
    inactiveNotice: 'WhatsApp direct connection requires international dialing prefix confirmation.',
  },
  currencyConfig: {
    currency: 'Indian Rupee',
    symbol: '₹',
    code: 'INR',
    locale: 'en-IN',
    defaultMarket: 'India',
  },
  ctaHeadline: "Have an Idea? Let's Build Something Amazing.",
  copyright: `© ${new Date().getFullYear()} ArvinSoftware. All rights reserved.`,
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Technologies', href: '/technologies' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'wowbus',
    name: 'WOWBUS',
    status: 'Ongoing',
    category: 'Digital Mobility & Fleet Solution',
    badge: 'In Active Development',
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    placeholderText: 'Neutral Branded Placeholder — Details, metrics, and architecture previews will be showcased upon release.',
  },
  {
    id: 'madams-chocklets',
    name: 'Madams Chocklets',
    status: 'Ongoing',
    category: 'Commercial Brand & Commerce Platform',
    badge: 'In Active Development',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-500',
    placeholderText: 'Neutral Branded Placeholder — Project specifications and visual previews will be published once Phase 1 development completes.',
  },
];

export const PROPOSED_SERVICES: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription:
      'High-performance, search-optimized responsive websites built with modern frameworks and glassmorphism design aesthetics.',
    iconName: 'Globe',
    category: 'Web',
    features: ['Responsive Layouts', 'Fast Loading Times', 'SEO Optimized Architecture', 'Clean Semantic HTML'],
    isProposed: true,
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    shortDescription:
      'Scalable, secure, and interactive single-page and progressive web applications engineered for heavy operational workflows.',
    iconName: 'Layout',
    category: 'Web',
    features: ['Dynamic Client Portals', 'State Management', 'Real-time Synchronization', 'Modular Component Systems'],
    isProposed: true,
  },
  {
    id: 'mobile-application-development',
    title: 'Mobile Application Development',
    shortDescription:
      'Cross-platform mobile applications delivering native-feel performance and fluid touch interactions for iOS and Android.',
    iconName: 'Smartphone',
    category: 'Mobile',
    features: ['Cross-platform Codebase', 'Native Device Integrations', 'Offline Capabilities', 'Optimized Battery Usage'],
    isProposed: true,
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription:
      'Bespoke digital systems and workflows designed from the ground up to solve precise business challenges.',
    iconName: 'Code2',
    category: 'Enterprise',
    features: ['Custom Business Logic', 'Scalable Architectures', 'Legacy Modernization', 'Automated Workflows'],
    isProposed: true,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription:
      'Modern, user-centered interface design, glassmorphism design systems, wireframes, and interactive design prototypes.',
    iconName: 'Palette',
    category: 'Design',
    features: ['Design Systems & Tokens', 'Interactive Prototyping', 'Accessibility Compliance', 'Micro-interactions'],
    isProposed: true,
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    shortDescription:
      'Reliable, conversion-focused online retail stores featuring secure checkout pipelines, catalog management, and order tracking.',
    iconName: 'ShoppingBag',
    category: 'Web',
    features: ['Product Catalog Systems', 'Secure Checkout Flows', 'Order Lifecycle Tracking', 'Mobile Shopping UX'],
    isProposed: true,
  },
  {
    id: 'backend-api-development',
    title: 'Backend & API Development',
    shortDescription:
      'Resilient server-side architectures, RESTful endpoints, GraphQL schemas, and microservice communication backbones.',
    iconName: 'Server',
    category: 'Infrastructure',
    features: ['REST & GraphQL APIs', 'Role-Based Access Control', 'High Concurrency Handling', 'Logging & Telemetry'],
    isProposed: true,
  },
  {
    id: 'database-solutions',
    title: 'Database Solutions',
    shortDescription:
      'Structured relational and NoSQL database schemas, indexing strategies, data normalization, and backup planning.',
    iconName: 'Database',
    category: 'Infrastructure',
    features: ['Schema Optimization', 'Data Integrity Rules', 'High-Speed Query Indexing', 'Replication Architectures'],
    isProposed: true,
  },
  {
    id: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    shortDescription:
      'Intelligent workflow automations, LLM integrations, document parsing, and machine learning pipelines.',
    iconName: 'Sparkles',
    category: 'Emerging Tech',
    features: ['LLM & API Integrations', 'Smart Automated Pipelines', 'Contextual Search Systems', 'Predictive Analysis'],
    isProposed: true,
  },
  {
    id: 'software-maintenance',
    title: 'Software Maintenance',
    shortDescription:
      'Continuous stability monitoring, bug patching, performance profiling, and tech debt remediation.',
    iconName: 'Wrench',
    category: 'Enterprise',
    features: ['Security Patching', 'Performance Tuning', 'Code Refactoring', 'Regular Dependency Upgrades'],
    isProposed: true,
  },
];

export const PROPOSED_TECHNOLOGIES: Technology[] = [
  { name: 'HTML5', category: 'Frontend', icon: 'Code', description: 'Semantic, accessible document structure for modern browsers.' },
  { name: 'CSS3 / Tailwind', category: 'Frontend', icon: 'Palette', description: 'Utility-first modern styling, responsive layouts, and glassmorphism effects.' },
  { name: 'JavaScript (ESNext)', category: 'Frontend', icon: 'FileCode', description: 'Core web scripting standard powering dynamic client-side interactions.' },
  { name: 'React', category: 'Frontend', icon: 'Layers', description: 'Component-based library for crafting interactive, reactive user interfaces.' },
  { name: 'Next.js', category: 'Frontend', icon: 'Zap', description: 'Production React framework with App Router, SSR, and optimal static generation.' },
  { name: 'Node.js', category: 'Backend', icon: 'Server', description: 'Event-driven JavaScript runtime powering high-throughput asynchronous services.' },
  { name: 'Python', category: 'Backend', icon: 'Terminal', description: 'Versatile scripting language suited for data processing, APIs, and AI integrations.' },
  { name: 'Java', category: 'Backend', icon: 'Cpu', description: 'Robust, enterprise-grade typed language for high-concurrency systems.' },
  { name: 'PHP', category: 'Backend', icon: 'Globe2', description: 'Battle-tested server language powering web engines and dynamic content.' },
  { name: 'Flutter', category: 'Mobile', icon: 'Smartphone', description: 'Cross-platform UI toolkit compiling to natively styled mobile experiences.' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'Database', description: 'Advanced open-source relational database known for reliability and complex queries.' },
  { name: 'MySQL', category: 'Databases', icon: 'HardDrive', description: 'Widely adopted relational database with proven read-heavy throughput.' },
  { name: 'MongoDB', category: 'Databases', icon: 'Boxes', description: 'Flexible document-oriented NoSQL database for rapid iterative schema development.' },
  { name: 'AWS', category: 'Cloud & DevOps', icon: 'Cloud', description: 'Comprehensive cloud infrastructure spanning compute, storage, and networking.' },
  { name: 'Firebase', category: 'Cloud & DevOps', icon: 'Flame', description: 'Rapid application backend platform with real-time sync and managed services.' },
  { name: 'Docker', category: 'Cloud & DevOps', icon: 'Box', description: 'Containerization standard ensuring reproducible environments from dev to prod.' },
  { name: 'Git', category: 'Tools', icon: 'GitBranch', description: 'Distributed version control system facilitating collaborative development workflows.' },
];

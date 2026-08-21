export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  thumbnail: string;
  bannerImage?: string;
  client: string;
  role: string;
  tools: string[];
  timeline: string;
  body: string;
  intro: string;
  challenge: string;
  approach: string;
  solution: string;
  impactMetrics: { value: string; label: string }[];
  galleryImages: { url: string; caption: string }[];
  figmaEmbedUrl?: string;
  liveUrl?: string;
  demoCredentials?: { role: string; email: string; password: string }[];
  liveProjectLinks?: { name: string; url: string; description: string }[];
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  content: string[];
}

export const projects: Project[] = [
  // 1. Gatecode OMS (LIVE PRODUCTION SYSTEM - http://gatecode.net/)
  {
    slug: "office-management-software",
    title: "Gatecode OMS — Office Management Software",
    subtitle: "Live functional 4-in-1 enterprise suite connecting Admin, Employee, Company, and Branch operations in real-time.",
    category: "Admin Panel / Multi-Dashboard",
    thumbnail: "/projects/gatecode-oms/live-dashboard.jpg",
    bannerImage: "/projects/gatecode-oms/live-dashboard.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "UI/UX Architect",
    tools: ["Figma", "Admin Panel UX", "Design Systems", "Component Libraries", "Information Architecture"],
    timeline: "2026",
    body: "Architected 4 interconnected dashboards (Admin, Employee, Company, Branch) sharing a unified design token system from initial discovery through developer handoff.",
    intro: "Gatecode OMS is a live, production-deployed enterprise management system designed to coordinate employee attendance, branch telemetry, payroll approvals, and client project deliverables across organizational hierarchies.",
    challenge: "Ensuring consistent component reuse across 4 different user privileges while catering to distinct functional needs (e.g. employee leave requests vs. company-wide payroll approvals).",
    approach: "Designed a comprehensive Figma component library with variants for data tables, filtering toolbars, permission matrices, and activity logs. Standardized spacing, typography, and status badges.",
    solution: "A live, seamlessly linked multi-dashboard suite where organizational hierarchies, branch telemetry, attendance logs, and corporate billing synchronize in real-time.",
    liveUrl: "http://gatecode.net/",
    demoCredentials: [
      { role: "Administrator", email: "admin@gmail.com", password: "password" },
      { role: "UI/UX Designer", email: "geeta@gmail.com", password: "password" },
      { role: "Operations Lead", email: "harsh@gmail.com", password: "password" },
      { role: "Developer", email: "animeshj720@gmail.com", password: "password" },
    ],
    impactMetrics: [
      { value: "Live", label: "gatecode.net" },
      { value: "4-in-1", label: "Interconnected Dashboards" },
      { value: "100+", label: "Reusable Components" },
      { value: "Zero", label: "Handoff Ambiguity" },
    ],
    galleryImages: [
      { url: "/projects/gatecode-oms/live-dashboard.jpg", caption: "Gatecode OMS main executive dashboard with real-time workforce & branch telemetry." },
      { url: "/projects/gatecode-oms/attendance-records.jpg", caption: "Live employee attendance logs, check-in timestamps, and biometric presence tracking." },
      { url: "/projects/gatecode-oms/leave-management.jpg", caption: "Leave requests review interface with multi-tier approval workflows and balance ledgers." },
      { url: "/projects/gatecode-oms/payroll-approvals.jpg", caption: "Monthly salary disbursement pipeline, statutory deductions, and payment authorization." },
      { url: "/projects/gatecode-oms/company-management.jpg", caption: "Multi-company hierarchy and branch department allocation controls." },
      { url: "/projects/gatecode-oms/employee-onboarding.jpg", caption: "Employee onboarding form modal with document verification and role assignment." },
      { url: "/projects/gatecode-oms/role-permissions.jpg", caption: "Granular role-based access control (RBAC) permission matrix and audit logs." },
      { url: "/projects/gatecode-oms/system-settings.jpg", caption: "System preferences, shift timings, and company policy configuration." },
      { url: "/projects/gatecode-oms/branch-attendance.jpg", caption: "Branch-wise workforce telemetry and daily presence breakdown." },
      { url: "/projects/gatecode-oms/live-full-dashboard.jpg", caption: "Full-page administrative telemetry view of live OMS platform." },
      { url: "/projects/office-suite.jpg", caption: "Gatecode OMS multi-dashboard overview on desktop monitor." },
      { url: "/projects/gatecode-oms/enterprise-workspace.jpg", caption: "Live workspace & attendance telemetry management environment." },
      { url: "/projects/gatecode-oms/fintech-payment.jpg", caption: "Company financial performance & payroll processing telemetry." },
      { url: "/projects/gatecode-oms/gatecode-logo.png", caption: "Gatecode Technologies vector brand identity." },
    ],
    featured: true,
  },

  // 2. SDPT Tech (LIVE CORPORATE WEBSITE)
  {
    slug: "sdpt-tech",
    title: "SDPT Tech — Enterprise IT & Cloud Solutions",
    subtitle: "Live corporate website for full-service IT engineering, custom hardware building, and cloud infrastructure.",
    category: "Web Design / Corporate",
    thumbnail: "/projects/sdpt/live-website-screenshot.jpg",
    bannerImage: "/projects/sdpt/live-website-screenshot.jpg",
    client: "SDPT Tech",
    role: "Lead UI/UX & Web Designer",
    tools: ["Figma", "Responsive Web Design", "HTML/CSS", "Design Systems"],
    timeline: "2026",
    body: "Designed and delivered the official corporate website for SDPT Tech, featuring interactive service discovery, hardware catalog, workstation configurator, and cloud IT services.",
    intro: "SDPT Tech is an enterprise IT solutions provider specializing in cloud computing, managed infrastructure, and custom workstations. The website translates technical capabilities into an engaging user experience.",
    challenge: "Organizing diverse enterprise service verticals (cloud migration, cybersecurity, streaming setups, workstation PCs) into a clean, modern corporate web presence.",
    approach: "Established modern dark-themed typography, 3D technology visual motifs, responsive grid systems, and high-conversion client inquiry funnels.",
    solution: "A live, fully responsive corporate website with high-performance animations, structured service catalogs, and integrated client consultation forms.",
    liveUrl: "https://sdpttech.com/",
    impactMetrics: [
      { value: "Live", label: "sdpttech.com" },
      { value: "100%", label: "Responsive Design" },
      { value: "Custom", label: "IT Service Catalog" },
      { value: "Fast", label: "Production Web" },
    ],
    galleryImages: [
      { url: "/projects/sdpt/live-website-screenshot.jpg", caption: "Actual desktop browser screenshot of live website (https://sdpttech.com)." },
      { url: "/projects/sdpt/workstation.png", caption: "SDPT Tech enterprise workstation and cloud computing portal." },
      { url: "/projects/sdpt/streaming.png", caption: "SDPT Tech streaming setup and IT services showcase." },
      { url: "/projects/sdpt/pc.webp", caption: "SDPT Tech custom PC builder and gaming workstation configurator." },
      { url: "/projects/sdpt/pc2.webp", caption: "SDPT Tech hardware catalog and component matrix." },
      { url: "/projects/sdpt/esports.png", caption: "SDPT Tech esports and hardware performance portal." },
    ],
    featured: true,
  },

  // 3. Gatexpay (LIVE PAYMENT GATEWAY WEBSITE)
  {
    slug: "gatexpay-payment-gateway",
    title: "Gatexpay — Payment Gateway Platform",
    subtitle: "Live high-trust fintech payment gateway web platform with merchant checkout flows, instant API settlement, and compliance security.",
    category: "Fintech / Payment Gateway",
    thumbnail: "/projects/gatexpay/live-hero.jpg",
    bannerImage: "/projects/gatexpay/live-hero.jpg",
    client: "Gatexpay (Gatecode Technologies)",
    role: "UI/UX & Payment Flow Designer",
    tools: ["Figma", "Responsive Web Design", "Fintech Gateway UX", "Merchant Onboarding", "Live Web Platform"],
    timeline: "2026",
    body: "Designed and shipped the live web platform for Gatexpay, including merchant registration, dynamic QR checkout widgets, developer API documentation, and transaction settlement logs.",
    intro: "Gatexpay is a live, production-deployed fintech payment gateway web platform facilitating high-volume card, UPI, and netbanking transactions for digital merchants across India.",
    challenge: "Creating a trustworthy checkout UI that instills confidence during transactions while providing merchant analytics that simplify daily reconciliations.",
    approach: "Established brand color palettes, compliance badges, responsive desktop-to-mobile checkout dialogs, and an intuitive merchant management dashboard.",
    solution: "A live, fully operational web platform with high-conversion checkout flows, instant QR payments, and comprehensive merchant settlement portals.",
    liveUrl: "https://www.gatexpay.in/",
    impactMetrics: [
      { value: "Live", label: "gatexpay.in" },
      { value: "100%", label: "Live Payment System" },
      { value: "PCI-DSS", label: "Trust Architecture" },
      { value: "Real-Time", label: "Settlement Analytics" },
    ],
    galleryImages: [
      { url: "/projects/gatexpay/live-hero.jpg", caption: "Gatexpay official production landing page and payment processing engine (https://www.gatexpay.in)." },
      { url: "/projects/gatexpay/merchant-solutions.jpg", caption: "Gatexpay developer API integration and merchant settlement capabilities." },
      { url: "/projects/gatexpay/security-compliance.jpg", caption: "PCI-DSS compliance architecture and enterprise-grade encryption suite." },
      { url: "/projects/gatexpay/live-website-screenshot.jpg", caption: "Actual desktop browser screenshot of live website checkout flow." },
      { url: "/projects/gatexpay/img1.png", caption: "Gatexpay merchant payment infrastructure and gateway architecture." },
      { url: "/projects/gatexpay/img2.png", caption: "Live checkout session and QR scan authorization." },
      { url: "/projects/gatexpay/security.png", caption: "End-to-end encryption & compliance security infrastructure." },
      { url: "/projects/gatexpay/management.png", caption: "Merchant settlement dashboard and payout management." },
      { url: "/projects/gatexpay/process.png", caption: "3-step frictionless payment processing pipeline." },
      { url: "/projects/gatexpay/logo.png", caption: "Gatexpay vector identity mark." },
    ],
    featured: true,
  },

  // 4. Gatecode Technologies (LIVE AGENCY WEBSITE)
  {
    slug: "gatecode-technologies",
    title: "Gatecode Technologies — Agency Portal",
    subtitle: "Official agency web portal showcasing full-cycle product engineering, client case studies, and corporate capabilities.",
    category: "Web Design / Agency",
    thumbnail: "/projects/gatecode/corporate-home-hero.jpg",
    bannerImage: "/projects/gatecode/corporate-home-hero.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Responsive Web Design", "Brand Identity", "HTML/CSS"],
    timeline: "2026",
    body: "Designed the agency portal for Gatecode Technologies, showcasing product design case studies, tech stack capabilities, and client collaboration workflows.",
    intro: "Gatecode Technologies is a product engineering and digital innovation studio. The agency portal serves as the primary gateway for enterprise clients seeking custom digital products.",
    challenge: "Balancing sleek visual aesthetics with fast loading performance and clear conversion pathways for enterprise prospect inquiries.",
    approach: "Designed clean typography hierarchies, interactive service grids, project showcases, and responsive layouts across desktop and mobile.",
    solution: "A modern digital agency portal establishing strong market authority and driving high-value client leads.",
    liveUrl: "http://gatecode.net/",
    impactMetrics: [
      { value: "Live", label: "gatecode.net" },
      { value: "Agency", label: "Official Web Portal" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "B2B", label: "Lead Generation" },
    ],
    galleryImages: [
      { url: "/projects/gatecode/corporate-home.jpg", caption: "Gatecode Technologies official agency portal showcasing product engineering capabilities (http://gatecode.net)." },
      { url: "/projects/gatecode/contact-inquiry.jpg", caption: "Client consultation and enterprise project estimation lead funnel." },
      { url: "/projects/gatecode/digital-marketing.jpg", caption: "Digital marketing and growth strategy services portal." },
      { url: "/projects/gatecode/live-website-screenshot.jpg", caption: "Actual desktop browser screenshot of live agency website (http://gatecode.net)." },
      { url: "/projects/business-sites.jpg", caption: "Multi-screen Behance showcase across desktop, laptop, and mobile devices." },
    ],
    featured: true,
  },

  // 5. Rubaru Application (FIGMA MOBILE APP - ALL SCREENS)
  {
    slug: "dating-mobile-app",
    title: "Rubaru — Dating & Social Networking App",
    subtitle: "Modern social discovery and relationship platform in Figma featuring gesture matchmaking, real-time messaging, and Scam Protection Center.",
    category: "Mobile App",
    thumbnail: "/projects/rubaru/cover.jpg",
    bannerImage: "/projects/rubaru/cover.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "Lead Mobile UI/UX Designer",
    tools: ["Figma", "Mobile App UI", "Interaction Design", "Trust & Safety UX", "Design Systems"],
    timeline: "2026",
    body: "Crafted an end-to-end mobile dating and social experience with 50+ screens prioritizing authentic profile discovery, delightful gesture interactions, real-time chat, and proactive safety verification.",
    intro: "Rubaru is a next-generation dating and social discovery mobile platform designed in Figma to foster genuine connections while maintaining uncompromised user safety. The app combines fluid discovery cards, interest-based matching, and high-trust verification tools.",
    challenge: "Balancing playful, dopamine-friendly social engagement (swipes, reels, polls) with enterprise-grade privacy protection, anti-scam advisories, and instant report mechanisms.",
    approach: "Designed 50+ mobile application screens in Figma including multistep onboarding (passions, identity prompts), swipe matching, threaded chat rooms, social reels, and a dedicated Scam Protection Center.",
    solution: "A comprehensive iOS & Android design in Figma with seamless onboarding, rich profile carousels, instant photo-verified badges, robust report/block flows, and interactive conversational threads.",
    impactMetrics: [
      { value: "50+", label: "Figma App Screens" },
      { value: "Fluid", label: "Gesture Matching" },
      { value: "100%", label: "Scam Protection UI" },
      { value: "Real-Time", label: "Chat & Poll Systems" },
    ],
    galleryImages: [
      { url: "/projects/rubaru/cover.jpg", caption: "Rubaru mobile UI ecosystem — profile cards, onboarding, and social reels in Figma." },
      { url: "/projects/rubaru/Search Partners.png", caption: "Search Partners discovery flow with location-based filtering and passion tags." },
      { url: "/projects/rubaru/Chats _ Reels.png", caption: "Social video reels and interactive discovery feed." },
      { url: "/projects/rubaru/Chats _ User Chat.png", caption: "Real-time user direct messaging with threaded conversations." },
      { url: "/projects/rubaru/Chats _ User Chat _ Poll.png", caption: "Interactive polling system within direct user chat." },
      { url: "/projects/rubaru/Chats _ User Chat _ Message Option.png", caption: "Message reaction tray, emoji drawer, and quote-reply options." },
      { url: "/projects/rubaru/Chats _ User Chat _ Image.png", caption: "Multimedia photo attachments with high-res fullscreen preview." },
      { url: "/projects/rubaru/Chats _ Conversation List.png", caption: "Active conversations ledger with unread badges and online status." },
      { url: "/projects/rubaru/Scam Protection Center.png", caption: "Dedicated Scam Protection Center and Community Safety verification suite." },
      { url: "/projects/rubaru/Safety Notice.png", caption: "Proactive safety advisory, security tips, and privacy alerts." },
      { url: "/projects/rubaru/Passions.png", caption: "Interest and passion tags selection onboarding screen." },
      { url: "/projects/rubaru/I am.png", caption: "User identity and matchmaking gender preferences onboarding step." },
      { url: "/projects/rubaru/Number.png", caption: "Secure phone number authentication and carrier validation." },
      { url: "/projects/rubaru/Code.png", caption: "Instant OTP 6-digit passcode verification dialog." },
      { url: "/projects/rubaru/Onboarding 5.png", caption: "User onboarding stage 5 — personality preferences and dating intentions." },
      { url: "/projects/rubaru/Onboarding 6.png", caption: "User onboarding stage 6 — lifestyle habits and distance radius filter." },
      { url: "/projects/rubaru/Onboarding 8.png", caption: "User onboarding stage 8 — profile bio and primary photo selection." },
      { url: "/projects/rubaru/My Points.png", caption: "Gamified engagement rewards and loyalty points dashboard." },
      { url: "/projects/rubaru/Profile details.png", caption: "Detailed user profile view with verified identity badge." },
      { url: "/projects/rubaru/Edit Profile.png", caption: "Profile customization and photo reordering drawer." },
      { url: "/projects/rubaru/Community Guidelines.png", caption: "Community standards and safety trust policies." },
      { url: "/projects/rubaru/Calls _ Incoming Call.png", caption: "VoIP audio and video calling interface with end-to-end privacy." },
      { url: "/projects/rubaru/Map.png", caption: "Interactive proximity location map for nearby partner discovery." },
      { url: "/projects/rubaru/Friends.png", caption: "Social connections, mutual friends, and companion network." },
      { url: "/projects/rubaru/Following and Followers.png", caption: "Followers ledger and social connection timeline." },
    ],
    featured: true,
  },

  // 6. Ecobin Industrial (FIGMA WEB DESIGN FROM ZIP)
  {
    slug: "ecobin-industrial-services",
    title: "Ecobin — Industrial & Environmental Solutions",
    subtitle: "Enterprise web platform for commercial drainage, water tank sanitization, grease trap cleaning, and quote estimation.",
    category: "Enterprise / Web Design",
    thumbnail: "/projects/ecobin/cover.jpg",
    bannerImage: "/projects/ecobin/home.jpg",
    client: "Ecobin Environmental Services (Gatecode Technologies)",
    role: "UI/UX & Web Designer",
    tools: ["Figma", "Responsive Web Design", "Industrial B2B UX", "Service Architecture", "Quote Funnel"],
    timeline: "2026",
    body: "Delivered a comprehensive multi-service enterprise website for industrial waste management, high-pressure jetting, AC duct cleaning, and automated quote requests.",
    intro: "Commercial and municipal clients require dependable, fast-response environmental hygiene services. Ecobin provides specialized commercial cleaning spanning grease traps, lift stations, drainage tankers, and water tanks.",
    challenge: "Presenting over 10 distinct heavy-duty industrial cleaning services clearly without overwhelming facility managers, while driving high-conversion quote requests.",
    approach: "Structured dedicated landing architectures for each service (AC Duct, Drainage, Grease Trap, Root Cutting), paired with high-impact visual banners, compliance badges, and emergency hotline integration.",
    solution: "A high-conversion corporate web portal with streamlined service catalogs, transparent equipment capability overviews, and an interactive 'Request a Quote' lead generator.",
    impactMetrics: [
      { value: "10+", label: "Specialized Services" },
      { value: "1-Click", label: "Quote Request Flow" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "B2B", label: "Commercial Portals" },
    ],
    galleryImages: [
      { url: "/projects/ecobin/cover.jpg", caption: "Ecobin homepage showcase with hero banner, service matrix, and quote CTA in Figma." },
      { url: "/projects/ecobin/home.jpg", caption: "Ecobin full high-resolution website layout." },
      { url: "/projects/business-sites.jpg", caption: "Corporate website responsive device ecosystem." },
    ],
    featured: true,
  },

  // 7. Damru By Namo (LIVE WEBSITE & FIGMA PROTOTYPE)
  {
    slug: "damru-by-namo",
    title: "Damru By Namo — Luxury Dining Web & Brand UI",
    subtitle: "Live restaurant website and interactive reservation experience celebrating Indian cultural heritage and gourmet dining.",
    category: "Web Design / Branding",
    thumbnail: "/projects/damru/live-hero.jpg",
    bannerImage: "/projects/damru/live-hero.jpg",
    client: "Damru By Namo (Gatecode Technologies)",
    role: "Lead UI/UX & Brand Designer",
    tools: ["Figma", "Interactive Prototyping", "Brand Identity", "Design Systems", "Adobe Illustrator"],
    timeline: "2026",
    body: "Designed an evocative digital ecosystem celebrating Indian cultural heritage, culinary storytelling, interactive table booking, and seamless chef specials discovery.",
    intro: "Damru By Namo is a modern culinary brand blending sacred Indian traditions with contemporary hospitality. The project required translating rich cultural symbolism, tactile ambiance, and gourmet dining into a captivating, high-conversion web platform.",
    challenge: "Creating an ambiance-first web design that conveys the restaurant's acoustic aesthetic and gourmet aroma while keeping menu navigation, private dining inquiries, and table reservations effortless across all device viewports.",
    approach: "Developed custom vector iconography derived from Indian classical elements, rich earth-and-gold color palettes, smooth scroll storytelling, and a modular component framework in Figma.",
    solution: "A responsive, immersive web experience featuring interactive menu discovery, visual ambiance tours, 1-click table reservations, and comprehensive brand guidelines.",
    liveUrl: "https://damrubynamo.com/",
    figmaEmbedUrl: "https://embed.figma.com/design/7kQG75VXD4vecbehE8CbPW/Damru-By-Namo--Copy-?node-id=2005-2&embed-host=share",
    impactMetrics: [
      { value: "Live", label: "Web Platform" },
      { value: "Figma", label: "Live Interactive Prototype" },
      { value: "100%", label: "Responsive Breakpoints" },
      { value: "3 Steps", label: "Table Reservation Flow" },
    ],
    galleryImages: [
      { url: "/projects/damru/live-hero.jpg", caption: "Damru By Namo live website hero showcasing luxury culinary experience (https://damrubynamo.com)." },
      { url: "/projects/damru/dining-ambiance.jpg", caption: "Interactive dining ambiance tour and gourmet chef specials menu." },
      { url: "/projects/damru/full-website.jpg", caption: "Full interactive production website for luxury banquet and restaurant." },
      { url: "/projects/damru.jpg", caption: "Damru By Namo storefront and interactive menu explorer on laptop." },
      { url: "/projects/damru.svg", caption: "Damru By Namo vector branding mark and culinary menu architecture." },
      { url: "/projects/business-sites.jpg", caption: "Multi-device responsive mockup showcase across desktop, tablet, and mobile." },
    ],
    featured: true,
  },

  // 8. Kortya Pay (FIGMA MOBILE APP ONLY)
  {
    slug: "kortya-pay",
    title: "Kortya Pay — Fintech Mobile Wallet App",
    subtitle: "Figma mobile UI/UX design featuring instant QR scan-to-pay, multi-wallet balance, and biometric authorization.",
    category: "Mobile App",
    thumbnail: "/projects/kortya-pay.jpg",
    bannerImage: "/projects/kortya-pay.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "Lead Mobile UI/UX Designer",
    tools: ["Figma", "Mobile App UI", "QR & Wallet Flows", "Interaction Design", "iOS & Android"],
    timeline: "2026",
    body: "Designed consumer-first mobile payment and wallet experiences in Figma focusing on rapid onboarding, frictionless QR scanning, card balance management, and haptic feedback.",
    intro: "Kortya Pay is a mobile-first digital wallet application designed for seamless peer-to-peer and merchant QR payments on iOS and Android devices.",
    challenge: "Designing rapid one-handed scan-and-pay interactions while embedding robust multi-factor biometric authentication and transaction status confirmation in mobile viewport constraints.",
    approach: "Conducted ergonomic thumb-zone mapping for bottom-sheet interactions, designed instant tactile haptic states, and established clean visual hierarchy for receipt breakdowns in Figma.",
    solution: "A complete mobile app UI kit in Figma with instant QR scanning, multi-bank account linking, bill payment categories, and an encrypted transaction ledger.",
    impactMetrics: [
      { value: "Figma", label: "Mobile App Design" },
      { value: "Instant", label: "QR Scan & Pay" },
      { value: "3 Steps", label: "Frictionless Onboarding" },
      { value: "Secure", label: "Biometric Auth" },
    ],
    galleryImages: [
      { url: "/projects/kortya-pay.jpg", caption: "Kortya Pay mobile wallet dashboard with instant QR scanner and card stack in Figma." },
      { url: "/projects/trading.jpg", caption: "Integrated wallet and funding management interface." },
    ],
  },

  // 9. IndianShare Trading (FINTECH WEB APP)
  {
    slug: "indianshare-trading-platform",
    title: "IndianShare — Stock & Equity Trading Platform",
    subtitle: "Real-time stock and equity trading platform with advanced candlestick charting, wallet management, and dual themes.",
    category: "Fintech / Web App",
    thumbnail: "/projects/trading.jpg",
    bannerImage: "/projects/trading.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "UI/UX Designer",
    tools: ["Figma", "Fintech UX", "Candlestick Data Vis", "Dark/Light Theme", "High-Frequency UI"],
    timeline: "2026",
    body: "Created a high-performance trading platform interface featuring instant order placement, interactive technical indicators, portfolio analytics, and adaptive dark/light themes.",
    intro: "Active traders require sub-second market comprehension and zero-latency execution. IndianShare was engineered to deliver institutional-grade trading tools in a clean, accessible layout.",
    challenge: "Presenting high-frequency live market data, depth charts, open order books, and portfolio positions simultaneously without visual clutter or cognitive overload.",
    approach: "Leveraged fintech UX best practices, color-blind safe market signals (green/red indicators), modular dockable widgets, and a dedicated high-contrast dark theme optimized for multi-hour trading sessions.",
    solution: "An intuitive trading terminal featuring one-click buy/sell drawers, real-time margin calculators, customized watchlists, and comprehensive wallet transaction histories.",
    impactMetrics: [
      { value: "<0.3s", label: "Order Flow Speed" },
      { value: "Dual", label: "Dark & Light Themes" },
      { value: "Live", label: "Candlestick Charts" },
      { value: "Instant", label: "Wallet Settlement" },
    ],
    galleryImages: [
      { url: "/projects/trading.jpg", caption: "Real-time trading terminal with live candlestick chart and instant order panel on desktop monitor." },
      { url: "/projects/kortya-pay.jpg", caption: "Integrated wallet and funding management interface." },
    ],
    featured: true,
  },

  // 10. Microfinance Software (FINTECH DASHBOARD)
  {
    slug: "microfinance-software",
    title: "Microfinance Loan Management Platform",
    subtitle: "Data-intensive microfinance platform with KYC verification, CIBIL score analytics, and real-time portfolio dashboards.",
    category: "Fintech / Web App",
    thumbnail: "/projects/microfinance.jpg",
    bannerImage: "/projects/microfinance.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Fintech UX", "KYC & CIBIL Visualization", "Design Systems", "Responsive Web"],
    timeline: "2026",
    body: "Delivered an end-to-end design system for loan officer workflows, automated CIBIL credit scoring, customer KYC processing, and executive portfolio tracking.",
    intro: "Microfinance institutions handle high-volume loan applications where processing speed, regulatory compliance, and risk assessment are vital. This platform unites complex multi-branch lending workflows into a streamlined web interface.",
    challenge: "Organizing dense financial tables, multistep loan approval pipelines, and credit history scorecards into intuitive views that branch officers can operate quickly with minimal training.",
    approach: "Mapped the entire loan lifecycle from customer intake and document upload to verification and disbursement. Designed modular financial widgets, color-coded credit health indicators, and high-contrast data tables.",
    solution: "A responsive web application featuring real-time disbursement tracking, quick-action KYC approval drawers, and an executive dashboard summarizing portfolio yield and default metrics.",
    impactMetrics: [
      { value: "100%", label: "KYC Digital Flow" },
      { value: "Real-Time", label: "CIBIL Score Gauge" },
      { value: "10+", label: "Branch Portals" },
      { value: "End-to-End", label: "Loan Lifecycle" },
    ],
    galleryImages: [
      { url: "/projects/microfinance.jpg", caption: "KYC verification queue with integrated CIBIL credit score gauge on laptop." },
      { url: "/projects/office-suite.jpg", caption: "Financial metrics overview and branch disbursement pipeline." },
      { url: "/projects/services.jpg", caption: "Customer credit approval scorecard and document review portal." },
    ],
    featured: true,
  },

  // 11. Visa OMS (B2B SaaS)
  {
    slug: "visa-oms",
    title: "Visa OMS — Travel Visa Order Management",
    subtitle: "B2B order management and multi-tenant tracking platform built for international travel agencies and consolidators.",
    category: "B2B / Web App",
    thumbnail: "/projects/visa-oms.jpg",
    bannerImage: "/projects/visa-oms.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "UI/UX Designer",
    tools: ["Figma", "B2B SaaS", "Order Management UX", "Multi-Tenant Portals", "Responsive UI"],
    timeline: "2026",
    body: "Streamlined complex international visa application processes for travel agencies through multi-tenant onboarding, document review queues, and live embassy tracking.",
    intro: "Travel agents process hundreds of international visas daily across differing embassy regulations and strict deadlines. Visa OMS brings centralized order management to high-volume travel operations.",
    challenge: "Visualizing complex multi-stage visa requirements (embassy appointments, biometric submission, verification, stamping) across multiple global destinations.",
    approach: "Designed a kanban-style application pipeline, automated document checklist validations, and agency branch permission controls.",
    solution: "A robust B2B SaaS platform that cuts application processing time, prevents document errors, and notifies agents of embassy updates in real-time.",
    impactMetrics: [
      { value: "B2B", label: "Travel Agent Portal" },
      { value: "Multi-Tenant", label: "Agency Workflows" },
      { value: "Automated", label: "Document Verification" },
      { value: "Real-Time", label: "Embassy Status Tracker" },
    ],
    galleryImages: [
      { url: "/projects/visa-oms.jpg", caption: "Visa order management pipeline and global embassy application tracker on monitor." },
      { url: "/projects/services.jpg", caption: "Agent onboarding flow and centralized document verification queue." },
    ],
  },

  // 12. Professional Services (Vakilkaro)
  {
    slug: "professional-service-integration",
    title: "Professional Service Integration (Vakilkaro)",
    subtitle: "Multi-role marketplace connecting Advocates, Chartered Accountants (CAs), and Company Secretaries (CS) with clients.",
    category: "Marketplace / Web App",
    thumbnail: "/projects/services.jpg",
    bannerImage: "/projects/services.jpg",
    client: "Gatecode Technologies Pvt. Ltd.",
    role: "UI/UX Designer",
    tools: ["Figma", "User Flow Architecture", "Wireframing", "Multi-Role Dashboards", "Prototyping"],
    timeline: "2026",
    body: "Designed structured digital consultation workflows, role-specific professional portals, transparent fee structures, and real-time case tracking.",
    intro: "Finding and managing legal and corporate compliance experts is traditionally manual and fragmented. This platform bridges corporate clients with verified legal, tax, and compliance professionals in a unified workspace.",
    challenge: "Designing four distinct user perspectives (Client, Advocate, CA, CS) within one cohesive platform without fragmenting the navigation or brand identity.",
    approach: "Conducted user flow mapping across consultation booking, document sharing, and milestone billing. Created role-based dashboard architectures tailored to the daily workflow of legal practitioners and corporate clients.",
    solution: "A unified marketplace with role-filtered discovery, interactive case progress roadmaps, secure document lockers, and instant appointment scheduling.",
    impactMetrics: [
      { value: "4 Roles", label: "Client, Advocate, CA & CS" },
      { value: "1-Click", label: "Consultation Booking" },
      { value: "Live", label: "Case Status Tracker" },
      { value: "Secure", label: "Document Vault" },
    ],
    galleryImages: [
      { url: "/projects/services.jpg", caption: "Professional consultant dashboard with appointment booking and case progress tracker." },
      { url: "/projects/office-suite.jpg", caption: "Case management dashboard and document review portal." },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "vakilkaro-blog-ui",
    title: "Vakilkaro — Blog Page UI Design & Editorial Hierarchy",
    excerpt: "Designing a high-readability legal and compliance blog layout with structured typography, quick table of contents, and responsive reading flows.",
    date: "Feb 2026",
    readTime: "4 min read",
    category: "Content Design",
    coverImage: "/projects/services.jpg",
    content: [
      "Legal and corporate compliance topics can be dense and intimidating. When designing the editorial UI for Vakilkaro, the primary objective was optimizing scannability and reading comprehension.",
      "We implemented a sticky table of contents, high-contrast serif/sans-serif typography pairing, key-takeaway callout cards, and dynamic related-article recommendations.",
      "The resulting layout delivered a significant increase in average reading time and reduced bounce rates across desktop and mobile devices."
    ]
  },
  {
    slug: "branding-logo-design",
    title: "Branding & Logo Design Systems for Fast-Growing Startups",
    excerpt: "From vector geometry to comprehensive brand guideline books: crafting scalable logos and identity systems in Adobe Illustrator.",
    date: "Jan 2026",
    readTime: "5 min read",
    category: "Branding",
    coverImage: "/projects/damru.jpg",
    content: [
      "A strong brand identity is more than just a logo mark; it is a unified visual language that communicates credibility across digital apps, marketing websites, and corporate collateral.",
      "In our design process across multiple client brand identity projects (including Cocofina Sugar, Gatexpay, and Damru), we developed structured vector marks with strict clearspace rules, complementary color palettes, and production-ready SVG assets.",
      "Consistency across responsive breakpoints and dark/light environments ensures immediate brand recognition at every customer touchpoint."
    ]
  },
  {
    slug: "admin-panel-mobile-ui-systems",
    title: "Architecting Scalable UI Systems for Enterprise Admin Panels & Mobile Apps",
    excerpt: "Best practices for designing high-density dashboard layouts, role-based access flows, and unified component libraries in Figma.",
    date: "Dec 2025",
    readTime: "6 min read",
    category: "Design Systems",
    coverImage: "/projects/gatecode-oms/live-website-screenshot.jpg",
    content: [
      "Enterprise admin panels present unique UX challenges: massive data tables, granular permissions, multi-tiered filters, and multi-tenant operations.",
      "Drawing from our work on the 4-in-1 Office Management Suite and Visa OMS, we break down methods for establishing flexible Figma component libraries, auto-layout tokens, and accessible color-contrast systems.",
      "Standardizing table row heights, modal patterns, and action toolbars accelerates engineering handoff and ensures long-term UI consistency."
    ]
  }
];

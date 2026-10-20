export interface CandidateData {
  personal: {
    name: string;
    monogram: string;
    title: string;
    subHeadline: string;
    targetSectors: string[];
    summary: string;
    email: string;
    phone: string;
    location: string;
    relocation: {
      targetCities: string[];
      noticePeriod: string;
      visaStatus: string;
      openToRelocate: boolean;
    };
    linkedin: string;
    languages: {
      name: string;
      level: string;
      isNative?: boolean;
    }[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
    subtext: string;
  }[];
  strategicPillars: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    highlights: string[];
  }[];
  skills: {
    name: string;
    category: 'banking' | 'hr' | 'mba' | 'analytics' | 'revenue' | 'operations';
    categoryLabel: string;
    description: string;
    context: string;
  }[];
  categories: {
    id: 'all' | 'banking' | 'hr' | 'mba' | 'analytics' | 'revenue' | 'operations';
    label: string;
  }[];
  experience: {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    accountOrDept?: string;
    isPromotion?: boolean;
    promotionNote?: string;
    responsibilities: string[];
    achievements: string[];
    tools: string[];
  }[];
  caseStudies: {
    id: string;
    title: string;
    category: string;
    organization: string;
    summary: string;
    challenge: string;
    approach: string[];
    outcomes: string[];
    metrics: { label: string; value: string }[];
    technologies: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    specialization?: string;
    score?: string;
    highlights: string[];
  }[];
}

export const candidateData: CandidateData = {
  personal: {
    name: 'Mueez Baig',
    monogram: 'MB',
    title: 'MBA Graduate (Marketing & HR) | Banking & Corporate HR Professional',
    subHeadline: 'Client Relationship Management • Talent Operations • Business Administration',
    targetSectors: ['Banking & Financial Services', 'Corporate Human Resources', 'Business Operations'],
    summary:
      'MBA Graduate specializing in Marketing and Human Resource Management (Jain University, Bangalore) with a Bachelor of Business Administration in Management (Dayananda Sagar University, 7.01 CGPA). Bridges rigorous management acumen with high-stakes operational execution across premier accounts. Maintains a 10/10 quality assurance scorecard with 100% accuracy on high-complexity escalations for a major US retail account (Best Buy at [24]7.ai), with a track record of driving $60,000 in consultative peak revenue, achieving up to 90% quota overachievement, and maintaining 95% client retention. Actively pursuing opportunities in Banking & Financial Services (Relationship Management, Branch/Retail Banking Operations, Client Solutions) and Corporate Human Resources (Talent Acquisition, People Operations, HR Generalist) in the UAE (Dubai / Abu Dhabi) and India.',
    email: 'mueezbaig71@gmail.com',
    phone: '+91 9901342384',
    location: 'Bengaluru, India',
    relocation: {
      targetCities: ['Dubai', 'Abu Dhabi', 'UAE'],
      noticePeriod: '30 days',
      visaStatus: 'Visa sponsorship required',
      openToRelocate: true,
    },
    linkedin: 'https://www.linkedin.com/in/mueez-baig-61172a227',
    languages: [
      { name: 'English', level: 'Full Professional Proficiency' },
      { name: 'Urdu', level: 'Native', isNative: true },
      { name: 'Hindi', level: 'Professional Working Proficiency' },
      { name: 'Kannada', level: 'Professional Working Proficiency' },
    ],
  },

  metrics: [
    {
      value: '10/10',
      label: 'Audit Quality Score',
      description: '100% accuracy on high-complexity accounts & compliance queues',
      subtext: 'Zero compliance breaches on Best Buy process',
    },
    {
      value: '$60,000',
      label: 'Consultative Revenue',
      description: 'Generated through customer needs analysis & product guidance',
      subtext: 'High-speed conversion during peak commercial season',
    },
    {
      value: '+90%',
      label: 'Monthly Target Overachievement',
      description: 'Surpassed sales and revenue goals in retail operations',
      subtext: 'Reliance Trends department performance',
    },
    {
      value: '95%',
      label: 'Customer Retention Rate',
      description: 'Sustained through personalized service & stakeholder trust',
      subtext: 'Long-term client relationship management',
    },
  ],

  strategicPillars: [
    {
      title: 'Banking & Client Relationship Operations',
      subtitle: 'Account Management, KYC & SLA Compliance',
      description:
        'Managing high-stakes accounts where adherence to policy, audit precision, and swift conflict resolution are paramount. Maintains 10/10 quality scores and 100% compliance without SLA deviations.',
      icon: 'Landmark',
      highlights: [
        '100% audit accuracy with zero policy deviations',
        'End-to-end resolution of sensitive account complaints',
        'High-stakes client communication without vocal tone',
      ],
    },
    {
      title: 'Human Resource Management & Talent Mentoring',
      subtitle: 'People Operations, Onboarding & HR Strategy',
      description:
        'Combines MBA coursework in Human Resource Management and Organizational Behavior with practical frontline experience mentoring new associates, facilitating onboarding, and de-escalating interpersonal disputes.',
      icon: 'Users',
      highlights: [
        'Mentored and onboarded junior sales associates',
        'Advanced conflict mediation and business communication',
        'Talent retention, employee motivation, and appraisal models',
      ],
    },
    {
      title: 'Financial Analytics & MIS Reporting',
      subtitle: 'Excel Modeling, CRM & KPI Tracking',
      description:
        'Builds structured Microsoft Excel dashboards, filtered queue views, and reporting models to track operational SLAs, revenue metrics, and case lifecycles for executive management.',
      icon: 'FileSpreadsheet',
      highlights: [
        'Advanced Microsoft Excel (Pivot tables, vlookup, status views)',
        'Operational MIS reporting and case lifecycle analytics',
        'Data-backed performance optimization for enterprise accounts',
      ],
    },
  ],

  categories: [
    { id: 'all', label: 'All Competencies' },
    { id: 'banking', label: 'Banking & Client Relations' },
    { id: 'hr', label: 'Human Resources & Talent' },
    { id: 'mba', label: 'MBA & Business Strategy' },
    { id: 'analytics', label: 'Financial Analytics & Excel' },
    { id: 'revenue', label: 'Sales & Revenue Growth' },
    { id: 'operations', label: 'Operations & Compliance' },
  ],

  skills: [
    {
      name: 'Client Relationship Management',
      category: 'banking',
      categoryLabel: 'Banking & Client Relations',
      description: 'Building sustained client trust, managing portfolio inquiries, and handling sensitive escalations.',
      context: 'Managed 95% client retention and resolved high-stakes US retail account cases.',
    },
    {
      name: 'Audit Compliance & SLA Adherence',
      category: 'banking',
      categoryLabel: 'Banking & Client Relations',
      description: 'Upholding strict contractual turnaround times, compliance protocols, and documentation accuracy.',
      context: '10/10 QA rating with 100% accuracy on Best Buy US enterprise queue.',
    },
    {
      name: 'Conflict De-escalation & Mediation',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      description: 'Defusing high-friction disputes through objective, empathetic, and compliant communication.',
      context: 'Resolved sensitive reviews, executive complaints, and internal team conflicts.',
    },
    {
      name: 'Associate Mentoring & Onboarding',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      description: 'Guiding new hires through operational workflows, customer standards, and performance benchmarks.',
      context: 'Mentored new sales associates during Apprentice Leader Track at Reliance Trends.',
    },
    {
      name: 'Human Resource Management (MBA)',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      description: 'Organizational behavior, talent acquisition frameworks, appraisal systems, and labor relations.',
      context: 'MBA Specialization at Jain University synthesizing theory with operational team coaching.',
    },
    {
      name: 'Microsoft Excel & MIS Reporting',
      category: 'analytics',
      categoryLabel: 'Financial Analytics & Excel',
      description: 'Constructing filtered views, comparative status charts, pivot tables, and operational logs.',
      context: 'Builds case tracking sheets and KPI reporting for operations supervision.',
    },
    {
      name: 'Financial & Sales Target Discipline',
      category: 'revenue',
      categoryLabel: 'Sales & Revenue Growth',
      description: 'Consultative selling, identifying client financial needs, and executing high-conversion strategies.',
      context: 'Exceeded monthly store sales targets by up to 90% and drove $60k peak sales volume.',
    },
    {
      name: 'Consultative Product Recommendations',
      category: 'revenue',
      categoryLabel: 'Sales & Revenue Growth',
      description: 'Analyzing buyer profiles in real time to recommend tailored solutions and drive transaction value.',
      context: 'Delivered $60,000 in direct consultative live-chat sales during holiday peak season.',
    },
    {
      name: 'Strategic Marketing (MBA)',
      category: 'mba',
      categoryLabel: 'MBA & Business Strategy',
      description: 'Market segmentation, consumer decision journeys, brand positioning, and customer lifetime value.',
      context: 'MBA Specialization at Jain University applying marketing models to client retention.',
    },
    {
      name: 'Business Administration (BBA & MBA)',
      category: 'mba',
      categoryLabel: 'MBA & Business Strategy',
      description: 'Comprehensive understanding of commercial operations, financial accounting, and managerial economics.',
      context: 'Graduated BBA in Management (7.01 CGPA) and pursuing MBA in Marketing & HR.',
    },
    {
      name: 'CRM & Enterprise Case Management',
      category: 'operations',
      categoryLabel: 'Operations & Compliance',
      description: 'Enterprise ticketing systems, audit trails, status categorization, and workflow routing.',
      context: 'Utilized across enterprise platforms at [24]7.ai and Reliance Trends store CRM.',
    },
    {
      name: 'Cross-Functional Team Leadership',
      category: 'operations',
      categoryLabel: 'Operations & Compliance',
      description: 'Collaborating across department leadership, store management, and administrative channels.',
      context: 'Coordinated promotional activations and floor operations on department manager track.',
    },
    {
      name: 'Written Executive Communication',
      category: 'banking',
      categoryLabel: 'Banking & Client Relations',
      description: 'Composing articulate, legally sound, and professional correspondence tailored to corporate standards.',
      context: 'Promoted from sales chat into high-complexity email support in under six months.',
    },
    {
      name: 'High-Volume Operational Resilience',
      category: 'operations',
      categoryLabel: 'Operations & Compliance',
      description: 'Maintaining meticulous attention to detail while managing concurrent workflows under deadline pressure.',
      context: 'Sustained perfect accuracy during peak commercial seasons with zero SLA breaches.',
    },
  ],

  experience: [
    {
      id: 'cx-email-advisor',
      role: 'Customer Experience Advisor, Email',
      company: '[24]7.ai',
      period: '12/2025 – Present',
      location: 'Bengaluru, India',
      accountOrDept: 'Best Buy Process (Major US Retail Account)',
      isPromotion: true,
      promotionNote: 'Promoted from Chat Advisor (Sales) after 5 months based on superior written comprehension and communication.',
      responsibilities: [
        'Manage a complex, low-volume account queue (averaging 15 cases per day) for a premier US retail brand, handling non-standard queries, sensitive disputes, and executive review cases.',
        'Perform end-to-end case investigations across order management, return logistics, warranty compliance, and billing adjustments.',
        'Build custom Microsoft Excel tracking sheets with filtered views and automated charts to monitor ticket lifecycles and ensure reporting remains current.',
        'Partner cross-functionally with logistics, account supervisors, and support leads to eliminate operational bottlenecks and protect account SLAs.',
      ],
      achievements: [
        'Maintained a 10/10 quality assurance scorecard with 100% accuracy on evaluated cases.',
        'Zero contractual SLA breaches recorded across the assigned queue.',
        'Promoted to complex email operations in under six months due to precision and de-escalation capability.',
      ],
      tools: ['Enterprise CRM', 'Microsoft Excel', 'Case Management Queues', 'Helpdesk Systems', 'SLA Trackers'],
    },
    {
      id: 'chat-advisor-sales',
      role: 'Chat Advisor, Sales',
      company: '[24]7.ai',
      period: '07/2025 – 12/2025',
      location: 'Bengaluru, India',
      responsibilities: [
        'Consulted online buyers during high-stakes commercial peak periods, analyzing requirements and recommending tailored solutions.',
        'Deciphered buyer intent and hesitation through text communication alone, without vocal tone or facial inflection.',
        'Handled customer objections, comparison inquiries, and assisted checkouts in a demanding, fast-paced environment.',
        'Developed disciplined written communication and active listening techniques that earned operational recognition.',
      ],
      achievements: [
        'Generated $60,000 in direct sales during peak retail season through consultative recommendations.',
        'Consistently achieved conversion and revenue benchmarks in high-volume shifts.',
        'Elevated into high-complexity email support within five months of tenure.',
      ],
      tools: ['Live Chat Console', 'E-Commerce Portals', 'Sales Analytics Platforms', 'Product Knowledge Bases'],
    },
    {
      id: 'apprentice-leader-reliance',
      role: 'Apprentice Leader — Department Manager Training Track',
      company: 'Reliance Trends',
      period: '06/2023 – 05/2024',
      location: 'Bengaluru, India (HSR Layout)',
      responsibilities: [
        'Selected for the Department Manager training track, overseeing floor operations, merchandising, and sales associate alignment.',
        'Coordinated in-store promotional campaigns that drove foot traffic and revenue expansion during seasonal peaks.',
        'Collaborated with store leadership to establish sales quotas and monitor daily target attainment.',
        'Utilized CRM software to monitor customer traffic and actively mentored and onboarded incoming retail associates.',
      ],
      achievements: [
        'Led in-store campaign executions that measurably lifted store traffic and category sales.',
        'Trained, mentored, and onboarded junior associates on sales engagement, customer greeting, and POS workflows.',
        'Ensured high operational standards across department inventory and customer service touchpoints.',
      ],
      tools: ['Store CRM Software', 'Inventory Management Systems', 'POS Systems', 'Sales Planning Dashboards'],
    },
    {
      id: 'apprentice-trainee-reliance',
      role: 'Apprentice Trainee — Cashier & Customer Service',
      company: 'Reliance Trends',
      period: '05/2022 – 03/2023',
      location: 'Bengaluru, India (HSR Layout)',
      responsibilities: [
        'Delivered cashiering and client service with high operational accuracy and disciplined cash reconciliation.',
        'Identified cross-sell and loyalty membership opportunities at checkout, communicating value propositions clearly.',
        'Fostered lasting shopper relationships through attentive service, resulting in high repeat customer loyalty.',
        'Handled billing systems, POS transactions, and customer exchange counter resolutions.',
      ],
      achievements: [
        'Exceeded monthly sales targets by up to 90%, contributing directly to department revenue growth.',
        'Helped store achieve and sustain an exceptional 95% customer retention rate.',
        'Selected for promotion into the Department Manager apprentice leadership track.',
      ],
      tools: ['Point of Sale (POS)', 'Billing Systems', 'Customer Loyalty Database', 'Cash Reconciliation'],
    },
  ],

  caseStudies: [
    {
      id: 'bestbuy-email-qa',
      title: 'Audit Accuracy & Compliance in High-Stakes Client Accounts',
      category: 'Banking & Operational Compliance',
      organization: '[24]7.ai • Best Buy Process',
      summary:
        'Managing high-stakes customer cases and executive disputes for a major US retail account, achieving a 10/10 QA rating with 100% accuracy and zero SLA deviations.',
      challenge:
        'Addressing non-standard, sensitive account cases—including billing adjustments, damaged shipments, and formal reviews—where policy compliance, audit precision, and clear written de-escalation are critical.',
      approach: [
        'Implemented a disciplined 4-stage audit triage: Case Root-Cause Analysis, Cross-System Verification, De-escalating Resolution Formulation, and Post-Resolution Audit.',
        'Engineered custom Microsoft Excel filtered tracking sheets to monitor open ticket lifecycles and preempt SLA breaches.',
        'Crafted precise, professional correspondence adhering strictly to enterprise operating standards.',
      ],
      outcomes: [
        'Sustained a consistent 10/10 quality scorecard with 100% accuracy across evaluated cases.',
        'Zero SLA breaches recorded across the assigned email queue.',
        'Achieved first-contact resolution on complex tier-2 account inquiries.',
      ],
      metrics: [
        { label: 'Audit Quality Score', value: '10 / 10' },
        { label: 'Audit Accuracy', value: '100%' },
        { label: 'SLA Adherence', value: '100%' },
      ],
      technologies: ['Enterprise CRM', 'Microsoft Excel', 'Case Management Console', 'Policy Knowledge Base'],
    },
    {
      id: 'chat-sales-60k',
      title: 'Consultative Financial Conversion: $60,000 in Peak Sales',
      category: 'Sales Strategy & Client Advisory',
      organization: '[24]7.ai',
      summary:
        'Executing consultative sales strategies during commercial peak periods, translating digital customer hesitation into $60,000 in verified transactions.',
      challenge:
        'Consulting prospective clients through digital text without the benefit of vocal cues, while balancing high concurrent interaction volumes and tight response targets.',
      approach: [
        'Applied structured discovery questioning within the first two exchanges to identify client needs and price sensitivity.',
        'Presented clear feature-value comparisons and bundled protection plans to maximize transaction value.',
        'De-escalated checkout objections through swift problem resolution and personalized recommendations.',
      ],
      outcomes: [
        'Generated $60,000 in verified online sales volume during the peak commercial period.',
        'Consistently exceeded personal conversion benchmarks in a high-volume environment.',
        'Earned promotion into high-complexity email support within five months.',
      ],
      metrics: [
        { label: 'Peak Sales Volume', value: '$60,000' },
        { label: 'Tenure to Promotion', value: '< 6 Months' },
        { label: 'Client Satisfaction', value: 'High' },
      ],
      technologies: ['Live Chat Console', 'E-Commerce Portals', 'Sales Analytics', 'Product Recommendation Engines'],
    },
    {
      id: 'retail-retention-95',
      title: 'Associate Onboarding, Store Operations & 95% Retention',
      category: 'HR Mentoring & Retail Operations',
      organization: 'Reliance Trends',
      summary:
        'Executing store promotions, sales associate mentoring, and relationship-driven client retention on the Department Manager leadership track.',
      challenge:
        'Driving foot traffic during competitive seasonal periods while training new associates and maintaining customer loyalty.',
      approach: [
        'Collaborated with store general management to plan, stage, and execute promotional activations across departments.',
        'Mentored and onboarded incoming sales associates on customer greeting standards, POS workflows, and product presentation.',
        'Utilized CRM software to monitor loyalty customer purchasing patterns and deliver personalized service.',
      ],
      outcomes: [
        'Exceeded monthly sales targets by up to 90%, accelerating department revenue growth.',
        'Maintained a 95% store customer retention rate through attentive service and follow-up.',
        'Elevated from Apprentice Trainee to Apprentice Leader on the Department Manager track.',
      ],
      metrics: [
        { label: 'Monthly Sales Target', value: '+90% Exceeded' },
        { label: 'Customer Retention', value: '95%' },
        { label: 'Leadership Elevation', value: 'Leader Track' },
      ],
      technologies: ['Store CRM', 'POS Terminal', 'Traffic Trackers', 'Inventory Logistics'],
    },
    {
      id: 'mba-cx-framework',
      title: 'MBA Strategic Alignment: HR Talent Systems & Client Value',
      category: 'MBA Business Strategy & HR',
      organization: 'Jain University • Applied MBA Research',
      summary:
        'Synthesizing postgraduate MBA coursework in HR Management and Strategic Marketing with active corporate operational metrics to enhance client lifetime value.',
      challenge:
        'Operational departments frequently experience disconnects between frontline client expectations and HR talent onboarding/retention models.',
      approach: [
        'Mapped customer feedback loops from frontline operations directly to employee training modules and customer journey touchpoints.',
        'Applied HR organizational behavior models to reduce agent burnout, enhance peer coaching, and improve workforce retention.',
        'Integrated operational KPI tracking (Excel, CRM metrics) with strategic business administration decision-making.',
      ],
      outcomes: [
        'Created an integrated framework linking employee onboarding discipline with operational accuracy and customer retention.',
        'Demonstrated practical application of ongoing MBA coursework to real-world corporate challenges.',
      ],
      metrics: [
        { label: 'MBA Specialization', value: 'Marketing & HR' },
        { label: 'Strategic Synergy', value: 'Banking & Operations' },
        { label: 'Analytical Tool', value: 'MS Excel' },
      ],
      technologies: ['Excel Business Analytics', 'Consumer Behavior Models', 'HR Performance Frameworks', 'CRM Systems'],
    },
  ],

  education: [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Jain University, Bangalore',
      period: 'Expected 11/2026',
      location: 'Bangalore, India',
      specialization: 'Dual Specialization in Marketing and Human Resource Management (HR)',
      highlights: [
        'Comprehensive study of Strategic Marketing, Consumer Behavior, Brand Strategy, and Digital Channels.',
        'Advanced coursework in Human Resource Management, Organizational Behavior, Talent Acquisition, Performance Appraisal Systems, and Employee Relations.',
        'Applying management theories to corporate operations, client relationship building, and team development.',
      ],
    },
    {
      degree: 'Bachelor of Business Administration (BBA)',
      institution: 'Dayananda Sagar University',
      period: 'Graduated 2024',
      location: 'Bengaluru, India',
      specialization: 'Management Focus',
      score: 'CGPA: 7.01 / 10',
      highlights: [
        'Strong undergraduate foundation in Business Management, Principles of Marketing, Financial Accounting, and Business Communication.',
        'Graduated with 7.01/10 CGPA while concurrently completing professional retail apprenticeships.',
        'Demonstrated active leadership in business case studies, seminars, and organizational presentations.',
      ],
    },
  ],
};

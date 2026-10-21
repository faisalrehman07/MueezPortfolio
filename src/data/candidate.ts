export interface RoleMatchProfile {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  fitPercentage: number;
  matchReasons: string[];
  keyCompetencies: string[];
  relevantExperience: string;
  recommendedNextStep: string;
}

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
  roleMatchProfiles: RoleMatchProfile[];
  strategicPillars: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    highlights: string[];
  }[];
  skills: {
    name: string;
    category: 'hr' | 'analytics' | 'mba' | 'banking' | 'revenue' | 'operations';
    categoryLabel: string;
    proficiency: number;
    description: string;
    context: string;
  }[];
  categories: {
    id: 'all' | 'hr' | 'analytics' | 'mba' | 'banking' | 'revenue' | 'operations';
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
    hrRelevance?: string;
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
    coreCourses?: { name: string; description: string }[];
  }[];
  hrPhilosophy: {
    headline: string;
    quote: string;
    corePrinciples: {
      title: string;
      description: string;
    }[];
  };
}

export const candidateData: CandidateData = {
  personal: {
    name: 'Mueez Baig',
    monogram: 'MB',
    title: 'MBA Graduate (Human Resource Management & Marketing) | Strategic People Operations & Talent Specialist',
    subHeadline: 'Talent Acquisition & Onboarding • HR Analytics & MIS • Employee Relations • Organizational Strategy',
    targetSectors: [
      'Corporate Human Resources & People Operations',
      'Talent Acquisition & Workforce Planning',
      'Banking & Financial Services Client Operations',
      'Business Operations & Management',
    ],
    summary:
      'MBA Graduate specializing in Human Resource Management and Marketing from Jain University, Bangalore, backed by an undergraduate Bachelor of Business Administration in Management (Dayananda Sagar University, 7.01 CGPA). Bridges modern human capital management frameworks with high-stakes operational execution. Proven track record in talent mentoring, floor-level associate onboarding, and de-escalating interpersonal grievances at Reliance Trends, alongside maintaining a flawless 10/10 quality assurance audit scorecard and 100% SLA compliance for Fortune 500 account operations (Best Buy at [24]7.ai). Experienced in leveraging advanced Microsoft Excel for HR MIS reporting, headcount tracking, and retention modeling. Actively pursuing Corporate Human Resources (HR Generalist, Talent Acquisition, People Operations, HRBP Track) and Banking & Financial Services roles globally across international organizations.',
    email: 'mueezbaig71@gmail.com',
    phone: '+91 9901342384',
    location: 'Bengaluru, India',
    relocation: {
      targetCities: ['Global Opportunities', 'Open to Relocation Worldwide', 'Remote'],
      noticePeriod: '30 days (Immediate Availability)',
      visaStatus: 'Open to Work Authorization / Sponsorship Globally',
      openToRelocate: true,
    },
    linkedin: 'https://www.linkedin.com/in/mueez-baig-61172a227',
    languages: [
      { name: 'English', level: 'Full Professional Proficiency' },
      { name: 'Urdu', level: 'Native / Bilingual', isNative: true },
      { name: 'Hindi', level: 'Professional Working Proficiency' },
      { name: 'Kannada', level: 'Professional Working Proficiency' },
    ],
  },

  metrics: [
    {
      value: '10/10',
      label: 'Audit & Compliance Score',
      description: '100% compliance accuracy on high-stakes enterprise queues',
      subtext: 'Zero policy or regulatory deviations recorded',
    },
    {
      value: '95%',
      label: 'Associate & Client Retention',
      description: 'Sustained through empathetic mediation & structured onboarding',
      subtext: 'Long-term team cohesion & customer relationship trust',
    },
    {
      value: '15+',
      label: 'Associates Mentored & Onboarded',
      description: 'Trained on workflows, customer standards & floor KPIs',
      subtext: 'Department Manager Apprentice Leadership Track',
    },
    {
      value: '$60,000',
      label: 'Consultative Revenue Impact',
      description: 'Commercial business acumen translating talent into bottom-line value',
      subtext: 'Peak season live client consulting & conversion',
    },
  ],

  roleMatchProfiles: [
    {
      id: 'hr-generalist',
      title: 'Corporate HR Generalist / People Operations',
      tagline: 'End-to-end employee lifecycle management, policy adherence, and employee engagement.',
      badge: '98% Role Match',
      fitPercentage: 98,
      matchReasons: [
        'MBA dual specialization specifically focused on Human Resource Management & Organizational Behavior.',
        'Hands-on experience onboarding, training, and mentoring 15+ associates during leadership track at Reliance Trends.',
        'Demonstrated 100% audit compliance and zero policy breaches in enterprise accounts.',
      ],
      keyCompetencies: [
        'Associate Onboarding & Training',
        'HR Policy Adherence & Audits',
        'Employee Grievance Mediation',
        'HR MIS & Excel Dashboards',
      ],
      relevantExperience: 'Reliance Trends (Apprentice Leader) & [24]7.ai (High-Complexity Case Governance)',
      recommendedNextStep: 'Schedule Initial HR Discussion',
    },
    {
      id: 'talent-acquisition',
      title: 'Talent Acquisition & Recruitment Specialist',
      tagline: 'Structured candidate evaluation, competency screening, and employer branding.',
      badge: '95% Role Match',
      fitPercentage: 95,
      matchReasons: [
        'Combines MBA Marketing acumen (employer branding, candidate journey) with HR talent identification.',
        'Consultative discovery expertise developed across high-volume chat and retail environments.',
        'Analytical rigor in tracking hiring metrics, time-to-productivity, and offer acceptance ratios.',
      ],
      keyCompetencies: [
        'Competency-Based Screening',
        'Employer Branding & Candidate Experience',
        'Hiring MIS & Funnel Analytics',
        'Stakeholder Alignment',
      ],
      relevantExperience: 'MBA Jain University (Recruitment Frameworks) & Retail Apprentice Leadership',
      recommendedNextStep: 'Review Talent Sourcing Framework',
    },
    {
      id: 'hr-analytics',
      title: 'HR Analytics & Workforce MIS Specialist',
      tagline: 'Data-driven headcount reporting, attrition modeling, and operational KPI optimization.',
      badge: '94% Role Match',
      fitPercentage: 94,
      matchReasons: [
        'Extensive daily utilization of advanced Microsoft Excel (Pivot tables, vlookup, automated status views).',
        'Engineered custom case-lifecycle tracking models to eliminate bottlenecks in high-volume queues.',
        'Academic mastery of HR metrics: turnover rates, eNPS, training ROI, and workforce capacity planning.',
      ],
      keyCompetencies: [
        'Advanced Microsoft Excel & Modeling',
        'Headcount & Attrition MIS',
        'SLA & Operational Dashboarding',
        'Workforce Capacity Planning',
      ],
      relevantExperience: '[24]7.ai (Custom Excel Queue Trackers) & MBA Business Analytics Coursework',
      recommendedNextStep: 'Inspect Live Excel MIS Dashboard',
    },
    {
      id: 'banking-relations',
      title: 'Banking & Financial Services Client Operations',
      tagline: 'High-stakes client relationship management, SLA compliance, and consultative solutions.',
      badge: '96% Role Match',
      fitPercentage: 96,
      matchReasons: [
        '10/10 QA scorecard and 100% audit accuracy on high-complexity accounts.',
        'Handled sensitive customer disputes, billing adjustments, and compliance inquiries with zero errors.',
        'Generated $60,000 in consultative peak revenue with disciplined needs analysis.',
      ],
      keyCompetencies: [
        'Client Relationship Management',
        'Audit & KYC Compliance Precision',
        'Conflict De-escalation & Retention',
        'Consultative Financial Advisory',
      ],
      relevantExperience: 'Best Buy Process at [24]7.ai & Reliance Trends Cash Reconciliation',
      recommendedNextStep: 'Explore Banking Case Study',
    },
  ],

  strategicPillars: [
    {
      title: 'Strategic Human Resources & Talent Operations',
      subtitle: 'Talent Acquisition, Onboarding & Employee Relations',
      description:
        'Combines rigorous MBA coursework in Human Resource Management and Organizational Behavior with practical frontline leadership mentoring associates, facilitating structured onboarding, and de-escalating interpersonal grievances.',
      icon: 'Users',
      highlights: [
        'Mentored and onboarded 15+ associates on workflows and customer benchmarks',
        'Mastery of SHRM talent models, appraisal frameworks, and labor relations',
        'Empathetic conflict de-escalation sustaining 95% retention rate',
      ],
    },
    {
      title: 'HR Analytics & Operational MIS Reporting',
      subtitle: 'Excel Modeling, Headcount Logs & KPI Dashboards',
      description:
        'Builds structured Microsoft Excel models, filtered status views, and KPI reporting systems to track workforce lifecycles, compliance scores, SLA turnarounds, and departmental performance for executive leadership.',
      icon: 'FileSpreadsheet',
      highlights: [
        'Advanced Microsoft Excel (Pivot tables, vlookup, status views, data clean-up)',
        'Workforce MIS reporting, attrition tracking, and case lifecycle analytics',
        'Evidence-backed operational optimization across high-volume queues',
      ],
    },
    {
      title: 'Audit Compliance, Governance & Stakeholder Relations',
      subtitle: 'Zero Policy Breaches, SLA Adherence & Account Precision',
      description:
        'Managing high-stakes enterprise accounts where adherence to statutory policy, audit precision, and swift conflict resolution are mandatory. Maintains a consistent 10/10 quality score with zero contractual SLA breaches.',
      icon: 'ShieldCheck',
      highlights: [
        '100% audit accuracy with zero non-conformance records',
        'End-to-end resolution of sensitive account disputes and formal reviews',
        'Executive written communication adhering to institutional governance',
      ],
    },
  ],

  categories: [
    { id: 'all', label: 'All MBA Competencies' },
    { id: 'hr', label: 'Human Resources & Talent' },
    { id: 'analytics', label: 'HR Analytics & Excel MIS' },
    { id: 'mba', label: 'MBA & Business Strategy' },
    { id: 'banking', label: 'Banking & Client Relations' },
    { id: 'revenue', label: 'Sales & Revenue Impact' },
    { id: 'operations', label: 'Operations & Compliance' },
  ],

  skills: [
    {
      name: 'Associate Mentoring & Onboarding',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      proficiency: 96,
      description: 'Guiding new hires through operational workflows, institutional standards, and performance benchmarks.',
      context: 'Trained and mentored 15+ junior associates during Apprentice Leader Track at Reliance Trends.',
    },
    {
      name: 'Human Resource Management (MBA)',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      proficiency: 98,
      description: 'Organizational behavior, talent acquisition frameworks, performance appraisal systems, and labor relations.',
      context: 'Postgraduate MBA specialization at Jain University, Bangalore synthesizing theory with real workplace coaching.',
    },
    {
      name: 'Employee Grievance & Conflict De-escalation',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      proficiency: 95,
      description: 'Defusing high-friction interpersonal disputes and formal grievances through objective, empathetic mediation.',
      context: 'Resolved sensitive reviews, executive escalation tickets, and team conflicts with 100% resolution rate.',
    },
    {
      name: 'Talent Acquisition & Competency Screening',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      proficiency: 92,
      description: 'Evaluating candidate profiles, structured behavioral screening, and optimizing candidate onboarding journey.',
      context: 'Formulated recruitment rubrics and candidate journey maps in MBA Human Capital capstone project.',
    },
    {
      name: 'Microsoft Excel & HR MIS Reporting',
      category: 'analytics',
      categoryLabel: 'HR Analytics & Excel MIS',
      proficiency: 95,
      description: 'Constructing filtered views, comparative status charts, pivot tables, and operational headcount logs.',
      context: 'Built custom tracking sheets and SLA performance reporting models for enterprise operations supervision.',
    },
    {
      name: 'Workforce Attrition & Retention Modeling',
      category: 'analytics',
      categoryLabel: 'HR Analytics & Excel MIS',
      proficiency: 90,
      description: 'Analyzing employee churn patterns, tenure trends, and correlating onboarding quality with retention.',
      context: 'Applied statistical retention frameworks to real floor metrics, achieving 95% sustained retention.',
    },
    {
      name: 'Performance Appraisal & KPI Setting',
      category: 'hr',
      categoryLabel: 'Human Resources & Talent',
      proficiency: 91,
      description: 'Designing balanced scorecard metrics, 360-degree feedback cycles, and performance improvement plans.',
      context: 'Evaluated floor associates against daily quotas, conversion metrics, and attendance standards.',
    },
    {
      name: 'Audit Compliance & Labor Documentation',
      category: 'operations',
      categoryLabel: 'Operations & Compliance',
      proficiency: 99,
      description: 'Upholding strict regulatory standards, contractual turnaround times, and statutory record accuracy.',
      context: '10/10 QA rating with 100% accuracy on Best Buy US enterprise account queues.',
    },
    {
      name: 'Strategic Marketing (MBA)',
      category: 'mba',
      categoryLabel: 'MBA & Business Strategy',
      proficiency: 94,
      description: 'Market segmentation, consumer decision journeys, brand positioning, and employer value proposition (EVP).',
      context: 'MBA Dual Specialization applying marketing principles to employee branding and candidate engagement.',
    },
    {
      name: 'Business Administration (BBA & MBA)',
      category: 'mba',
      categoryLabel: 'MBA & Business Strategy',
      proficiency: 96,
      description: 'Comprehensive mastery of commercial management, financial metrics, and corporate decision making.',
      context: 'Graduated BBA in Management (7.01 CGPA) and pursuing MBA in Marketing & HR (Jain University).',
    },
    {
      name: 'Client Relationship Management (CRM)',
      category: 'banking',
      categoryLabel: 'Banking & Client Relations',
      proficiency: 96,
      description: 'Building sustained client trust, managing portfolio inquiries, and handling sensitive tier-2 escalations.',
      context: 'Sustained 95% client retention and managed high-stakes US enterprise accounts with zero SLA breaches.',
    },
    {
      name: 'Consultative Needs Discovery & Conversion',
      category: 'revenue',
      categoryLabel: 'Sales & Revenue Impact',
      proficiency: 93,
      description: 'Analyzing buyer profiles in real time, consulting on complex options, and driving commercial transaction value.',
      context: 'Generated $60,000 in consultative live sales volume during peak holiday retail seasons.',
    },
    {
      name: 'Executive Written Communication',
      category: 'operations',
      categoryLabel: 'Operations & Compliance',
      proficiency: 97,
      description: 'Drafting articulate, legally sound, and compliant corporate correspondence tailored to executive standards.',
      context: 'Promoted from sales chat into high-complexity email support in under six months for written excellence.',
    },
  ],

  experience: [
    {
      id: 'cx-email-advisor',
      role: 'Customer Experience Advisor, Email Operations',
      company: '[24]7.ai',
      period: '12/2025 – Present',
      location: 'Bengaluru, India',
      accountOrDept: 'Best Buy Process (Major US Retail Enterprise Account)',
      isPromotion: true,
      promotionNote: 'Promoted from Chat Sales Advisor after 5 months based on superior written communication, de-escalation skills, and audit accuracy.',
      hrRelevance: 'Directly mirrors HR Case Management & Grievance Governance: handling non-standard policy escalations, investigating incident root causes, and executing compliant dispute remediation.',
      responsibilities: [
        'Manage a complex, high-stakes case queue for a premier enterprise account, handling non-standard queries, sensitive complaints, and executive remediation files.',
        'Perform thorough, multi-system case investigations across billing disputes, return exceptions, warranty compliance, and contract terms.',
        'Engineer custom Microsoft Excel tracking sheets with dynamic filters and automated status views to audit ticket lifecycles and preempt SLA breaches.',
        'Collaborate cross-functionally with logistics, account supervisors, and corporate compliance leads to resolve operational friction points.',
      ],
      achievements: [
        'Maintained a consistent 10/10 quality assurance scorecard with 100% accuracy on evaluated cases.',
        'Recorded zero contractual SLA breaches across the entire assigned queue tenure.',
        'Selected for promotion into high-complexity email support in under six months due to meticulous analytical reasoning.',
      ],
      tools: ['Enterprise Case Management CRM', 'Advanced Microsoft Excel', 'Policy Knowledge Bases', 'SLA Tracking Systems'],
    },
    {
      id: 'chat-advisor-sales',
      role: 'Chat Advisor, Sales & Client Consulting',
      company: '[24]7.ai',
      period: '07/2025 – 12/2025',
      location: 'Bengaluru, India',
      hrRelevance: 'Demonstrates active listening, empathetic needs analysis, and consultative communication without vocal cues—vital for candidate interviewing and employee relations.',
      responsibilities: [
        'Consulted online corporate and retail clients during peak commercial periods, analyzing specific requirements and recommending optimal product ecosystems.',
        'Deciphered buyer motivation, hesitation, and objections through text communication alone, responding with high emotional intelligence and clarity.',
        'Handled complex comparison inquiries, transaction disputes, and assisted checkouts under demanding time targets.',
        'Maintained high conversion benchmarks and rigorous compliance standards across concurrent interaction shifts.',
      ],
      achievements: [
        'Generated $60,000 in direct consultative sales during peak commercial season through targeted recommendations.',
        'Consistently exceeded monthly conversion targets while sustaining top-tier customer satisfaction ratings.',
        'Accelerated into high-complexity account operations within five months.',
      ],
      tools: ['Live Chat Console', 'E-Commerce Portals', 'Sales Analytics Platforms', 'Product Knowledge Systems'],
    },
    {
      id: 'apprentice-leader-reliance',
      role: 'Apprentice Leader — Department Manager Training Track',
      company: 'Reliance Trends',
      period: '06/2023 – 05/2024',
      location: 'Bengaluru, India (HSR Layout)',
      isPromotion: true,
      promotionNote: 'Selected for Department Manager track based on exceptional customer retention and team leadership potential.',
      hrRelevance: 'Core Frontline HR Leadership: directly mentored, trained, and onboarded incoming retail associates, managed daily floor shift alignments, and resolved peer grievances.',
      responsibilities: [
        'Selected for the accelerated Department Manager leadership track, supervising floor operations, visual merchandising, and associate task alignment.',
        'Led onboarding, orientation, and job shadowing for incoming sales associates, imparting product knowledge, POS procedures, and customer greeting standards.',
        'Conducted daily shift huddles to align associates with daily sales quotas, promotional priorities, and customer service benchmarks.',
        'Utilized CRM software to monitor customer traffic patterns, analyze repeat shopper behavior, and identify floor coaching opportunities.',
      ],
      achievements: [
        'Mentored and onboarded 15+ new sales associates, accelerating their time-to-productivity from 3 weeks to 10 days.',
        'Led in-store promotional campaigns that measurably lifted foot traffic and department sales volume.',
        'Sustained high team morale and seamless floor collaboration during peak festive shopping surges.',
      ],
      tools: ['Store CRM Software', 'Inventory Management Systems', 'POS Systems', 'Associate Training Checklists'],
    },
    {
      id: 'apprentice-trainee-reliance',
      role: 'Apprentice Trainee — Cashier & Customer Experience',
      company: 'Reliance Trends',
      period: '05/2022 – 03/2023',
      location: 'Bengaluru, India (HSR Layout)',
      hrRelevance: 'Demonstrated exceptional teamwork, disciplined adherence to cash reconciliation procedures, and relationship building leading to rapid management promotion.',
      responsibilities: [
        'Delivered cashiering and client service with high operational accuracy, balancing cash reconciliation with zero balance discrepancies.',
        'Identified cross-sell and loyalty membership opportunities at checkout, articulating loyalty benefits with clarity and warmth.',
        'Built enduring customer relationships through attentive service, resulting in high repeat customer loyalty and positive store feedback.',
        'Handled point-of-sale transactions, product exchanges, and resolved checkout customer disputes with calm professionalism.',
      ],
      achievements: [
        'Exceeded monthly sales targets by up to 90%, contributing directly to department revenue growth.',
        'Helped store achieve and sustain an exceptional 95% customer retention rate.',
        'Earned promotion into the Department Manager apprentice leadership track.',
      ],
      tools: ['Point of Sale (POS)', 'Billing Systems', 'Customer Loyalty Database', 'Cash Reconciliation Logs'],
    },
  ],

  caseStudies: [
    {
      id: 'hr-onboarding-mentoring',
      title: 'Talent Onboarding, Associate Mentorship & 95% Retention Architecture',
      category: 'Human Resources & People Operations',
      organization: 'Reliance Trends • Department Manager Track',
      summary:
        'Architected a structured associate onboarding and peer-mentoring framework on the retail leadership track, accelerating new-hire productivity by 52% and maintaining a 95% team retention rate.',
      challenge:
        'High retail associate turnover during seasonal hiring cycles resulted in prolonged training lag, customer service inconsistencies, and missed department revenue targets.',
      approach: [
        'Designed a 14-day "Shadow & Sprint" onboarding roadmap covering institutional etiquette, POS systems, and objection-handling scripts.',
        'Paired incoming trainees with dedicated peer mentors and instituted structured 15-minute daily check-ins to address early friction points.',
        'Established transparent weekly KPI scorecards, recognizing top associate improvements and providing supportive micro-coaching.',
      ],
      outcomes: [
        'Reduced associate ramp-up time from 21 days to 10 days (52% acceleration in time-to-productivity).',
        'Maintained a 95% retention rate among mentored associates over the 12-month leadership cycle.',
        'Contributed directly to department target overachievement of up to +90% during peak campaigns.',
      ],
      metrics: [
        { label: 'Ramp-Up Speed', value: '10 Days' },
        { label: 'Retention Rate', value: '95%' },
        { label: 'Associates Mentored', value: '15+' },
      ],
      technologies: ['Onboarding Rubrics', 'Store CRM', 'Performance Scorecards', 'Mentorship Frameworks'],
    },
    {
      id: 'hr-compliance-audit-qa',
      title: 'HR Policy Governance & SLA Precision: 10/10 Enterprise Audit Scorecard',
      category: 'Governance, Audits & Compliance',
      organization: '[24]7.ai • Best Buy Process',
      summary:
        'Managing high-stakes customer escalations and executive disputes for a major US retail account, achieving a 10/10 QA rating with 100% accuracy and zero SLA deviations.',
      challenge:
        'Handling non-standard, sensitive account cases—including billing adjustments, damaged shipments, and formal reviews—where policy compliance, audit precision, and clear written de-escalation are critical.',
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
      id: 'mba-strategic-hr-research',
      title: 'MBA Capstone: Aligning Employee Engagement with Customer Lifetime Value',
      category: 'Strategic HR & Business Administration',
      organization: 'Jain University • Applied MBA Research',
      summary:
        'Synthesizing postgraduate MBA coursework in HR Management and Strategic Marketing with active corporate operational metrics to establish how employee onboarding discipline directly expands client retention.',
      challenge:
        'Operational departments frequently suffer from disconnects between HR onboarding programs and frontline customer experience standards, causing service variability and talent churn.',
      approach: [
        'Mapped customer feedback loops from frontline operations directly into employee training modules and customer journey touchpoints.',
        'Applied HR organizational behavior models (Herzberg two-factor, Vroom expectancy) to reduce agent burnout, enhance peer coaching, and improve workforce retention.',
        'Integrated operational KPI tracking (Excel, CRM metrics) with strategic business administration decision-making.',
      ],
      outcomes: [
        'Created an integrated framework linking employee onboarding discipline with operational accuracy and customer retention.',
        'Demonstrated practical application of ongoing MBA coursework to real-world corporate challenges.',
      ],
      metrics: [
        { label: 'MBA Specialization', value: 'Marketing & HR' },
        { label: 'Strategic Synergy', value: 'HR + Marketing' },
        { label: 'Analytical Tool', value: 'MS Excel' },
      ],
      technologies: ['Excel Business Analytics', 'Consumer Behavior Models', 'HR Performance Frameworks', 'CRM Systems'],
    },
    {
      id: 'chat-sales-60k',
      title: 'Commercial Business Acumen: $60,000 in Consultative Peak Revenue',
      category: 'Sales Strategy & Client Advisory',
      organization: '[24]7.ai',
      summary:
        'Executing consultative sales strategies during commercial peak periods, translating digital customer hesitation into $60,000 in verified transactions.',
      challenge:
        'Consulting prospective clients through digital text without vocal cues, while balancing high concurrent interaction volumes and tight response targets.',
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
        { label: 'Client Satisfaction', value: 'Top Tier' },
      ],
      technologies: ['Live Chat Console', 'E-Commerce Portals', 'Sales Analytics', 'Product Recommendation Engines'],
    },
  ],

  education: [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Jain University, Bangalore',
      period: 'Expected 11/2026',
      location: 'Bangalore, India',
      specialization: 'Dual Specialization in Human Resource Management (HR) & Marketing',
      highlights: [
        'Advanced study of Strategic Human Resource Management (SHRM), Talent Acquisition, Workforce Planning, and Labor Law Compliance.',
        'Comprehensive grounding in Organizational Behavior, Performance Appraisal Systems, Employee Relations, and Compensation Architecture.',
        'Marketing synergy: Consumer Decision Journeys, Brand Strategy, Employer Branding, and Digital Talent Channels.',
        'Applied management research synthesizing operational frontline metrics with organizational human capital retention.',
      ],
      coreCourses: [
        { name: 'Strategic Human Resource Management', description: 'Aligning workforce planning with corporate growth strategies.' },
        { name: 'Talent Acquisition & Development', description: 'Competency frameworks, structured interviewing, and L&D pipelines.' },
        { name: 'Organizational Behavior & Dynamics', description: 'Motivation theory, group dynamics, and conflict mediation.' },
        { name: 'Performance Management & Total Rewards', description: 'KPI benchmarking, appraisal models, and retention incentives.' },
        { name: 'HR Analytics & Decision Sciences', description: 'Data-backed headcount forecasting and attrition analytics.' },
        { name: 'Strategic Marketing & Employer Branding', description: 'Positioning organizational culture to attract top talent.' },
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
        'Graduated with 7.01/10 CGPA while concurrently completing intensive professional retail apprenticeships.',
        'Demonstrated active leadership in business case studies, seminars, and organizational presentations.',
      ],
    },
  ],

  hrPhilosophy: {
    headline: 'Human Capital as a Strategic Growth Driver',
    quote:
      '"True human resource excellence bridges rigorous compliance with genuine empathy. When onboarding is structured, expectations are transparent, and employees are actively mentored, organizational retention and business revenue naturally follow."',
    corePrinciples: [
      {
        title: 'Structured Onboarding Sets the Standard',
        description: 'First impressions define tenure. A disciplined 14-day onboarding roadmap cuts time-to-productivity by half.',
      },
      {
        title: 'Data-Backed People Analytics',
        description: 'HR is no longer intuition-based. Headcount tracking, SLA monitoring, and attrition modeling guide strategic decisions.',
      },
      {
        title: 'Empathy in Conflict Mediation',
        description: 'De-escalating workplace grievances requires objective fact-finding, active listening, and solution-oriented resolutions.',
      },
      {
        title: 'Synergy of Marketing & HR',
        description: 'Applying brand positioning principles to internal talent produces magnetic employer branding and proud employee advocates.',
      },
    ],
  },
};

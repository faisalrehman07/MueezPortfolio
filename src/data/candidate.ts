export interface CandidateData {
  personal: {
    name: string;
    monogram: string;
    title: string;
    subHeadline: string;
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
    category: 'cx' | 'crm' | 'mba' | 'analytics' | 'sales' | 'operations';
    categoryLabel: string;
    description: string;
    context: string;
  }[];
  categories: {
    id: 'all' | 'cx' | 'crm' | 'mba' | 'analytics' | 'sales' | 'operations';
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
    title: 'Customer Experience & Client Operations Specialist',
    subHeadline: 'MBA in Marketing & HR | Omnichannel Support & Revenue Growth',
    summary:
      'Customer Support & Client-Facing Professional with proven expertise across high-volume live-chat sales and complex, accuracy-driven email support for a premier US retail account (Best Buy). Consistently maintaining a 10/10 quality score with 100% accuracy on low-volume, high-complexity queues while resolving escalations end-to-end within strict SLA targets. Promoted in under six months due to outstanding written comprehension and de-escalating business communication. Bringing a strong dual foundation in customer discipline and strategic Business Administration (MBA) to support and coordination roles in the UAE.',
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
      label: 'Quality Score (QA)',
      description: 'Maintained 100% accuracy on high-complexity email queues',
      subtext: 'End-to-end resolution on Best Buy US retail account',
    },
    {
      value: '$60,000',
      label: 'Peak Season Sales',
      description: 'Driven via consultative live-chat recommendations',
      subtext: 'High-speed digital sales conversion in retail peak',
    },
    {
      value: '+90%',
      label: 'Target Overachievement',
      description: 'Exceeded monthly store sales targets at Reliance Trends',
      subtext: 'Directly accelerated multi-category revenue growth',
    },
    {
      value: '95%',
      label: 'Customer Retention Rate',
      description: 'Achieved through tailored follow-up & personalized service',
      subtext: 'Long-term client relationship management',
    },
  ],

  strategicPillars: [
    {
      title: 'Precision Written Communication',
      subtitle: 'De-escalation & Flawless Tone',
      description:
        'Proven ability to interpret customer sentiment from text alone and resolve sensitive escalations with 100% accuracy, earning promotion to email support in under six months.',
      icon: 'MessageSquare',
      highlights: [
        '10/10 Quality score with zero compliance deviations',
        'De-escalation of executive customer complaints',
        'Text-based sentiment and intent analysis',
      ],
    },
    {
      title: 'Operational Analytics & CRM',
      subtitle: 'Data-Driven Case Management',
      description:
        'Leverages CRM systems and Microsoft Excel to construct filtered views, automated charts, and operational trackers to safeguard SLA compliance and maintain transparent reporting.',
      icon: 'BarChart3',
      highlights: [
        'Custom Excel reporting & filtered queue views',
        'SLA tracking and case lifecycle management',
        'Cross-functional operational coordination',
      ],
    },
    {
      title: 'Strategic MBA Perspective',
      subtitle: 'Marketing & Human Resources Synergy',
      description:
        'Combines hands-on frontline customer experience with academic rigor in Marketing and HR (MBA, Jain University), aligning client satisfaction with brand growth and team performance.',
      icon: 'GraduationCap',
      highlights: [
        'Customer lifecycle & retention strategies',
        'Team mentoring and peer onboarding',
        'Strategic problem-solving for enterprise clients',
      ],
    },
  ],

  categories: [
    { id: 'all', label: 'All Competencies' },
    { id: 'cx', label: 'Customer Experience (CX)' },
    { id: 'crm', label: 'CRM & Case Management' },
    { id: 'mba', label: 'MBA & Business Strategy' },
    { id: 'analytics', label: 'Excel & Reporting' },
    { id: 'sales', label: 'Sales & Revenue Upselling' },
    { id: 'operations', label: 'People & Operations' },
  ],

  skills: [
    {
      name: 'Email Customer Support',
      category: 'cx',
      categoryLabel: 'Customer Experience (CX)',
      description: 'End-to-end management of complex queries, sensitive reviews, and high-stakes retail cases.',
      context: '15 avg. complex cases/day for US Retail (Best Buy) with 10/10 QA rating.',
    },
    {
      name: 'Live-Chat Support & Sales',
      category: 'cx',
      categoryLabel: 'Customer Experience (CX)',
      description: 'Rapid-response text-based consultation, tone formulation, and real-time conversion.',
      context: 'Generated $60,000 in peak season live-chat sales at [24]7.ai.',
    },
    {
      name: 'Customer Conflict Resolution',
      category: 'cx',
      categoryLabel: 'Customer Experience (CX)',
      description: 'Defusing high-stress customer disputes through empathetic and legally compliant written responses.',
      context: 'Handled sensitive escalations and formal complaints with zero negative re-openings.',
    },
    {
      name: 'CRM & Case Management',
      category: 'crm',
      categoryLabel: 'CRM & Case Management',
      description: 'Ticket lifecycle tracking, status categorization, audit logging, and queue management.',
      context: 'Daily utilization across [24]7.ai enterprise platforms and Reliance Trends CRM.',
    },
    {
      name: 'SLA Compliance & Workflow',
      category: 'crm',
      categoryLabel: 'CRM & Case Management',
      description: 'Consistently maintaining target response times and meeting strict contractual turnaround parameters.',
      context: '100% adherence to defined SLA turnaround metrics for major US retail account.',
    },
    {
      name: 'Microsoft Excel & Reporting',
      category: 'analytics',
      categoryLabel: 'Excel & Reporting',
      description: 'Building filtered views, comparative charts, pivot tables, and operational tracking sheets.',
      context: 'Logs case queues, builds visual trackers, and delivers timely operational reporting.',
    },
    {
      name: 'Sales & Upselling',
      category: 'sales',
      categoryLabel: 'Sales & Revenue Upselling',
      description: 'Identifying buyer needs in real time, proposing tailored accessories, and driving cart size.',
      context: 'Overachieved monthly sales quota by up to 90% in retail operations.',
    },
    {
      name: 'Customer Retention Strategy',
      category: 'sales',
      categoryLabel: 'Sales & Revenue Upselling',
      description: 'Creating customer trust and post-interaction rapport to secure recurring business.',
      context: 'Helped store maintain a 95% customer retention rate via personalized service.',
    },
    {
      name: 'Strategic Marketing (MBA)',
      category: 'mba',
      categoryLabel: 'MBA & Business Strategy',
      description: 'Analyzing buyer behavior, consumer pain points, and brand positioning in omnichannel retail.',
      context: 'MBA Specialization at Jain University synthesizing theoretical frameworks with live operations.',
    },
    {
      name: 'Human Resource Management (MBA)',
      category: 'mba',
      categoryLabel: 'MBA & Business Strategy',
      description: 'Understanding workforce dynamics, conflict mediation, motivational drivers, and training tracks.',
      context: 'MBA Specialization at Jain University applied to peer mentoring and onboarding.',
    },
    {
      name: 'Team Mentoring & Onboarding',
      category: 'operations',
      categoryLabel: 'People & Operations',
      description: 'Guiding new sales associates, sharing best practices, and demonstrating customer handling.',
      context: 'Mentored new sales associates during Apprentice Leader track at Reliance Trends.',
    },
    {
      name: 'Cross-Functional Collaboration',
      category: 'operations',
      categoryLabel: 'People & Operations',
      description: 'Partnering across store management, warehouse teams, and supervisory channels.',
      context: 'Coordinated in-store campaigns with store leadership and multi-department teams.',
    },
    {
      name: 'Written Business Communication',
      category: 'cx',
      categoryLabel: 'Customer Experience (CX)',
      description: 'Crafting articulate, professional, grammatically sound emails tailored to executive standards.',
      context: 'Earned accelerated promotion from Chat into Email support in under 6 months.',
    },
    {
      name: 'Multitasking & Adaptability',
      category: 'operations',
      categoryLabel: 'People & Operations',
      description: 'Seamlessly balancing high-volume queues, real-time chats, and meticulous case reporting.',
      context: 'Managed peak season concurrent interactions without degrading service standards.',
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
        'Manage a complex, low-volume email queue (averaging 15 cases per day) for a premier US retail account, addressing everything from nuanced routine queries to sensitive executive complaints and product reviews.',
        'Resolve customer issues end-to-end, conducting in-depth root cause analysis across order management, return logistics, and warranty terms.',
        'Utilize enterprise CRM platforms and Microsoft Excel to construct filtered views, automated charts, and logs to ensure reporting remains accurate and current.',
        'Collaborate cross-functionally with logistics and account specialists to remove customer roadblocks and achieve first-contact resolution whenever feasible.',
      ],
      achievements: [
        'Consistently maintained a 10/10 quality score with 100% accuracy across evaluated email cases.',
        'Achieved 100% compliance with strict SLA-defined response-time targets on high-complexity queues.',
        'Earned promotion from sales chat into high-complexity email operations in under six months.',
      ],
      tools: ['Enterprise CRM', 'Microsoft Excel', 'Case Management Queue', 'Email Helpdesk', 'SLA Dashboards'],
    },
    {
      id: 'chat-advisor-sales',
      role: 'Chat Advisor, Sales',
      company: '[24]7.ai',
      period: '07/2025 – 12/2025',
      location: 'Bengaluru, India',
      responsibilities: [
        'Engaged high-intent online shoppers in a high-volume, fast-paced live-chat environment, providing consultative product recommendations.',
        'Built instant rapport and deciphered subtle customer intent through text alone, without the benefit of vocal inflection or body language.',
        'Handled objection resolution, product feature comparisons, and assisted checkouts during high-stakes retail peak season.',
        'Cultivated advanced written comprehension, active listening, and concise formulation skills that earned recognition from leadership.',
      ],
      achievements: [
        'Generated $60,000 in direct sales during peak retail season through live-chat recommendations.',
        'Consistently met and exceeded conversion targets in a demanding, fast-paced environment.',
        'Selected for promotion into complex email support within 5 months of tenure.',
      ],
      tools: ['Live Chat Platform', 'E-Commerce Catalogs', 'CRM Chat Console', 'Sales Tracking Tools'],
    },
    {
      id: 'apprentice-leader-reliance',
      role: 'Apprentice Leader — Department Manager Training Track',
      company: 'Reliance Trends',
      period: '06/2023 – 05/2024',
      location: 'Bengaluru, India (HSR Layout)',
      responsibilities: [
        'Selected for the Department Manager training track to oversee store floor operations, merchandise presentation, and sales staff coordination.',
        'Coordinated in-store promotional campaigns and activations that increased shopper foot traffic and sales during critical retail periods.',
        'Collaborated closely with store management to formulate daily sales goals and align floor associates with target revenue metrics.',
        'Employed store CRM software to log shopper activity, track footfall trends, and actively mentor incoming retail sales associates.',
      ],
      achievements: [
        'Successfully coordinated multi-category in-store promotions resulting in measurable foot traffic and sales lifts.',
        'Mentored and onboarded junior sales associates on customer engagement and POS processes.',
        'Maintained high operational standards across department inventory and customer service touchpoints.',
      ],
      tools: ['Store CRM Software', 'Inventory Management Systems', 'POS Systems', 'Sales Planning Sheets'],
    },
    {
      id: 'apprentice-trainee-reliance',
      role: 'Apprentice Trainee — Cashier & Customer Service',
      company: 'Reliance Trends',
      period: '05/2022 – 03/2023',
      location: 'Bengaluru, India (HSR Layout)',
      responsibilities: [
        'Delivered frontline cashiering and customer service, providing prompt checkout and handling customer inquiries with high attention to detail.',
        'Identified cross-sell and upsell opportunities at checkout, recommending complementary merchandise and loyalty membership benefits.',
        'Built lasting customer relationships through personalized customer service and post-sale follow-up.',
        'Handled cash reconciliations, POS transactions, and return/exchange counter resolutions.',
      ],
      achievements: [
        'Exceeded monthly sales targets by up to 90%, contributing significantly to overall department revenue growth.',
        'Helped the store achieve and sustain an exceptional 95% customer retention rate through attentive service.',
        'Earned elevation into the Department Manager apprentice leadership track.',
      ],
      tools: ['Point of Sale (POS)', 'Billing Systems', 'Customer Loyalty Database', 'Cash Management'],
    },
  ],

  caseStudies: [
    {
      id: 'bestbuy-email-qa',
      title: 'High-Complexity Escalation & Flawless QA in US Retail',
      category: 'Customer Experience & Quality Assurance',
      organization: '[24]7.ai • Best Buy Process',
      summary:
        'Managing high-stakes email escalations for a premier US retail brand, achieving a 10/10 quality score and 100% accuracy while safeguarding strict contractual SLA windows.',
      challenge:
        'Handling non-standard, high-complexity customer cases—ranging from damaged shipments and billing anomalies to executive complaints—where ambiguity was high and each written word represented the retail brand.',
      approach: [
        'Implemented a disciplined 4-stage case triage: Root-Cause Analysis, Cross-System Audit, De-escalating Resolution Proposal, and Post-Resolution Verification.',
        'Engineered custom Microsoft Excel filtered tracking sheets to monitor open ticket lifecycles and preempt SLA breaches before they occurred.',
        'Crafted precise, empathetic written correspondence tailored to individual customer sentiments without reliance on canned templates.',
      ],
      outcomes: [
        'Consistently sustained a perfect 10/10 QA rating with 100% accuracy across QA audits.',
        'Zero SLA breaches recorded across the assigned email queue.',
        'Achieved first-contact resolution on the majority of complex tier-2 inquiries.',
      ],
      metrics: [
        { label: 'Quality Score', value: '10 / 10' },
        { label: 'Audit Accuracy', value: '100%' },
        { label: 'SLA Adherence', value: '100%' },
      ],
      technologies: ['Enterprise CRM', 'Microsoft Excel', 'Case Management Console', 'Knowledge Base'],
    },
    {
      id: 'chat-sales-60k',
      title: '$60,000 Peak Revenue Generation via Live Chat',
      category: 'Digital Sales & Conversational Commerce',
      organization: '[24]7.ai',
      summary:
        'Navigating rapid-fire digital buyer interactions during retail peak season to convert casual web visitors into high-value verified purchasers.',
      challenge:
        'Engaging hesitant web shoppers through text chat without the advantage of facial expressions or vocal cues, while concurrently handling multiple incoming queries in a fast-paced environment.',
      approach: [
        'Developed an active inquiry strategy to detect user shopping intent within the first two chat exchanges.',
        'Utilized product comparison frameworks to clearly highlight value propositions, warranties, and bundled accessory benefits.',
        'Mastered de-escalation of cart-abandonment objections through swift problem resolution and personalized recommendations.',
      ],
      outcomes: [
        'Delivered $60,000 in direct online sales during the peak holiday shopping period.',
        'Consistently exceeded personal conversion benchmarks in a high-volume live environment.',
        'Rapid promotion into high-complexity email support within 5 months of hire.',
      ],
      metrics: [
        { label: 'Peak Sales Generated', value: '$60,000' },
        { label: 'Tenure to Promotion', value: '< 6 Months' },
        { label: 'Customer Satisfaction', value: 'High' },
      ],
      technologies: ['Live Chat Console', 'E-Commerce Portals', 'Sales Analytics', 'Product Recommendation Engines'],
    },
    {
      id: 'retail-retention-95',
      title: 'Store Traffic Acceleration & 95% Customer Retention',
      category: 'Retail Operations & Customer Retention',
      organization: 'Reliance Trends',
      summary:
        'Executing strategic in-store promotions, department management training, and customer loyalty retention in high-traffic retail.',
      challenge:
        'Increasing competitive foot traffic and converting one-time shoppers into recurring brand advocates during festival and seasonal campaigns.',
      approach: [
        'Coordinated with store general management to plan, stage, and execute high-visibility in-store promotional campaigns.',
        'Utilized CRM software to monitor loyalty member purchasing trends and implement proactive customer assistance.',
        'Mentored incoming retail sales associates on consultative selling, greeting standards, and rapid POS checkout.',
      ],
      outcomes: [
        'Exceeded monthly sales targets by up to 90%, fueling substantial department revenue expansion.',
        'Maintained a 95% store customer retention rate through customized service and dedicated follow-up.',
        'Elevated from Apprentice Trainee to Apprentice Leader on the Department Manager track.',
      ],
      metrics: [
        { label: 'Monthly Sales Target', value: '+90% Exceeded' },
        { label: 'Customer Retention', value: '95%' },
        { label: 'Track Elevation', value: 'Leader Track' },
      ],
      technologies: ['Store CRM', 'POS Terminal', 'Footfall Trackers', 'Inventory Logistics'],
    },
    {
      id: 'mba-cx-framework',
      title: 'Strategic MBA Synergy: Aligning CX with Marketing & HR',
      category: 'Business Administration & Strategy',
      organization: 'Jain University • Applied MBA Research',
      summary:
        'Bridging operational contact center data with MBA principles in Marketing and Human Resource Management to elevate customer lifetime value.',
      challenge:
        'Customer support departments often operate in silos from marketing and HR, causing disconnects between brand promises, customer sentiment, and team retention.',
      approach: [
        'Mapped customer feedback loops from frontline email and chat interactions directly to consumer journey stages.',
        'Applied HR organizational behavior models to enhance peer onboarding, decrease agent burnout, and boost retention.',
        'Synthesized operational KPI tracking (Excel, CRM metrics) with strategic business administration decision-making.',
      ],
      outcomes: [
        'Integrated framework for cross-departmental customer experience and employee engagement.',
        'Demonstrated practical application of ongoing MBA coursework to real-world corporate operational challenges.',
      ],
      metrics: [
        { label: 'MBA Focus', value: 'Marketing & HR' },
        { label: 'Synergy Area', value: 'CX Operations' },
        { label: 'Analytical Tool', value: 'MS Excel' },
      ],
      technologies: ['Excel Business Analytics', 'Consumer Behavior Models', 'HR Performance Metrics', 'CRM Frameworks'],
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
        'Deep study of Strategic Marketing, Consumer Behavior, Brand Strategy, and Digital Channels.',
        'Advanced coursework in Human Resource Management, Organizational Behavior, Talent Acquisition, and Performance Appraisal Systems.',
        'Synthesizing business administration theory with active customer operations, data reporting, and client satisfaction.',
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
        'Comprehensive foundation in Business Management, Principles of Marketing, Financial Accounting, and Business Communication.',
        'Graduated with a 7.01/10 CGPA while engaging in professional retail apprenticeships.',
        'Active leadership in student business initiatives and presentation forums.',
      ],
    },
  ],
};

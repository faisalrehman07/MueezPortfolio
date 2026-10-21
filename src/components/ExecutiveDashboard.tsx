import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  FileSpreadsheet, 
  Users,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export const ExecutiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'talent' | 'governance' | 'analytics' | 'excel'>('talent');
  const [ticketFilter, setTicketFilter] = useState<'all' | 'high' | 'resolved'>('all');
  const [excelSheet, setExcelSheet] = useState<'onboarding' | 'headcount' | 'sla'>('onboarding');

  // Interactive Onboarding Pipeline Data
  const onboardingAssociates = [
    {
      id: 'ASC-104',
      name: 'Rohan Sharma',
      role: 'Junior Sales Associate',
      stage: 'Day 10: Floor Shadowing',
      progress: 85,
      mentorNote: 'Passed POS assessment with 100% accuracy. Ready for live floor.',
      status: 'On Track',
      score: '98%',
    },
    {
      id: 'ASC-105',
      name: 'Priya Nair',
      role: 'Customer Service Trainee',
      stage: 'Day 6: Customer Etiquette',
      progress: 60,
      mentorNote: 'Excellent active listening and dispute de-escalation roleplay.',
      status: 'Exceeding',
      score: '100%',
    },
    {
      id: 'ASC-106',
      name: 'Arjun Das',
      role: 'POS & Cashier Trainee',
      stage: 'Day 14: Final Audit',
      progress: 100,
      mentorNote: 'Completed onboarding sprint. Zero cash variance certified.',
      status: 'Certified',
      score: '100%',
    },
  ];

  // High-Stakes Governance & Escalation Cases
  const governanceCases = [
    {
      id: 'GOV-8942',
      account: 'US Retail Process (Best Buy Account)',
      subject: 'Policy Exception & Billing Remediation',
      priority: 'high',
      status: 'Resolved',
      qaScore: '10/10',
      compliance: '100% Policy Compliant',
      turnaround: '18m (SLA Limit: <60m)',
    },
    {
      id: 'GOV-8943',
      account: 'Frontline Associate Shift Dispute',
      subject: 'Floor Scheduling & Grievance Mediation',
      priority: 'high',
      status: 'Resolved',
      qaScore: '10/10',
      compliance: 'Zero Escalations Upward',
      turnaround: '30m Mediation',
    },
    {
      id: 'GOV-8944',
      account: 'Enterprise Client Contract Review',
      subject: 'Warranty Claim Audit & Documentation',
      priority: 'normal',
      status: 'In Audit',
      qaScore: '10/10',
      compliance: 'Audit Verified',
      turnaround: '28m Active',
    },
  ];

  const filteredCases = governanceCases.filter(c => {
    if (ticketFilter === 'all') return true;
    if (ticketFilter === 'high') return c.priority === 'high';
    if (ticketFilter === 'resolved') return c.status === 'Resolved';
    return true;
  });

  return (
    <div className="w-full rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-700/80 p-5 sm:p-6 shadow-xl dark:shadow-2xl relative overflow-hidden group">
      
      {/* Background Accent Glows */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Cockpit Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase flex items-center gap-1.5 ml-1">
            <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            MBA HR & Operations Command Center
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Management Telemetry
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 mb-5 text-center">
        <button
          onClick={() => setActiveTab('talent')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'talent'
              ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow-xs font-extrabold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Talent & Onboarding</span>
        </button>

        <button
          onClick={() => setActiveTab('governance')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'governance'
              ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow-xs font-extrabold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Audit & SLA (10/10)</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'analytics'
              ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow-xs font-extrabold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>HR Analytics (95%)</span>
        </button>

        <button
          onClick={() => setActiveTab('excel')}
          className={`py-2 px-2 text-[11px] sm:text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'excel'
              ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow-xs font-extrabold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Excel MIS Sheets</span>
        </button>
      </div>

      {/* Tab 1: Talent & Associate Onboarding */}
      {activeTab === 'talent' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          
          {/* Top KPI row */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-blue-600 dark:text-blue-400 block">
                15+
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold block">
                Associates Mentored
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 block">
                10 Days
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold block">
                Avg. Ramp-up (vs 21d)
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-xl sm:text-2xl font-black font-mono text-indigo-600 dark:text-indigo-300 block">
                100%
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold block">
                Audit Pass Rate
              </span>
            </div>
          </div>

          {/* Active Associate Cohort List */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 px-1">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                Active Cohort Onboarding Roadmap (14-Day Sprint)
              </span>
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">3 Trainees In-Flight</span>
            </div>

            {onboardingAssociates.map((assoc) => (
              <div 
                key={assoc.id}
                className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-2 hover:border-blue-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center font-mono">
                      {assoc.id.replace('ASC-', '')}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {assoc.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                        {assoc.role} • <strong className="text-blue-600 dark:text-blue-400">{assoc.stage}</strong>
                      </p>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                    assoc.status === 'Certified'
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30'
                      : 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30'
                  }`}>
                    {assoc.status} ({assoc.score})
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${assoc.progress}%` }}
                  ></div>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-950/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800/60 leading-tight">
                  "{assoc.mentorNote}"
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Tab 2: Governance & Audit Compliance (10/10 Scorecard) */}
      {activeTab === 'governance' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          
          {/* Filter Pills */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              High-Stakes Escalation & Audit Log
            </span>
            <div className="flex items-center gap-1">
              {(['all', 'high', 'resolved'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setTicketFilter(f)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-bold font-mono uppercase transition-colors ${
                    ticketFilter === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredCases.map((item) => (
              <div 
                key={item.id}
                className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                      {item.id}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.subject}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                    QA {item.qaScore}
                  </span>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                  {item.account}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.compliance}</span>
                  <span>Turnaround: {item.turnaround}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span><strong>Zero SLA Breaches</strong> & 100% compliance across all handled enterprise queues.</span>
          </div>

        </div>
      )}

      {/* Tab 3: HR Analytics & Retention (95% Benchmark) */}
      {activeTab === 'analytics' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  Workforce Retention & Stability Index
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Reliance Trends Department Cohort</p>
              </div>
              <span className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                95%
              </span>
            </div>

            {/* Retention Comparison Bars */}
            <div className="space-y-2 pt-1 text-xs">
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Mueez Mentored Cohort (Actual)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">95% Retention</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  <span>Retail Industry Benchmark</span>
                  <span className="font-mono">65% Retention</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-slate-400 dark:bg-slate-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400">+30% delta</strong> driven by structured peer mentoring, transparent sales targets, and daily floor alignment.
            </div>
          </div>

          {/* HR Analytics Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">EVP / Engagement Score</span>
              <strong className="text-lg font-bold text-slate-900 dark:text-white">4.8 / 5.0</strong>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block mt-0.5">High peer cohesion</span>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">Training Completion</span>
              <strong className="text-lg font-bold text-slate-900 dark:text-white">100%</strong>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 block mt-0.5">Zero dropouts during sprint</span>
            </div>
          </div>

        </div>
      )}

      {/* Tab 4: Excel MIS Sheets Preview */}
      {activeTab === 'excel' && (
        <div className="space-y-3 animate-in fade-in duration-200">
          
          {/* Sub-tabs for Excel sheet simulation */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setExcelSheet('onboarding')}
              className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg transition-colors ${
                excelSheet === 'onboarding'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              [XLS] Onboarding_Tracker.xlsx
            </button>
            <button
              onClick={() => setExcelSheet('headcount')}
              className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg transition-colors ${
                excelSheet === 'headcount'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              [XLS] Headcount_MIS.xlsx
            </button>
            <button
              onClick={() => setExcelSheet('sla')}
              className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg transition-colors ${
                excelSheet === 'sla'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              [XLS] Audit_SLA_Log.xlsx
            </button>
          </div>

          {/* Interactive Sheet Table Simulation */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-[11px] font-mono">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-2 border-r border-slate-200 dark:border-slate-800">ID</th>
                  <th className="p-2 border-r border-slate-200 dark:border-slate-800">Category</th>
                  <th className="p-2 border-r border-slate-200 dark:border-slate-800">KPI Metric</th>
                  <th className="p-2 border-r border-slate-200 dark:border-slate-800">Status</th>
                  <th className="p-2">Formula/Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                {excelSheet === 'onboarding' && (
                  <>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">TRK-01</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">Trainee Ramp</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">10 Days</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px]">Optimal</span></td>
                      <td className="p-2 text-slate-500">=AVERAGE(C2:C16)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">TRK-02</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">POS Accuracy</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800 text-blue-600 font-bold">100%</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px]">Certified</span></td>
                      <td className="p-2 text-slate-500">=COUNTIF(D:D,"Pass")</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">TRK-03</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">Retention 12M</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">95.0%</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px]">Benchmark</span></td>
                      <td className="p-2 text-slate-500">=(Total-Churn)/Total</td>
                    </tr>
                  </>
                )}

                {excelSheet === 'headcount' && (
                  <>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">HC-01</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">Sales Floor</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">18 Associates</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px]">Staffed</span></td>
                      <td className="p-2 text-slate-500">Pivot by Department</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">HC-02</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">Cash & POS</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">6 Cashiers</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px]">Balanced</span></td>
                      <td className="p-2 text-slate-500">Shift allocation vlookup</td>
                    </tr>
                  </>
                )}

                {excelSheet === 'sla' && (
                  <>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">SLA-01</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">Best Buy Queue</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800 text-emerald-600 font-bold">100% Adherence</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px]">Zero Breach</span></td>
                      <td className="p-2 text-slate-500">=IF(TAT&lt;=60,"MET","BREACH")</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">SLA-02</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800">QA Audit Score</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800 text-blue-600 font-bold">10 / 10</td>
                      <td className="p-2 border-r border-slate-200 dark:border-slate-800"><span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[10px]">Perfect</span></td>
                      <td className="p-2 text-slate-500">Weighted QA Matrix</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono text-center">
            Built using Microsoft Excel Pivot tables, advanced VLOOKUP/XLOOKUP formulas, conditional formatting & automated lifecycle views.
          </p>

        </div>
      )}

      {/* Footer Status Strip */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1">
          <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>MBA Capstone Operations Model</span>
        </span>
        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
          Zero Compliance Deficits
        </span>
      </div>

    </div>
  );
};

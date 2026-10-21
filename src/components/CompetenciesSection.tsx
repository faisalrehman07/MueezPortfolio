import React from 'react';
import { CompetencyMatrix } from './CompetencyMatrix';
import { 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  FileSpreadsheet, 
  GraduationCap, 
  Users,
  Compass,
  Landmark,
  Target
} from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  return (
    <section id="competencies" className="py-20 relative bg-white dark:bg-[#080e1a] border-t border-slate-200/90 dark:border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Executive Competencies & Functional Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Strategic Competency Matrix & <span className="text-blue-600 dark:text-blue-400">Skill Portfolio</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Filter by business domain or search specific capabilities. Tailored for corporate human resources, talent operations, banking relationship management, and business strategy.
          </p>
        </div>

        {/* Executive Competency Matrix Component */}
        <div className="mb-16">
          <CompetencyMatrix />
        </div>

        {/* Recruiter-Friendly Skills Overview Matrix */}
        <div className="space-y-6 pt-10 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Structured Functional Overview for Corporate HR & Management
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Verified workplace deliverables and postgraduate MBA business training</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              100% Verified in Active Processes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Box 1: Human Resources & Talent Operations */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <Users className="w-4 h-4" />
                <h4>Human Resources & Talent Operations</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Talent Onboarding & Mentoring:</strong> Mentored and onboarded 15+ associates during leadership track.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Conflict De-escalation & Mediation:</strong> Defusing friction with empathetic, objective resolution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Workforce Retention Strategy:</strong> Sustained an exceptional 95% team retention rate.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: HR Analytics & Excel MIS */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <FileSpreadsheet className="w-4 h-4" />
                <h4>HR Analytics & Excel MIS Modeling</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Advanced Microsoft Excel:</strong> Pivot tables, XLOOKUP/VLOOKUP, automated status views.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Headcount & Attrition MIS:</strong> Structured tracking sheets for case lifecycles and workforce SLAs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Data-Backed Optimization:</strong> Eliminating bottlenecks in high-volume operations.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Audit Governance & Compliance */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <h4>Audit Governance & Labor Compliance</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>10/10 QA Scorecard:</strong> 100% compliance accuracy on high-complexity accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Zero SLA Breaches:</strong> Strict adherence to contractual turnaround limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Regulatory Documentation:</strong> Adhering to enterprise risk management and audit trails.</span>
                </li>
              </ul>
            </div>

            {/* Box 4: MBA Strategic Human Resource Management */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <GraduationCap className="w-4 h-4" />
                <h4>Strategic MBA Management & SHRM</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Strategic HR Planning (SHRM):</strong> Aligning workforce acquisition with business objectives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Performance Appraisal Models:</strong> Balanced scorecard KPI setting and feedback systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Organizational Dynamics:</strong> Motivation theory, group dynamics, and change management.</span>
                </li>
              </ul>
            </div>

            {/* Box 5: Talent Acquisition & Employer Branding */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <Target className="w-4 h-4" />
                <h4>Talent Acquisition & Employer Branding</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Competency Screening:</strong> Structuring behavioral interviewing and candidate rubrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Marketing + HR Synergy:</strong> Designing magnetic Employee Value Propositions (EVP).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Candidate Journey Optimization:</strong> Eliminating friction in hiring-to-onboarding transitions.</span>
                </li>
              </ul>
            </div>

            {/* Box 6: Banking & Enterprise Stakeholder Relations */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all shadow-xs">
              <div className="flex items-center gap-2.5 mb-3 text-blue-600 dark:text-blue-400 font-bold text-sm">
                <Landmark className="w-4 h-4" />
                <h4>Banking & Client Relationship Operations</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Executive Written Correspondence:</strong> Composing compliant, legally sound resolutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>High-Complexity Escalation Queues:</strong> Investigating sensitive billing & contract disputes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Consultative Revenue Impact:</strong> Driven $60,000 in consultative peak transactions.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

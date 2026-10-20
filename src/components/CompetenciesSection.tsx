import React from 'react';
import { SkillsGlobe } from './SkillsGlobe';
import { 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  FileSpreadsheet, 
  TrendingUp, 
  GraduationCap, 
  Users,
  Compass,
  Landmark
} from 'lucide-react';


export const CompetenciesSection: React.FC = () => {
  return (
    <section id="competencies" className="py-20 relative bg-[#080e1a] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-blue-400 font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Competencies & Functional Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Universal Competencies Globe & <span className="text-blue-400">Skill Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rotate the interactive 3D competencies sphere or filter by functional domain. Built for banking relationship management, corporate HR operations, and business strategy.
          </p>
        </div>

        {/* 3D Interactive Globe Component */}
        <div className="mb-16">
          <SkillsGlobe />
        </div>

        {/* Recruiter-Friendly Skills Overview Matrix */}
        <div className="space-y-6 pt-10 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Structured Competencies Matrix for Banking & HR
              </h3>
              <p className="text-xs text-slate-400">Verified workplace deliverables and MBA business training</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              100% Verified in Active Processes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Box 1: Banking & Client Relationship Management */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
                <Landmark className="w-4 h-4" />
                <h4>Banking & Client Relationship Operations</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>High-Complexity Account Queue:</strong> Handling sensitive reviews & executive disputes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Conflict De-escalation:</strong> Defusing friction with precision written communication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Client Retention Strategy:</strong> Maintaining high customer loyalty (95% retention rate).</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Human Resource Management & People Operations */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
                <Users className="w-4 h-4" />
                <h4>Human Resources & People Operations</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Talent Onboarding & Mentoring:</strong> Mentoring incoming sales associates and trainees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Organizational Behavior (MBA):</strong> Team dynamics, employee engagement, and motivation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Performance Appraisal Systems:</strong> Tracking KPIs and providing structured feedback.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Financial Analytics & MIS Reporting */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
                <FileSpreadsheet className="w-4 h-4" />
                <h4>Financial Analytics & MIS Reporting</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Filtered Excel Views:</strong> Segmenting case priorities, aging queues, and SLA risks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Operational MIS Dashboards:</strong> Visualizing resolution performance and accuracy trends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Data Integrity & Audit Logs:</strong> Maintaining clean records for executive review.</span>
                </li>
              </ul>
            </div>

            {/* Box 4: Sales & Commercial Performance */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <h4>Sales Strategy & Revenue Delivery</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>$60K Consultative Sales:</strong> Delivered via customer needs discovery in peak periods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>+90% Monthly Target Overachievement:</strong> Retail quotas surpassed at Reliance Trends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Commercial Conversion:</strong> Translating customer hesitation into completed transactions.</span>
                </li>
              </ul>
            </div>

            {/* Box 5: MBA Business Administration */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
                <GraduationCap className="w-4 h-4" />
                <h4>MBA Strategic Management</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Strategic Marketing:</strong> Customer journey mapping, brand positioning, and retention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Consumer Behavior:</strong> Decoding decision friction to prevent client churn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Corporate Strategy:</strong> Macro perspective across business economics and operations.</span>
                </li>
              </ul>
            </div>

            {/* Box 6: Operations & Compliance Governance */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <h4>Operations & Audit Compliance</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>100% Audit Compliance:</strong> Zero SLA breaches on strict US enterprise account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>CRM & Workflow Routing:</strong> Tracking ticket lifecycles and maintaining audit trails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Cross-Functional Alignment:</strong> Partnering with department management and store leads.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

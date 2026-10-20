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
  Compass
} from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  return (
    <section id="competencies" className="py-20 relative bg-[#070d17] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Universal Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Universal Skills Globe & <span className="gold-gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rotate the interactive 3D competencies sphere or filter by operational domain. Every capability is supported by genuine workplace deliverables and MBA business training.
          </p>
        </div>

        {/* 3D Interactive Globe Component */}
        <div className="mb-16">
          <SkillsGlobe />
        </div>

        {/* Recruiter-Friendly Skills Overview Matrix (Section E) */}
        <div className="space-y-6 pt-10 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-400" />
                Structured Recruiter Competencies Matrix
              </h3>
              <p className="text-xs text-slate-400">Categorized overview tailored for CX, operations, and coordination roles</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              100% Verified in Active Processes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Box 1: Customer Experience & Support */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <h4>Customer Experience & Support</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>High-Complexity Email Support:</strong> Handling sensitive reviews & executive disputes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Live-Chat Consultative Sales:</strong> Fast conversion & text-only intent comprehension.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>De-escalation & Tone:</strong> Resolving tension without reliance on vocal inflection.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: CRM & Systems Operations */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
                <Layers className="w-4 h-4" />
                <h4>CRM & Case Management</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Case Lifecycle Tracking:</strong> Categorization, audit trails, and status integrity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>SLA Compliance:</strong> Rigorous adherence to contractual turnaround thresholds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Enterprise Retail Tools:</strong> Best Buy process & Reliance Trends CRM systems.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Excel & Analytics */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
                <FileSpreadsheet className="w-4 h-4" />
                <h4>Excel & Reporting</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Filtered Queue Views:</strong> Segmenting high-priority and aging cases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Operational Charts:</strong> Visualizing resolution performance and accuracy trends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Reporting Cleanliness:</strong> Maintaining accurate logs for supervisory review.</span>
                </li>
              </ul>
            </div>

            {/* Box 4: Sales & Retention */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-amber-300 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <h4>Sales & Client Retention</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>$60K Peak Sales:</strong> Delivered via live chat recommendations during retail peak.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>+90% Quota Overachievement:</strong> Retail targets surpassed at Reliance Trends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>95% Customer Retention:</strong> Secured through tailored customer follow-up.</span>
                </li>
              </ul>
            </div>

            {/* Box 5: MBA Business Administration */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-purple-400 font-bold text-sm">
                <GraduationCap className="w-4 h-4" />
                <h4>MBA Strategy & Marketing</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Marketing Strategy:</strong> Understanding customer journey touchpoints and brand equity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Consumer Behavior:</strong> Decoding decision friction to prevent cart and loyalty churn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Business Administration:</strong> Macro view of retail logistics and client services.</span>
                </li>
              </ul>
            </div>

            {/* Box 6: People, HR & Operations */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2.5 mb-3 text-pink-400 font-bold text-sm">
                <Users className="w-4 h-4" />
                <h4>People & Operational Leadership</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Peer Mentoring:</strong> Mentoring incoming retail sales associates and trainees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Promotional Event Coordination:</strong> Orchestrating in-store activations for footfall.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Cross-Functional Collaboration:</strong> Aligning store floor with inventory and leadership.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

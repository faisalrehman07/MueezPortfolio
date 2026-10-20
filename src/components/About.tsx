import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  Landmark, 
  Users, 
  FileSpreadsheet, 
  CheckCircle2, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-blue-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-blue-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-blue-400 font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Executive Profile & Sector Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MBA Management Acumen Tailored for <span className="text-blue-400">Banking & Corporate HR</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Positioning an MBA dual specialization in Marketing & Human Resources alongside high-precision operational discipline, client relationship management, and commercial target execution.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative & Professional Trajectory (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                Strategic Preparation for Banking & Corporate Human Resources
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                As an MBA candidate in <strong className="text-white">Marketing & HR (Jain University)</strong> holding a <strong className="text-white">BBA in Management (7.01 CGPA)</strong>, Mueez Baig combines academic grounding in organizational behavior, talent acquisition, strategic marketing, and financial metrics with rigorous corporate operational experience.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                In client operations for a major US retail brand (<strong className="text-white">Best Buy at [24]7.ai</strong>), Mueez manages low-volume, high-complexity escalations—delivering a <strong className="text-white font-semibold">10/10 quality assurance scorecard</strong> with <strong className="text-blue-400 font-semibold">100% accuracy</strong> and zero SLA breaches. This meticulous precision, risk management, and formal de-escalation skill set translates directly into <strong className="text-white">Banking & Financial Services</strong> (relationship management, account operations, compliance, wealth onboarding).
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Concurrently, his leadership track experience at <strong className="text-white">Reliance Trends</strong>—coordinating in-store operations, hitting revenue quotas (+90% target overachievement), and <strong className="text-white font-semibold">mentoring/training new sales associates</strong>—forms a practical bedrock for <strong className="text-white">Human Resources & People Operations</strong> (talent onboarding, employee relations, policy enforcement).
              </p>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 font-medium">Core Professional Standard:</span>
                <span className="font-semibold text-emerald-400">Zero SLA Breaches • 100% Audit Compliance</span>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {candidateData.strategicPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                      {getIcon(pillar.icon)}
                    </div>
                    <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-tight">{pillar.subtitle}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-blue-400">
                    {pillar.highlights[0]}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: MBA Specialization, Languages & Relocation Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* The MBA Advantage Card */}
            <div className="p-6 rounded-2xl glass-panel border border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">The MBA Advantage: Dual Specialization</h3>
              </div>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Enrolled in the <strong className="text-white">MBA program at Jain University (2026)</strong> with dual focus in <strong className="text-white">Marketing and Human Resources</strong>, built upon a <strong className="text-white">BBA in Management (Dayananda Sagar University, 7.01 CGPA)</strong>.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Banking Sector Alignment:</strong> High-value client relationship management, compliance, and risk mitigation.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Corporate HR Alignment:</strong> Talent onboarding, employee training tracks, dispute mediation, and organizational behavior.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Analytical Rigor:</strong> Microsoft Excel MIS reporting, case tracking dashboards, and KPI analysis.</span>
                </div>
              </div>
            </div>

            {/* Languages & Global Readiness */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  Multilingual Proficiency
                </h4>
                <span className="text-[11px] text-slate-400">4 Languages</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {candidateData.personal.languages.map((lang, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                    <div className="flex items-center justify-between font-semibold text-white">
                      <span>{lang.name}</span>
                      {lang.isNative && (
                        <span className="text-[10px] text-blue-400 font-mono">Native</span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE Readiness Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-blue-500/30 text-xs text-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <strong className="text-white block">Ready for UAE Banking & HR Roles</strong>
                  <span className="text-slate-400 text-[11px]">Dubai & Abu Dhabi • 30 Days Notice</span>
                </div>
              </div>
              <a 
                href="#contact" 
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shrink-0"
              >
                Connect
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

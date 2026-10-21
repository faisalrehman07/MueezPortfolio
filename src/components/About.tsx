import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  Users, 
  FileSpreadsheet, 
  Globe, 
  ShieldCheck, 
  Briefcase,
  GraduationCap,
  Quote
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/90 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Executive Profile & Human Capital Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            MBA Acumen Engineered for <span className="text-blue-600 dark:text-blue-400">Strategic People Operations</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Positioning an MBA dual specialization in Human Resource Management & Marketing alongside high-precision operational discipline, associate mentoring, and audit governance.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative & Strategic Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Strategic Preparation for Corporate Human Resources & Operations
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                As an MBA candidate in <strong className="text-slate-900 dark:text-white">Human Resource Management & Marketing (Jain University, Bangalore)</strong> holding a <strong className="text-slate-900 dark:text-white">BBA in Management (7.01 CGPA)</strong>, Mueez Baig bridges modern human capital strategy with high-stakes corporate execution.
              </p>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                During his accelerated leadership track at <strong className="text-slate-900 dark:text-white font-semibold">Reliance Trends</strong>, Mueez took direct responsibility for <strong className="text-blue-700 dark:text-blue-400 font-semibold">mentoring, training, and onboarding 15+ incoming retail associates</strong>. By formalizing an intensive 14-day onboarding sprint, he compressed time-to-productivity by 52% and fostered an exceptional <strong className="text-slate-900 dark:text-white font-semibold">95% team retention rate</strong> over 12 months.
              </p>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Concurrently, in high-stakes client operations for a premier US enterprise account (<strong className="text-slate-900 dark:text-white font-semibold">Best Buy at [24]7.ai</strong>), Mueez manages complex grievance escalations and policy compliance disputes. His performance is backed by a <strong className="text-emerald-700 dark:text-emerald-400 font-bold">10/10 quality assurance scorecard</strong> with <strong className="text-blue-700 dark:text-blue-400 font-bold">100% accuracy</strong> and zero SLA breaches.
              </p>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Core Professional Standard:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Zero SLA Breaches • 100% Policy Compliance</span>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {candidateData.strategicPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getIcon(pillar.icon)}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{pillar.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{pillar.subtitle}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] text-blue-600 dark:text-blue-400 font-semibold">
                    {pillar.highlights[0]}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: HR Leadership Philosophy & Languages (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* HR Philosophy Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-blue-500/30 bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 shadow-md space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <Quote className="w-4 h-4" />
                <span>Executive HR Philosophy</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {candidateData.hrPhilosophy.headline}
              </h4>

              <blockquote className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed border-l-2 border-blue-500 pl-3">
                {candidateData.hrPhilosophy.quote}
              </blockquote>

              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                {candidateData.hrPhilosophy.corePrinciples.map((principle, pIdx) => (
                  <div key={pIdx} className="text-xs text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white block font-semibold">{principle.title}</strong>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight block">{principle.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Proficiencies */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Multilingual Business Communication</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {candidateData.personal.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block">{lang.name}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{lang.level}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                Vital for cross-cultural team management and workforce alignment across multinational and international organizations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

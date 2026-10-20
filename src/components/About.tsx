import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  MessageSquare, 
  BarChart3, 
  GraduationCap, 
  CheckCircle2, 
  Globe, 
  MapPin, 
  Sparkles,
  Shield,
  Briefcase
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-sky-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-sky-400 font-medium">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Profile & Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Frontline Excellence with <span className="gold-gradient-text">MBA Strategy</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A customer experience professional who combines hands-on escalation de-escalation for Fortune 500 accounts with master's-level training in Marketing and Human Resource Management.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative & Professional Trajectory (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                Customer Support & Client-Facing Discipline
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Mueez Baig is a client-facing professional with direct experience across both high-volume live-chat sales and complex, accuracy-driven email support for a major US retail account (<strong className="text-white">Best Buy</strong>). Originally starting in a fast-paced sales chat role at <strong className="text-white">[24]7.ai</strong>, he demonstrated remarkable written comprehension, tone moderation, and de-escalation ability—earning an accelerated promotion into the high-complexity email queue in under six months.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                On the email support queue, Mueez maintains an audit quality score of <strong className="text-amber-400 font-semibold">10/10 with 100% accuracy</strong>, handling sensitive consumer reviews, complex warranty inquiries, and escalated complaints end-to-end while unfailingly meeting contractual SLA response targets.
              </p>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 font-medium">Core Operating Principle:</span>
                <span className="font-semibold text-emerald-400">Zero SLA Breaches • 100% Policy Adherence</span>
              </div>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {candidateData.strategicPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                      {getIcon(pillar.icon)}
                    </div>
                    <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-tight">{pillar.subtitle}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-sky-400">
                    {pillar.highlights[0]}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: MBA Education, Languages & UAE Relocation Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* The MBA Advantage Card */}
            <div className="p-6 rounded-2xl glass-panel border border-amber-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">The MBA Edge (Marketing & HR)</h3>
              </div>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Currently pursuing an <strong className="text-white">MBA in Marketing and HR at Jain University (2026)</strong>, following a <strong className="text-white">BBA in Management (Dayananda Sagar University, 7.01 CGPA)</strong>. This background empowers Mueez to view customer interactions not as isolated tickets, but as vital touchpoints in the marketing funnel, customer retention engine, and organizational workflow.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Consumer Journey Mapping & Brand Loyalty retention</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cross-functional communication & peer coaching</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Operational KPI tracking and performance analysis</span>
                </div>
              </div>
            </div>

            {/* Languages & Global Readiness */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-400" />
                  Multilingual Capability
                </h4>
                <span className="text-[11px] text-slate-400">4 Languages</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {candidateData.personal.languages.map((lang, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                    <div className="flex items-center justify-between font-semibold text-white">
                      <span>{lang.name}</span>
                      {lang.isNative && (
                        <span className="text-[10px] text-amber-400 font-mono">Native</span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* UAE Readiness Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 text-xs text-emerald-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <strong className="text-white block">Ready for UAE Market</strong>
                  <span className="text-emerald-300/80 text-[11px]">Dubai & Abu Dhabi • 30 Days Notice</span>
                </div>
              </div>
              <a 
                href="#contact" 
                className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shrink-0"
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

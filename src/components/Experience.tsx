import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Building2
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('cx-email-advisor');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative bg-slate-950/70 border-t border-slate-800/80">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-blue-400 font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Demonstrated Operational Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & <span className="text-blue-400">Career Progression</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A progression marked by rapid internal promotions, rigorous audit compliance, team mentoring, and measurable revenue generation across retail and enterprise accounts.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-10">
          
          {candidateData.experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = index === 0;

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot Indicator */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isCurrent 
                    ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/50 scale-125' 
                    : 'bg-slate-900 border-slate-600 group-hover:border-blue-400'
                }`}>
                  {isCurrent && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  )}
                </div>

                {/* Date Badge positioned for desktop on the left */}
                <div className="hidden sm:block absolute -left-36 md:-left-44 top-1 text-right w-28 md:w-36">
                  <span className={`text-xs font-mono font-bold block ${isCurrent ? 'text-blue-400' : 'text-slate-400'}`}>
                    {exp.period}
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">{exp.location}</span>
                </div>

                {/* Experience Card */}
                <div className={`p-6 sm:p-7 rounded-2xl glass-panel transition-all duration-300 border ${
                  isCurrent 
                    ? 'border-blue-500/40 bg-slate-900/95 shadow-xl' 
                    : 'border-slate-800/90 hover:border-slate-700 bg-slate-900/60'
                }`}>
                  
                  {/* Mobile Date Header */}
                  <div className="sm:hidden flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1 text-blue-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role & Company Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm font-bold text-blue-400">{exp.company}</span>
                        {exp.accountOrDept && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {exp.accountOrDept}
                          </span>
                        )}
                      </div>
                    </div>

                    {isCurrent && (
                      <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-950/70 text-emerald-300 border border-emerald-500/40">
                        Current Role • Active Process
                      </span>
                    )}
                  </div>

                  {/* Promotion Highlight Ribbon if applicable */}
                  {exp.isPromotion && exp.promotionNote && (
                    <div className="p-3 mb-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-semibold">Internal Promotion Track: </strong>
                        <span>{exp.promotionNote}</span>
                      </div>
                    </div>
                  )}

                  {/* Verified Achievements Strip */}
                  <div className="mb-4 space-y-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Key Verified Operational Deliverables</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((ach, achIdx) => (
                        <div 
                          key={achIdx}
                          className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-emerald-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand / Collapse Toggle for Detailed Responsibilities */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>{isExpanded ? 'Hide Detailed Responsibilities' : 'View Detailed Operational Responsibilities'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-2 animate-in fade-in duration-200 text-xs text-slate-300">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <div key={respIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-blue-400 font-bold shrink-0">•</span>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tools & Systems Used */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-500 font-mono mr-1">Tools & Platforms:</span>
                    {exp.tools.map((tool, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-slate-300 border border-slate-700/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

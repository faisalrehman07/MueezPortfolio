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
  Users,
  Award
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('cx-email-advisor');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/90 dark:border-slate-800/80">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Demonstrated Operational & People Leadership Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & <span className="text-blue-600 dark:text-blue-400">Career Progression</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A progression marked by rapid internal promotions, associate mentoring and onboarding, 10/10 audit compliance, and measurable commercial results.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-10">
          
          {candidateData.experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = index === 0;

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot Indicator */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isCurrent 
                    ? 'bg-blue-600 border-blue-400 shadow-md shadow-blue-500/50 scale-125' 
                    : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 group-hover:border-blue-500'
                }`}>
                  {isCurrent && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  )}
                </div>

                {/* Date Badge positioned for desktop on the left */}
                <div className="hidden sm:block absolute -left-36 md:-left-44 top-1 text-right w-28 md:w-36">
                  <span className={`text-xs font-mono font-bold block ${isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {exp.period}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">{exp.location}</span>
                </div>

                {/* Experience Card */}
                <div className={`p-6 sm:p-7 rounded-3xl glass-panel transition-all duration-300 border ${
                  isCurrent 
                    ? 'border-blue-500/50 bg-white dark:bg-slate-900/95 shadow-md dark:shadow-xl' 
                    : 'border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 bg-white/80 dark:bg-slate-900/60 shadow-xs'
                }`}>
                  
                  {/* Mobile Date Header */}
                  <div className="sm:hidden flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
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
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{exp.company}</span>
                        {exp.accountOrDept && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {exp.accountOrDept}
                          </span>
                        )}
                      </div>
                    </div>

                    {exp.isPromotion && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 self-start md:self-auto">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Accelerated Promotion Track</span>
                      </span>
                    )}
                  </div>

                  {/* Promotion Note */}
                  {exp.promotionNote && (
                    <div className="mb-4 p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-500/30 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>Promotion Recognition:</strong> {exp.promotionNote}</span>
                    </div>
                  )}

                  {/* HR Relevance Callout */}
                  {exp.hrRelevance && (
                    <div className="mb-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 dark:text-white font-semibold">Strategic People & Operations Relevance:</strong>{' '}
                        <span>{exp.hrRelevance}</span>
                      </div>
                    </div>
                  )}

                  {/* Achievements Highlights Always Visible */}
                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Key Quantified Deliverables:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Responsibilities & Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Operational & People Responsibilities:
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="leading-relaxed pl-1">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools & Systems Used */}
                      <div className="pt-2">
                        <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase block mb-1.5">
                          Enterprise Tools & Systems:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tools.map((t, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expand/Collapse Toggle Button */}
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse Operational Detail' : 'Expand Full Operational Scope'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

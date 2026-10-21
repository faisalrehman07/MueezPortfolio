import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { CaseStudyModal } from './CaseStudyModal';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  Users,
  ShieldCheck,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof candidateData.caseStudies[0] | null>(null);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />;
      default:
        return <TrendingUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="casestudies" className="py-20 relative bg-white dark:bg-[#080e1a] border-t border-slate-200/90 dark:border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>Practical Evidence & Measured Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Operational Case Studies & <span className="text-blue-600 dark:text-blue-400">Strategic HR Impact</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed case studies demonstrating how human capital mentoring, 10/10 compliance rigor, and MBA business frameworks were executed to deliver tangible organizational results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {candidateData.caseStudies.map((study, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={study.id}
                className={`p-6 sm:p-7 rounded-3xl glass-panel transition-all duration-300 border flex flex-col justify-between group shadow-xs hover:shadow-md ${
                  isFeatured
                    ? 'border-blue-500/50 bg-white dark:bg-slate-900/90'
                    : 'border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 bg-white/80 dark:bg-slate-900/60'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Category & Organization */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-50 dark:bg-blue-600/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 flex items-center gap-1.5">
                      {getCategoryIcon(index)}
                      <span>{study.category}</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {study.organization}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Highlight Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="text-sm sm:text-base font-black font-mono text-slate-900 dark:text-white block">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block font-medium">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Approach Preview Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Key Outcomes & Frameworks:
                    </div>
                    {study.outcomes.slice(0, 2).map((outcome, oIdx) => (
                      <div key={oIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-snug">{outcome}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer / CTA to Open Modal */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(study)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Read Executive Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

    </section>
  );
};

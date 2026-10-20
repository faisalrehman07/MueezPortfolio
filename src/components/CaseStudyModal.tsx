import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3, 
  Briefcase
} from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: typeof candidateData.caseStudies[0] | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0d1627] border border-blue-500/40 p-6 sm:p-8 shadow-2xl text-left space-y-6 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors focus:outline-none"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-600/20 text-blue-300 border border-blue-500/30 uppercase">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-400 font-semibold">• {caseStudy.organization}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            {caseStudy.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <span className="text-lg sm:text-2xl font-mono font-extrabold text-white block">
                {m.value}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">{m.label}</span>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-400" />
            The Operational Challenge & Context
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Method & Strategic Approach */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            Strategic Approach & Execution
          </h4>
          <div className="space-y-2.5">
            {caseStudy.approach.map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes & Verified Impact */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Verified Deliverables & Outcomes
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {caseStudy.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-mono">Tools:</span>
            {caseStudy.technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-[11px]">
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { candidateData } from '../data/candidate';
import { ExecutiveDossier } from './ExecutiveDossier';
import { LinkedInIcon } from './Icons';
import { 
  FileText, 
  Globe, 
  Mail, 
  ChevronRight,
  ArrowDown,
  Users,
  FileSpreadsheet,
  ShieldCheck,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
      
      {/* Subtle Corporate Ambient Lighting (No neon grid) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-blue-500/5 dark:bg-blue-600/5 pointer-events-none blur-3xl rounded-full"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Column Text & CTAs, Right Column Executive Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: 7 Cols on Desktop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Focus Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                MBA in Human Resource Management & Marketing
              </span>
            </div>

            {/* Candidate Name & Title - Executive MBA Presentation */}
            <div className="space-y-4">
              
              {/* Executive Name with refined typography & corporate accent bar */}
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                    <span className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      Mueez
                    </span>{' '}
                    <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                      Baig
                    </span>
                  </h1>
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 align-middle">
                    MBA • Jain University
                  </span>
                </div>
                {/* Refined corporate underline ornament */}
                <div className="mt-2.5 flex items-center gap-1.5">
                  <span className="h-1 w-12 rounded-full bg-blue-600"></span>
                  <span className="h-1 w-3 rounded-full bg-blue-400"></span>
                  <span className="h-1 w-1.5 rounded-full bg-blue-300 dark:bg-slate-700"></span>
                </div>
              </div>

              {/* Executive Title Card / Corporate Designation Lockup */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-blue-50/40 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-[#0d1629] border-l-4 border-l-blue-600 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h2 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                    Strategic People Operations{' '}
                    <span className="text-slate-400 dark:text-slate-500 font-light">&</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">
                      Corporate HR Specialist
                    </span>
                  </h2>
                </div>

                {/* Strategic Functional Pillars Chips */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-200/80 dark:border-slate-800">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Talent Acquisition & Onboarding</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>HR Analytics & Excel MIS</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>Associate Retention (95%)</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>10/10 Compliance Audit SLA</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Executive Professional Summary tailored for HR & MBA Acumen */}
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              MBA candidate specializing in <strong className="text-slate-900 dark:text-white font-semibold">Human Resource Management & Marketing (Jain University, Bangalore)</strong> with a foundational <strong className="text-slate-900 dark:text-white font-semibold">BBA in Management (7.01 CGPA)</strong>. Synthesizes strategic human capital frameworks with operational rigor. Demonstrated leadership <strong className="text-slate-900 dark:text-white font-semibold">mentoring and onboarding 15+ associates</strong> at <strong className="text-slate-900 dark:text-white font-semibold">Reliance Trends</strong>, driving a <strong className="text-blue-700 dark:text-blue-400 font-bold">95% team retention rate</strong>. Concurrently manages high-complexity enterprise cases (<strong className="text-slate-900 dark:text-white font-semibold">Best Buy at [24]7.ai</strong>) maintaining a flawless <strong className="text-emerald-700 dark:text-emerald-400 font-bold">10/10 audit quality score</strong> and zero SLA breaches. Actively seeking corporate opportunities globally across <strong className="text-blue-700 dark:text-blue-300 font-semibold">Corporate Human Resources</strong> (HR Generalist, Talent Acquisition, People Operations, HRBP Track) and <strong className="text-blue-700 dark:text-blue-300 font-semibold">Banking Client Operations</strong>.
            </p>

            {/* Global Mobility Pill (No UAE limitation) */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Global Mobility: <strong className="text-slate-900 dark:text-white">Open to Opportunities Globally (Relocation & Remote)</strong></span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold">Notice: 30 Days</span>
                <span className="px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-semibold">Work Authorization Ready</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>View Career Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Executive CV</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={candidateData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Mueez Baig LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${candidateData.personal.email}`}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Email Mueez Baig"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 5 Cols on Desktop - Executive Candidate Dossier */}
          <div className="lg:col-span-5">
            <ExecutiveDossier onOpenResumeModal={onOpenResumeModal} />
          </div>

        </div>

        {/* Verified Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {candidateData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {metric.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                  {metric.description}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] text-blue-600 dark:text-blue-400 font-semibold font-mono">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="flex justify-center mt-8">
        <a 
          href="#about" 
          className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex flex-col items-center gap-1 text-xs font-semibold"
          aria-label="Scroll to Executive Profile"
        >
          <span>Discover Executive Profile</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

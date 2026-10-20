import React from 'react';
import { candidateData } from '../data/candidate';
import { ExecutiveDashboard } from './ExecutiveDashboard';
import { LinkedInIcon } from './Icons';
import { 
  FileText, 
  MapPin, 
  Mail, 
  ChevronRight,
  Sparkles,
  ArrowDown
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Background Decorative MBA & Executive Ambience */}
      <div className="absolute inset-0 bg-executive-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gradient pointer-events-none blur-3xl"></div>
      
      {/* Floating MBA Geometric Nodes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-2xl animate-subtle-float pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-sky-500/5 rounded-full blur-2xl animate-subtle-float pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Column Text & CTAs, Right Column Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 7 Cols on Desktop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 shadow-lg shadow-amber-500/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                MBA Professional • Customer Experience & Operations
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Hello, I'm <span className="gold-gradient-text">{candidateData.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {candidateData.personal.title}
              </p>
              <div className="flex items-center gap-2 text-sm text-sky-400 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{candidateData.personal.subHeadline}</span>
              </div>
            </div>

            {/* Evidence-Based Professional Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Customer support & client-facing professional with over a year of high-impact experience managing accuracy-driven, high-complexity email cases for a premier US retail brand (<strong className="text-white">Best Buy</strong> at <strong className="text-white">[24]7.ai</strong>). Promoted from sales chat in under six months with a consistent <strong className="text-amber-400 font-semibold">10/10 quality score</strong> and <strong className="text-sky-400 font-semibold">100% accuracy</strong>. Earning an <strong className="text-white">MBA in Marketing & HR</strong> from Jain University and actively seeking support or operational coordination roles in <strong className="text-amber-300">Dubai / Abu Dhabi, UAE</strong>.
            </p>

            {/* Relocation & Status Banner */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Target Relocation: <strong className="text-white">Dubai & Abu Dhabi, UAE</strong></span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Notice: 30 Days</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">Visa Ready</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <span>Explore Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-md"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View / Print CV</span>
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={candidateData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-400 text-slate-300 hover:text-sky-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label="Mueez Baig LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${candidateData.personal.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-amber-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label="Email Mueez Baig"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 5 Cols on Desktop - Interactive Executive Dashboard */}
          <div className="lg:col-span-5">
            <ExecutiveDashboard />
          </div>

        </div>

        {/* Verified Metrics Strip */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {candidateData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl glass-panel border border-slate-800/90 hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-amber-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-snug">
                  {metric.description}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-sky-400 font-medium">
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
          className="text-slate-500 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 text-xs font-medium"
          aria-label="Scroll to About section"
        >
          <span>Discover Profile</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

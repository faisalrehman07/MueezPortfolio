import React from 'react';
import { candidateData } from '../data/candidate';
import { ExecutiveDashboard } from './ExecutiveDashboard';
import { LinkedInIcon } from './Icons';
import { 
  FileText, 
  MapPin, 
  Mail, 
  ChevronRight,
  Landmark,
  ArrowDown,
  Building2
} from 'lucide-react';


interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Background Institutional Grid & Lighting */}
      <div className="absolute inset-0 bg-executive-grid opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gradient pointer-events-none blur-3xl"></div>
      
      {/* Subtle Corporate Lighting Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/5 rounded-full blur-2xl animate-subtle-float pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-slate-600/5 rounded-full blur-2xl animate-subtle-float pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Column Text & CTAs, Right Column Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 7 Cols on Desktop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Executive Sector Focus Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide uppercase flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-blue-400" />
                MBA in Marketing & HR • Banking & Corporate HR Focus
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {candidateData.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                MBA Graduate | Banking Operations & Corporate HR Specialist
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Client Relationship Management • Talent Operations • Business Administration</span>
              </div>
            </div>

            {/* Evidence-Based Professional Summary for Banking & HR */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              MBA candidate specializing in <strong className="text-white">Marketing & Human Resources (Jain University, Bangalore)</strong> with a foundational <strong className="text-white">BBA in Management (7.01 CGPA)</strong>. Combines strategic business management with operational precision across Fortune 500 client accounts (<strong className="text-white">Best Buy at [24]7.ai</strong>), maintaining a <strong className="text-white font-semibold">10/10 audit quality score</strong> and <strong className="text-blue-400 font-semibold">100% accuracy</strong> with zero SLA deviations. Demonstrated commercial acumen delivering <strong className="text-white font-semibold">$60,000 in consultative peak revenue</strong> and associate onboarding/mentoring track at <strong className="text-white">Reliance Trends</strong>. Actively seeking career opportunities in <strong className="text-blue-300 font-medium">Banking & Financial Services</strong> and <strong className="text-blue-300 font-medium">Corporate HR</strong> in <strong className="text-white">Dubai, Abu Dhabi (UAE)</strong> and India.
            </p>

            {/* Target Sectors & Mobility Pill */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Target Mobility: <strong className="text-white">Dubai & Abu Dhabi, UAE</strong></span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Notice: 30 Days</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">Visa Ready</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>Explore Experience & Roles</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View / Print CV</span>
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={candidateData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-blue-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Mueez Baig LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${candidateData.personal.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-blue-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Email Mueez Baig"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 5 Cols on Desktop - Interactive Executive Cockpit */}
          <div className="lg:col-span-5">
            <ExecutiveDashboard />
          </div>

        </div>

        {/* Verified Metrics Strip (No Yellow) */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {candidateData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-snug">
                  {metric.description}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-blue-400 font-medium">
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
          className="text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1 text-xs font-medium"
          aria-label="Scroll to About section"
        >
          <span>Discover Profile</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

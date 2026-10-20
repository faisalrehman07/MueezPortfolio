import React from 'react';
import { candidateData } from '../data/candidate';
import { LinkedInIcon } from './Icons';
import { 
  ArrowUp, 
  Mail, 
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050a12] border-t border-slate-800/80 py-12 relative overflow-hidden">
      
      {/* Decorative hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Brand & Monogram (6 Cols) */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-400/40 flex items-center justify-center font-bold text-amber-400 text-sm shadow-md">
                {candidateData.personal.monogram}
              </div>
              <span className="text-base font-extrabold text-white">
                {candidateData.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Customer Support & Client Operations Professional • MBA in Marketing & HR • Open to UAE Relocation (Dubai & Abu Dhabi)
            </p>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#competencies" className="hover:text-amber-400 transition-colors">Competencies</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#casestudies" className="hover:text-amber-400 transition-colors">Case Studies</a>
            <a href="#education" className="hover:text-amber-400 transition-colors">Education & MBA</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top (3 Cols) */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={candidateData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${candidateData.personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>© {currentYear} {candidateData.personal.name}. All verified rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Factual Portfolio • Designed for Global & UAE Recruiters</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

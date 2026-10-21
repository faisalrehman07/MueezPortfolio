import React from 'react';
import { candidateData } from '../data/candidate';
import { LinkedInIcon } from './Icons';
import { 
  ArrowUp, 
  Mail, 
  Users
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#050a12] border-t border-slate-200 dark:border-slate-800/80 py-12 relative overflow-hidden transition-colors">
      
      {/* Decorative hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Monogram (6 Cols) */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 dark:from-slate-800 dark:to-slate-900 border border-blue-400/40 dark:border-blue-500/40 flex items-center justify-center font-bold text-white dark:text-blue-400 text-sm shadow-xs">
                {candidateData.personal.monogram}
              </div>
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                {candidateData.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              MBA Graduate in Human Resource Management & Marketing • Prepared for Corporate HR, Talent Acquisition, People Operations & Banking Client Solutions • Open to Relocation Worldwide & Remote Roles
            </p>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Executive Profile</a>
            <a href="#competencies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Competencies</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#casestudies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">MBA & Education</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top (3 Cols) */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={candidateData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${candidateData.personal.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs"
              title="Back to Top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-3">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>© {CURRENT_YEAR} {candidateData.personal.name}. All verified credentials reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Targeting Corporate HR & Banking Roles • Global & International Opportunities</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

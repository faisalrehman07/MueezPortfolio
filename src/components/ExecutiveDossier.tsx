import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Globe, 
  Mail, 
  Clock, 
  FileText, 
  Users, 
  ShieldCheck, 
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { LinkedInIcon } from './Icons';

interface ExecutiveDossierProps {
  onOpenResumeModal?: () => void;
}

export const ExecutiveDossier: React.FC<ExecutiveDossierProps> = ({ onOpenResumeModal }) => {
  return (
    <div className="w-full rounded-3xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-lg dark:shadow-xl text-left space-y-6 relative overflow-hidden transition-colors">
      
      {/* Institutional Card Header */}
      <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
            {candidateData.personal.monogram}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-mono">
              Candidate Dossier • Executive Profile
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {candidateData.personal.name}
            </h2>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Verified Credentials</span>
          </span>
        </div>
      </div>

      {/* Academic Credentials Box */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
          Academic Management Foundation
        </span>

        {/* MBA */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Master of Business Administration (MBA)
            </span>
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
              Expected 11/2026
            </span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
            Jain University, Bangalore • Dual Specialization in <strong>Human Resource Management (HR)</strong> & <strong>Marketing</strong>
          </p>
        </div>

        {/* BBA */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Bachelor of Business Administration (BBA)
            </span>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              7.01 / 10 CGPA
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Dayananda Sagar University, Bengaluru • Management Focus
          </p>
        </div>
      </div>

      {/* Verified Operational Deliverables Grid */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
          Verified Corporate Track Record
        </span>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold mb-0.5">
              <Users className="w-3.5 h-3.5" />
              <span>Talent Mentoring</span>
            </div>
            <span className="text-lg font-black text-slate-900 dark:text-white block">15+ Mentored</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
              10-day ramp-up • 95% retention rate
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Audit Compliance</span>
            </div>
            <span className="text-lg font-black text-slate-900 dark:text-white block">10 / 10 QA</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
              100% accuracy • Zero SLA breaches
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-0.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Commercial Impact</span>
            </div>
            <span className="text-lg font-black text-slate-900 dark:text-white block">$60,000</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
              Peak consultative sales volume
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold mb-0.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate Promotion</span>
            </div>
            <span className="text-lg font-black text-slate-900 dark:text-white block">&lt; 6 Months</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
              Advanced to high-complexity operations
            </span>
          </div>
        </div>
      </div>

      {/* Global Mobility & Availability Bar */}
      <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-slate-900/90 border border-blue-200/90 dark:border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Global Mobility & Work Authorization
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Notice: 30 Days
          </span>
        </div>
        <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          Open to relocation worldwide and remote corporate roles. Multilingual proficiency in English (Full Professional), Urdu (Native), Hindi, and Kannada.
        </p>
      </div>

      {/* Direct Contact & Verification Actions */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <a
            href={candidateData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${candidateData.personal.email}`}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
            aria-label="Email Mueez Baig"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {onOpenResumeModal && (
          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Executive Curriculum Vitae</span>
          </button>
        )}
      </div>

    </div>
  );
};

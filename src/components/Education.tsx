import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Users,
  Target
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/90 dark:border-slate-800/80">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Postgraduate Management Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Credentials & <span className="text-blue-600 dark:text-blue-400">MBA Specialization</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Master of Business Administration with dual specialization in Human Resource Management & Marketing, built upon undergraduate business administration in management.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card 1: MBA - Jain University (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-blue-500/40 bg-white dark:bg-slate-900/95 shadow-md dark:shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40">
                Postgraduate Master's Degree • In Progress
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Expected: 11 / 2026
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Master of Business Administration (MBA)
              </h3>
              <p className="text-base font-bold text-blue-600 dark:text-blue-400">
                Jain University, Bangalore
              </p>
              <div className="p-3 rounded-2xl bg-blue-50/60 dark:bg-slate-950/70 border border-blue-200/80 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Dual Specialization: <strong className="text-blue-700 dark:text-blue-300">Human Resource Management (HR)</strong> & <strong className="text-blue-700 dark:text-blue-300">Strategic Marketing</strong></span>
              </div>
            </div>

            {/* Core MBA Curriculum Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Curriculum Focus & Applied Competencies:
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {candidateData.education[0].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Course Modules Grid */}
            {candidateData.education[0].coreCourses && (
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Key Postgraduate Course Modules:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {candidateData.education[0].coreCourses.map((c, cIdx) => (
                    <div key={cIdx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                      <strong className="text-slate-900 dark:text-white block font-semibold">{c.name}</strong>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block leading-tight">{c.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specialization Tags */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 font-medium">
                <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Human Resource Strategy
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium">
                Talent Acquisition & Sourcing
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium">
                HR MIS & Analytics
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium">
                Employer Branding
              </span>
            </div>

          </div>

          {/* Card 2: BBA - Dayananda Sagar University (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-md space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Undergraduate Degree • Conferred
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                  Graduated 2024
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Bachelor of Business Administration (BBA)
                </h3>
                <p className="text-base font-bold text-blue-600 dark:text-blue-400">
                  Dayananda Sagar University, Bengaluru
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 text-xs font-mono font-bold mt-1">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Cumulative Score: 7.01 / 10 CGPA</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                {candidateData.education[1].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            {/* Strategic Synergy Banner */}
            <div className="p-5 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 uppercase">
                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>The MBA HR + Marketing Advantage</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Combining Human Resources with Marketing enables modern organizations to treat candidates and employees like high-value clients: crafting magnetic employer branding, streamlining recruitment funnels, and sustaining superior retention.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

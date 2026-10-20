import React from 'react';
import { candidateData } from '../data/candidate';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Sparkles,
  Languages,
  TrendingUp,
  Users
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/70 border-t border-slate-800/80">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Management Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gold-gradient-text">MBA Specialization</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dual business administration degrees combining foundational management training with postgraduate mastery in Marketing Strategy and Human Resources.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card 1: MBA - Jain University (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-amber-400/40 bg-slate-900/90 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                Postgraduate Degree • In Progress
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                Expected: 11 / 2026
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Master of Business Administration (MBA)
              </h3>
              <p className="text-base font-semibold text-sky-400">
                Jain University, Bangalore
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-amber-200/90 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dual Specialization in <strong>Marketing</strong> and <strong>Human Resource Management (HR)</strong></span>
              </div>
            </div>

            {/* Core MBA Curriculum Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                Core Curriculum Highlights:
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                {candidateData.education[0].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialization Tags */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                Strategic Marketing
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                Human Resource Strategy
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700">
                Consumer Behavior
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700">
                Business Analytics
              </span>
            </div>

          </div>

          {/* Card 2: BBA - Dayananda Sagar University (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 bg-slate-900/70 shadow-lg space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-950/70 text-sky-300 border border-sky-500/30">
                  Undergraduate Degree • Completed
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  Graduated: 2024
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Business Administration (BBA)
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  Dayananda Sagar University, Bengaluru
                </p>
                <span className="text-xs text-slate-400 block">
                  Management Specialization
                </span>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Academic Achievement:</span>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">
                    7.01 <span className="text-xs text-slate-400 font-normal">/ 10 CGPA</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* BBA Highlights */}
              <div className="space-y-2 text-xs text-slate-300">
                {candidateData.education[1].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Bengaluru, India • Validated Academic Credential</span>
            </div>

          </div>

        </div>

        {/* Global Languages & Cultural Agility Section */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Multilingual Communication Advantage</h3>
                <p className="text-xs text-slate-400">Fluent, culturally adaptable business communication for diverse customer and corporate teams</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 self-start sm:self-auto">
              Ready for Gulf & International Workplaces
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {candidateData.personal.languages.map((lang, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">{lang.name}</span>
                  {lang.isNative && (
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                      Native
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-1">{lang.level}</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className={`h-full rounded-full ${
                    lang.isNative ? 'w-full bg-amber-400' : 'w-4/5 bg-sky-400'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

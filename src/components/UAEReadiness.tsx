import React from 'react';
import { 
  Clock, 
  Plane, 
  FileCheck, 
  Send,
  Users
} from 'lucide-react';

export const UAEReadiness: React.FC = () => {
  return (
    <section className="py-16 relative bg-white dark:bg-[#080e1a] border-t border-slate-200/90 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-[#0b172a] p-8 sm:p-10 shadow-lg dark:shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-500/40 text-blue-800 dark:text-blue-300 text-xs font-mono font-bold">
                <Plane className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Target Relocation: Dubai & Abu Dhabi, UAE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Seeking Roles in <span className="text-blue-600 dark:text-blue-400">Corporate HR & People Operations</span> and <span className="text-slate-900 dark:text-white">Banking Client Solutions</span> in the UAE
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
                Equipped to bring associate onboarding leadership, 10/10 compliance precision, and an MBA dual background (Marketing & HR) to enterprises across <strong className="text-slate-900 dark:text-white font-semibold">Dubai and Abu Dhabi</strong>. Experienced in collaborating across cross-cultural stakeholders and managing high-stakes client operations.
              </p>

              {/* Status Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Notice Period:</span>
                    <strong className="text-xs text-slate-900 dark:text-white">30 Days (Immediate Release)</strong>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Visa Eligibility:</span>
                    <strong className="text-xs text-slate-900 dark:text-white">Sponsorship Ready</strong>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Target Sectors:</span>
                    <strong className="text-xs text-slate-900 dark:text-white">Corporate HR, People Ops & Banking</strong>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: CTA Box (4 Cols) */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-blue-500/30 text-center space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                UAE Recruiter Direct Inquiry
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Evaluating candidates for UAE-based corporate HR generalist, talent acquisition, people operations, or banking relationship positions?
              </p>
              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss Opportunities in UAE</span>
              </a>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">
                Direct candidate response within 24 hours
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

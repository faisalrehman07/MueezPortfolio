import React from 'react';
import { 
  Clock, 
  Plane, 
  FileCheck, 
  Send,
  Landmark
} from 'lucide-react';


export const UAEReadiness: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#080e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-[#0b172a] p-8 sm:p-10 shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold">
                <Plane className="w-3.5 h-3.5 text-blue-400" />
                <span>Target Relocation: Dubai & Abu Dhabi, UAE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Seeking Roles in <span className="text-blue-400">Banking & Financial Services</span> and <span className="text-white">Corporate HR</span> in the UAE
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Equipped to bring proven relationship management, 10/10 compliance precision, and an MBA dual background (Marketing & HR) to institutions across <strong className="text-white">Dubai and Abu Dhabi</strong>. Experienced in handling high-stakes accounts for premier international brands.
              </p>

              {/* Status Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-950/60 flex items-center justify-center text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Notice Period:</span>
                    <strong className="text-xs text-white">30 Days (Immediate Release)</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Visa Eligibility:</span>
                    <strong className="text-xs text-white">Sponsorship Ready</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-950/60 flex items-center justify-center text-blue-400">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Target Sectors:</span>
                    <strong className="text-xs text-white">Banking, FinServ & HR</strong>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: CTA Box (4 Cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-blue-500/30 text-center space-y-4">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                Recruiter Direct Inquiry
              </span>
              <p className="text-xs text-slate-300">
                Evaluating candidates for UAE-based banking relationship management, operations, or corporate HR positions?
              </p>
              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss Opportunities</span>
              </a>
              <span className="text-[10px] text-slate-500 block">
                Direct response within 24 hours
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

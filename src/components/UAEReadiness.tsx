import React from 'react';
import { 
  Clock, 
  Plane, 
  Building2, 
  FileCheck, 
  Send
} from 'lucide-react';

export const UAEReadiness: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#070d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/40 bg-gradient-to-r from-slate-900 via-slate-900/95 to-[#0b1b2b] p-8 sm:p-10 shadow-2xl">
          
          {/* Subtle Ambient UAE Skyline / Glow Element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                <Plane className="w-3.5 h-3.5 text-emerald-400" />
                <span>Target Mobility: Dubai & Abu Dhabi, UAE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Seeking Client Support & Operational Coordination Roles in the <span className="text-emerald-400">United Arab Emirates</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Ready to bring proven customer experience discipline, 10/10 quality assurance standards, and an MBA management background to enterprise teams across <strong className="text-white">Dubai and Abu Dhabi</strong>. Experienced in managing complex international customer requirements for Fortune 500 US accounts.
              </p>

              {/* Status Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400">
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
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Target Cities:</span>
                    <strong className="text-xs text-white">Dubai / Abu Dhabi</strong>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: CTA Box (4 Cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/30 text-center space-y-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                Recruiter Direct Contact
              </span>
              <p className="text-xs text-slate-300">
                Interested in evaluating Mueez for UAE-based customer support, client operations, or coordination roles?
              </p>
              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss UAE Opportunities</span>
              </a>
              <span className="text-[10px] text-slate-500 block">
                Direct response within 24 hours guaranteed
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { 
  Users, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  FileSpreadsheet, 
  Landmark,
  Target
} from 'lucide-react';

export const RoleMatcher: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('hr-generalist');

  const selectedRole = candidateData.roleMatchProfiles.find(r => r.id === selectedRoleId) || candidateData.roleMatchProfiles[0];

  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'hr-generalist':
        return <Users className="w-4 h-4" />;
      case 'talent-acquisition':
        return <Target className="w-4 h-4" />;
      case 'hr-analytics':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'banking-relations':
        return <Landmark className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-12 relative border-b border-slate-200/90 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Executive Career Alignment & Target Requisitions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Evaluate Candidate Fit by <span className="text-blue-600 dark:text-blue-400">Target Role</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Select your organization's open requisition to inspect verified credentials, course alignment, and operational deliverables.
            </p>
          </div>

          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 self-start md:self-auto">
            MBA Dual Specialization: HR & Marketing
          </span>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
          {candidateData.roleMatchProfiles.map((role) => {
            const isSelected = selectedRoleId === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between gap-2.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'}`}>
                    {getRoleIcon(role.id)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected 
                      ? 'bg-white/25 text-white' 
                      : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
                  }`}>
                    {role.badge}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xs sm:text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {role.title}
                  </h3>
                  <p className={`text-[11px] line-clamp-1 mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {role.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Fit Card for Selected Role */}
        <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-200/90 dark:border-slate-700/80 shadow-md transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Why Mueez Fits */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-mono">
                    Candidate Qualification Analysis
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {selectedRole.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-500/30 text-blue-800 dark:text-blue-200 font-mono text-xs font-bold">
                  <span>Match Score:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-black">{selectedRole.fitPercentage}%</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {selectedRole.tagline}
              </p>

              {/* Match Reasons */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Why Mueez Is An Immediate Impact Fit:
                </span>
                <div className="space-y-2">
                  {selectedRole.matchReasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Competencies & Action */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-4">
              <div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-bold block mb-2">
                  Primary Competencies Activated
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRole.keyCompetencies.map((comp, cIdx) => (
                    <span 
                      key={cIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Direct Practical Evidence:</span>
                <p className="text-[11px] font-medium leading-relaxed">{selectedRole.relevantExperience}</p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>{selectedRole.recommendedNextStep}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

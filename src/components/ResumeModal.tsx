import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `MUEEZ BAIG
MBA Graduate (Human Resource Management & Marketing) | Strategic People Operations & Talent Specialist
Email: ${candidateData.personal.email} | Phone: ${candidateData.personal.phone}
Location: ${candidateData.personal.location}
Relocation: Open to Global Relocation Worldwide & Remote Roles; Notice: ${candidateData.personal.relocation.noticePeriod}; Visa: ${candidateData.personal.relocation.visaStatus}
LinkedIn: ${candidateData.personal.linkedin}

PROFESSIONAL SUMMARY
${candidateData.personal.summary}

KEY COMPETENCIES & HR FRAMEWORKS
${candidateData.skills.map(s => `• ${s.name}: ${s.description}`).join('\n')}

PROFESSIONAL EXPERIENCE
${candidateData.experience.map(exp => `
${exp.role} — ${exp.company}
${exp.period} | ${exp.location} ${exp.accountOrDept ? `(${exp.accountOrDept})` : ''}
${exp.isPromotion && exp.promotionNote ? `Promotion: ${exp.promotionNote}` : ''}
${exp.hrRelevance ? `HR Focus: ${exp.hrRelevance}` : ''}
Key Deliverables:
${exp.achievements.map(a => `• ${a}`).join('\n')}
Responsibilities:
${exp.responsibilities.map(r => `• ${r}`).join('\n')}
Tools: ${exp.tools.join(', ')}
`).join('\n')}

EDUCATION & ACADEMIC QUALIFICATIONS
${candidateData.education.map(edu => `
${edu.degree}
${edu.institution} | ${edu.period} | ${edu.location}
${edu.specialization ? `Specialization: ${edu.specialization}` : ''}
${edu.score ? `Score: ${edu.score}` : ''}
Highlights:
${edu.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}

LANGUAGES
${candidateData.personal.languages.map(l => `• ${l.name}: ${l.level}`).join('\n')}
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl text-left space-y-6 my-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Executive Curriculum Vitae (MBA HR & Operations)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Copy formatted resume text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Full CV!' : 'Copy Text CV'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Surface */}
        <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-2xl shadow-lg font-sans text-xs sm:text-sm leading-relaxed print-page space-y-6 border border-slate-200">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 uppercase font-sans">
                {candidateData.personal.name}
              </h1>
              <p className="text-blue-800 font-bold text-xs sm:text-sm mt-0.5">
                MBA Graduate (Human Resource Management & Marketing) | Strategic People Operations
              </p>
              <p className="text-slate-600 text-xs mt-0.5">
                Talent Acquisition & Onboarding • HR Analytics & MIS • Employee Relations • Compliance Audits
              </p>
            </div>

            <div className="text-right text-[11px] sm:text-xs text-slate-700 space-y-0.5 font-sans">
              <div>Email: <strong>{candidateData.personal.email}</strong></div>
              <div>Phone: <strong>{candidateData.personal.phone}</strong></div>
              <div>Location: <strong>{candidateData.personal.location}</strong></div>
              <div>LinkedIn: <strong>{candidateData.personal.linkedin}</strong></div>
              <div className="text-emerald-700 font-bold">Global Mobility: Open to Relocation Worldwide & Remote (30 Days Notice)</div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Professional Executive Summary
            </h2>
            <p className="text-slate-800 leading-relaxed text-xs">
              {candidateData.personal.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Key HR Competencies & Systems
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-800">
              <div>• <strong>Talent Onboarding & Mentoring:</strong> 15+ associates trained</div>
              <div>• <strong>Employee Relations:</strong> Grievance mediation & retention</div>
              <div>• <strong>Audit Quality Assurance:</strong> 10/10 scorecard, 100% SLA</div>
              <div>• <strong>Advanced MS Excel & MIS:</strong> Headcount & attrition modeling</div>
              <div>• <strong>Strategic HR (SHRM):</strong> Appraisal models & KPIs</div>
              <div>• <strong>Client Relations:</strong> $60,000 peak consultative revenue</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-3 font-mono">
              Professional Experience
            </h2>
            
            <div className="space-y-4">
              {candidateData.experience.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-950">
                    <div>
                      <span>{exp.role}</span>
                      <span className="font-normal text-slate-700"> — {exp.company}</span>
                      {exp.accountOrDept && (
                        <span className="font-semibold text-blue-900 text-xs ml-1">[{exp.accountOrDept}]</span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-600">{exp.period} | {exp.location}</span>
                  </div>

                  {exp.isPromotion && exp.promotionNote && (
                    <div className="text-[11px] font-semibold text-blue-900 italic">
                      * Promotion: {exp.promotionNote}
                    </div>
                  )}

                  {exp.hrRelevance && (
                    <div className="text-[11px] text-slate-700 bg-slate-50 p-1.5 rounded border border-slate-200">
                      <strong>HR Focus:</strong> {exp.hrRelevance}
                    </div>
                  )}

                  <ul className="list-disc pl-5 space-y-0.5 text-slate-800 text-xs mt-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}><strong className="text-slate-950">{ach}</strong></li>
                    ))}
                    {exp.responsibilities.slice(0, 2).map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-slate-600 pt-0.5">
                    <strong>Tools:</strong> {exp.tools.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2 font-mono">
              Education & Academic Qualifications
            </h2>
            <div className="space-y-3">
              {candidateData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs text-slate-800">
                  <div>
                    <strong className="text-slate-950">{edu.degree}</strong>
                    {edu.specialization && <span className="text-slate-700"> — {edu.specialization}</span>}
                    <div className="text-slate-700">{edu.institution}</div>
                  </div>
                  <div className="sm:text-right font-mono text-slate-600 shrink-0">
                    <div>{edu.period} | {edu.location}</div>
                    {edu.score && <div className="font-bold text-slate-900">{edu.score}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1 font-mono">
              Languages
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-800">
              {candidateData.personal.languages.map((l, idx) => (
                <span key={idx}>
                  <strong>{l.name}</strong> ({l.level})
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 no-print">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Click "Print / Save PDF" to generate a physical copy or export to PDF format.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors shadow-2xs"
          >
            Close View
          </button>
        </div>

      </div>

    </div>
  );
};

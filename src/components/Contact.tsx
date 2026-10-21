import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { LinkedInIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  Globe, 
  Copy, 
  Check, 
  Send, 
  FileText
} from 'lucide-react';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [company, setCompany] = useState('');
  const [roleType, setRoleType] = useState('Corporate HR Generalist / People Operations');
  const [message, setMessage] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Candidate Opportunity for Mueez Baig (MBA): ${roleType} at ${company || 'Our Organization'}`);
    const bodyContent = `Hello Mueez,\n\nMy name is ${senderName || 'Hiring Team'} from ${company || 'our organization'} (${senderEmail || 'recruiter@company.com'}).\n\n${message || 'We reviewed your MBA credentials, associate mentoring track, and operational compliance background. We would like to connect regarding an opportunity in human resources, people operations, or banking operations.'}\n\nBest regards,\n${senderName || 'Hiring Manager'}`;
    const mailtoUrl = `mailto:${candidateData.personal.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    setFeedbackMsg('Your email client has been launched with pre-filled details! You can also copy contact information directly.');
    setTimeout(() => setFeedbackMsg(null), 6000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/90 dark:border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-blue-600 dark:text-blue-400 font-bold shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Explore Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect with <span className="text-blue-600 dark:text-blue-400">Mueez Baig</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Available for discussions regarding Corporate Human Resources, People Operations, Talent Acquisition, and Banking Client Solutions globally (Relocation & Remote).
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all flex items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono block font-semibold">Direct Professional Email</span>
                  <a 
                    href={`mailto:${candidateData.personal.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                  >
                    {candidateData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(candidateData.personal.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors shrink-0 shadow-2xs"
                title="Copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all flex items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-600/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono block font-semibold">Phone / WhatsApp Ready</span>
                  <a 
                    href={`tel:${candidateData.personal.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                  >
                    {candidateData.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(candidateData.personal.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors shrink-0 shadow-2xs"
                title="Copy phone number"
                aria-label="Copy phone number to clipboard"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-5 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all flex items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono block font-semibold">LinkedIn Profile</span>
                  <a 
                    href={candidateData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                  >
                    linkedin.com/in/mueez-baig
                  </a>
                </div>
              </div>

              <a
                href={candidateData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shrink-0 shadow-2xs"
                aria-label="Open LinkedIn in new tab"
              >
                Connect
              </a>
            </div>

            {/* Global Mobility Card */}
            <div className="p-5 rounded-3xl bg-blue-50/60 dark:bg-slate-900/90 border border-blue-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Global Mobility & Immediate Availability</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Open to corporate opportunities globally (worldwide relocation and remote roles). Notice period: <strong className="text-slate-900 dark:text-white">30 Days (Immediate Release)</strong>. Open to international employment visa sponsorship.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Composer (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
                <Send className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Executive Inquiry Composer</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send an Opportunity Directly to Mueez Baig
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Submitting this form prepares an executive introductory email directly to Mueez's primary inbox.
              </p>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300 block mb-1">
                    Your Name / Recruiter Title
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Head of Talent)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300 block mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Deloitte / HSBC / Google / Standard Chartered"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300 block mb-1">
                    Recruiter / HR Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300 block mb-1">
                    Target Role Type
                  </label>
                  <select
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                  >
                    <option value="Corporate HR Generalist / People Operations">Corporate HR Generalist / People Operations</option>
                    <option value="Talent Acquisition & Recruitment Specialist">Talent Acquisition & Recruitment Specialist</option>
                    <option value="HRBP / Associate HR Lead">HRBP / Associate HR Lead Track</option>
                    <option value="HR Analytics & Workforce MIS Specialist">HR Analytics & Workforce MIS Specialist</option>
                    <option value="Banking & Financial Services Client Operations">Banking & Financial Services Client Operations</option>
                    <option value="MBA Management Trainee / Leadership Program">MBA Management Trainee / Leadership Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-slate-700 dark:text-slate-300 block mb-1">
                  Message / Role Overview
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your open position, location requirements, or team structure..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                ></textarea>
              </div>

              {feedbackMsg && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Preview Full Resume First</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-blue-600/20 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Compose & Send Inquiry</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

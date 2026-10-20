import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { LinkedInIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ShieldCheck,
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
  const [roleType, setRoleType] = useState('Banking & Financial Services Opportunity');
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
    const bodyContent = `Hello Mueez,\n\nMy name is ${senderName || 'Hiring Team'} from ${company || 'our organization'} (${senderEmail || 'recruiter@company.com'}).\n\n${message || 'We reviewed your MBA credentials and operational background and would like to discuss an opportunity in banking, corporate HR, or business operations.'}\n\nBest regards,\n${senderName || 'Hiring Manager'}`;
    const mailtoUrl = `mailto:${candidateData.personal.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    setFeedbackMsg('Your default email client has been opened with the pre-filled message! You can also copy contact details directly.');
    setTimeout(() => setFeedbackMsg(null), 6000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080e1a] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-blue-400 font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Explore Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect with <span className="text-blue-400">Mueez Baig</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Available for discussions regarding Banking & Financial Services, Corporate Human Resources, and Business Operations roles in the UAE (Dubai / Abu Dhabi) and India.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Direct Professional Email</span>
                  <a 
                    href={`mailto:${candidateData.personal.email}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors truncate block"
                  >
                    {candidateData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(candidateData.personal.email, 'email')}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                title="Copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Telephone & WhatsApp</span>
                  <a 
                    href={`tel:${candidateData.personal.phone}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors truncate block font-mono"
                  >
                    {candidateData.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(candidateData.personal.phone, 'phone')}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                title="Copy phone number"
                aria-label="Copy phone number to clipboard"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Profile Card */}
            <a
              href={candidateData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Professional Network</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate block">
                    linkedin.com/in/mueez-baig-61172a227
                  </span>
                </div>
              </div>

              <span className="text-xs font-semibold text-blue-400 font-mono shrink-0">
                Connect →
              </span>
            </a>

            {/* Location & Notice Period Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Geographic Status & Availability</span>
              </div>
              
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Current Base:</span>
                  <span className="font-semibold text-white">{candidateData.personal.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Relocation Preference:</span>
                  <span className="font-semibold text-emerald-400">Dubai / Abu Dhabi, UAE</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Notice Period:</span>
                  <span className="font-semibold text-blue-400">30 Days</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Visa Status:</span>
                  <span className="font-semibold text-slate-200">Visa Sponsorship Required</span>
                </div>
              </div>

              <button
                onClick={onOpenResumeModal}
                className="w-full mt-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Open Printable Resume View</span>
              </button>
            </div>

          </div>

          {/* Right Column: Recruiter Inquiry Composer (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 bg-slate-900/80 space-y-5">
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-400" />
                Send a Direct Message or Inquiry
              </h3>
              <p className="text-xs text-slate-400">
                Pre-fill this form to initiate an email directly in your email client.
              </p>
            </div>

            {feedbackMsg && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300">
                {feedbackMsg}
              </div>
            )}

            <form onSubmit={handleSendEmail} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Your Professional Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. s.jenkins@bank.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Institution / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Emirates NBD / Multinational Corp"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Target Sector / Role Type
                  </label>
                  <select
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="Banking & Financial Services Role">Banking & Financial Services (Relationship Manager / Operations)</option>
                    <option value="Corporate Human Resources Role">Corporate Human Resources (Talent Acquisition / HR Generalist)</option>
                    <option value="Business Operations & Coordination">Business Operations & Corporate Coordination</option>
                    <option value="MBA Management Trainee / Leadership">MBA Management Trainee / Leadership Program</option>
                    <option value="General Recruiter Inquiry">General Recruiter Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 block">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline the role requirements, department, or interview schedule..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Opens official email client with pre-formatted draft
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

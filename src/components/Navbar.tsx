import React, { useState, useEffect } from 'react';
import { candidateData } from '../data/candidate';
import { 
  FileText, 
  Send, 
  Menu, 
  X, 
  MapPin, 
  Landmark,
  ChevronRight
} from 'lucide-react';


interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'competencies', 'experience', 'casestudies', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#casestudies' },
    { label: 'Education & MBA', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080e1a]/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Monogram */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Mueez Baig Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/40 flex items-center justify-center font-bold text-blue-400 text-lg shadow-md group-hover:border-blue-400 transition-all duration-300">
              {candidateData.personal.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-blue-400 transition-colors">
                {candidateData.personal.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                <Landmark className="w-3 h-3 text-blue-400 inline" />
                MBA • Banking & Corporate HR
              </span>
            </div>
          </a>

          {/* Relocation Status Pill - Desktop */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>Target Mobility: <strong>Dubai / Abu Dhabi, UAE</strong></span>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600/20 border border-blue-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="View Printable Resume"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / Save CV</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-500 shadow-md shadow-blue-600/25 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Candidate</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 hover:text-white text-xs flex items-center gap-1"
              aria-label="Open Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a1120]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1 mb-4">
            <div className="p-3 mb-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for UAE Relocation (Dubai / Abu Dhabi)</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-800/50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              Print / Save Executive Resume
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 text-center"
            >
              <Send className="w-4 h-4" />
              Contact Mueez Baig
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

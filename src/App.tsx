import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CompetenciesSection } from './components/CompetenciesSection';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { Education } from './components/Education';
import { UAEReadiness } from './components/UAEReadiness';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070d17] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Navigation Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Interactive Operations Command Center */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Executive Profile & 3 Strategic Pillars */}
        <About />

        {/* Universal Skills Globe & Recruiter Competency Matrix */}
        <CompetenciesSection />

        {/* Professional Experience & Career Progression Timeline */}
        <Experience />

        {/* Practical Operational Case Studies & Measured Impact */}
        <CaseStudies />

        {/* Academic Foundation: MBA in Marketing & HR + BBA */}
        <Education />

        {/* UAE & Gulf Relocation Spotlight */}
        <UAEReadiness />

        {/* Recruiter Contact & Inquiry Composer */}
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;

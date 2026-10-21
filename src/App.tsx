import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoleMatcher } from './components/RoleMatcher';
import { About } from './components/About';
import { CompetenciesSection } from './components/CompetenciesSection';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#080e1a] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white font-sans transition-colors duration-250">
        
        {/* Navigation Header */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section with Executive Candidate Dossier */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Recruiter Role Matcher & Competency Alignment */}
          <RoleMatcher />

          {/* Executive Profile, HR Philosophy & 3 Strategic Pillars */}
          <About />

          {/* Strategic Competency Matrix & HR Functional Domains */}
          <CompetenciesSection />

          {/* Professional Experience & Career Progression Timeline */}
          <Experience />

          {/* Practical Operational Case Studies & Measured HR Impact */}
          <CaseStudies />

          {/* Academic Foundation: MBA in Human Resources & Marketing + BBA */}
          <Education />

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
    </ThemeProvider>
  );
}

export default App;

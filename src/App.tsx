import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesLandingPage from './components/ServicesLandingPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import PropertyFacilitiesPage from './components/PropertyFacilitiesPage';
import ProjectsPage from './components/ProjectsPage';
import InsightsPage from './components/InsightsPage';
import ContactPage from './components/ContactPage';
import LegalModal from './components/LegalModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string>('property-management');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Synchronize navigation state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.toLowerCase().replace('#', '');

      if (!rawHash || rawHash === 'home') {
        setCurrentPage('home');
      } else if (rawHash === 'about' || rawHash === 'about-us') {
        setCurrentPage('about');
      } else if (rawHash === 'services' || rawHash === 'all-services') {
        setCurrentPage('services');
      } else if (rawHash.startsWith('service-')) {
        const slug = rawHash.replace('service-', '');
        setCurrentPage(`service-${slug}`);
        setCurrentServiceSlug(slug);
      } else if (rawHash === 'property-facilities' || rawHash === 'facilities') {
        setCurrentPage('property-facilities');
      } else if (rawHash === 'projects') {
        setCurrentPage('projects');
      } else if (rawHash === 'insights') {
        setCurrentPage('insights');
      } else if (rawHash === 'contact' || rawHash === 'contact-us') {
        setCurrentPage('contact');
      } else if (rawHash === 'privacy') {
        setLegalModalType('privacy');
      } else if (rawHash === 'terms') {
        setLegalModalType('terms');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string, subId?: string) => {
    if (pageId === 'privacy') {
      setLegalModalType('privacy');
      return;
    }
    if (pageId === 'terms') {
      setLegalModalType('terms');
      return;
    }

    if (pageId.startsWith('service-')) {
      const slug = subId || pageId.replace('service-', '');
      setCurrentPage(`service-${slug}`);
      setCurrentServiceSlug(slug);
      window.location.hash = `service-${slug}`;
    } else {
      setCurrentPage(pageId);
      window.location.hash = pageId;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. STICKY TOP NAVIGATION WITH SERVICES MEGA DROPDOWN */}
      {/* ========================================================================= */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* ========================================================================= */}
      {/* 2. SITEMAP ROUTING VIEWS */}
      {/* ========================================================================= */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'services' && <ServicesLandingPage onNavigate={handleNavigate} />}

        {currentPage.startsWith('service-') && (
          <ServiceDetailPage
            serviceSlug={currentServiceSlug}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'property-facilities' && (
          <PropertyFacilitiesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}

        {currentPage === 'insights' && <InsightsPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* ========================================================================= */}
      {/* 3. LEGAL MODAL OVERLAY (PRIVACY & TERMS) */}
      {/* ========================================================================= */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

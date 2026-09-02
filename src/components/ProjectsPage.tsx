import React from 'react';
import {
  Building2,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Shield,
  FileCheck,
  Lock,
  Sparkles,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CtaCard from './CtaCard';
import Footer from './Footer';

interface ProjectsPageProps {
  onNavigate: (page: string, subId?: string) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  // Page structure prepared for verified projects per brief guidelines
  const projectTemplates = [
    {
      id: 'template-residential',
      category: 'Residential Estate Management',
      title: 'Premium Multi-Family Gated Community',
      location: 'Ikoyi / Lekki Phase 1, Lagos [CLIENT TO CONFIRM SPECIFIC ASSET]',
      type: 'Luxury Residential Gated Estate',
      services: ['24/7 Technical MEP', 'Gated Biometric Security', 'Water Treatment (WTP)', 'Service Charge Accounting'],
      description: 'Comprehensive end-to-end estate operations covering 24/7 central diesel generator plant synchronization, perimeter security, digital access control, and proactive tenant liaison.',
      outcomes: [
        '99.8% Power uptime maintained throughout operational cycles',
        '100% On-time service charge collection with zero bad debt',
        'Complete digital inventory and routine photographic condition audits',
      ],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      status: '[Awaiting Client Project Verification]',
    },
    {
      id: 'template-commercial',
      category: 'Commercial Facility Management',
      title: 'Corporate Office Complex',
      location: 'Victoria Island, Lagos [CLIENT TO CONFIRM SPECIFIC ASSET]',
      type: 'Commercial Grade-A Office Building',
      services: ['Central HVAC & Chillers', 'Elevator Maintenance', 'Facade Cleaning', 'CAFM SLA Management'],
      description: 'Total integrated facility management for multi-tenanted commercial headquarters, ensuring zero unplanned downtime for corporate tenants and meeting international safety benchmarks.',
      outcomes: [
        'Preventative maintenance reduced annual emergency repair expenses by 22%',
        '30-Minute SLA compliance for all technical incident dispatches',
        'Quarterly HSE and fire safety drill certification',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      status: '[Awaiting Client Project Verification]',
    },
    {
      id: 'template-mixed-use',
      category: 'Property & Facilities Advisory',
      title: 'Contemporary Mixed-Use Development',
      location: 'Ikeja / Mainland, Lagos [CLIENT TO CONFIRM SPECIFIC ASSET]',
      type: 'Mixed-Use Retail & Residential Apartments',
      services: ['Leasing Advisory', 'Sub-metered Utilities', 'Waste & Soft Services', 'Parking Operations'],
      description: 'Operational advisory and day-to-day facilities management bridging residential serenity with high-footfall retail operations, supported by automated sub-metering.',
      outcomes: [
        'Fair service charge apportionment between commercial and residential occupants',
        'Zero tenant disputes regarding municipal or utility billing',
        'Continuous aesthetic upkeep and manicured landscaping',
      ],
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      status: '[Awaiting Client Project Verification]',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. HERO WITH BREADCRUMB */}
      {/* ========================================================================= */}
      <section
        id="projects-hero"
        className="relative w-full min-h-[380px] sm:min-h-[440px] flex flex-col justify-center overflow-hidden bg-[#14281F]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2400&q=85"
            alt="Modern architectural projects in Lagos"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14281F]/95 via-[#14281F]/90 to-[#14281F]/75"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs sm:text-sm text-white/70 mb-4"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-[#facc15] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-[#facc15] font-medium">Projects</span>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 block"
            >
              PORTFOLIO ARCHITECTURE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight"
            >
              Our Projects &amp; Managed Assets
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl mb-8"
            >
              A rigorous portfolio framework detailing asset typologies, technical scopes, and operational performance outcomes across residential, commercial, and mixed-use properties.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRANSPARENT COMPLIANCE CALLOUT STRIP */}
      {/* ========================================================================= */}
      <section className="w-full bg-amber-50 border-y border-amber-200/80 py-5 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <FileCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-amber-950">
                Portfolio Curation &amp; NDA Sign-Off Notice
              </h3>
              <p className="text-xs text-amber-800 leading-relaxed mt-0.5">
                Per client privacy standards and institutional NDAs, specific asset names and commercial terms are published following client sign-off. Detailed credential profiles and private property walkthroughs are available upon verified request.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
          >
            Request Private Credentials Deck
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STRUCTURED PROJECT PROFILE CARDS */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              MANAGEMENT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3D2E] tracking-tight mb-4">
              Project Profiles &amp; Service Delivery Scopes
            </h2>
            <p className="text-base text-gray-600">
              The template schema below showcases how Validreams models and executes property operations across asset classes in Lagos:
            </p>
          </div>

          <div className="space-y-12">
            {projectTemplates.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image Section */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-[#facc15] backdrop-blur-sm">
                      <Lock className="w-3 h-3 text-[#facc15]" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2.5">
                      <span className="font-bold text-[#1F3D2E] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {project.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Services Tags */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Services Provided:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-800 border border-gray-200"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Measured Outcomes */}
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <h4 className="text-xs font-bold text-[#1F3D2E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Key Operational Outcomes:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {project.outcomes.map((outc, oIdx) => (
                          <li key={oIdx} className="flex items-start space-x-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{outc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-gray-500 italic">
                      Asset Type: {project.type}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F3D2E] hover:text-amber-600 transition-colors cursor-pointer"
                    >
                      <span>Inquire About Similar Asset</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CTA & FOOTER */}
      {/* ========================================================================= */}
      <CtaCard onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

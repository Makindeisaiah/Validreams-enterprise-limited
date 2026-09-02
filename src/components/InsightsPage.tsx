import React, { useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  ArrowRight,
  Send,
  CheckCircle2,
  Building2,
  Settings,
  Sparkles,
  ShieldCheck,
  Cpu,
  Leaf,
  LineChart,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CtaCard from './CtaCard';
import Footer from './Footer';

interface InsightsPageProps {
  onNavigate: (page: string, subId?: string) => void;
}

export default function InsightsPage({ onNavigate }: InsightsPageProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // The 7 official categories requested in brief item 11
  const categories = [
    {
      id: 'property-management',
      name: 'Property Management',
      icon: Building2,
      desc: 'Tenancy governance, lease structuring, LASRERA compliance, automated rent collection, and landlord risk mitigation strategies.',
      upcomingTopics: [
        'Navigating Lagos State Tenancy Regulations & Dispute Mediation',
        'Optimizing Rental Yields in Multi-Unit Developments',
        'Automated Rent Invoicing vs. Manual Reconciliation Risks',
      ],
    },
    {
      id: 'facilities-management',
      name: 'Facilities Management',
      icon: Settings,
      desc: 'Integrated Facilities Management (IFM) architectures, SLA modeling, vendor procurement, and service charge budgeting.',
      upcomingTopics: [
        'Structuring Transparent Service Charges: A Formulaic Guide',
        'Preventative vs. Reactive Maintenance: True Lifecycle Cost Impact',
        'Vendor Benchmarking Protocols for Gated Residential Estates',
      ],
    },
    {
      id: 'maintenance',
      name: 'Maintenance & Engineering',
      icon: Sparkles,
      desc: 'Mechanical, electrical, plumbing (MEP), central HVAC chillers, backup generator plants, and water treatment plant (WTP) protocols.',
      upcomingTopics: [
        'Diesel Quality Checks and ATS Synchronization in Tropical Climates',
        'Water Treatment Plant Testing Standards for Lagos Boreholes',
        'Preventative HVAC Servicing to Reduce Peak Electrical Load',
      ],
    },
    {
      id: 'real-estate',
      name: 'Real Estate & Investment',
      icon: LineChart,
      desc: 'Market yield trends across Lagos sub-markets (Ikoyi, Victoria Island, Lekki, Ikeja), asset repositioning, and developer advisory.',
      upcomingTopics: [
        'Commercial Space Repositioning Post-Pandemic: Tenant Retention',
        'Analyzing Absorption Cycles Across Lagos Prime Corridors',
        'Operational Due Diligence for Institutional Asset Acquisitions',
      ],
    },
    {
      id: 'technology',
      name: 'Technology & CAFM',
      icon: Cpu,
      desc: 'Computer-Aided Facility Management (CAFM) integration, IoT sensor telemetry, QR asset tagging, and digital helpdesk ticketing.',
      upcomingTopics: [
        'Transitioning from Paper Logs to Mobile CAFM Work Orders',
        'QR Code Tagging: Building a Digital Twin for Mechanical Assets',
        'Live SLA Dashboards: Holding Contractors Transparently Accountable',
      ],
    },
    {
      id: 'sustainability',
      name: 'Sustainability & Energy',
      icon: Leaf,
      desc: 'Solar-hybrid generator integration, smart energy sub-metering, bio-friendly waste sorting, and carbon-reduction initiatives.',
      upcomingTopics: [
        'Economics of Solar-Diesel Hybridization in Lagos Commercial Towers',
        'Energy Sub-Metering as an Estate Harmony Driver',
        'Sustainable Waste Diversion and Organic Composting for Estates',
      ],
    },
    {
      id: 'industry-insights',
      name: 'Industry & Regulatory Insights',
      icon: ShieldCheck,
      desc: 'Municipal levies, Lagos State Fire Service standards, environmental health compliance (LASEPA), and macroeconomic property outlooks.',
      upcomingTopics: [
        'Lagos State Land Use Charge & Municipal Levies Compliance Guide',
        'Fire Life Safety Readiness: Mandatory Equipment and Drills',
        'Inflation Hedging Strategies for Long-Term Estate Sinking Funds',
      ],
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. HERO WITH BREADCRUMB */}
      {/* ========================================================================= */}
      <section
        id="insights-hero"
        className="relative w-full min-h-[380px] sm:min-h-[440px] flex flex-col justify-center overflow-hidden bg-[#14281F]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Validreams corporate research and insights"
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
              <span className="text-[#facc15] font-medium">Insights</span>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 block"
            >
              KNOWLEDGE &amp; RESEARCH PILLARS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight"
            >
              Asset Intelligence &amp; Industry Insights
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl mb-8"
            >
              Practitioner perspectives, regulatory updates, and technical guides curated across seven dedicated property and facilities disciplines.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL CHARTER NOTE */}
      {/* ========================================================================= */}
      <section className="w-full bg-gray-50 border-b border-gray-200 py-6 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-[#1F3D2E] shrink-0" />
            <p className="text-xs sm:text-sm text-gray-700">
              <strong>Editorial Transparency:</strong> All briefing whitepapers and guides are authored by licensed engineers and FM practitioners. We do not publish unverified or placeholder articles.
            </p>
          </div>
          <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full shrink-0">
            Editorial Review Active
          </span>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 7 CATEGORY OVERVIEW GRID (NO FABRICATED ARTICLES) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              TOPICAL TAXONOMY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3D2E] tracking-tight mb-4">
              Seven Dedicated Knowledge Categories
            </h2>
            <p className="text-base text-gray-600">
              Browse our research syllabus. Each pillar covers practical engineering, governance, and market advisory topics tailored specifically to Nigerian real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-2xl border border-gray-200/90 p-7 bg-white hover:border-[#1F3D2E]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1F3D2E] flex items-center justify-center mb-5">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 tracking-tight">
                      {cat.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {cat.desc}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                        Forthcoming Briefing Topics:
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-700">
                        {cat.upcomingTopics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start space-x-2">
                            <span className="text-[#facc15] font-bold mt-0.5">•</span>
                            <span className="line-clamp-2">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-400">
                      Issue #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-semibold text-[#1F3D2E] hover:text-amber-600 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Request Topic Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NEWSLETTER / EXECUTIVE BRIEF SUBSCRIPTION */}
      {/* ========================================================================= */}
      <section className="w-full py-16 px-6 sm:px-10 bg-[#1F3D2E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
            STAY INFORMED
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Subscribe to the Validreams Asset Intelligence Brief
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8">
            Receive quarterly operational audits, utility cost benchmarks, and regulatory advisories directly to your inbox. No spam, purely professional insight.
          </p>

          {subscribed ? (
            <div className="p-5 rounded-2xl bg-white/10 border border-white/20 inline-flex items-center space-x-3 text-sm text-[#facc15]">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you! You have been subscribed to our quarterly briefing.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter corporate email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#facc15]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#facc15] hover:bg-yellow-400 text-slate-950 font-bold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CTA & FOOTER */}
      {/* ========================================================================= */}
      <CtaCard onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

import React from 'react';
import {
  Building2,
  ShieldCheck,
  Settings,
  Users,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Zap,
  Flame,
  Droplets,
  HardHat,
  LineChart,
  HelpCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CtaCard from './CtaCard';
import Footer from './Footer';

interface PropertyFacilitiesPageProps {
  onNavigate: (page: string, subId?: string) => void;
}

export default function PropertyFacilitiesPage({ onNavigate }: PropertyFacilitiesPageProps) {
  const pillars = [
    {
      title: 'Residential Estates & Communities',
      desc: 'Complete residential estate governance including 24/7 security gates, automated resident ticketing, clean water management, power distribution & service charge collection.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      specs: ['Residents Association Liaison', 'Power & Diesel Hedging', 'Gated Security Architecture'],
    },
    {
      title: 'Commercial & Corporate Facilities',
      desc: 'Mission-critical MEP engineering, central HVAC chiller systems, corporate reception concierge, workplace health standards, and business continuity readiness.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      specs: ['Zero Business Downtime', 'Air Quality & HVAC Tuning', 'Corporate Compliance Auditing'],
    },
    {
      title: 'Mixed-Use Developments & Plazas',
      desc: 'Balancing the divergent operational needs of retail patrons, office workers, and residential dwellers with smart sub-metering, zoned security, and parking governance.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      specs: ['High Footfall Janitorial Care', 'Zoned Access Systems', 'Automated Utility Billing'],
    },
  ];

  const technicalCompetencies = [
    {
      icon: Zap,
      title: 'Power Generation & Sync Systems',
      desc: 'Preventative servicing of diesel generators (Perkins, Cummins, CAT), automatic changeover switches (ATS), and load distribution balancing.',
    },
    {
      icon: Droplets,
      title: 'Water Treatment Plants (WTP)',
      desc: 'Borehole yield testing, multi-stage sand/carbon filtration, chemical dosing, booster pumps, and routine microbiological laboratory analysis.',
    },
    {
      icon: Settings,
      title: 'Central HVAC & Ventilation',
      desc: 'VRV/VRF systems, chilled water circuits, duct cleaning, compressor diagnostics, and indoor environmental air quality management.',
    },
    {
      icon: Flame,
      title: 'Fire Safety & Life Protection',
      desc: 'NFPA & Lagos State Fire Service compliant hydrants, FM200 gaseous suppression, smoke detectors, alarm annunciators, and quarterly fire drills.',
    },
    {
      icon: HardHat,
      title: 'Structural & Civil Asset Integrity',
      desc: 'Facade maintenance, expansion joint preservation, waterproofing remediation, damp-proofing, and interlocking pavement rejuvenation.',
    },
    {
      icon: LineChart,
      title: 'CAFM Digital Asset Registry',
      desc: 'Barcode/QR-coded asset registers with complete depreciation records, run-hour histories, and automated preventive maintenance alarms.',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. HERO WITH BREADCRUMB */}
      {/* ========================================================================= */}
      <section
        id="prop-facilities-hero"
        className="relative w-full min-h-[420px] sm:min-h-[480px] flex flex-col justify-center overflow-hidden bg-[#14281F]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="High-end modern luxury property in Lagos"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14281F]/95 via-[#14281F]/90 to-[#14281F]/70"
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
              <span className="text-[#facc15] font-medium">Property &amp; Facilities</span>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 block"
            >
              INTEGRATED ASSET OPERATIONS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight"
            >
              Property &amp; Facilities Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal max-w-2xl mb-8"
            >
              Engineered asset preservation, proactive mechanical &amp; electrical maintenance, transparent service charge governance, and 24/7 technical oversight across prime Lagos properties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-[#facc15] hover:bg-yellow-400 text-slate-950 font-bold text-sm sm:text-base rounded-lg transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white font-medium text-sm sm:text-base rounded-lg border border-white transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE INTEGRATED MODEL */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3D2E] tracking-tight mb-4">
              The Validreams Integrated Facilities Model
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Managing high-value real estate in Lagos requires an uncompromising blend of technical engineering, tenant relations, and prudent fiscal discipline. Our integrated approach treats physical infrastructure, occupant comfort, and owner ROI as one unified ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#1F3D2E]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-[#1F3D2E] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {pillar.desc}
                    </p>
                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      {pillar.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 rounded-lg border border-[#1F3D2E] text-[#1F3D2E] hover:bg-[#1F3D2E] hover:text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    Request Facility Assessment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE TECHNICAL ENGINEERING DISCIPLINES */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              ENGINEERING INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3D2E] tracking-tight mb-4">
              Hard Services &amp; Technical Capabilities
            </h2>
            <p className="text-base text-gray-600">
              Validreams eliminates guesswork with proactive Planned Preventative Maintenance (PPM) regimens operated by certified on-ground technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCompetencies.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-amber-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1F3D2E] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SLA & CAFM PERFORMANCE STANDARDS */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 bg-[#1F3D2E] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-2 block">
              PERFORMANCE GUARANTEES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
              Service Level Agreements (SLAs) Backed by Data
            </h2>
            <p className="text-base text-white/85 leading-relaxed mb-6">
              Every facility under Validreams management is bound by transparent, contractually enforceable Service Level Agreements. Our automated CAFM ticketing system tracks response times from initiation to client sign-off.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#facc15]">Emergency Critical Incidents</h4>
                  <span className="text-xs font-mono text-white/90">≤ 30 Mins</span>
                </div>
                <p className="text-xs text-white/75">Total power outage, major pipe burst, fire alarm trigger, or security breach.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#facc15]">Urgent Corrective Maintenance</h4>
                  <span className="text-xs font-mono text-white/90">≤ 2 Hours</span>
                </div>
                <p className="text-xs text-white/75">Generator warning faults, localized water pump failure, lift disruption.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-[#facc15]">Routine Residential Tickets</h4>
                  <span className="text-xs font-mono text-white/90">≤ 24 Hours</span>
                </div>
                <p className="text-xs text-white/75">General electrical fixtures, plumbing repairs, air conditioning filter changes.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/5 border border-white/15 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">
                What Sets Validreams Apart?
              </h3>
              <ul className="space-y-4 text-sm text-white/85">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Zero Subcontractor Obfuscation:</strong> Our core engineering and supervisory personnel are full-time Validreams staff.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Ring-Fenced Sinking Funds:</strong> Strict segregation of operational funds and long-term capital expenditure reserves.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Monthly Transparent Audits:</strong> Complete utility consumption logs, diesel liters reconciled, and invoice registers provided to owners.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Lagos Regulatory Mastery:</strong> Active compliance with LASRERA, Lagos State Fire Service, and environmental protection agencies (LASEPA).</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-white/15">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3.5 bg-[#facc15] hover:bg-yellow-400 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Schedule an On-Site Property Walkthrough
                </button>
              </div>
            </div>
          </div>
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

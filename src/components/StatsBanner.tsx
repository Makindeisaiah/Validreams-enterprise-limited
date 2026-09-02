import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Settings, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

function StatCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value === '24/7' ? '24/7' : '0');
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    if (value === '24/7') {
      setDisplayValue('24/7');
      return;
    }

    const numericMatch = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (numericMatch) {
      const target = parseFloat(numericMatch[1]);
      const suffix = numericMatch[2] || '';
      const isDecimal = numericMatch[1].includes('.');
      const controls = animate(0, target, {
        duration: 1.6,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(
            isDecimal ? `${latest.toFixed(1)}${suffix}` : `${Math.round(latest)}${suffix}`
          );
        },
      });
      return () => controls.stop();
    }

    setDisplayValue(value);
  }, [isInView, value]);

  return (
    <p ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#facc15] tracking-tight mb-2 tabular-nums">
      {displayValue}
    </p>
  );
}

export default function StatsBanner() {
  const [showNumericalTargets, setShowNumericalTargets] = useState(false);

  // Qualitative Trust Markers (Audited / Zero Content Risk)
  const qualitativePillars = [
    {
      id: 'pillar-care',
      icon: Building2,
      badge: 'Integrated Care',
      title: 'Full Lifecycle Asset Protection',
      desc: 'Preventative engineering, facilities management & asset value preservation.',
    },
    {
      id: 'pillar-specialists',
      icon: Users,
      badge: 'Certified Experts',
      title: 'Multi-Skilled Technical Teams',
      desc: 'Licensed electrical, mechanical, HVAC, civil & HSE professionals.',
    },
    {
      id: 'pillar-response',
      icon: Settings,
      badge: '24/7 Operations',
      title: 'Round-The-Clock Rapid Response',
      desc: '30-minute critical dispatch, emergency helplines & live helpdesk.',
    },
    {
      id: 'pillar-governance',
      icon: ShieldCheck,
      badge: 'Fiduciary Trust',
      title: 'Transparent Fiscal Governance',
      desc: 'Audited service charges, SLA dashboards & zero hidden charges.',
    },
  ];

  // Quantitative Stats (Subject to Client Confirmation)
  const numericalStats = [
    {
      id: 'properties',
      icon: Building2,
      number: '15+',
      label: 'Properties Managed',
      note: '[Pending Client Verification]',
    },
    {
      id: 'professionals',
      icon: Users,
      number: '100+',
      label: 'Expert Professionals',
      note: '[Pending Client Verification]',
    },
    {
      id: 'support',
      icon: Settings,
      number: '24/7',
      label: 'Operational Support',
      note: '[Active Service Standard]',
    },
    {
      id: 'satisfaction',
      icon: ShieldCheck,
      number: '98%',
      label: 'Client Satisfaction',
      note: '[Pending Client Verification]',
    },
  ];

  return (
    <section
      id="stats-banner"
      className="relative w-full min-h-[340px] sm:min-h-[360px] lg:min-h-[380px] flex items-center justify-center overflow-hidden bg-slate-950 py-14 sm:py-18"
    >
      {/* Full-bleed night-time cityscape / luxury building photo background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
          alt="Night architectural luxury building skyline"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay (roughly 60-70% opacity) */}
      <div
        className="absolute inset-0 bg-slate-950/75 backdrop-brightness-75"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header Strip with Trust Markers Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/15">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#facc15] uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#facc15]" />
            <span>Excellence &amp; Trust Commitments</span>
          </div>

          {/* Mode Switcher for Verification Transparency */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 text-xs">
            <button
              type="button"
              onClick={() => setShowNumericalTargets(false)}
              className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                !showNumericalTargets
                  ? 'bg-[#facc15] text-slate-950 shadow'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Qualitative Trust Markers
            </button>
            <button
              type="button"
              onClick={() => setShowNumericalTargets(true)}
              className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                showNumericalTargets
                  ? 'bg-[#facc15] text-slate-950 shadow'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Operational Stats
            </button>
          </div>
        </div>

        {/* Dynamic Display: Qualitative Trust Markers vs Quantitative Stats */}
        {!showNumericalTargets ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center items-start justify-between">
            {qualitativePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  id={pillar.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="mb-3 text-[#facc15] transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#facc15] uppercase tracking-wider mb-1.5 px-2 py-0.5 rounded bg-[#facc15]/10 border border-[#facc15]/30">
                    {pillar.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 text-center items-center justify-between">
            {numericalStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  id={`stat-${stat.id}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center group"
                >
                  {/* White outline icon on top */}
                  <div className="mb-3.5 text-white transition-transform duration-300 group-hover:scale-110">
                    <IconComponent
                      className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.6]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Animated counter amber/gold number */}
                  <StatCounter value={stat.number} />

                  {/* White label text */}
                  <p className="text-sm sm:text-base font-semibold text-white tracking-wide mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-amber-300/80 font-mono">
                    {stat.note}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}


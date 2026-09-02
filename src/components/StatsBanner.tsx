import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Settings, ShieldCheck } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

function StatCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    if (value === '24/7') {
      const controls = animate(0, 24, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(`${Math.round(latest)}/7`);
        },
      });
      return () => controls.stop();
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
    <p ref={ref} className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2 tabular-nums">
      {displayValue}
    </p>
  );
}

export default function StatsBanner() {
  const stats = [
    {
      id: 'properties',
      icon: Building2,
      number: '15+',
      label: 'Properties Managed',
    },
    {
      id: 'professionals',
      icon: Users,
      number: '100+',
      label: 'Expert Professionals',
    },
    {
      id: 'support',
      icon: Settings,
      number: '24/7',
      label: 'Operational Support',
    },
    {
      id: 'satisfaction',
      icon: ShieldCheck,
      number: '98%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section
      id="stats-banner"
      className="relative w-full min-h-[320px] sm:min-h-[340px] lg:min-h-[360px] flex items-center justify-center overflow-hidden bg-slate-950 py-12 sm:py-16"
    >
      {/* Full-bleed night-time cityscape / luxury building photo background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
          alt="Night architectural luxury building skyline"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay (roughly 55-65% opacity) */}
      <div
        className="absolute inset-0 bg-slate-950/65 backdrop-brightness-75"
        aria-hidden="true"
      />

      {/* 4-Column Stat Items Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 text-center items-center justify-between">
          {stats.map((stat, index) => {
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: 'easeOut' }}
                  className="mb-3.5 text-white transition-transform duration-300 group-hover:scale-110"
                >
                  <IconComponent
                    className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.6]"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Animated counter amber/gold number */}
                <StatCounter value={stat.number} />

                {/* White label text */}
                <p className="text-sm sm:text-base font-medium text-white tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

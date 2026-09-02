import React from 'react';
import { Building2, Users, Settings, ShieldCheck } from 'lucide-react';

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
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                id={`stat-${stat.id}`}
                className="flex flex-col items-center group"
              >
                {/* White outline icon on top */}
                <div className="mb-3.5 text-white transition-transform duration-300 group-hover:scale-110">
                  <IconComponent
                    className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.6]"
                    aria-hidden="true"
                  />
                </div>

                {/* Large bold amber/gold number */}
                <p className="text-4xl sm:text-5xl font-bold text-[#facc15] tracking-tight mb-2">
                  {stat.number}
                </p>

                {/* White label text */}
                <p className="text-sm sm:text-base font-medium text-white tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

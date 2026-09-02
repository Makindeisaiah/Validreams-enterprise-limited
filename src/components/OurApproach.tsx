import React from 'react';
import {
  ClipboardList,
  CalendarDays,
  Headphones,
  Monitor,
  Users,
} from 'lucide-react';

export default function OurApproach() {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'Asset Register & Condition Assessment',
      icon: ClipboardList,
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Planned Preventive Maintenance',
      icon: CalendarDays,
    },
    {
      number: '03',
      title: 'Support',
      description: '24/7 Helpdesk Operations',
      icon: Headphones,
    },
    {
      number: '04',
      title: 'Monitor',
      description: 'Performance Monitoring',
      icon: Monitor,
    },
    {
      number: '05',
      title: 'Engage',
      description: 'Resident Engagement & Quarterly Reviews',
      icon: Users,
    },
  ];

  return (
    <section
      id="our-approach"
      className="w-full bg-white text-gray-900 py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 1. CENTERED SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          {/* Small amber/gold eyebrow label */}
          <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 sm:mb-4">
            OUR APPROACH
          </p>

          {/* Large bold heading in dark green (#1F3D2E) */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-tight">
            Preventive Today. Peace of Mind Always
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 2. 5-STEP HORIZONTAL PROCESS TIMELINE */}
        {/* ========================================================================= */}
        <div className="relative w-full">
          {/* Continuous horizontal dotted connector line passing through circle centers */}
          <div
            className="hidden lg:block absolute top-12 left-12 right-12 border-t-2 border-dotted border-[#facc15] z-0"
            aria-hidden="true"
          />

          {/* Steps container */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  id={`approach-step-${step.number}`}
                  className="flex flex-col items-center text-center flex-1 max-w-[240px] mx-auto lg:max-w-none group"
                >
                  {/* Solid dark green circular node (96px diameter) */}
                  <div className="w-24 h-24 rounded-full bg-[#1F3D2E] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl shrink-0 mb-6 sm:mb-7 border-4 border-white">
                    <IconComponent
                      className="w-10 h-10 text-white stroke-[1.8]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step Number */}
                  <span className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight mb-1">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1F3D2E] tracking-tight mb-2">
                    {step.title}
                  </h3>

                  {/* Short description in two lines */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal max-w-[190px] sm:max-w-[210px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

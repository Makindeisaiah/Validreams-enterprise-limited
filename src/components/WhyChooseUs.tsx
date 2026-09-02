import React from 'react';
import { UserCheck, Monitor, ShieldCheck, Award, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const valueProps = [
    {
      id: 'professionalism',
      icon: UserCheck,
      line1: 'Professionalism',
      line2: '& Expert',
    },
    {
      id: 'efficiency',
      icon: Monitor,
      line1: 'Efficiency via',
      line2: 'Technology',
    },
    {
      id: 'transparency',
      icon: ShieldCheck,
      line1: 'Transparency &',
      line2: 'Accountability',
    },
    {
      id: 'premium-standards',
      icon: Award,
      line1: 'Premium',
      line2: 'Service Standards',
    },
    {
      id: 'sustainability',
      icon: Leaf,
      line1: 'Sustainability',
      line2: 'Focused',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#F1F1F0] text-gray-900 py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ========================================================================= */}
          {/* LEFT HALF */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Small amber/gold eyebrow label */}
            <p className="text-xs sm:text-sm font-bold text-[#facc15] tracking-widest uppercase mb-3 sm:mb-4">
              WHY CHOOSE VALIDREAMS
            </p>

            {/* Large bold heading in dark green (#1F3D2E), two lines */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3D2E] tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Adding Value. Delivering
              <span className="block mt-1">Peace of Mind.</span>
            </h2>

            {/* Supporting paragraph in dark gray/black */}
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-lg">
              We combine professionalism, technology and integrity to deliver outstanding management services that protect your investment and enhance the living and working experience.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT HALF: 5 Value-Prop Items with Amber/Gold Dividers */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 sm:gap-y-12 lg:gap-y-0"
            >
              {valueProps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    id={`why-choose-${item.id}`}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: 'easeOut' },
                      },
                    }}
                    className={`flex flex-col items-center text-center justify-start group ${
                      index > 0
                        ? 'lg:border-l lg:border-[#facc15]/80 lg:pl-3 xl:lg:pl-5'
                        : ''
                    } ${
                      index < 4 ? 'lg:pr-3 xl:lg:pr-5' : ''
                    }`}
                  >
                    {/* Dark Green Line Icon */}
                    <div className="flex items-center justify-center mb-5 sm:mb-6">
                      <IconComponent
                        className="w-10 h-10 sm:w-11 sm:h-11 text-[#1F3D2E] stroke-[1.65] transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Two-line label below in dark green medium-weight text */}
                    <p className="text-sm sm:text-[14.5px] font-semibold text-[#1F3D2E] leading-snug tracking-tight">
                      <span className="block">{item.line1}</span>
                      <span className="block">{item.line2}</span>
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

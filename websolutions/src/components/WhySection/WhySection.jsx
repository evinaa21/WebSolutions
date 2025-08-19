import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const icons = {
  pureCode: () => (
    <svg className="w-16 h-16 icon-stroke" viewBox="0 0 64 64">
      <polyline className="dash-anim" points="22 16 8 32 22 48" />
      <polyline className="dash-anim" points="42 16 56 32 42 48" />
      <line className="draw-loop" x1="30" y1="12" x2="34" y2="52" />
    </svg>
  ),
  futuristicDesign: () => (
    <svg className="w-16 h-16 icon-stroke" viewBox="0 0 64 64">
      <rect className="dash-anim" x="8" y="12" width="48" height="40" rx="2" />
      <circle className="pulse-anim" cx="20" cy="24" r="6" />
      <line className="blink-anim" x1="32" y1="24" x2="48" y2="24" />
      <line className="blink-anim" x1="32" y1="34" x2="48" y2="34" />
      <line className="blink-anim" x1="20" y1="40" x2="48" y2="40" />
    </svg>
  ),
  unlimitedSupport: () => (
    <svg className="w-16 h-16 icon-stroke" viewBox="0 0 64 64">
      <circle className="dash-anim" cx="32" cy="32" r="20" />
      <path className="draw-loop" d="M22 38v8l8-4" />
      <circle className="pulse-anim" cx="28" cy="30" r="3" />
      <circle className="pulse-anim" cx="38" cy="30" r="3" />
      <path className="blink-anim" d="M26 36c2 2 10 2 12 0" />
    </svg>
  ),
  blazingSpeed: () => (
    <svg className="w-16 h-16 icon-stroke" viewBox="0 0 64 64">
      <path className="dash-anim" d="M42 12 14 36h14l-4 16 28-24H38z" />
      <line className="float-anim" x1="10" y1="46" x2="22" y2="46" />
      <line className="float-anim" x1="8" y1="40" x2="16" y2="40" />
    </svg>
  ),
  totalSecurity: () => (
    <svg className="w-16 h-16 icon-stroke" viewBox="0 0 64 64">
      <path className="dash-anim" d="M32 8 14 14v16c0 14 9.5 22 18 26 8.5-4 18-12 18-26V14Z" />
      <path className="pulse-anim" d="M26 32c0-3.3 2.7-6 6-6s6 2.7 6 6v4c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2Z" />
      <line className="blink-anim" x1="32" y1="26" x2="32" y2="30" />
    </svg>
  ),
  transparentPrice: () => (
    <svg className="w-16 h-16 icon-stroke" viewBox="0 0 64 64">
      <rect className="dash-anim" x="18" y="10" width="28" height="44" rx="2" />
      <line className="draw-loop" x1="26" y1="20" x2="38" y2="20" />
      <line className="draw-loop" x1="26" y1="28" x2="38" y2="28" />
      <line className="draw-loop" x1="26" y1="36" x2="38" y2="36" />
      <circle className="pulse-anim" cx="32" cy="46" r="4" />
    </svg>
  ),
};

const WhySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { id: '01', title: 'Pure Code', icon: 'pureCode', description: 'Hand-written for peak performance. No templates, no bloat.' },
    { id: '02', title: 'Futuristic Design', icon: 'futuristicDesign', description: 'Stunning, modern aesthetics that set you apart.' },
    { id: '03', title: 'Unlimited Support', icon: 'unlimitedSupport', description: 'Your dedicated team for any edits, 24/7.' },
    { id: '04', title: 'Blazing Speed', icon: 'blazingSpeed', description: 'Sites engineered to load instantly & boost conversions.' },
    { id: '05', title: 'Total Security', icon: 'totalSecurity', description: 'Secure hosting and proactive monitoring included.' },
    { id: '06', title: 'Transparent Price', icon: 'transparentPrice', description: 'Simple subscription. You only buy your domain.' },
  ];

  return (
    <section className="py-28 bg-black relative" ref={ref}>
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 glow-text">
            The SwipeToCode Difference
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We don't just build websites. We forge digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <span className="text-sm text-gray-600 font-mono">{feature.id}</span>
                  </div>
                  <div className="mb-6">{Icon && <Icon />}</div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

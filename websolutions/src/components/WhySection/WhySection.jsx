import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import Lottie from 'lottie-react';
// import codeAnimation from '../../assets/lottie/code.json';

const WhySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { id: '01', title: 'Pure Code', description: 'Hand-written for peak performance. No templates, no bloat.' },
    { id: '02', title: 'Futuristic Design', description: 'Stunning, modern aesthetics that set you apart from the competition.' },
    { id: '03', title: 'Unlimited Support', description: 'Your dedicated team for any edits, available 24/7.' },
    { id: '04', title: 'Blazing Speed', description: 'Websites engineered to load instantly, boosting SEO and UX.' },
    { id: '05', title: 'Total Security', description: 'Secure hosting and proactive monitoring are always included.' },
    { id: '06', title: 'Transparent Price', description: 'One simple monthly fee. No upfront costs, no hidden charges.' },
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
          {features.map((feature, index) => (
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
                <div className="w-16 h-16 mb-6">
                  {/* <Lottie animationData={codeAnimation} loop={true} /> */}
                  <div className="w-full h-full border border-gray-800 flex items-center justify-center">
                    <p className="text-xs text-gray-700">LOTTIE</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

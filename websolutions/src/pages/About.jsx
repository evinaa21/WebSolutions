import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Heart, Zap, Users } from 'lucide-react';
import CTA from '../components/CTA/CTA';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text">About SwipeToCode</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're on a mission to make professional, high-performance websites accessible to every business. No WordPress, no templates, just pure code and pure results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={ref}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                It all started with a local business owner paying high monthly fees for a slow, clunky WordPress site that barely worked on mobile.
              </p>
              <p>
                We rebuilt their website from scratch. The result? A 400% speed improvement and a 50% increase in online orders in the first month.
              </p>
              <p>
                That's when we realized: <strong>every business deserves a website that actually works</strong>. Not a template. Not a page builder. A real, custom-coded website that performs.
              </p>
              <p>
                Today, SwipeToCode helps businesses grow with websites that load fast, look amazing, and convert visitors into customers.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 border border-gray-800 tech-grid flex items-center justify-center p-8"
          >
             <p className="text-2xl text-center font-mono text-gray-500">
                BUILT BY DEVELOPERS,
                <br />
                FOR BUSINESS OWNERS.
             </p>
          </motion.div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default About;

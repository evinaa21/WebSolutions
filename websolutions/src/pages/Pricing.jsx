import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    'Custom Design & Development',
    'Blazing-Fast Performance',
    'Mobile-First Responsive Design',
    'On-Page SEO Optimization',
    'Secure Hosting & SSL',
    'Unlimited Edits & 24/7 Support',
    'Analytics & Reporting'
  ];

  const addOns = [
    { name: 'Professional Copywriting', desc: 'Engaging, SEO-friendly content.' },
    { name: 'Custom Logo Design', desc: 'A unique brand identity.' },
    { name: 'Advanced SEO Services', desc: 'Comprehensive search engine strategy.' }
  ];

  return (
    <div className="bg-black text-white pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 glow-text">
            FAIR & TRANSPARENT PRICING
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Get premium, custom-coded websites at a fraction of the cost of traditional agencies. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8 border-2 border-gray-700 lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-medium text-white mb-2">All-Inclusive Plan</h2>
              <p className="text-gray-400">One simple subscription covers everything you need to dominate online.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-6">
                <p className="text-xs text-gray-500 font-mono tracking-widest mb-2">
                  WHAT'S NOT INCLUDED?
                </p>
                <p className="text-sm text-gray-400">
                  You are responsible for purchasing and owning your domain name (e.g., yourbusiness.com), which typically costs $10-20 per year. We'll handle everything else.
                </p>
            </div>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
             <h3 className="text-2xl font-light text-white mb-4">
                OPTIONAL ADD-ONS
              </h3>
            {addOns.map((addon, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-lg font-medium text-white mb-1">
                  {addon.name}
                </h4>
                <p className="text-sm text-gray-400">{addon.desc}</p>
              </div>
            ))}
             <div className="pt-4">
                <Link to="/contact" className="btn-primary w-full text-center">
                  Get a Custom Quote
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

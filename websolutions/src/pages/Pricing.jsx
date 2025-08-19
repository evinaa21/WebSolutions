import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    'Custom Development',
    'Performance Optimization',
    'Mobile Responsive',
    'SEO Optimization',
    'Secure Hosting',
    'SSL Certificate',
    'Regular Backups',
    'Unlimited Edits',
    '24/7 Support',
    'Analytics Setup'
  ]

  const addOns = [
    { name: 'Copywriting', price: '$150', desc: 'Professional content creation' },
    { name: 'Logo Design', price: '$30', desc: 'Custom brand identity' },
    { name: 'Additional Pages', price: '$300', desc: 'Extra page development' }
  ]

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
            TRANSPARENT PRICING
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            One simple price. Everything included. No surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8 border-2 border-gray-700"
          >
            <div className="text-center mb-8">
              <div className="text-xs text-gray-500 font-mono tracking-widest mb-4">
                MONTHLY PLAN
              </div>
              <div className="text-5xl font-light text-white mb-4">
                $100<span className="text-lg text-gray-400">/mo</span>
              </div>
              <p className="text-gray-400">Everything you need to get online</p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-1 h-1 bg-white"></div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-6 mb-8">
              <p className="text-xs text-gray-500 font-mono tracking-widest mb-2">
                NOT INCLUDED
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-gray-600"></div>
                  <span className="text-sm text-gray-500">Setup fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-gray-600"></div>
                  <span className="text-sm text-gray-500">Long-term contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-gray-600"></div>
                  <span className="text-sm text-gray-500">Hidden costs</span>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn-primary w-full text-center">
              Start Project
            </Link>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-light text-white mb-4">
                OPTIONAL ADD-ONS
              </h3>
              <div className="w-16 h-px bg-white mb-6"></div>
            </div>

            <div className="space-y-4">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="card p-6 hover:bg-gray-900/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">
                        {addon.name}
                      </h4>
                      <p className="text-sm text-gray-400">{addon.desc}</p>
                    </div>
                    <div className="text-lg font-light text-white">
                      {addon.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-white mb-4">
              FREQUENTLY ASKED
            </h3>
            <div className="w-16 h-px bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, 30 days notice required.'
              },
              {
                q: 'Are changes included?',
                a: 'Unlimited revisions included.'
              },
              {
                q: 'How fast is delivery?',
                a: 'Most sites completed in 7-14 days.'
              },
              {
                q: 'What about hosting?',
                a: 'Enterprise hosting included.'
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-sm font-medium text-white mb-2 tracking-wide">
                  {faq.q.toUpperCase()}
                </h4>
                <p className="text-sm text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing

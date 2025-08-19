import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      id: '01',
      title: 'Custom Code',
      description: 'Hand-written code optimized for performance and scalability. No templates or page builders.'
    },
    {
      id: '02',
      title: 'Zero Upfront',
      description: 'Start with no initial payment. Transparent monthly pricing with no hidden costs.'
    },
    {
      id: '03',
      title: '24/7 Support',
      description: 'Unlimited revisions and round-the-clock technical support for your peace of mind.'
    },
    {
      id: '04',
      title: 'Ultra Fast',
      description: '99+ PageSpeed scores guaranteed. Faster loading times than any competitor.'
    },
    {
      id: '05',
      title: 'Secure Hosting',
      description: 'Enterprise-grade hosting with automatic updates and security monitoring included.'
    },
    {
      id: '06',
      title: 'Mobile First',
      description: 'Responsive design that works flawlessly across all devices and screen sizes.'
    }
  ]

  return (
    <section className="py-20 bg-black relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 glow-text">
            WHY SWIPETOCODE
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Modern development practices meet minimal design philosophy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card p-8 h-full hover:bg-gray-900/80 transition-all duration-300">
                {/* Feature Number */}
                <div className="text-xs text-gray-500 font-mono tracking-widest mb-4">
                  {feature.id}
                </div>
                
                {/* Lottie Animation Placeholder */}
                <div className="w-12 h-12 border border-gray-800 mb-6 flex items-center justify-center group-hover:border-gray-600 transition-colors">
                  <div className="w-6 h-6 bg-gray-800 group-hover:bg-gray-600 transition-colors"></div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySection

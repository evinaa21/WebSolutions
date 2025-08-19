import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const CTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 glow-text">
            READY TO BUILD
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Start your project today. No commitments, no hidden fees.
            Just modern web development done right.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn-primary">
                Start Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/portfolio" className="btn-outline">
                View Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

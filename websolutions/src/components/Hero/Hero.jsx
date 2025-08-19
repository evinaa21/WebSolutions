import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 px-6 lg:px-8">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block border border-gray-800 px-4 py-2 mb-8 scan-line"
          >
            <span className="text-xs text-gray-400 tracking-widest font-mono">
              MODERN WEB DEVELOPMENT
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-none glow-text">
            <span className="block">MINIMAL</span>
            <span className="block">WEBSITES</span>
            <span className="block text-gray-400">FOR THE FUTURE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Custom-coded solutions that prioritize performance, aesthetics, and user experience.
            No templates. No compromises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto inline-block text-center">
                Start Project
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link to="/portfolio" className="btn-outline w-full sm:w-auto inline-block text-center">
                View Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
            Futuristic Web Solutions for Modern Businesses
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            We build lightning-fast, custom-coded websites with a minimal aesthetic, designed to elevate your brand in the digital space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Start Your Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/portfolio" className="btn-outline w-full sm:w-auto">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

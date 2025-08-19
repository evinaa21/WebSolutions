import React from 'react'
import { motion } from 'framer-motion'
import Portfolio from '../components/Portfolio/Portfolio'

const PortfolioPage = () => {
  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See how we've helped businesses like yours achieve their online goals with
              custom-coded websites that perform exceptionally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Component */}
      <Portfolio />
    </div>
  )
}

export default PortfolioPage

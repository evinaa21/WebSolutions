import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'business', label: 'Business' },
    { id: 'service', label: 'Service' },
    { id: 'ecommerce', label: 'Commerce' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter)

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 glow-text">
            SELECTED WORK
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-sm font-mono tracking-wider transition-colors duration-300 ${
                  activeFilter === filter.id
                    ? 'text-white border-b border-white pb-1'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {filter.label.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-950 border border-gray-800 hover:border-gray-600 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-white tracking-wide">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-500 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="btn-outline"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

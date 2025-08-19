import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import portfolioData from '../../data/portfolio.json'
import { ArrowUpRight } from 'lucide-react'

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
    <section className="py-28 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 glow-text">
            SELECTED WORK
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl">
            A showcase of our commitment to design, performance, and innovation.
          </p>
        </motion.div>

        <div className="space-y-20">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center group"
              >
                <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="overflow-hidden border border-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>
                <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-sm text-gray-500 font-mono mb-4">{project.category.toUpperCase()}</p>
                  <h3 className="text-3xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <a href="#" className="btn-outline inline-flex items-center gap-2 group">
                    View Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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

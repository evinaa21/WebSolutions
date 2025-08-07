import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Gauge, Smartphone, Monitor } from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)
  const [portfolioData, setPortfolioData] = useState([])

  // Load portfolio data
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const response = await fetch('/src/data/portfolio.json')
        const data = await response.json()
        setPortfolioData(data)
      } catch (error) {
        console.error('Error loading portfolio data:', error)
        // Fallback data if JSON fails to load
        setPortfolioData([
          {
            id: 1,
            title: "Project One",
            category: "business",
            description: "A custom e-commerce website built for a local retailer, featuring a unique design and seamless user experience.",
            image: "images/portfolio-1.svg",
            speed: 98,
            tags: ["React", "E-commerce", "Custom Design"]
          },
          {
            id: 2,
            title: "Project Two", 
            category: "service",
            description: "A portfolio website for a freelance photographer, showcasing their work with a clean and modern layout.",
            image: "images/portfolio-2.svg",
            speed: 95,
            tags: ["React", "Portfolio", "Photography"]
          },
          {
            id: 3,
            title: "Project Three",
            category: "restaurant", 
            description: "A restaurant website with an online reservation system and menu display, designed to enhance customer engagement.",
            image: "images/portfolio-3.svg",
            speed: 97,
            tags: ["React", "Restaurant", "Reservations"]
          },
          {
            id: 4,
            title: "Project Four",
            category: "business",
            description: "A corporate website for a consulting firm, featuring a professional design and easy navigation.",
            image: "images/portfolio-4.svg",
            speed: 96,
            tags: ["Next.js", "Corporate", "Consulting"]
          },
          {
            id: 5,
            title: "Website Screenshots Demo",
            category: "business",
            description: "Comprehensive website demonstration showing various layouts and design patterns for business websites.",
            image: "images/first page.png",
            speed: 98,
            tags: ["Demo", "Layouts", "Business"]
          },
          {
            id: 6,
            title: "Mobile-First Design",
            category: "service",
            description: "Responsive website design showcasing mobile-first approach and cross-device compatibility.",
            image: "images/screen.png", 
            speed: 99,
            tags: ["Mobile-First", "Responsive", "UX"]
          },
          {
            id: 7,
            title: "Dashboard Interface",
            category: "business",
            description: "Modern dashboard interface with data visualization and user management features.",
            image: "images/Screenshot 2025-07-30 181812.png",
            speed: 97,
            tags: ["Dashboard", "Data Viz", "Admin"]
          },
          {
            id: 8,
            title: "Application Interface",
            category: "business", 
            description: "Clean application interface design with intuitive navigation and modern UI components.",
            image: "images/Screenshot 2025-08-01 084447.png",
            speed: 96,
            tags: ["App Interface", "UI/UX", "Modern"]
          },
          {
            id: 9,
            title: "Latest Project Showcase",
            category: "ecommerce",
            description: "Recent project featuring advanced e-commerce functionality and custom shopping experience.",
            image: "images/Screenshot 2025-08-06 210701.png",
            speed: 98,
            tags: ["E-commerce", "Custom", "Recent"]
          }
        ])
      }
    }

    loadPortfolioData()
  }, [])

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'business', label: 'Business' },
    { id: 'service', label: 'Services' },
    { id: 'ecommerce', label: 'E-commerce' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter)

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProjects.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length))
  }

  // Reset visible count when filter changes
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setVisibleCount(6)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Only show this section if it's being used as a component on homepage */}
        {window.location.pathname === '/' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our latest projects across different industries. Each website is crafted with precision, 
              optimized for performance, and designed to convert visitors into customers.
            </p>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Counter */}
        <motion.p 
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8"
        >
          Showing <span className="font-semibold text-primary-600 dark:text-primary-400">{visibleProjects.length}</span> 
          {' '}of <span className="font-semibold text-primary-600 dark:text-primary-400">{filteredProjects.length}</span>
          {activeFilter === 'all' ? ' projects' : ` ${activeFilter} projects`}
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Speed Score */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold flex items-center space-x-1"
                    >
                      <Gauge className="w-4 h-4" />
                      <span>{project.speed}</span>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags && project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Smartphone className="w-3 h-3" />
                          <span>Mobile</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Monitor className="w-3 h-3" />
                          <span>Responsive</span>
                        </div>
                      </div>
                      <div className="font-semibold text-green-600 dark:text-green-400">
                        {project.speed}% Speed
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Load More Projects ({filteredProjects.length - visibleCount} remaining)
            </motion.button>
          </motion.div>
        )}

        {/* CTA - Only show on homepage */}
        {window.location.pathname === '/' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Ready to see your business featured in our portfolio?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

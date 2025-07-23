import React, { useState } from 'react'
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

  const projects = [
    {
      id: 1,
      title: "Bella Vista Restaurant",
      category: "restaurant",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center",
      speed: 98,
      description: "Modern restaurant website with online reservations and menu showcase",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      id: 2,
      title: "TechStart Solutions",
      category: "business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      speed: 96,
      description: "Professional business website with CRM integration",
      tags: ["Next.js", "TypeScript", "CRM"]
    },
    {
      id: 3,
      title: "Green Thumb Landscaping",
      category: "service",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      speed: 99,
      description: "Service-based website with project gallery and contact forms",
      tags: ["React", "Tailwind", "Forms"]
    },
    {
      id: 4,
      title: "Fashion Forward Boutique",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      speed: 97,
      description: "E-commerce platform with custom shopping cart",
      tags: ["React", "Commerce", "PayPal"]
    },
    {
      id: 5,
      title: "Ocean View Hotel",
      category: "restaurant",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center",
      speed: 95,
      description: "Luxury hotel website with booking system and virtual tours",
      tags: ["React", "Booking", "360° Tours"]
    },
    {
      id: 6,
      title: "FitLife Gym & Wellness",
      category: "service",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center",
      speed: 98,
      description: "Fitness center website with class schedules and membership portal",
      tags: ["React", "Calendar", "Payments"]
    },
    {
      id: 7,
      title: "InnovateTech Startup",
      category: "business",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
      speed: 97,
      description: "Cutting-edge startup website with investor dashboard and pitch deck",
      tags: ["Next.js", "Analytics", "Dashboard"]
    },
    {
      id: 8,
      title: "Luxe Electronics Store",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop&crop=center",
      speed: 94,
      description: "Premium electronics e-commerce with AR product preview",
      tags: ["React", "AR", "Shopify"]
    },
    {
      id: 9,
      title: "Artisan Coffee Roasters",
      category: "restaurant",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&crop=center",
      speed: 99,
      description: "Coffee shop website with subscription service and brew guides",
      tags: ["React", "Subscription", "Blog"]
    },
    {
      id: 10,
      title: "Elite Law Firm",
      category: "service",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=center",
      speed: 96,
      description: "Professional law firm website with case studies and consultation booking",
      tags: ["Next.js", "Legal", "Consultation"]
    },
    {
      id: 11,
      title: "MedTech Innovations",
      category: "business",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      speed: 98,
      description: "Medical technology company with product showcase and research portal",
      tags: ["React", "Healthcare", "Research"]
    },
    {
      id: 12,
      title: "Urban Style Marketplace",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop&crop=center",
      speed: 95,
      description: "Multi-vendor marketplace for fashion and lifestyle brands",
      tags: ["React", "Multi-vendor", "Fashion"]
    },
    {
      id: 13,
      title: "Prime Auto Dealership",
      category: "service",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center",
      speed: 97,
      description: "Car dealership website with inventory management and financing calculator",
      tags: ["React", "Inventory", "Calculator"]
    },
    {
      id: 14,
      title: "Gourmet Food Delivery",
      category: "restaurant",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=300&fit=crop&crop=center",
      speed: 98,
      description: "Food delivery platform with real-time tracking and chef profiles",
      tags: ["React", "Real-time", "Maps"]
    },
    {
      id: 15,
      title: "CloudSync Enterprise",
      category: "business",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      speed: 99,
      description: "Enterprise cloud solutions website with security features and pricing calculator",
      tags: ["Next.js", "Cloud", "Security"]
    },
    {
      id: 16,
      title: "Handmade Crafts Bazaar",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
      speed: 96,
      description: "Artisan marketplace with custom order system and artist profiles",
      tags: ["React", "Custom Orders", "Artists"]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'business', label: 'Business' },
    { id: 'service', label: 'Services' },
    { id: 'ecommerce', label: 'E-commerce' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
                      {project.tags.map((tag, tagIndex) => (
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

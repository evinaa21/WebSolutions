import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleNavigation = () => {
      window.scrollTo(0, 0)
    }
    handleNavigation()
  }, [location])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-glass shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="z-50"
          >
            <Link to="/" className="flex items-center space-x-3">
              {/* Enhanced Web Globe Logo */}
              <div className="relative w-14 h-14 group">
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ rotateY: 15, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Globe SVG */}
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 120 120"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
                  >
                    {/* Enhanced Gradient Definitions */}
                    <defs>
                      <radialGradient id="globeGradient" cx="40%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#7DD3FC" />
                        <stop offset="30%" stopColor="#60A5FA" />
                        <stop offset="70%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1E40AF" />
                      </radialGradient>
                      
                      <linearGradient id="segmentGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A7F3D0" />
                        <stop offset="50%" stopColor="#6EE7B7" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                      
                      <linearGradient id="segmentGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#BFDBFE" />
                        <stop offset="50%" stopColor="#93C5FD" />
                        <stop offset="100%" stopColor="#60A5FA" />
                      </linearGradient>

                      <linearGradient id="segmentGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>

                      {/* Shadow filter */}
                      <filter id="innerShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="2" dy="2" result="offset"/>
                        <feFlood floodColor="rgba(0,0,0,0.2)"/>
                        <feComposite in2="offset" operator="in"/>
                        <feComposite in2="SourceGraphic" operator="over"/>
                      </filter>
                    </defs>

                    {/* Globe Background Circle with enhanced gradient */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="url(#globeGradient)"
                      filter="url(#innerShadow)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Main Grid Lines - Longitude (Vertical) */}
                    <motion.path
                      d="M 60 12 Q 60 60 60 108"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                    />
                    <motion.path
                      d="M 60 12 Q 35 60 60 108"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.8"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    />
                    <motion.path
                      d="M 60 12 Q 85 60 60 108"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.8"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />

                    {/* Main Grid Lines - Latitude (Horizontal) */}
                    <motion.ellipse
                      cx="60"
                      cy="60"
                      rx="42"
                      ry="15"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                    <motion.ellipse
                      cx="60"
                      cy="60"
                      rx="42"
                      ry="30"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.8"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.7 }}
                    />

                    {/* Enhanced Globe Segments */}
                    <motion.path
                      d="M 25 30 Q 35 40 30 55 Q 25 70 35 85 L 30 90 Q 18 75 25 55 Q 20 40 25 30 Z"
                      fill="url(#segmentGradient1)"
                      opacity="0.9"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.9 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    />
                    
                    <motion.path
                      d="M 85 25 Q 95 35 90 50 Q 85 65 95 80 L 90 85 Q 78 70 85 50 Q 80 35 85 25 Z"
                      fill="url(#segmentGradient2)"
                      opacity="0.9"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.9 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />

                    <motion.path
                      d="M 42 85 Q 52 90 47 100 Q 42 110 52 115 L 47 118 Q 35 108 42 100 Q 38 90 42 85 Z"
                      fill="url(#segmentGradient3)"
                      opacity="0.8"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.8 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    />

                    {/* Additional smaller segments */}
                    <motion.path
                      d="M 70 30 Q 78 35 75 45 Q 72 55 78 65 L 75 68 Q 68 58 70 45 Q 68 35 70 30 Z"
                      fill="url(#segmentGradient1)"
                      opacity="0.7"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.7 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    />

                    {/* Enhanced Connection Dots */}
                    <motion.circle
                      cx="35"
                      cy="42"
                      r="2.5"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                    />
                    <motion.circle
                      cx="85"
                      cy="48"
                      r="2.5"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5, delay: 2 }}
                    />
                    <motion.circle
                      cx="52"
                      cy="92"
                      r="2.5"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    />
                    <motion.circle
                      cx="75"
                      cy="50"
                      r="2"
                      fill="rgba(255,255,255,0.8)"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                    />

                    {/* Enhanced Highlight Effect */}
                    <motion.ellipse
                      cx="48"
                      cy="38"
                      rx="12"
                      ry="6"
                      fill="rgba(255,255,255,0.4)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.6 }}
                    />

                    {/* Subtle rotating effect */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "60px 60px" }}
                    >
                      <motion.circle
                        cx="80"
                        cy="35"
                        r="1"
                        fill="rgba(255,255,255,0.6)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 2.8 }}
                      />
                      <motion.circle
                        cx="40"
                        cy="80"
                        r="1"
                        fill="rgba(255,255,255,0.6)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 3 }}
                      />
                    </motion.g>
                  </svg>

                  {/* Enhanced Mouse Cursor */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-5 h-5"
                    initial={{ scale: 0, rotate: -45, x: 10, y: 10 }}
                    animate={{ scale: 1, rotate: 0, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.2, ease: "backOut" }}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                  >
                    <svg viewBox="0 0 24 24" className="w-full h-full filter drop-shadow-sm">
                      {/* Cursor shadow */}
                      <path
                        d="M4 4l7.07 17.54 2.46-5.75 5.75-2.46L4 4z"
                        fill="rgba(0,0,0,0.3)"
                        transform="translate(1,1)"
                      />
                      {/* Main cursor */}
                      <motion.path
                        d="M4 4l7.07 17.54 2.46-5.75 5.75-2.46L4 4z"
                        fill="white"
                        stroke="#1f2937"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 3.4 }}
                      />
                      {/* Cursor accent */}
                      <motion.path
                        d="M4 4l7.07 17.54 2.46-5.75 5.75-2.46L4 4z"
                        fill="url(#cursorGradient)"
                        opacity="0.8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 3.6 }}
                      />
                      
                      <defs>
                        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#1D4ED8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Enhanced Click Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>

              {/* Enhanced Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="flex flex-col">
                  <motion.span 
                    className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white font-display leading-none tracking-tight"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    WEB
                  </motion.span>
                  <motion.span 
                    className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-[0.2em] mt-0.5"
                    style={{ letterSpacing: '0.2em' }}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    SOLUTIONS
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+355688788786"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 group-hover:text-green-500 transition-colors" />
              <span className="text-sm font-medium">068 878 8786</span>
            </motion.a>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="btn-primary text-sm px-6 py-3"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-50"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 space-y-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => {
                          setIsOpen(false)
                          window.scrollTo(0, 0)
                        }}
                        className={`block px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                          location.pathname === item.href
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Contact & CTA */}
                  <div className="pt-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.a
                      href="tel:+355688788786"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">068 878 8786</span>
                    </motion.a>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block w-full btn-primary text-center text-lg py-4"
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

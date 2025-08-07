import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DarkModeToggle from './components/DarkMode/DarkModeToggle'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

// Context
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Progressive loading animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 120)

    return () => clearInterval(progressInterval)
  }, [])

  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Main Loading Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-md mx-auto px-6"
        >
          {/* Modern Logo Animation */}
          <motion.div className="relative mb-12">
            {/* Main Logo Container */}
            <motion.div
              className="relative w-20 h-20 mx-auto"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full" />
              
              {/* Inner Dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 dark:bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Moving Dot */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 0.8, 1]
                }}
                transition={{ 
                  rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ transformOrigin: "50% 40px" }}
              />
            </motion.div>
          </motion.div>

          {/* Brand Name */}
          <motion.div className="mb-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              Websolutions
            </motion.h1>
            
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 text-lg font-medium mt-2"
            >
              Crafting digital excellence
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4 max-w-xs mx-auto"
          >
            <motion.div
              className="h-full bg-gray-900 dark:bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-sm text-gray-500 dark:text-gray-400 font-medium"
          >
            {Math.round(loadingProgress)}%
          </motion.div>

          {/* Loading Text Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8"
          >
            <motion.span
              className="text-gray-500 dark:text-gray-400 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading your experience
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Exit Animation Overlay */}
        <AnimatePresence>
          {loadingProgress >= 100 && (
            <motion.div
              className="absolute inset-0 bg-white dark:bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Header />
          <DarkModeToggle />
          
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

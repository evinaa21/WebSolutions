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

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-16 h-16 border-2 border-gray-800 border-t-white rounded-full animate-spin"
        />
      </motion.div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Header />
          <DarkModeToggle />
          
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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

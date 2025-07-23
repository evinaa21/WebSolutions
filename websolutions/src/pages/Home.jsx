import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Components
import Hero from '../components/Hero/Hero'
import WhySection from '../components/WhySection/WhySection'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <WhySection />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}

export default Home

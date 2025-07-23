import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Heart, Zap, Users, Award, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Code2,
      title: "Quality Code",
      description: "Every line of code is written with precision, following best practices and modern standards."
    },
    {
      icon: Zap,
      title: "Speed First",
      description: "Performance isn't an afterthought. We build websites that load lightning-fast from day one."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our success. We're not just developers; we're your digital partners."
    },
    {
      icon: Users,
      title: "Small Business Love",
      description: "We understand small businesses because we are one. Every solution is crafted with your growth in mind."
    }
  ]

  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a freelance developer, building websites for local businesses and seeing the impact of fast, custom-coded solutions."
    },
    {
      year: "2021",
      title: "Growing Demand",
      description: "Word spread about our unique approach. More businesses wanted fast, affordable websites without WordPress complications."
    },
    {
      year: "2022",
      title: "The $100 Model",
      description: "Developed our subscription model to make professional websites accessible to every small business owner."
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team of passionate developers who share our vision of making the web faster and more beautiful."
    },
    {
      year: "2024",
      title: "100+ Happy Clients",
      description: "Reached our milestone of 100+ satisfied clients, each with websites that perform better than their competition."
    }
  ]

  return (
    <div className="pt-24"> {/* Changed from pt-20 to pt-24 */}
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              About <span className="gradient-text">Websolutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make professional, fast websites accessible to every business owner. 
              No WordPress, no templates, just pure code and pure results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  It all started when I was helping a local restaurant owner with their website. 
                  They were paying $200/month for a slow, clunky WordPress site that barely worked on mobile.
                </p>
                <p>
                  I rebuilt their entire website from scratch using modern code. The result? 
                  A 400% speed improvement, mobile-perfect design, and 50% more online orders in the first month.
                </p>
                <p>
                  That's when I realized: <strong>every business deserves a website that actually works</strong>. 
                  Not a template. Not a page builder. A real, custom-coded website that performs.
                </p>
                <p>
                  Today, Websolutions helps 100+ businesses grow with websites that load fast, 
                  look amazing, and convert visitors into customers.
                </p>
              </div>
            </motion.div>

            {/* Founder Image/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="card p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">WS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Built by Developers, For Business Owners
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our team combines technical expertise with business understanding 
                  to create websites that actually drive results.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">100+</div>
                    <div className="text-gray-600 dark:text-gray-400">Websites Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">99%</div>
                    <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">48hrs</div>
                    <div className="text-gray-600 dark:text-gray-400">Avg. Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">24/7</div>
                    <div className="text-gray-600 dark:text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From a one-person freelance operation to a team dedicated to revolutionizing small business websites.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

            {journey.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-6 pb-12"
              >
                {/* Timeline dot */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className="card p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-8">
              To make professional, lightning-fast websites accessible to every business owner, 
              regardless of technical knowledge or budget constraints.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Trusted by 100+ businesses worldwide</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

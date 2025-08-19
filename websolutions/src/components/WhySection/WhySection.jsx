import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, DollarSign, Headphones, Zap, Shield, Smartphone } from 'lucide-react'

const WhySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Code2,
      title: "Custom-coded",
      description: "No templates or drag-and-drop builders. Every line of code is written specifically for your business.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "$0 upfront",
      description: "Start with zero down payment. Cancel anytime. No hidden fees or long-term contracts required.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Headphones,
      title: "Unlimited edits & 24/7 support",
      description: "Need changes? We're here 24/7. Unlimited revisions and round-the-clock technical support.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Lightning-fast performance",
      description: "99+ PageSpeed scores guaranteed. Your website will load faster than your competition.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Shield,
      title: "Hosting, updates, and SEO included",
      description: "Everything is managed for you. Hosting, security updates, and SEO optimization all included.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-first design",
      description: "Every website is designed mobile-first and looks perfect on all devices and screen sizes.",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            Why <span className="gradient-text">SwipeToCode</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another web design agency. We're your dedicated development team, 
            creating custom solutions that actually work for your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="card p-8 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} mt-6 rounded-full origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 px-8 py-4 rounded-full border border-primary-200 dark:border-primary-800">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Ready to experience the difference?
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhySection

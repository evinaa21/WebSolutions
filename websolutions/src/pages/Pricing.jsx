import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      name: "Professional Copywriting",
      description: "SEO-optimized content that converts visitors into customers",
      icon: "✍️"
    },
    {
      name: "Custom Logo Design", 
      description: "Professional logo design that represents your brand",
      icon: "🎨"
    },
    {
      name: "Homepage Design",
      description: "Beautiful homepage design for better conversions",
      icon: "🏠"
    },
    {
      name: "E-commerce Integration",
      description: "Add shopping cart and payment processing to your site",
      icon: "🛒"
    },
    {
      name: "SEO Optimization",
      description: "Comprehensive SEO optimization for better search rankings",
      icon: "📈"
    },
    {
      name: "Social Media Integration",
      description: "Connect all your social media accounts and feeds",
      icon: "📱"
    }
  ]

  const features = [
    "Custom Website Design",
    "Hand-coded Development",
    "Mobile-responsive Design",
    "Lightning-fast Performance",
    "SSL Certificate",
    "Professional Hosting",
    "Regular Backups",
    "Security Monitoring",
    "Unlimited Edits",
    "24/7 Technical Support",
    "Basic SEO Setup",
    "Google Analytics",
    "Contact Forms",
    "Content Management",
    "Performance Optimization",
    "Browser Compatibility"
  ]

  const excluded = [
    "No setup fees",
    "No hidden costs",
    "No long-term contracts",
    "No WordPress complications"
  ]

  return (
    <div className="pt-20">
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
              Simple <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              One transparent price. Everything included. No surprises.
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-6xl md:text-8xl font-bold gradient-text font-display">$100</span>
                  <div className="text-left">
                    <div className="text-gray-500 dark:text-gray-400 text-lg">/month</div>
                    <div className="text-gray-400 dark:text-gray-500 text-sm">per website</div>
                  </div>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything you need for a professional website
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* What's NOT Included */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  What's NOT included (the good news):
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {excluded.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                <Link
                  to="/contact"
                  className="btn-primary text-lg w-full sm:w-auto inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cancel anytime • No setup fees • 30-day guarantee
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
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
              Optional <span className="gradient-text">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enhance your website with these one-time services. All completely optional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card p-6 text-center group"
              >
                <div className="text-4xl mb-4">{addon.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {addon.name}
                </h3>
                <div className="text-3xl font-bold gradient-text mb-4 font-display">
                  {addon.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {addon.description}
                </p>
                <button className="btn-outline text-sm w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all">
                  Add to Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Is $100 really all I pay?",
                a: "Yes! No setup fees, no hidden costs. Just $100/month for everything listed above."
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely! 30 days notice, no cancellation fees. We'll even help you transition if needed."
              },
              {
                q: "What if I need changes?",
                a: "Unlimited changes are included! Just email us what you need, and we'll handle it."
              },
              {
                q: "How fast will my site be?",
                a: "We guarantee 95+ PageSpeed scores. Most of our sites achieve 98-100."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
            >
              More questions? Let's talk →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join 100+ businesses that trust Websolutions for their online presence.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Mail, Phone } from 'lucide-react'

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: July 23, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Information We Collect</h2>
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information (company name, website requirements)</li>
                  <li>Communication preferences</li>
                  <li>Project details and specifications</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>IP address and browser information</li>
                  <li>Website usage analytics</li>
                  <li>Cookies and similar technologies</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Provide web development services</li>
                    <li>Communicate about your project</li>
                    <li>Process payments and billing</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-700 dark:text-secondary-400">Business Operations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Improve our services</li>
                    <li>Analyze website performance</li>
                    <li>Send relevant updates</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Information Sharing</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>We do not sell, trade, or share your personal information with third parties</strong> except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>With your explicit consent</li>
                  <li>To service providers who help us operate our business</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights or the safety of others</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Data Security</h2>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on privacy practices</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">You have the right to:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your information</li>
                    <li>Restrict processing of your data</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How to exercise your rights:</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Contact us using the information below. We'll respond to your request within 30 days.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary-600" />
                      <a href="mailto:hello@websolutions.design" className="text-primary-600 hover:text-primary-700">
                        hello@websolutions.design
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary-600" />
                      <span className="text-gray-700 dark:text-gray-300">068 878 8786</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cookies and Tracking</h2>
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use cookies and similar technologies to improve your experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Required for website functionality</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Help us understand website usage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preference Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Remember your settings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg border border-primary-200 dark:border-primary-800">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Websolutions</strong></p>
                  <p>Tirana, Albania</p>
                  <p>Email: hello@websolutions.design</p>
                  <p>Phone: +355 68 878 8786</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
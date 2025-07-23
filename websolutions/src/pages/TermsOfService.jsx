import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Mail, Phone } from 'lucide-react'

const TermsOfService = () => {
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
            <FileText className="w-16 h-16 mx-auto mb-6 text-primary-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of our website development services and this website.
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. Agreement to Terms</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
                <p className="text-gray-700 dark:text-gray-300">
                  By accessing and using Websolutions services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. Description of Services</h2>
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">We Provide:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Custom website design and development</li>
                  <li>Web hosting and maintenance services</li>
                  <li>Technical support and customer service</li>
                  <li>SEO optimization and performance improvements</li>
                  <li>Content updates and website modifications</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. Service Plans and Payment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Monthly Subscription</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>$100/month recurring billing</li>
                    <li>Includes hosting and maintenance</li>
                    <li>Unlimited content updates</li>
                    <li>30-day cancellation notice required</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">One-Time Projects</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Starting at $250 USD</li>
                    <li>Custom pricing based on scope</li>
                    <li>50% deposit required to start</li>
                    <li>Final payment due upon completion</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. Client Responsibilities</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
                <h3 className="text-xl font-semibold mb-4">You agree to:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for content and feedback in a timely manner</li>
                  <li>Ensure you have rights to all content you provide</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Use the website and services in compliance with applicable laws</li>
                  <li>Provide 30 days notice for subscription cancellations</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. Intellectual Property</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Your Content</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You retain ownership of all content you provide (text, images, logos, etc.).
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You grant us a license to use your content for the purpose of providing our services.
                  </p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-pink-700 dark:text-pink-400">Our Work</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Upon full payment, you own the custom code and design we create for your website.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We retain the right to showcase our work in our portfolio.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">6. Service Guarantees</h2>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">We Guarantee:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Performance:</strong> 95+ PageSpeed scores on all websites</li>
                  <li><strong>Uptime:</strong> 99.9% website availability</li>
                  <li><strong>Response Time:</strong> Support responses within 24 hours</li>
                  <li><strong>Mobile Compatibility:</strong> Full responsive design</li>
                  <li><strong>Security:</strong> SSL certificates and security monitoring</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">7. Limitation of Liability</h2>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-400 mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Important:</strong> Our liability is limited to the amount you have paid for our services. 
                  We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions beyond our control</li>
                  <li>Third-party actions or content</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">8. Cancellation and Termination</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-400">Client Cancellation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>30 days written notice required</li>
                    <li>No cancellation fees</li>
                    <li>Website files provided upon request</li>
                    <li>Hosting ends at subscription period end</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Service Termination</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Non-payment after 15 days</li>
                    <li>Violation of these terms</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Abusive behavior toward our team</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">9. Changes to Terms</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <p className="text-gray-700 dark:text-gray-300">
                  We may update these terms from time to time. We'll notify you of significant changes 
                  via email or website notice. Continued use of our services after changes constitutes 
                  acceptance of the new terms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">10. Contact Information</h2>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg border border-primary-200 dark:border-primary-800">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Questions about these Terms of Service? Contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Websolutions</strong></p>
                  <p>Tirana, Albania</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary-600" />
                    <a href="mailto:hello@websolutions.design" className="text-primary-600 hover:text-primary-700">
                      hello@websolutions.design
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 dark:text-gray-300">+355 68 878 8786</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService
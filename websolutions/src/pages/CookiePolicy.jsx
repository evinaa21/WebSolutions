import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cookie, Settings, Mail, Phone } from 'lucide-react'

const CookiePolicy = () => {
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
            <Cookie className="w-16 h-16 mx-auto mb-6 text-primary-600" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This policy explains how we use cookies and similar technologies on our website.
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Are Cookies?</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  analyzing how you use our site.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We use cookies responsibly and transparently to improve our services and your browsing experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Types of Cookies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">Essential Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Required for basic website functionality</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Form functionality</li>
                    <li>Load balancing</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                    These cannot be disabled.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-700 dark:text-yellow-400">Analytics Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Help us understand website usage</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Page views and traffic</li>
                    <li>User behavior patterns</li>
                    <li>Performance metrics</li>
                    <li>Error tracking</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                    Can be disabled in settings.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Preference Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Remember your choices and settings</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Dark/light mode preference</li>
                    <li>Language settings</li>
                    <li>Layout preferences</li>
                    <li>Accessibility options</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                    Can be disabled in settings.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">Marketing Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Currently not used</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>We don't use advertising cookies</li>
                    <li>No third-party tracking</li>
                    <li>No behavioral advertising</li>
                    <li>No cross-site tracking</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                    ✅ Privacy-focused approach
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Third-Party Cookies</h2>
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may use trusted third-party services that set their own cookies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Helps us understand website performance and user behavior.
                    </p>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-primary-600 hover:text-primary-700 text-sm">
                      Google Privacy Policy →
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Forms</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Secure form handling and spam protection services.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Essential for functionality
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Managing Your Cookie Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                  <Settings className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Browser Settings</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Block all cookies</li>
                    <li>Allow only essential cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Set cookie preferences per site</li>
                  </ul>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-teal-700 dark:text-teal-400">Browser-Specific Instructions</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Chrome</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Settings → Privacy → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Firefox</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Options → Privacy → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Safari</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Preferences → Privacy → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Edge</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Settings → Privacy → Cookies</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cookie Retention</h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-400 mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Different cookies are stored for different periods:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Session Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Deleted when you close your browser
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preference Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Stored for up to 1 year
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Stored for up to 2 years
                    </p>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Changes to This Policy</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <p className="text-gray-700 dark:text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We'll notify you of any significant 
                  changes by posting the updated policy on this page.
                </p>
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
                  Questions about our Cookie Policy? We're here to help:
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

export default CookiePolicy
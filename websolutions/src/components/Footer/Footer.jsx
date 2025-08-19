import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ArrowRight, Code, Palette, Search, Smartphone, Globe, Zap as Lightning } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ]
  }

  const webServices = [
    { name: 'Custom Web Development', icon: Code },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'SEO Optimization', icon: Search },
    { name: 'Mobile Responsive Design', icon: Smartphone },
    { name: 'E-commerce Solutions', icon: Globe },
    { name: 'Performance Optimization', icon: Lightning },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'hello@websolutions.design', href: 'mailto:hello@websolutions.design' },
    { icon: Phone, text: '068 878 8786', href: 'tel:+355688788786' },
    { icon: MapPin, text: 'Tirana, Albania', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM10 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-2xl font-bold gradient-text font-display">
                    SwipeToCode
                  </span>
                </Link>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  Professional web development services for small businesses and entrepreneurs worldwide. 
                  Custom-coded websites starting at $250 USD.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <item.icon className="w-4 h-4 group-hover:text-primary-400 transition-colors" />
                      <span className="text-sm">{item.text}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-white">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-gray-400 ${social.color} transition-colors p-2`}
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Web Services Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
                <div className="space-y-4">
                  {webServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-400 group"
                    >
                      <service.icon className="w-4 h-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
                      <span className="text-sm group-hover:text-gray-300 transition-colors">
                        {service.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <Link
                          to={link.href}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <Link
                          to={link.href}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                {/* Secondary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href="mailto:hello@websolutions.design?subject=Website Project Inquiry"
                    className="inline-flex items-center space-x-2 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm group"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SwipeToCode. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ using React & TailwindCSS</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span>Online & Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

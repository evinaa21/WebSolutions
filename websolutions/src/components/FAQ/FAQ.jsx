import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Is $100/month really all I pay?",
      answer: "Yes! $100/month includes everything: hosting, unlimited edits, 24/7 support, security updates, and maintenance. No hidden fees, no setup costs, no surprises. Cancel anytime."
    },
    {
      question: "How long does a website take?",
      answer: "Most websites are completed within 7-14 days. Simple sites can be done in 3-5 days, while complex e-commerce or custom functionality may take 2-3 weeks. We'll give you an exact timeline after our initial consultation."
    },
    {
      question: "What's included in the plan?",
      answer: "Everything you need: custom design, development, hosting, SSL certificate, unlimited edits, 24/7 support, regular backups, security monitoring, performance optimization, and SEO basics. We handle all technical aspects."
    },
    {
      question: "Do I need to know how to edit it?",
      answer: "Not at all! We handle all updates for you. Just send us your changes via email, and we'll implement them quickly. You focus on running your business while we manage your website."
    },
    {
      question: "What if I want to cancel?",
      answer: "You can cancel anytime with 30 days notice. We'll provide you with all your website files and help you transition to another provider if needed. No long-term contracts or cancellation fees."
    },
    {
      question: "Do you use WordPress or page builders?",
      answer: "No! We hand-code every website using modern technologies like React, Next.js, and vanilla JavaScript. This ensures faster loading times, better security, and superior performance compared to WordPress or drag-and-drop builders."
    },
    {
      question: "Can you help with content and copywriting?",
      answer: "Absolutely! We offer copywriting services for an additional $150 one-time fee. We'll create compelling, SEO-optimized content that converts visitors into customers."
    },
    {
      question: "What about SEO and marketing?",
      answer: "Basic SEO is included (meta tags, sitemap, fast loading). For advanced SEO, social media integration, or marketing campaigns, we offer additional services. We'll discuss your specific needs during consultation."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            about our web design services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-200 dark:border-primary-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help! Schedule a free consultation call and we'll answer 
            all your questions about our services.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Schedule Free Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

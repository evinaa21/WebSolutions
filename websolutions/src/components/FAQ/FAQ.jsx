import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How is your pricing so affordable?",
      answer: "We focus on efficient, custom code without the overhead of complex platforms like WordPress. This allows us to deliver superior quality at a lower price point than traditional agencies."
    },
    {
      question: "What's included in the monthly plan?",
      answer: "Everything you need: custom design, development, secure hosting, SSL, unlimited edits, 24/7 support, and maintenance. We handle all the technical details so you can focus on your business."
    },
    {
      question: "Do I need to buy my own domain name?",
      answer: "Yes. You are responsible for purchasing and owning your domain (e.g., yourbusiness.com). This ensures you always have full ownership of your brand identity. We can guide you through the simple process."
    },
    {
      question: "How long does a website take to build?",
      answer: "Most websites are designed, built, and launched within 7-14 days. We'll provide a precise timeline after our initial consultation."
    },
    {
      question: "What if I want to cancel my plan?",
      answer: "You can cancel anytime with 30 days' notice. Since you own your domain and we provide you with the website files, you are free to move to another provider. There are no long-term contracts."
    },
    {
      question: "Do you use WordPress or page builders?",
      answer: "No. We hand-code every website for maximum performance, security, and a truly custom feel. This makes our sites significantly faster and more reliable than those built with templates."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-28 bg-black" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 glow-text">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors"
              >
                <h3 className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-gray-600">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

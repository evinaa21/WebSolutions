import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 glow-text">Let's Connect</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or a question for us? We're here to listen.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-10"
        >
          <div className="form-group">
            <label htmlFor="name" className="font-mono text-sm text-gray-500">01 / Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} className="minimal-input" placeholder="What should we call you?" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-mono text-sm text-gray-500">02 / Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} className="minimal-input" placeholder="Where can we reach you?" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="font-mono text-sm text-gray-500">03 / Message</label>
            <textarea id="message" name="message" onChange={handleChange} className="minimal-input" placeholder="Tell us about your vision..." rows="3"></textarea>
          </div>
          <div className="text-center pt-6">
            <button type="submit" className="btn-primary group flex items-center gap-2 mx-auto">
              Send Message <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

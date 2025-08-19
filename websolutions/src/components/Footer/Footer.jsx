import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-medium text-white mb-4">Ready to build the future?</h3>
            <p className="text-gray-500 mb-6">Let's create something extraordinary together.</p>
            <Link to="/contact" className="btn-primary group flex items-center gap-2 w-fit">
              Get In Touch <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mono text-sm text-gray-500 tracking-widest uppercase mb-4">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.map(link => (
                  <li key={link.name}><Link to={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm text-gray-500 tracking-widest uppercase mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map(link => (
                  <li key={link.name}><Link to={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm text-gray-500 tracking-widest uppercase mb-4">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} SwipeToCode. All rights reserved.
          </p>
          <p className="font-mono text-sm text-gray-500">
            Engineered in Tirana, Albania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

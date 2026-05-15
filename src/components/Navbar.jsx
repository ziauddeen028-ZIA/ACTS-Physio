import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './logo-acts.png';

const Navbar = ({ setEnterWebsite }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'py-2 bg-white/40 backdrop-blur-md border-b border-gray-300 shadow-sm'
        : 'py-4 bg-white border-b border-gray-200'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="ACTS PHYSIO"
              onClick={() => setEnterWebsite(false)}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${isScrolled ? 'text-gray-700 hover:text-primary-green' : 'text-gray-800 hover:text-primary-green'
                  }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="tel:9444950298"
              className="px-8 py-3 bg-primary-green text-white text-sm font-bold tracking-wide uppercase hover:bg-dark-green transition-all duration-300 shadow-lg shadow-primary-green/20 rounded-xl"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-900"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="mobile-sidebar fixed top-0 left-0 h-screen w-[85%] max-w-[320px] bg-white z-[100] lg:hidden shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="logo"
                    onClick={() => setEnterWebsite(false)}
                    className="w-10 h-10 object-contain"
                  />

                  <h2 className="text-lg font-bold text-gray-900">
                    ACTS PHYSIO
                  </h2>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-5 py-8 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 text-lg font-semibold border-b border-gray-100 pb-3"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="sticky bottom-0 bg-white p-5 border-t border-gray-100">
                <a
                  href="tel:9444950298"
                  className="flex items-center justify-center gap-2 w-full bg-primary-green text-white py-3 rounded-xl font-semibold text-sm shadow-md"
                >
                  <Phone size={16} />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

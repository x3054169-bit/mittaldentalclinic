import React, { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        isScrolled ? 'glass shadow-sm py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight">Mittal Dental Clinic</span>
            <span className="text-[10px] text-teal-600 font-medium uppercase tracking-widest">Indore</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            className="gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="gradient-bg text-white px-6 py-3 rounded-xl text-center font-semibold shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

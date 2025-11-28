import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Portfolio', to: 'portfolio' },
  { name: 'Contact', to: 'contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-6 transition-all duration-500",
        scrolled ? "max-w-5xl" : ""
      )}>
        <div className={cn(
          "flex justify-between items-center rounded-full transition-all duration-500 border",
          scrolled 
            ? "bg-zinc-900/80 backdrop-blur-xl border-zinc-800/50 py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent py-2 px-0"
        )}>
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-xl font-bold tracking-tighter text-white group-hover:text-zinc-300 transition-colors">
              SUMA<span className="text-zinc-600">.KR</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors rounded-full hover:bg-white/5"
                activeClass="!text-white bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-zinc-300 focus:outline-none p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

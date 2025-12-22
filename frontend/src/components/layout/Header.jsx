import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Квартиры', path: '/apartments' },
    { name: 'Услуги', path: '/services' },
    { name: 'FAQ', path: '/faq' },
  ];

  const phoneNumber = "79287084447";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group z-50">
            <div className="bg-brand-700 text-white p-1 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21L12 4L21 21H3Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl font-display font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                BAZIEVA
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                Rental
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${location.pathname === link.path
                    ? 'text-brand-700 font-semibold'
                    : 'text-slate-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-900/10"
            >
              <Phone size={16} />
              <span>Бронировать</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-slate-900 hover:bg-slate-100/50 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-display font-bold ${location.pathname === link.path ? 'text-brand-600' : 'text-slate-900'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-12"
            >
              <a
                href={`https://wa.me/${phoneNumber}`}
                className="w-full flex justify-center items-center gap-2 py-4 bg-brand-600 text-white text-lg font-bold rounded-2xl"
              >
                <Phone size={20} />
                Написать в WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
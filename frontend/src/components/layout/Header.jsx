import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем мобильное меню при переходе на другую страницу
  useEffect(() => setIsOpen(false), [location]);

  // Обновленная навигация согласно карте сайта (App.jsx)
  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Квартиры', path: '/apartments' },
    { name: 'Гостям (FAQ)', path: '/faq' }, // Добавлен важный раздел
  ];

  const phoneNumber = "79287084447"; // Единый номер из Home.jsx

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 z-50 group">
            <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-brand-700 group-hover:text-brand-800 transition-colors">BAZIEVA</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase group-hover:text-brand-500 transition-colors">Rent Agency</span>
            </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                location.pathname === link.path 
                  ? 'text-brand-700' 
                  : 'text-slate-600 hover:text-brand-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noreferrer" 
            className="bg-brand-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-800 transition-all shadow-lg shadow-brand-200 hover:shadow-brand-300 transform hover:-translate-y-0.5"
          >
            Бронировать
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-900 z-50 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`text-3xl font-bold ${
                location.pathname === link.path ? 'text-brand-700' : 'text-slate-900'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Mobile CTA */}
        <a 
            href={`https://wa.me/${phoneNumber}`}
            className="mt-4 px-8 py-4 bg-brand-700 text-white text-xl font-bold rounded-2xl shadow-xl shadow-brand-200"
        >
            Бронировать в WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
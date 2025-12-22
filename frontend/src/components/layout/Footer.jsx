import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold font-display mb-4 tracking-tight">BAZIEVA<span className="text-brand-500">.RENTAL</span></h2>
            <p className="text-slate-400 max-w-sm mb-6">
              Современный сервис краткосрочной аренды на Кавказе.
            </p>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Bazieva Agency.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-200">Навигация</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/apartments" className="hover:text-white transition-colors">Квартиры</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Вопросы и ответы (FAQ)</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-200">Контакты</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Мадина Базиева</li>
              <li>
                <a href="https://wa.me/79287084447" className="hover:text-white transition-colors">
                  +7 (928) 708-44-47
                </a>
              </li>
              <li className="text-sm opacity-60">Нальчик, Кабардино-Балкария</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
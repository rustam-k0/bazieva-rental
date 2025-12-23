import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

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
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Вопросы и ответы (FAQ)</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-slate-200">Контакты</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Мадина Базиева</li>
              <li>
                <a href="https://wa.me/79287084447" className="hover:text-white transition-colors block mb-2">
                  +7 (928) 708-44-47
                </a>
              </li>
              <li className="flex gap-4 mt-2">
                <a href="https://wa.me/79287084447" className="text-slate-400 hover:text-[#25D366] transition-colors">WhatsApp</a>
                <a href="https://t.me/+79287084447" className="text-slate-400 hover:text-[#0088cc] transition-colors">Telegram</a>
              </li>
              <li className="text-sm opacity-60">г. Нальчик, ул. Мечникова, д. 155</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
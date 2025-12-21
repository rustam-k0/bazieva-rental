import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-brand-600">Дополнительные услуги</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-600"/>
                г. Нальчик, КБР
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-brand-600"/>
                +7 (928) 708-44-00
              </li>
              <li className="flex gap-4 mt-2">
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Bazieva Rent. Все права защищены.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy">Политика конфиденциальности</Link>
            <Link to="/terms">Публичная оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
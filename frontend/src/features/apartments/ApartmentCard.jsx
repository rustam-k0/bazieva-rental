import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Layout, Star, MapPin } from 'lucide-react';

const ApartmentCard = ({ apartment }) => {
  return (
    <Link to={`/apartments/${apartment.id}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <img 
            src={apartment.coverImage} 
            alt={apartment.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm text-slate-900">
            <Star size={12} className="text-yellow-500 fill-yellow-500"/>
            {apartment.rating}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-brand-700 transition-colors">
              {apartment.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <MapPin size={12}/> {apartment.address}
            </p>
          </div>
          
          <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow">
            {apartment.shortDesc}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
              <Users size={14} className="text-brand-600"/>
              <span>до {apartment.guests} гостей</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
              <Layout size={14} className="text-brand-600"/>
              <span>{apartment.rooms} комн.</span>
            </div>
          </div>

          <div className="flex justify-between items-end mt-auto">
            <div>
              <span className="text-2xl font-bold text-slate-900">{apartment.price} ₽</span>
              <span className="text-xs text-slate-400 font-medium"> / сутки</span>
            </div>
            <span className="text-brand-700 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Подробнее →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
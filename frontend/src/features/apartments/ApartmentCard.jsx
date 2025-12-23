import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Layout, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ApartmentCard = ({ apartment, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Link to={`/apartments/${apartment.id}`} className="group block h-full">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
            <img
              src={apartment.coverImage}
              alt={apartment.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-slate-900">
              <Star size={12} className="text-brand-500 fill-brand-500" />
              {apartment.rating}
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <span className="bg-brand-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                Подробнее
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 flex flex-col flex-grow">
            <div className="mb-4">
              <h3 className="text-xl font-display font-bold text-slate-900 leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                {apartment.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <MapPin size={14} className="text-brand-400" /> {apartment.address}
              </p>
            </div>

            <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow font-light leading-relaxed">
              {apartment.shortDesc}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg">
                <Users size={14} className="text-brand-500" />
                <span>до {apartment.guests} гостей</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg">
                <Layout size={14} className="text-brand-500" />
                <span>{apartment.rooms} комн.</span>
              </div>
            </div>

            <div className="flex justify-between items-end mt-auto">
              <div>
                <span className="text-2xl font-bold text-slate-900 tracking-tight">{apartment.price} ₽</span>
                <span className="text-xs text-slate-400 font-medium"> / сутки</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ApartmentCard;
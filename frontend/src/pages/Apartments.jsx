import React from 'react';
import { motion } from 'framer-motion';
import { apartments } from '../data/apartments';
import ApartmentCard from '../features/apartments/ApartmentCard';
import EmptyState from '../components/ui/EmptyState';

const Apartments = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">Catalog</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Каталог квартир</h1>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Выберите идеальный вариант для отдыха или командировки. Все квартиры проверены,
            укомплектованы техникой и готовы к бесконтактному заселению.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments && apartments.length > 0 ? (
            apartments.map((apt, i) => (
              <ApartmentCard key={apt.id} apartment={apt} index={i} />
            ))
          ) : (
            <div className="col-span-full">
              <EmptyState
                title="Сейчас нет свободных квартир"
                description="К сожалению, все квартиры заняты или список обновляется. Свяжитесь с нами, чтобы узнать о ближайших освобождающихся датах."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartments;
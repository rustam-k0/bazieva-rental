import React from 'react';
import { apartments } from '../data/apartments';
import ApartmentCard from '../features/apartments/ApartmentCard';

const Apartments = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Каталог квартир</h1>
            <p className="text-slate-500 text-lg">
                Выберите идеальный вариант для отдыха или командировки. Все квартиры проверены, 
                укомплектованы техникой и готовы к бесконтактному заселению.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map(apt => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { apartments } from '../data/apartments';
import { MapPin, Users, Layout, Wifi, Wind, Tv, CheckCircle, AlertOctagon, ArrowLeft } from 'lucide-react';

const ApartmentDetails = () => {
  const { id } = useParams();
  const apartment = apartments.find(a => a.id === parseInt(id));

  if (!apartment) return <div className="pt-40 text-center text-slate-500">Объект не найден</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Gallery Header */}
      <div className="h-[50vh] md:h-[60vh] relative overflow-hidden bg-slate-200">
        <img src={apartment.coverImage} alt={apartment.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <div className="container mx-auto">
                <Link to="/apartments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={20} /> Назад в каталог
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{apartment.title}</h1>
                <p className="text-lg md:text-xl text-white/90 font-light">{apartment.subtitle}</p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT CONTENT */}
            <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
                    {/* Key Stats */}
                    <div className="flex flex-wrap gap-6 border-b border-slate-100 pb-8 mb-8">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Users size={20} className="text-brand-600" />
                            <span>До {apartment.guests} гостей</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                            <Layout size={20} className="text-brand-600" />
                            <span>{apartment.rooms} комнаты</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                            <MapPin size={20} className="text-brand-600" />
                            <span>{apartment.address}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-slate max-w-none mb-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Описание</h3>
                        <p className="text-slate-500 leading-relaxed text-lg">{apartment.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Удобства</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {apartment.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                    <CheckCircle size={18} className="text-brand-600 flex-shrink-0" />
                                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                     {/* Location Details */}
                     <div className="mb-10">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Локация и инфраструктура</h3>
                        <ul className="space-y-3">
                            {apartment.locationHighlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                    <MapPin size={18} className="text-brand-400 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rules */}
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                            <AlertOctagon size={20}/> Правила дома
                        </h3>
                        <ul className="space-y-2">
                            {apartment.rules.map((rule, i) => (
                                <li key={i} className="text-red-800/80 text-sm list-disc list-inside">
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDEBAR (Sticky Booking) */}
            <div className="lg:w-1/3">
                <div className="sticky top-24 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <span className="text-3xl font-bold text-slate-900">{apartment.price} ₽</span>
                            <span className="text-slate-400"> / сутки</span>
                        </div>
                        <div className="bg-brand-50 text-brand-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                            Best Rate
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-600">
                            <p className="mb-1 font-bold text-slate-900">Бесконтактное заселение</p>
                            <p>Код доступа будет отправлен после бронирования.</p>
                        </div>
                    </div>

                    <a 
                        href={`https://wa.me/79000000000?text=Здравствуйте! Хочу забронировать: ${apartment.title}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-4 bg-brand-700 text-white text-center font-bold rounded-xl hover:bg-brand-800 transition-all shadow-lg shadow-brand-200 mb-4"
                    >
                        Забронировать в WhatsApp
                    </a>
                    
                    <p className="text-center text-xs text-slate-400">
                        Оплата и подписание договора происходят онлайн
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
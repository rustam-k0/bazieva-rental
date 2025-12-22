import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { apartments } from '../data/apartments';
import { MapPin, Users, Layout, Wifi, Wind, Tv, CheckCircle, AlertOctagon, ArrowLeft, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ApartmentDetails = () => {
    const { id } = useParams();
    const apartment = apartments.find(a => a.id === parseInt(id));

    if (!apartment) return <div className="pt-40 text-center text-slate-500">Объект не найден</div>;

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Gallery Header */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="h-[60vh] md:h-[70vh] relative overflow-hidden"
            >
                <img
                    src={apartment.coverImage}
                    alt={apartment.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
                    <div className="container mx-auto">
                        <Link to="/apartments" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors backdrop-blur-md bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                            <ArrowLeft size={16} /> Назад в каталог
                        </Link>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight"
                        >
                            {apartment.title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl"
                        >
                            {apartment.subtitle}
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 mb-8 border border-white/20">
                            {/* Key Stats */}
                            <div className="flex flex-wrap gap-8 border-b border-slate-100 pb-10 mb-10">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-3 bg-brand-50 rounded-2xl text-brand-600">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Вместимость</p>
                                        <span className="font-semibold text-lg">До {apartment.guests} гостей</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-3 bg-brand-50 rounded-2xl text-brand-600">
                                        <Layout size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Площадь</p>
                                        <span className="font-semibold text-lg">{apartment.rooms} комнаты</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-3 bg-brand-50 rounded-2xl text-brand-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Локация</p>
                                        <span className="font-semibold text-lg">{apartment.address}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="prose prose-lg prose-slate max-w-none mb-12">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Об объекте</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{apartment.description}</p>
                            </div>

                            {/* Features */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Удобства и комфорт</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {apartment.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-sm">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span className="font-medium text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location Details */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Что рядом</h3>
                                <ul className="space-y-4">
                                    {apartment.locationHighlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 bg-slate-50/50 p-4 rounded-2xl">
                                            <MapPin size={20} className="text-brand-500 mt-0.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Rules */}
                            <div className="bg-red-50/50 p-8 rounded-[2rem] border border-red-100">
                                <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-red-100 rounded-xl">
                                        <AlertOctagon size={24} />
                                    </div>
                                    Важные правила
                                </h3>
                                <ul className="space-y-3">
                                    {apartment.rules.map((rule, i) => (
                                        <li key={i} className="text-red-900/80 flex gap-3 text-base">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></span>
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDEBAR (Sticky Booking) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-28">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <span className="text-3xl font-bold text-slate-900">{apartment.price} ₽</span>
                                        <span className="text-slate-400 font-medium"> / сутки</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                                        <Star size={14} fill="currentColor" />
                                        {apartment.rating}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="p-5 rounded-2xl bg-brand-50/50 border border-brand-100 text-sm text-slate-700">
                                        <p className="mb-2 font-bold text-brand-900 flex items-center gap-2">
                                            <Key size={16} /> Бесконтактное заселение
                                        </p>
                                        <p className="leading-relaxed text-slate-600">
                                            Код от сейфа вы получите сразу после подтверждения бронирования. Заселяйтесь в любое время.
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/79287084447?text=Здравствуйте! Хочу забронировать: ${apartment.title}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex justify-center items-center gap-2 py-4 bg-brand-700 text-white text-lg font-bold rounded-2xl hover:bg-brand-800 transition-all shadow-xl shadow-brand-700/20 active:scale-95 hover:-translate-y-1 mb-4"
                                >
                                    <Phone size={20} />
                                    Забронировать
                                </a>

                                <p className="text-center text-xs text-slate-400 leading-relaxed px-4">
                                    Нажимая кнопку, вы перейдете в чат WhatsApp с владельцем для уточнения дат.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;
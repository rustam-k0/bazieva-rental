import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, MapPin, Users, Layout, Star,
    Wifi, Monitor, Sun, Wind, Coffee, Check, ChevronLeft, ChevronRight, X
} from 'lucide-react';
import { apartments } from '../data/apartments';

const ApartmentDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const apartment = apartments.find(a => a.id === Number(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!apartment) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col">
                <h2 className="text-2xl font-bold mb-4">Квартира не найдена</h2>
                <Link to="/apartments" className="text-brand-600 underline">Вернуться в каталог</Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            {/* Lightbox / Fullscreen Image Viewer */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                        >
                            <X size={40} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <motion.img
                            key={currentImageIndex}
                            src={apartment.images[currentImageIndex]}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
                            alt={apartment.title}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x; // offset.x is pixel distance
                                if (swipe < -100) nextImage();
                                else if (swipe > 100) prevImage();
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                            {apartment.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                    className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/30 w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Image Area with Click-to-Open */}
            <div className="relative w-full bg-slate-100 group cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
                <div className="md:container md:mx-auto md:px-8 md:pt-8">
                    {/* CHANGED: max-h constraint and object-contain / cover logic to prevent giant images */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] md:max-h-[75vh] overflow-hidden md:rounded-[2rem] shadow-sm bg-black/5">
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentImageIndex}
                                src={apartment.images[currentImageIndex]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover" // object-cover ensures it fills the area without distortion, but cuts off edges. 
                                // User said "not giant format". Current container height constraint md:max-h-[75vh] prevents it from being too tall.
                                alt={apartment.title}
                            />
                        </AnimatePresence>

                        {/* View Fullscreen Hint Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 pointer-events-none">
                            <div className="bg-black/60 backdrop-blur-md text-white px-5 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <Monitor size={20} />
                                <span className="font-medium">Открыть фото на весь экран</span>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="pointer-events-auto p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="pointer-events-auto p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                            {apartment.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                    className={`pointer-events-auto w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Link
                    to="/apartments"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 left-4 md:top-12 md:left-12 p-3 rounded-full bg-white/90 shadow-md text-slate-900 z-10 hover:bg-white transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
            </div>

            <div className="container mx-auto px-4 md:px-8 -mt-8 relative z-10">
                <div className="bg-white rounded-t-[2rem] md:rounded-[2rem] shadow-xl p-6 md:p-10 border border-slate-100 min-h-[50vh]">

                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-xs mb-2">
                                <Star size={14} fill="currentColor" />
                                <span>{apartment.rating}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
                                {apartment.title}
                            </h1>
                            <div className="flex items-center gap-2 text-slate-500">
                                <MapPin size={16} className="text-brand-500" />
                                <span>{apartment.address}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-slate-900">{apartment.price} ₽</div>
                            <div className="text-slate-400 text-sm">за сутки</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Description & Features */}
                        <div className="lg:col-span-2 space-y-10">
                            {/* Key Specs */}
                            <div className="flex gap-6 border-b border-slate-100 pb-8">
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Users size={20} className="text-brand-500" />
                                    <span className="font-medium">{apartment.guests} Гостей</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Layout size={20} className="text-brand-500" />
                                    <span className="font-medium">{apartment.rooms} Комнаты</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Layout size={20} className="text-brand-500" />
                                    <span className="font-medium">{apartment.area} м²</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-xl font-bold mb-4 font-display">Об объекте</h3>
                                <p className="text-slate-600 leading-relaxed font-light whitespace-pre-line">
                                    {apartment.description}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 font-display">Удобства</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {apartment.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                            <Check size={16} className="text-brand-500" />
                                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Booking Card (Sticky) */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white border border-brand-100 rounded-3xl p-6 shadow-xl shadow-brand-900/5">
                                <h3 className="text-lg font-bold mb-6 text-center">Забронировать</h3>
                                <div className="space-y-4">
                                    <a
                                        href={`https://wa.me/79287084447?text=Здравствуйте! Меня интересует квартира "${apartment.title}"`}
                                        target="_blank"
                                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
                                    >
                                        WhatsApp
                                    </a>
                                    <a
                                        href="tel:+79287084447"
                                        className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                                    >
                                        Позвонить
                                    </a>
                                    <p className="text-center text-xs text-slate-400 mt-4">
                                        Мы на связи с 08:00 до 23:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;
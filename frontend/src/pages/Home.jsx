import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Key, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { apartments } from '../data/apartments';
import ApartmentCard from '../features/apartments/ApartmentCard';

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-brand-900/40 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-brand-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                <Star size={12} fill="currentColor" /> Счастливые клиенты с 2016 года
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tight">
                Европейский комфорт <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
                  с душой Кавказа
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-lg">
                Авторский проект Мадины Базиевой. Безупречная чистота, честность и забота о каждом госте.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apartments"
                  className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 text-white font-bold text-lg rounded-2xl hover:bg-brand-500 transition-all shadow-xl shadow-brand-900/50 hover:shadow-brand-500/30 transform hover:-translate-y-1"
                >
                  Найти квартиру
                </Link>
                <a
                  href="https://wa.me/79287084447"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right Image (Hostess) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 w-full max-w-md lg:max-w-xl relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/50 border border-slate-700/50">
                <img
                  src="/assets/owner.jpg"
                  alt="Мадина Базиева"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <p className="text-white text-sm font-medium">
                    "Моя цель — чтобы вы чувствовали себя как дома, но с сервисом лучшего отеля."
                  </p>
                  <p className="text-brand-300 text-xs font-bold mt-2 uppercase tracking-wider">
                    Мадина Базиева, Основатель
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Юридическая чистота",
                desc: "Работаем официально. Предоставляем полный пакет отчетных документов для командировок."
              },
              {
                icon: CheckCircle2,
                title: "Идеальная чистота",
                desc: "Профессиональный клининг после каждого гостя. Белоснежное белье из прачечной."
              },
              {
                icon: Key,
                title: "Бесконтактное заселение",
                desc: "Заселяйтесь в любое удобное время 24/7 без ожидания и лишних контактов."
              }
            ].map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                key={idx}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <item.icon strokeWidth={2} size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APARTMENTS PREVIEW */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">Выбор гостей</span>
              <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Популярные квартиры</h2>
            </div>
            <Link to="/apartments" className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-brand-600 transition-colors">
              Все варианты <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments && apartments.length > 0 ? (
              apartments.slice(0, 3).map((apt, i) => (
                <ApartmentCard key={apt.id} apartment={apt} index={i} />
              ))
            ) : (
              <p className="text-slate-400">Загрузка...</p>
            )}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/apartments" className="inline-flex items-center gap-2 text-brand-700 font-bold">
              Смотреть все <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
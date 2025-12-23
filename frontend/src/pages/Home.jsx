import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Key, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { apartments } from '../data/apartments';
import ApartmentCard from '../features/apartments/ApartmentCard';
import EmptyState from '../components/ui/EmptyState';

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-950">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-brand-800/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-brand-900/40 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Centered Content since image is removed */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-brand-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                <Star size={12} fill="currentColor" /> Счастливые клиенты с 2016 года
              </div>
              <h1 className="text-4xl md:text-7xl font-display font-medium text-white leading-[1.1] mb-8 tracking-tight">
                Современный комфорт <br />
                <span className="font-light italic text-brand-200">
                  в центре Нальчика
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light max-w-lg mx-auto">
                Внимательное отношение к деталям и искреннее гостеприимство. Более 10 лет создаём уют для гостей.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-brand-900/50 px-3 py-1.5 rounded-lg border border-brand-700/50 backdrop-blur-sm">
                  <Star size={16} className="text-[#FFD700] fill-[#FFD700]" />
                  <span className="text-white font-bold">5.0</span>
                  <span className="text-brand-200 text-sm">Avito</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-900/50 px-3 py-1.5 rounded-lg border border-brand-700/50 backdrop-blur-sm">
                  <Star size={16} className="text-[#FFD700] fill-[#FFD700]" />
                  <span className="text-white font-bold">9.9</span>
                  <span className="text-brand-200 text-sm">Суточно.ру</span>
                </div>
              </div>

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
                desc: "Полная прозрачность и безопасность. Предоставляем отчетные документы."
              },
              {
                icon: CheckCircle2,
                title: "Идеальная чистота",
                desc: "Тщательная уборка после каждого гостя, качественное белье и порядок."
              },
              {
                icon: Key,
                title: "Удобное заселение",
                desc: "Бесконтактное заселение 24/7. Ценим ваше время и комфорт."
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
              <div className="col-span-full py-8">
                <EmptyState
                  title="Загрузка списка"
                  description="Подбираем для вас лучшие варианты..."
                  actionLink={null}
                />
              </div>

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
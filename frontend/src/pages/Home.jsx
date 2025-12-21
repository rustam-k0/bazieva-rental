import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Key } from 'lucide-react';
import { apartments } from '../data/apartments';
import ApartmentCard from '../features/apartments/ApartmentCard';

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-brand-700 text-xs font-bold uppercase tracking-wider mb-8 border border-slate-200 shadow-sm">
                 GUEST SERVICE • SINCE 2015
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Европейские стандарты <br />
                <span className="text-brand-700">с кавказской душой</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-light">
                Меня зовут Мадина Базиева. Я строю сервис, где традиционное гостеприимство работает по самым высоким стандартам индустрии. Лично гарантирую чистоту, честность и отсутствие бытовых сюрпризов.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/apartments" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-brand-700 text-white font-semibold rounded-2xl hover:bg-brand-800 transition-all shadow-xl shadow-brand-700/20"
                >
                  Найти квартиру
                </Link>
                <a 
                   href="https://wa.me/79287084447"
                   className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Написать мне в WhatsApp
                </a>
              </div>
            </div>

            {/* Right Image (Hostess) */}
            <div className="flex-1 w-full max-w-md lg:max-w-full relative">
                {/* Decorative blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
                
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200 border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="/assets/owner.jpg" 
                        alt="Мадина Базиева, основатель агентства" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { 
                      icon: ShieldCheck, 
                      title: "Юридическая надёжность", 
                      desc: "Честность и прозрачность - на первом месте." 
                    },
                    { 
                      icon: CheckCircle2, 
                      title: "Абсолютная чистота", 
                      desc: "Свежее белье из прачечной и дезинфекция — стандарт, а не опция." 
                    },
                    { 
                      icon: Key, 
                      title: "Умный доступ 24/7", 
                      desc: "Дистанционное заселение без ожиданий, лишних встреч и передачи ключей из рук в руки." 
                    }
                ].map((item, idx) => (
                    <div key={idx} className="group">
                        <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-700 mb-6 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                            <item.icon strokeWidth={1.5} size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* APARTMENTS PREVIEW */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Избранные объекты</h2>
            </div>
            <Link to="/apartments" className="hidden md:flex items-center gap-2 text-brand-700 font-bold hover:gap-4 transition-all">
              Подробнее <ArrowRight size={20}/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Проверка на наличие данных перед рендером */}
            {apartments && apartments.length > 0 ? (
              apartments.slice(0, 3).map(apt => (
                <ApartmentCard key={apt.id} apartment={apt} />
              ))
            ) : (
              <p className="text-slate-400">Объекты загружаются...</p>
            )}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/apartments" className="inline-flex items-center gap-2 text-brand-700 font-bold">
              Смотреть все варианты <ArrowRight size={20}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Utensils, Key, Map, CalendarClock, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Трансфер",
      desc: "Встретим в аэропорту или на вокзале. Комфортные автомобили и помощь с багажом.",
      price: "от 500 ₽"
    },
    {
      icon: Map,
      title: "Джип-туры",
      desc: "Организуем незабываемые поездки в горы: Приэльбрусье, Чегемские водопады, Голубые озера.",
      price: "по запросу"
    },
    {
      icon: CalendarClock,
      title: "Ранний заезд / Поздний выезд",
      desc: "Если квартира свободна, мы всегда пойдем навстречу и заселим вас раньше.",
      price: "Бесплатно / 50%"
    },
    {
      icon: Utensils,
      title: "Гастрономический гид",
      desc: "Порекомендуем лучшие рестораны с национальной кухней, где вкусно и безопасно.",
      price: "Бесплатно"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">Premium Service</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Ваш комфорт — наша забота</h1>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Мы не просто сдаем квартиры. Мы создаем условия для идеального отдыха.
            Возьмем на себя все организационные вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">{service.desc}</p>
              <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-sm font-bold text-slate-400">Стоимость</span>
                <span className="text-lg font-bold text-slate-900">{service.price}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-brand-900 p-8 rounded-[2rem] text-white flex flex-col justify-between shadow-2xl shadow-brand-900/30"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-md border border-white/10">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Нужно что-то особенное?</h3>
              <p className="text-brand-100 leading-relaxed font-light mb-6">
                Напишите нам, и мы постараемся решить любой ваш вопрос.
              </p>
            </div>
            <a
              href="https://wa.me/79287084447"
              className="w-full py-4 bg-white text-brand-900 text-center font-bold rounded-xl hover:bg-brand-50 transition-colors"
            >
              Написать менеджеру
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Services;
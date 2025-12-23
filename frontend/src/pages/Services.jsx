import React from 'react';
import { motion } from 'framer-motion';
import { Car, Utensils, Map, CalendarClock, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Комфортный трансфер",
      desc: "Встретим вас в аэропорту или на вокзале. Поможем с багажом и доставим до адреса.",
    },
    {
      icon: Map,
      title: "Поездки в горы",
      desc: "Организация поездок по живописным местам: Эльбрус, Чегемские водопады, Голубые озера.",
    },
    {
      icon: CalendarClock,
      title: "Гибкое заселение",
      desc: "При наличии возможности, мы с радостью предложим ранний заезд или поздний выезд для вашего удобства.",
    },
    {
      icon: Utensils,
      title: "Мини-бар",
      desc: "Наполненный мини-бар для приятного начала отдыха. Также порекомендуем, где вкусно поужинать.",
    },
    {
      icon: MessageSquare,
      title: "Уборка и стирка",
      desc: "Дополнительная уборка и смена белья по вашему запросу для поддержания чистоты.",
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2 block">Дополнительные платные услуги</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Ваш комфорт — наша работа</h1>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Мы стараемся сделать так, чтобы вы чувствовали себя как дома.
            Если вам понадобится помощь — мы всегда на связи.
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
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 font-light">{service.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800 p-8 rounded-[2rem] text-white flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-md border border-white/10">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Остались вопросы?</h3>
              <p className="text-slate-300 leading-relaxed font-light mb-6">
                Напишите нам, и мы с радостью ответим.
              </p>
            </div>
            <a
              href="https://wa.me/79287084447"
              className="w-full py-4 bg-white text-slate-900 text-center font-bold rounded-xl hover:bg-slate-50 transition-colors"
            >
              Написать
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Services;
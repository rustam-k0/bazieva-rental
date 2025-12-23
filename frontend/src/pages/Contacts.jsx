import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const Contacts = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Позвонить",
      value: "+7 (928) 708-44-47",
      link: "tel:+79287084447",
      color: "bg-slate-900 text-white"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Написать сообщение",
      link: "https://wa.me/79287084447",
      color: "bg-[#25D366] text-white"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@bazieva_rent",
      link: "https://t.me/+79287084447",
      color: "bg-[#0088cc] text-white"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Контакты</h1>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Мы всегда на связи. Выберите удобный способ для бронирования или вопросов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center gap-4 ${method.color}`}
            >
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <method.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{method.title}</h3>
                <p className="opacity-90 text-sm">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 h-64 bg-slate-100 rounded-2xl overflow-hidden relative">
            {/* Placeholder for Map */}
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=43.602800%2C43.484200&z=16"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Map"
              className="grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Наш адрес</h3>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-brand-600 mt-1" />
              <div>
                <p className="text-lg font-medium text-slate-900">г. Нальчик, ул. Мечникова, д. 155</p>
                <p className="text-slate-500">Работаем ежедневно с 09:00 до 22:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-brand-600 mt-1" />
              <div>
                <p className="text-lg font-medium text-slate-900">bazieva.rent@gmail.com</p>
                <p className="text-slate-500">По вопросам сотрудничества</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacts;

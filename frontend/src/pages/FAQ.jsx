import React, { useState } from 'react';
import { Plus, Minus, Wifi, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Как происходит заселение и выселение?",
    answer: "Мы используем бесконтактное заселение (умные замки/кейбоксы). Вы можете заехать в любое удобное время после 14:00. Расчетный час (выезд) — строго до 12:00, чтобы мы успели подготовить квартиру для следующих гостей."
  },
  {
    question: "Какой пароль от Wi-Fi?",
    answer: "Во всех наших апартаментах доступен высокоскоростной интернет. Пароль от сети: 12345333"
  },
  {
    question: "Нужен ли залог и документы?",
    answer: "Да, это стандарт безопасности. Мы берем залог 1000₽ (возвращается в течение суток после уборки) и просим фото паспорта для заключения электронного договора. Конфиденциальность гарантируем."
  },
  {
    question: "Можно ли с животными или провести вечеринку?",
    answer: "Нет. Мы строго следим за состоянием квартир и покоем соседей. Курение в квартире, вечеринки и размещение с животными запрещены. При нарушении правил залог не возвращается, возможно выселение."
  },
  {
    question: "Предоставляете ли отчетные документы?",
    answer: "Да, мы работаем официально. Предоставляем полный пакет документов для командировочных (чеки, договоры) по запросу."
  },
  {
    question: "Есть ли трансфер или экскурсии?",
    answer: "Да, мы организуем трансфер из аэропорта/вокзала, а также джип-туры в горы. Напишите нам в WhatsApp заранее, чтобы забронировать машину."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-brand-700' : 'text-slate-800 group-hover:text-brand-700'}`}>
          {item.question}
        </span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-brand-50 text-brand-700' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              <p className="text-slate-500 leading-relaxed pr-8">
                {item.answer}
              </p>
              {/* Special highlighting for Wi-Fi if explicitly asked */}
              {item.question.includes("Wi-Fi") && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-mono border border-brand-100">
                  <Wifi size={14} /> 12345333
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">Help Center</span>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Частые вопросы</h1>
          <p className="text-slate-500 text-lg font-light">
            Всё, что нужно знать для комфортного проживания у Мадины Базиевой.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 px-6 md:px-10 py-4 mb-12 border border-slate-100"
        >
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </motion.div>

        {/* Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-brand-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-brand-900/40"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-display">Остались вопросы?</h3>
              <p className="text-brand-100 max-w-md font-light">
                Я всегда на связи и готова помочь с любыми вопросами по проживанию или отдыху в республике.
              </p>
            </div>
            <a
              href="https://wa.me/79287084447"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg shadow-black/10"
            >
              <Phone size={20} />
              Написать в WhatsApp
            </a>
          </div>
          {/* Decor */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default FAQ;
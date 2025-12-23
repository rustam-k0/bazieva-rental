import React from 'react';
import { Key } from 'lucide-react';
import { motion } from 'framer-motion';

const EmptyState = ({
  title = "Скоро здесь будет уютно",
  description = "Мы подбираем для вас лучшие варианты. Загляните позже или свяжитесь с нами.",
  actionLabel = "Написать в WhatsApp",
  actionLink = "https://wa.me/79287084447"
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center mb-8 relative"
      >
        <div className="absolute inset-0 rounded-full border border-brand-100 animate-pulse"></div>
        <Key size={32} className="text-brand-700" strokeWidth={1.5} />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-display font-medium text-slate-900 mb-3"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-slate-500 font-light max-w-md mb-8 leading-relaxed"
      >
        {description}
      </motion.p>

      {actionLink && (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          href={actionLink}
          className="inline-flex items-center gap-2 text-brand-700 font-bold border-b border-brand-200 pb-0.5 hover:text-brand-900 hover:border-brand-900 transition-all"
        >
          {actionLabel}
        </motion.a>
      )}
    </div>
  );
};

export default EmptyState;

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, phone, message });
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами вскоре.');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <footer className="w-full bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair font-black text-5xl md:text-6xl uppercase tracking-wider mb-8">
            Оставить запрос
          </h2>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Ваша почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-gold py-3 font-inter text-lg placeholder-gray-500 focus:outline-none transition"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="tel"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-gold py-3 font-inter text-lg placeholder-gray-500 focus:outline-none transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <textarea
                placeholder="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-gold py-3 font-inter text-lg placeholder-gray-500 focus:outline-none transition resize-none"
                rows={3}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-black font-inter font-bold text-lg py-4 uppercase tracking-wide transition mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Отправить
            </motion.button>
          </form>
        </div>

        <div className="border-t border-gray-800 pt-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-inter text-gray-400 mb-4">Email</p>
              <a
                href="mailto:hello@luxestudio.ru"
                className="font-playfair font-bold text-2xl hover:text-gold transition"
              >
                hello@luxestudio.ru
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-inter text-gray-400 mb-4">Телефон</p>
              <a
                href="tel:+79991234567"
                className="font-playfair font-bold text-2xl hover:text-gold transition"
              >
                +7 (999) 123-45-67
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition font-inter text-sm uppercase tracking-wider"
            >
              Instagram
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition font-inter text-sm uppercase tracking-wider"
            >
              Telegram
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition font-inter text-sm uppercase tracking-wider"
            >
              Pinterest
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-center font-inter text-sm text-gray-500 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2026 LUXE. Все права защищены.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
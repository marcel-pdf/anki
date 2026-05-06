'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 60%',
            scrub: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="catalog" className="w-full py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair font-black text-5xl md:text-6xl uppercase tracking-wider mb-4">
            Каталог
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-md mx-auto">
            Премиальная мебель, разработанная с вниманием к каждой детали
          </p>
        </motion.div>

        {/* Products Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-bg-light aspect-video mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-end gap-4">
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-2xl uppercase tracking-wide leading-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-500 uppercase tracking-widest">
                    {product.category}
                  </p>
                </div>

                {/* Price */}
                <motion.div
                  className="font-inter font-bold text-3xl text-gold whitespace-nowrap"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.price.toLocaleString('ru-RU')}₽
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
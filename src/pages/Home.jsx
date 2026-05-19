import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import CategoryCarousel from '../components/CategoryCarousel';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

import { motion } from 'framer-motion';

import {
  Minus,
  Plus,
  ShoppingBag
} from 'lucide-react';

const Home = () => {

  /* ─────────────────────────────────────────────
      LIVE COUNTDOWN TIMER
  ───────────────────────────────────────────── */

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {

          seconds--;

        } else {

          seconds = 59;

          if (minutes > 0) {

            minutes--;

          } else {

            minutes = 59;

            if (hours > 0) {

              hours--;

            } else {

              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <>
      <Hero />

      <Features />

      {/* ─────────────────────────────────────────────
          DEAL OF THE DAY SECTION
      ───────────────────────────────────────────── */}

      <section className="py-20 bg-accent/5 overflow-hidden">

        <div className="container mx-auto px-4">

          <div className="bg-white rounded-[60px] p-8 lg:p-20 border border-accent/10 shadow-2xl shadow-accent/5 flex flex-col lg:flex-row items-center gap-16 relative">

            {/* Deal Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[65%] bg-white px-3 rounded-3xl z-30">

              <div className="bg-accent text-black px-8 py-3 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-xl shadow-accent/30">
                Deal of the Day
              </div>

            </div>

            {/* ───────────────── LEFT CONTENT ───────────────── */}

            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">

              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">

                Fresh Organic

                <span className="text-accent">
                  {' '}Strawberries
                </span>

              </h2>

              <p className="text-gray-500 text-lg font-medium">

                Hand-picked this morning from our local organic farm.
                Rich in antioxidants and bursting with natural sweetness.

              </p>

              {/* TIMER */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">

                {[
                  {
                    label: 'Days',
                    value: String(timeLeft.days).padStart(2, '0')
                  },

                  {
                    label: 'Hours',
                    value: String(timeLeft.hours).padStart(2, '0')
                  },

                  {
                    label: 'Mins',
                    value: String(timeLeft.minutes).padStart(2, '0')
                  },

                  {
                    label: 'Secs',
                    value: String(timeLeft.seconds).padStart(2, '0')
                  }

                ].map((time, i) => (

                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-50 w-20 h-24 justify-center rounded-[24px] border border-gray-100 shadow-sm"
                  >

                    <span className="text-3xl font-black text-gray-900">
                      {time.value}
                    </span>

                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                      {time.label}
                    </span>

                  </div>
                ))}
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">

                <span className="text-4xl font-black text-gray-900">
                  ₹149.00
                </span>

                <del className="text-xl text-gray-300 font-bold">
                  ₹249.00
                </del>

                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Save 40%
                </span>

              </div>

              {/* CART CONTROLS */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">

                {/* Quantity */}
                <div className="flex items-center bg-white border border-gray-100 rounded-[24px] p-2 gap-6 shadow-sm">

                  <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-primary hover:shadow-md rounded-2xl transition-all">

                    <Minus size={20} />

                  </button>

                  <span className="text-2xl font-black w-8 text-center text-gray-900">
                    1
                  </span>

                  <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-primary hover:shadow-md rounded-2xl transition-all">

                    <Plus size={20} />

                  </button>

                </div>

                {/* Add To Cart */}
                <button className="flex-grow max-w-[250px] bg-yellow-400 text-gray-900 font-black py-5 rounded-[24px] shadow-2xl shadow-yellow-400/20 hover:bg-yellow-500 hover:scale-[1.05] hover:shadow-yellow-400/40 active:scale-[0.98] transition-all flex items-center justify-center gap-4 text-lg">

                  <ShoppingBag size={24} />

                  Add to Cart

                </button>

              </div>
            </div>

            {/* ───────────────── RIGHT IMAGE ───────────────── */}

            <div className="lg:w-1/2 relative flex items-center justify-center">

              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[100px] -z-10" />

              {/* Floating Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-5 left-0 bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 rounded-[24px] px-5 py-4 z-30"
              >

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                  Organic Quality
                </p>

                <h4 className="text-lg font-black text-gray-900">
                  100% Fresh
                </h4>

              </motion.div>

              {/* Floating Bottom Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute bottom-10 right-0 bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 rounded-[24px] px-5 py-4 z-30"
              >

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                  Fast Delivery
                </p>

                <h4 className="text-lg font-black text-accent">
                  10 Min Delivery
                </h4>

              </motion.div>

              {/* Strawberry Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >

                <img
                  src="/assets/strawberry.png"
                  alt="Strawberry"
                  className="w-full max-w-[500px] h-auto drop-shadow-[0_35px_35px_rgba(255,87,87,0.3)]"
                />

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      <CategoryCarousel />

      <ProductGrid />

      <Testimonials />

      <Newsletter />
    </>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-auto md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-50 flex items-center py-12 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner-1.jpg"
          alt="Fresh Produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent lg:from-white/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.1] tracking-tight md:tracking-normal">
              <span className="text-primary font-bold italic block sm:inline">Organic</span>{" "}
              <span className="font-semibold not-italic">Foods</span>
              <br />
              <span className="text-gray-500 font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">at your{" "}</span>
              <span className="font-black not-italic">Doorsteps</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience the freshness of farm-to-table delivery. Hand-picked organic produce delivered directly to your home within hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 md:mt-8"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-black rounded-full shadow-2xl shadow-green-600/30 hover:bg-green-700 hover:scale-105 transition-all transform uppercase tracking-[0.18em] text-sm"
            >
              Start Shopping
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-16"
          >
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">14k+</p>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">Varieties</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">50k+</p>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">Customers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">10+</p>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">Locations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

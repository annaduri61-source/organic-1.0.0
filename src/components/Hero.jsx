import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[500px] lg:h-[650px] overflow-hidden bg-gray-50 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/banner.png" 
          alt="Fresh Produce" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:from-white/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-7xl leading-[1.1] mb-6 tracking-display">
              <span className="text-primary font-bold italic">Organic</span>{" "}
              <span className="font-semibold not-italic">Foods</span>
              <br />
              <span className="text-gray-500 font-normal text-3xl lg:text-5xl">at your{" "}</span>
              <span className="font-black not-italic">Doorsteps</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-lg">
              Experience the freshness of farm-to-table delivery. Hand-picked organic produce delivered directly to your home within hours.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all transform uppercase tracking-wide text-sm">
              Start Shopping
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full shadow-md hover:bg-gray-50 transition-all uppercase tracking-wide text-sm">
              Join Now
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">14k+</p>
              <p className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-widest">Varieties</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">50k+</p>
              <p className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-widest">Customers</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">10+</p>
              <p className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-widest">Locations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

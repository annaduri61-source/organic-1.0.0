import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07120d] flex items-center pt-24 pb-20">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/20 blur-[120px] rounded-full"
        />

      </div>

      {/* PARTICLES */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-lime-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-14 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full mb-8">
            <Star className="text-yellow-400" size={16} />
            <span className="text-sm text-white tracking-wide">
              Premium Organic Collection
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Fresh Organic
            <span className="block text-lime-400">
              Food Delivered
            </span>
            To Your Door
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
            Farm fresh vegetables, fruits, juices and healthy organic
            products delivered instantly with premium quality and modern shopping experience.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/shop"
              className="group bg-lime-400 text-black px-8 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(132,204,22,0.5)]"
            >
              Shop Now
              <ArrowRight className="group-hover:translate-x-1 transition-all" />
            </Link>

            

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h2 className="text-4xl font-black text-lime-400">
                14K+
              </h2>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-lime-400">
                50K+
              </h2>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                Customers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-lime-400">
                10+
              </h2>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                Cities
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-lime-400/20 blur-[120px] rounded-full" />

          {/* MAIN IMAGE */}
          <motion.img
            animate={floatingAnimation}
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
            alt="Organic"
            className="relative z-10 w-full max-w-[550px] h-[650px] object-cover rounded-[40px] border border-white/10 shadow-2xl"
          />

          {/* TOP CARD */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 -left-6 bg-white/80 backdrop-blur-2xl p-5 rounded-3xl shadow-2xl z-20"
          >
            <p className="text-gray-500 text-sm">
              Organic Quality
            </p>

            <h3 className="text-2xl font-black text-black">
              100% Fresh
            </h3>
          </motion.div>

          {/* BOTTOM CARD */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 -right-6 bg-lime-400 text-black p-6 rounded-3xl shadow-2xl z-20"
          >

            <ShoppingBag size={30} />

            <h3 className="text-3xl font-black mt-2">
              Fast Delivery
            </h3>

            <p className="font-semibold">
              Within 10 Minutes
            </p>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
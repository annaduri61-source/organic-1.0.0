import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import CategoryCarousel from '../components/CategoryCarousel';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

import { motion } from 'framer-motion';

const Home = () => {

  /* ================================================= */
  /* LIVE COUNTDOWN */
  /* ================================================= */

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let {
          days,
          hours,
          minutes,
          seconds,
        } = prev;

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
    <div className="
    bg-[#050816]
    overflow-hidden
    text-white
    ">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <Hero />

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <Features />

      {/* ================================================= */}
      {/* DEAL OF THE DAY */}
      {/* ================================================= */}

      <section className="
      relative
      py-28

      bg-[#050816]

      overflow-hidden
      ">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          {/* GRID */}
          <div className="
          absolute
          inset-0
          opacity-[0.05]

          bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

          bg-[size:80px_80px]
          " />

          {/* GLOW */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
            className="
            absolute
            top-0
            left-0

            w-[500px]
            h-[500px]

            bg-green-500/20
            blur-[180px]
            "
          />

          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-0
            right-0

            w-[500px]
            h-[500px]

            bg-emerald-500/20
            blur-[180px]
            "
          />

        </div>

        <div className="
        container
        mx-auto
        px-4
        relative
        z-20
        ">

          <div className="
          relative

          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[50px]

          p-8
          lg:p-16

          overflow-hidden

          shadow-[0_20px_120px_rgba(0,0,0,0.45)]
          ">

            {/* BADGE */}
            <div className="
            absolute
            top-8
            left-8

            bg-gradient-to-r
            from-green-500
            to-emerald-600

            px-6
            py-3

            rounded-full

            text-white
            font-black

            uppercase
            tracking-[0.3em]

            text-xs

            shadow-[0_15px_40px_rgba(34,197,94,0.4)]
            ">

              Deal of the Day

            </div>

            <div className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
            ">

              {/* LEFT */}
              <div className="
              text-center
              lg:text-left
              ">

                <h2 className="
                text-5xl
                lg:text-7xl

                font-black

                leading-[0.95]

                text-white

                mt-12
                ">

                  Fresh Organic

                  <span className="
                  block
                  text-green-400
                  italic
                  ">
                    Strawberries
                  </span>

                </h2>

                <p className="
                text-gray-300
                text-xl
                leading-relaxed

                mt-8
                max-w-2xl
                ">

                  Hand-picked fresh from our organic farms.
                  Rich in antioxidants, natural sweetness
                  and premium healthy nutrition.

                </p>

                {/* TIMER */}
                <div className="
                flex
                flex-wrap
                justify-center
                lg:justify-start

                gap-5

                mt-10
                ">

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

                    <motion.div
                      key={i}
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      className="
                      w-24
                      h-28

                      rounded-[28px]

                      bg-white/5
                      backdrop-blur-3xl

                      border
                      border-white/10

                      flex
                      flex-col
                      items-center
                      justify-center

                      shadow-[0_15px_50px_rgba(0,0,0,0.35)]
                      "
                    >

                      <span className="
                      text-4xl
                      font-black
                      text-white
                      ">

                        {time.value}

                      </span>

                      <span className="
                      text-[11px]

                      uppercase
                      tracking-[0.3em]

                      text-green-300

                      font-black

                      mt-2
                      ">

                        {time.label}

                      </span>

                    </motion.div>
                  ))}

                </div>

                {/* PRICE */}
                <div className="
                flex
                items-center
                justify-center
                lg:justify-start

                gap-5

                mt-10
                flex-wrap
                ">

                  <span className="
                  text-5xl
                  font-black
                  text-green-400
                  ">

                    ₹149

                  </span>

                  <del className="
                  text-2xl
                  text-gray-500
                  font-bold
                  ">

                    ₹249

                  </del>

                  <span className="
                  px-5
                  py-2

                  rounded-full

                  bg-green-500/10

                  border
                  border-green-500/20

                  text-green-300

                  text-xs
                  font-black

                  uppercase
                  tracking-[0.25em]
                  ">

                    Save 40%

                  </span>

                </div>

              </div>

              {/* RIGHT */}
              <div className="
              relative
              flex
              items-center
              justify-center
              ">

                {/* GLOW */}
                <div className="
                absolute
                inset-0

                bg-green-500/20
                blur-[120px]
                rounded-full
                " />

                {/* IMAGE */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="
                  relative
                  z-20
                  "
                >

                  <img
src="/assets/strawberry.png"
                    alt="Strawberry"
                    className="
                    w-full
                    max-w-[520px]

                    rounded-[40px]

                    border
                    border-white/10

                    shadow-[0_30px_120px_rgba(0,0,0,0.6)]
                    "
                  />

                </motion.div>

                {/* FLOAT CARD */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="
                  absolute
                  bottom-0
                  -right-4

                  bg-white/5
                  backdrop-blur-3xl

                  border
                  border-white/10

                  rounded-[30px]

                  p-6

                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  "
                >

                  <p className="
                  text-green-300
                  text-xs

                  uppercase
                  tracking-[0.3em]

                  font-black

                  mb-3
                  ">

                    Premium Organic

                  </p>

                  <h3 className="
                  text-3xl
                  font-black
                  text-white
                  ">

                    100% Fresh

                  </h3>

                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* OTHER SECTIONS */}
      {/* ================================================= */}

      <CategoryCarousel />

      <ProductGrid />

      <Testimonials />

      <Newsletter />

    </div>
  );
};

export default Home;
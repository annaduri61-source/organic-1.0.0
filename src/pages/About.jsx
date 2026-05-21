import React from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
  Award,
  Globe,
  Heart,
  Users,
  BadgeCheck,
  ArrowRight,
  Star,
  Sparkles,
} from 'lucide-react';

const About = () => {

  const features = [
    'Premium Organic Foods',
    'Healthy Lifestyle',
    'Farm Fresh Products',
    'Fast Delivery',
  ];

  return (
    <div className="
    overflow-hidden
    bg-[#050816]
    text-white
    ">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      ">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="
            w-full
            h-full
            object-cover
            scale-105
            "
          />

          <div className="
          absolute
          inset-0
          bg-black/75
          " />

          <div className="
          absolute
          inset-0

          bg-gradient-to-r
          from-[#050816]
          via-[#050816]/70
          to-transparent
          " />

        </div>

        <div className="
        container
        mx-auto
        px-4
        relative
        z-20
        ">

          <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          ">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              <div className="
              inline-flex
              items-center
              gap-3

              bg-white/5
              backdrop-blur-2xl

              border
              border-white/10

              px-6
              py-3

              rounded-full

              mb-8
              ">

                <Leaf
                  size={18}
                  className="text-green-400"
                />

                <span className="
                uppercase
                tracking-[5px]
                text-xs
                font-bold
                text-green-300
                ">
                  About Organic
                </span>

              </div>

              <h1 className="
              text-6xl
              md:text-8xl

              font-black

              leading-[0.9]
              ">

                Healthy <br />

                <span className="
                text-green-400
                italic
                ">
                  Organic
                </span>

                <br />

                Future

              </h1>

              <p className="
              mt-8
              max-w-2xl

              text-xl
              leading-relaxed

              text-gray-300
              ">

                Experience futuristic organic shopping,
                healthy living and premium farm fresh
                collections with immersive modern design.

              </p>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
              relative
              h-[700px]
              hidden
              lg:block
              "
            >

              {/* MAIN IMAGE */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-10
                left-10

                w-[500px]
                h-[620px]

                rounded-[40px]
                overflow-hidden

                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

              </motion.div>

              {/* SIDE IMAGE */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
                className="
                absolute
                -right-10
                top-32

                w-[260px]
                h-[340px]

                rounded-[35px]
                overflow-hidden

                border
                border-white/10

                shadow-[0_20px_80px_rgba(0,0,0,0.5)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* OUR STORY */}
      {/* ================================================= */}

      <section className="
      relative
      py-32
      overflow-hidden
      ">

        {/* GRID */}
        <div className="
        absolute
        inset-0
        opacity-[0.05]

        bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

        bg-[size:80px_80px]
        " />

        <div className="
        container
        mx-auto
        px-4
        relative
        z-20
        ">

          <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          ">

            {/* IMAGES */}
            <div className="
            relative
            h-[700px]
            ">

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-0
                left-0

                w-[420px]
                h-[560px]

                rounded-[40px]
                overflow-hidden

                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-20
                right-0

                w-[260px]
                h-[340px]

                rounded-[35px]
                overflow-hidden

                border
                border-white/10
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

              </motion.div>

            </div>

            {/* CONTENT */}
            <div>

              <div className="
              inline-flex
              items-center
              gap-3

              bg-white/5
              backdrop-blur-2xl

              border
              border-white/10

              px-6
              py-3

              rounded-full

              mb-8
              ">

                <Sparkles
                  size={18}
                  className="text-green-400"
                />

                <span className="
                uppercase
                tracking-[5px]
                text-xs
                font-bold
                text-green-300
                ">
                  Our Story
                </span>

              </div>

              <h2 className="
              text-5xl
              md:text-7xl

              font-black

              leading-[0.95]

              mb-8
              ">

                Nature Meets <br />

                <span className="
                text-green-400
                italic
                ">
                  Modern Living
                </span>

              </h2>

              <p className="
              text-gray-300
              text-xl
              leading-relaxed
              mb-8
              ">

                Since 2010, we’ve been redefining healthy
                organic shopping with futuristic design,
                premium farm fresh products and sustainable
                living experiences.

              </p>

              <div className="
              grid
              sm:grid-cols-2
              gap-6
              ">

                {features.map((item, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                    bg-white/5
                    backdrop-blur-3xl

                    border
                    border-white/10

                    rounded-[28px]

                    p-6
                    "
                  >

                    <h3 className="
                    text-xl
                    font-black
                    text-white
                    ">

                      {item}

                    </h3>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
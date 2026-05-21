import React from 'react';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Leaf,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

import { motion } from 'framer-motion';

const Contact = () => {

  return (
    <div className="
    min-h-screen
    bg-[#050816]
    overflow-hidden
    relative
    text-white
    ">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div className="
        absolute
        inset-0
        opacity-[0.05]

        bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

        bg-[size:80px_80px]
        " />

        {/* GLOW 1 */}
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

        {/* GLOW 2 */}
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

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="
      relative
      z-20

      pt-32
      pb-20
      ">

        <div className="
        container
        mx-auto
        px-4
        ">

          <div className="
          text-center
          max-w-4xl
          mx-auto
          ">

            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
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
              "
            >

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
                Contact Organic
              </span>

            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
              text-6xl
              md:text-8xl

              font-black

              leading-[0.9]

              mb-8
              "
            >

              Let’s Build <br />

              <span className="
              text-green-400
              italic
              ">
                Healthy
              </span>

              Together

            </motion.h1>

            {/* DESC */}
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="
              text-xl
              leading-relaxed

              text-gray-300

              max-w-3xl
              mx-auto
              "
            >

              Have questions about organic products,
              healthy lifestyle or delivery?
              Our premium support team is always ready
              to help you.

            </motion.p>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <section className="
      relative
      z-20

      pb-32
      ">

        <div className="
        container
        mx-auto
        px-4
        ">

          <div className="
          grid
          lg:grid-cols-[380px_1fr]
          gap-10
          ">

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div className="space-y-8">

              {/* CONTACT INFO */}
              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="
                bg-white/5
                backdrop-blur-3xl

                border
                border-white/10

                rounded-[40px]

                p-8

                shadow-[0_20px_80px_rgba(0,0,0,0.4)]
                "
              >

                <h2 className="
                text-4xl
                font-black
                text-white
                mb-10
                ">

                  Contact Info

                </h2>

                <div className="space-y-8">

                  {[
                    {
                      icon: Phone,
                      title: 'Phone Number',
                      value: '+1 234 567 890',
                    },
                    {
                      icon: Mail,
                      title: 'Email Address',
                      value: 'hello@organic.com',
                    },
                    {
                      icon: MapPin,
                      title: 'Location',
                      value: '123 Organic Lane',
                    },
                    {
                      icon: Clock,
                      title: 'Working Hours',
                      value: '9AM - 6PM',
                    },
                  ].map((item, i) => (

                    <motion.div
                      key={i}
                      whileHover={{
                        x: 5,
                      }}
                      className="
                      flex
                      items-start
                      gap-5
                      "
                    >

                      {/* ICON */}
                      <div className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-gradient-to-br
                      from-green-500
                      to-emerald-600

                      flex
                      items-center
                      justify-center

                      shadow-[0_10px_40px_rgba(34,197,94,0.4)]
                      ">

                        <item.icon size={22} />

                      </div>

                      {/* CONTENT */}
                      <div>

                        <p className="
                        text-[11px]
                        uppercase
                        tracking-[0.3em]

                        text-green-300

                        font-black

                        mb-2
                        ">

                          {item.title}

                        </p>

                        <h3 className="
                        text-xl
                        font-black
                        text-white
                        leading-relaxed
                        ">

                          {item.value}

                        </h3>

                      </div>

                    </motion.div>
                  ))}

                </div>

              </motion.div>

              {/* FOLLOW */}
              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="
                bg-white/5
                backdrop-blur-3xl

                border
                border-white/10

                rounded-[40px]

                p-8

                shadow-[0_20px_80px_rgba(0,0,0,0.4)]
                "
              >

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-8
                ">

                  Follow Us

                </h2>

                <div className="
                flex
                gap-5
                ">

                  {[
                    {
                      icon: FaFacebookF,
                    },
                    {
                      icon: FaInstagram,
                    },
                    {
                      icon: FaTwitter,
                    },
                  ].map((item, i) => (

                    <motion.button
                      key={i}
                      whileHover={{
                        y: -8,
                        rotate: 6,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                      w-16
                      h-16

                      rounded-2xl

                      bg-black/30

                      border
                      border-white/10

                      hover:bg-gradient-to-br
                      hover:from-green-500
                      hover:to-emerald-600

                      transition-all

                      flex
                      items-center
                      justify-center

                      shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                      "
                    >

                      <item.icon size={22} />

                    </motion.button>
                  ))}

                </div>

              </motion.div>

            </div>

            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
              relative

              bg-white/5
              backdrop-blur-3xl

              border
              border-white/10

              rounded-[45px]

              p-10
              lg:p-16

              overflow-hidden

              shadow-[0_20px_120px_rgba(0,0,0,0.5)]
              "
            >

              {/* GLOW */}
              <div className="
              absolute
              top-0
              right-0

              w-72
              h-72

              bg-green-500/20
              blur-[120px]
              " />

              <div className="relative z-20">

                {/* TITLE */}
                <div className="
                flex
                items-center
                gap-4
                mb-6
                ">

                  <Leaf
                    size={35}
                    className="text-green-400"
                  />

                  <h2 className="
                  text-5xl
                  font-black
                  text-white
                  ">

                    Send Message

                  </h2>

                </div>

                <p className="
                text-gray-400
                text-lg
                leading-relaxed

                max-w-2xl

                mb-12
                ">

                  We’d love to hear from you.
                  Send us your questions and our
                  organic support team will respond
                  quickly.

                </p>

                {/* FORM GRID */}
                <div className="
                grid
                md:grid-cols-2
                gap-8
                mb-8
                ">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                    h-16

                    rounded-2xl

                    bg-black/30

                    border
                    border-white/10

                    px-5

                    text-white

                    outline-none

                    focus:border-green-400

                    transition-all
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                    h-16

                    rounded-2xl

                    bg-black/30

                    border
                    border-white/10

                    px-5

                    text-white

                    outline-none

                    focus:border-green-400

                    transition-all
                    "
                  />

                </div>

                {/* SUBJECT */}
                <input
                  type="text"
                  placeholder="Subject"
                  className="
                  w-full
                  h-16

                  rounded-2xl

                  bg-black/30

                  border
                  border-white/10

                  px-5

                  text-white

                  outline-none

                  focus:border-green-400

                  transition-all

                  mb-8
                  "
                />

                {/* MESSAGE */}
                <textarea
                  rows="7"
                  placeholder="Write your message..."
                  className="
                  w-full

                  rounded-[30px]

                  bg-black/30

                  border
                  border-white/10

                  px-5
                  py-5

                  text-white

                  outline-none

                  focus:border-green-400

                  transition-all

                  resize-none

                  mb-10
                  "
                />

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden

                  px-10
                  py-5

                  rounded-3xl

                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600

                  text-white
                  font-black

                  flex
                  items-center
                  gap-4

                  shadow-[0_20px_60px_rgba(34,197,94,0.35)]
                  "
                >

                  {/* SHINE */}
                  <div className="
                  absolute
                  top-0
                  -left-24

                  w-20
                  h-full

                  bg-white/20

                  skew-x-12

                  group-hover:left-[120%]

                  transition-all
                  duration-1000
                  " />

                  <Send size={20} />

                  Send Message

                </motion.button>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
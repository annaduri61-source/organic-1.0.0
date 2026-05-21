import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Leaf,
  ShoppingBasket,
  Star,
} from 'lucide-react';

const categories = [
  {
    id: 1,
    label: 'Fruits',
    category: 'Fruits',
    image:
      'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    label: 'Vegetables',
    category: 'Vegetables',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    label: 'Meat Products',
    category: 'Meat Products',
    image:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    label: 'Drinks',
    category: 'Drinks',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    label: 'Snacks',
    category: 'Snacks',
    image:
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    label: 'Dairy & Eggs',
    category: 'Dairy & Eggs',
    image:
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&q=80',
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // THIS REDIRECT STILL WORKS PERFECTLY
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#07130d] text-white relative">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#16a34a22,transparent_35%),radial-gradient(circle_at_bottom_right,#22c55e22,transparent_35%)]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Glow Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-10 left-10 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px]"
        />

      </div>

      {/* Floating Leaves */}
      {[...Array(12)].map((_, i) => (
        <motion.img
          key={i}
          src="https://cdn-icons-png.flaticon.com/512/765/765674.png"
          className="absolute opacity-10 z-10"
          style={{
            width: `${35 + i * 5}px`,
            left: `${i * 8}%`,
            top: `${i * 7}%`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative pt-32 pb-20 z-20">

        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-2xl px-6 py-3 rounded-full mb-8"
            >
              <Leaf className="text-green-400" size={22} />

              <span className="uppercase tracking-[5px] text-sm font-bold">
                Organic Categories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-8xl font-black leading-[0.95] mb-10"
            >

              Discover <br />

              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="bg-gradient-to-r from-green-300 via-primary to-lime-300 bg-[length:200%_200%] bg-clip-text text-transparent italic"
              >
                Healthy
              </motion.span>

              <br />

              Collections
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Explore premium organic products with immersive 3D modern shopping
              experience and futuristic healthy lifestyle collections.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURE STRIP */}
      {/* ================================================= */}

      <section className="relative z-20 pb-20">

        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: Sparkles,
                title: 'Premium Quality',
                desc: 'Carefully selected healthy products.',
              },
              {
                icon: ShoppingBasket,
                title: 'Fresh Daily',
                desc: 'Freshly harvested every single day.',
              },
              {
                icon: Star,
                title: 'Customer Favorite',
                desc: 'Loved by thousands of healthy families.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.03,
                }}
                className="bg-white/10 border border-white/10 backdrop-blur-3xl rounded-[40px] p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
                  <item.icon size={40} />
                </div>

                <h3 className="text-3xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CATEGORY GRID */}
      {/* ================================================= */}

      <section className="relative z-20 pb-32">

        <div className="container mx-auto px-4">

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {categories.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleCategoryClick(item.category)}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -15,
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[45px] bg-white/10 border border-white/10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
              >

                {/* Image */}
                <div className="relative h-[380px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="absolute top-6 left-6 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full"
                  >
                    <span className="text-sm font-black uppercase tracking-[3px] text-white">
                      Organic
                    </span>
                  </motion.div>

                </div>

                {/* Content */}
                <div className="relative p-8 text-left">

                  <p className="text-sm uppercase tracking-[4px] text-green-400 font-bold mb-3">
                    Category
                  </p>

                  <h2 className="text-4xl font-black mb-4">
                    {item.label}
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    Explore premium {item.label.toLowerCase()} with healthy
                    organic freshness and sustainable quality.
                  </p>

                  {/* Button */}
                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="inline-flex items-center gap-3 text-primary font-black text-lg"
                  >
                    Explore Category

                    <ArrowRight
                      size={22}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </motion.div>

                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/10 via-transparent to-green-400/10 pointer-events-none" />

              </motion.button>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA SECTION */}
      {/* ================================================= */}

      <section className="relative z-20 pb-32">

        <div className="container mx-auto px-4">

          <div className="relative overflow-hidden rounded-[60px] bg-gradient-to-r from-primary to-green-600 p-16 lg:p-24 text-center shadow-[0_40px_120px_rgba(34,197,94,0.4)]">

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[160px]"
            />

            <div className="relative z-10">

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center mx-auto mb-10"
              >
                <ShoppingBasket size={50} />
              </motion.div>

              <h2 className="text-5xl lg:text-7xl font-black mb-10">
                Healthy Shopping <br /> Starts Here
              </h2>

              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-14">
                Browse premium categories and experience futuristic organic shopping with immersive modern design.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-black/80 text-primary px-14 py-6 rounded-full text-xl font-black shadow-2xl inline-flex items-center gap-4"
              >
                Explore Shop

                <ArrowRight size={24} />
              </motion.button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
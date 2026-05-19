import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Truck, ShieldCheck, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            We Are <span className="text-primary italic">Organic</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Since 2010, we've been on a mission to bring the freshest, most nutritious organic produce directly from local farms to your doorstep. We believe in sustainable farming and healthy living.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Years Experience', value: '14+' },
            { label: 'Happy Customers', value: '50k+' },
            { label: 'Local Farms', value: '120+' },
            { label: 'Products', value: '500+' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl">
              <h2 className="text-4xl font-black text-primary mb-2">{stat.value}</h2>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-20">
          <div className="flex flex-col gap-6 lg:gap-8 h-full">
            <div className="relative rounded-[32px] overflow-hidden flex-1 shadow-xl group min-h-[250px] lg:min-h-0">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Farm" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <div className="relative rounded-[32px] overflow-hidden flex-1 shadow-xl group min-h-[250px] lg:min-h-0">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000" 
                alt="Organic Produce" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
              Our Journey Started In A <span className="text-primary italic">Small Local Farm</span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We started with just three local farmers who wanted to change how people access organic food. Today, we work with over 100 sustainable farms across the region to ensure you get the best quality every single day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment goes beyond simply providing fresh produce. We believe in nurturing the earth, supporting local agricultural communities, and promoting a holistic, sustainable lifestyle. Every item you find in our store has been carefully curated, ensuring it meets our strict standards for organic integrity, so you and your family can enjoy nature's true, unadulterated flavors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our fields to your kitchen, we ensure complete transparency in our supply chain. We use zero artificial fertilizers or pesticides, relying solely on natural composting and crop rotation. When you choose us, you're not just buying food; you're investing in your health and the future of our planet.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Leaf, title: 'Natural Process', desc: 'No chemicals used' },
                { icon: Users, title: 'Fair Trade', desc: 'Farmers get paid well' },
                { icon: Heart, title: 'Health First', desc: 'Nutrition focused' },
                { icon: Award, title: 'Certified', desc: 'ISO 9001 Quality' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary rounded-[40px] p-12 lg:p-20 text-white text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-16">Why Choose Our Organic?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: '100% Secure', desc: 'Your health is our priority' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Same day delivery available' },
              { icon: Award, title: 'Best Quality', desc: 'Curated organic products' }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

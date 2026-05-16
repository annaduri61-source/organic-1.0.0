import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Health Enthusiast',
    content: 'The quality of organic produce here is unmatched. Everything arrives fresh and perfectly packed. It has completely changed my grocery shopping experience!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Home Chef',
    content: 'I love the variety of unique organic spices and grains. The "Add to Cart" experience is so smooth, and delivery is always on time. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Busy Mother',
    content: 'Finally, a grocery store I can trust for my kids. Their organic baby food selection is fantastic and the prices are very reasonable for the quality.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black text-gray-900"
          >
            What Our <span className="text-primary italic">Community</span> Says
          </motion.h2>
          <p className="text-gray-500 font-medium">Join thousands of happy customers who have made the switch to a healthier, organic lifestyle with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-black/5 relative group hover:-translate-y-2 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed font-medium mb-8 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-primary/5" />
                <div>
                  <h4 className="font-black text-gray-900">{item.name}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

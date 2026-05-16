import React from 'react';
import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[48px] p-8 lg:p-20 text-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/assets/banner-newsletter.jpg" 
              alt="Newsletter Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold uppercase tracking-widest">
              <Mail size={16} /> Stay Updated
            </div>
            
            <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight">
              Get <span className="text-yellow-400">20% Off</span> <br className="hidden lg:block" /> Your First Order
            </h2>
            
            <p className="text-white/90 text-lg lg:text-2xl font-medium max-w-xl mx-auto">
              Join our newsletter and receive the latest updates, exclusive deals, and organic living tips right in your inbox.
            </p>

            <form className="flex flex-col md:flex-row items-center gap-4 bg-white/10 backdrop-blur-xl p-2 rounded-[32px] border border-white/20">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-grow bg-transparent border-none focus:ring-0 text-white placeholder-white/60 px-8 py-4 font-bold"
                required
              />
              <button 
                type="submit"
                className="w-full md:w-auto bg-white text-primary px-10 py-4 rounded-[24px] font-black hover:bg-yellow-300 hover:text-gray-900 transition-all flex items-center justify-center gap-2 group"
              >
                Subscribe Now
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
              No spam, we promise. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

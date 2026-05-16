import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Facebook, Twitter, Instagram } from '../components/SocialIcons';

const Contact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Get In <span className="text-primary italic">Touch</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            Have questions about our products or your order? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-[32px] space-y-8">
              <h3 className="text-2xl font-black text-gray-900">Contact Information</h3>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-lg font-bold text-gray-900">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-lg font-bold text-gray-900">hello@organic.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-lg font-bold text-gray-900">123 Organic Lane, Farm City</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Working Hours</p>
                  <p className="text-lg font-bold text-gray-900">Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8">
              <h4 className="font-bold text-gray-900 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-white border border-gray-100 p-8 lg:p-12 rounded-[40px] shadow-xl shadow-black/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="What is this about?" 
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  rows="6" 
                  placeholder="How can we help you?" 
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

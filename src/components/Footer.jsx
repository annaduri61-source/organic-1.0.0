import React from 'react';
import { Send } from 'lucide-react';
import { Facebook, Twitter, Instagram, Youtube } from './SocialIcons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-primary rounded-[40px] p-8 lg:p-16 mb-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-white/80 max-w-md">Get daily updates on new products and exclusive discounts directly in your inbox.</p>
          </div>
          <div className="w-full lg:w-auto relative z-10">
            <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border border-white/20">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none focus:ring-0 px-6 py-3 w-full lg:w-80 placeholder:text-white/50 text-white"
              />
              <button className="bg-white text-primary p-4 rounded-xl hover:bg-gray-100 transition-all">
                <Send size={20} />
              </button>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/">
              <img src="/images/logo.png" alt="Organic" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              We are dedicated to providing the highest quality organic produce to our community. Fresh from the farm, delivered with love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-800 hover:bg-primary rounded-xl transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-primary rounded-xl transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-primary rounded-xl transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-gray-800 hover:bg-primary rounded-xl transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-8">Categories</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/shop" className="hover:text-primary transition-colors">Fruits & Vegetables</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Dairy & Eggs</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Bakery & Bread</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Meat & Poultry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-4">
                <div className="text-primary mt-1">📍</div>
                <span>123 Organic St, Farm City, FC 12345</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-primary mt-1">📞</div>
                <span>+1 (234) 567 890</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="text-primary mt-1">✉️</div>
                <span>support@organic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2024 Organic. All rights reserved. Designed by TemplatesJungle.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

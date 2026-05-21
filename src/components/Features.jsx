import React from 'react';
import { Leaf, Award, Truck, ShieldCheck } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, colorClass }) => (
  <div className={`p-4 pt-28 flex items-start gap-6  last:border-0 ${colorClass}`}>
    <div className="flex-shrink-0 p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
      <Icon size={32} className="text-black" />
    </div>
    <div>
      <h5 className="text-xl font-bold text-white mb-2">{title}</h5>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="container mx-auto px-4 -mt-26 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-[32px] overflow-hidden shadow-2xl shadow-black/10">
        <FeatureItem 
          icon={Leaf} 
          title="Fresh from farm" 
          description="Hand-picked daily from our partner local organic farms."
          colorClass="bg-primary"
        />
        <FeatureItem 
          icon={Award} 
          title="100% Organic" 
          description="Certified organic produce with zero harmful pesticides."
          colorClass="bg-secondary"
        />
        <FeatureItem 
          icon={Truck} 
          title="Free delivery" 
          description="Complimentary shipping on all orders over ₹500."
          colorClass="bg-accent"
        />
      </div>
    </section>
  );
};

export default Features;

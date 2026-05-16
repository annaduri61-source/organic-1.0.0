import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, name: 'Fruits & Veges', image: '/assets/category-thumb-1.jpg' },
  { id: 2, name: 'Breads & Sweets', image: '/assets/category-thumb-2.jpg' },
  { id: 3, name: 'Beverages', image: '/assets/category-thumb-3.jpg' },
  { id: 4, name: 'Meat Products', image: '/assets/category-thumb-5.jpg' },
  { id: 5, name: 'Dairy & Eggs', image: '/assets/category-thumb-7.jpg' },
  { id: 6, name: 'Frozen Foods', image: '/assets/category-thumb-6.jpg' },
  { id: 7, name: 'Snacks', image: '/assets/category-thumb-8.jpg' },
  { id: 8, name: 'Household', image: '/assets/category-thumb-4.jpg' },
];

const CategoryCarousel = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-bold text-primary hover:underline px-4 py-2 bg-primary/5 rounded-full">View All</a>
            <div className="flex gap-2">
              <button className="category-prev p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-primary hover:text-white transition-all text-gray-400">
                <ChevronLeft size={20} />
              </button>
              <button className="category-next p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-primary hover:text-white transition-all text-gray-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: '.category-prev',
            nextEl: '.category-next',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="!overflow-visible"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-primary/20 transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors" />
                </div>
                <h4 className="text-center font-bold text-gray-800 group-hover:text-primary transition-colors text-sm lg:text-base">
                  {category.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryCarousel;

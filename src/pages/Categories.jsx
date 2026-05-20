import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 1,
    label: 'Fruits',
    category: 'Fruits',
    image: '/assets/category-thumb-1.jpg',
  },
  {
    id: 2,
    label: 'Vegetables',
    category: 'Vegetables',
    image: '/assets/category-thumb-2.jpg',
  },
  {
    id: 3,
    label: 'Meat Products',
    category: 'Meat Products',
    image: '/assets/category-thumb-5.jpg',
  },
  {
    id: 4,
    label: 'Drinks',
    category: 'Drinks',
    image: '/assets/category-thumb-3.jpg',
  },
  {
    id: 5,
    label: 'Snacks',
    category: 'Snacks',
    image: '/assets/category-thumb-8.jpg',
  },
  {
    id: 6,
    label: 'Dairy & Eggs',
    category: 'Dairy & Eggs',
    image: '/assets/category-thumb-7.jpg',
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fff8] via-white to-[#f9fafb] overflow-hidden">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase font-bold tracking-[0.3em] text-green-600">
            Categories
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Shop by Product Type
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Pick a category to browse products in that section of the shop.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCategoryClick(item.category)}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="px-6 py-7 text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-green-600 font-bold mb-2">
                  {item.label}
                </p>
                <h2 className="text-2xl font-black text-slate-900">
                  {item.label}
                </h2>
                <p className="mt-3 text-gray-500">
                  View all {item.label.toLowerCase()} products in the shop.
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;

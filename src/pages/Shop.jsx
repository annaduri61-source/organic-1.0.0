import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Grid2X2,
  LayoutGrid,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Leaf,
} from 'lucide-react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  useSearchParams,
} from 'react-router-dom';

import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {

  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const [searchParams, setSearchParams] =
    useSearchParams();

  const [sortOption, setSortOption] =
    useState('newest');

  const [gridCols, setGridCols] =
    useState(4);

  const [searchTerm, setSearchTerm] =
    useState('');

  const [showFilters, setShowFilters] =
    useState(false);

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 8;

  const categories = useMemo(
    () => [
      'All',
      ...new Set(
        products.map((p) => p.category)
      ),
    ],
    []
  );

  useEffect(() => {

    const categoryParam =
      searchParams.get('category');

    if (
      categoryParam &&
      categories.includes(categoryParam)
    ) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }

  }, [searchParams, categories]);

  const filteredProducts = useMemo(() => {

    let filtered =
      selectedCategory === 'All'
        ? [...products]
        : products.filter(
            (product) =>
              product.category ===
              selectedCategory
          );

    filtered = filtered.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

    filtered.sort((a, b) => {

      if (sortOption === 'low') {
        return a.price - b.price;
      }

      if (sortOption === 'high') {
        return b.price - a.price;
      }

      if (sortOption === 'newest') {
        return b.id - a.id;
      }

      return 0;
    });

    return filtered;

  }, [
    selectedCategory,
    sortOption,
    searchTerm,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    searchTerm,
    sortOption,
  ]);

  const indexOfLastProduct =
    currentPage * productsPerPage;

  const indexOfFirstProduct =
    indexOfLastProduct -
    productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

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
        opacity-[0.06]

        bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

        bg-[size:80px_80px]
        " />

        {/* GLOW */}
        <div className="
        absolute
        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-green-500/20
        blur-[180px]
        " />

        <div className="
        absolute
        bottom-0
        right-0

        w-[500px]
        h-[500px]

        bg-emerald-500/20
        blur-[180px]
        " />

      </div>

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="
      relative
      min-h-[90vh]

      flex
      items-center

      overflow-hidden

      pt-10

      z-20
      ">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="
            w-full
            h-full
            object-cover
            scale-105
            "
          />

          {/* OVERLAY */}
          <div className="
          absolute
          inset-0
          bg-black/70
          " />

          {/* SIDE SHADOW */}
          <div className="
          absolute
          inset-0

          bg-gradient-to-r
          from-[#050816]
          via-[#050816]/70
          to-transparent
          " />

        </div>

        <div className="
        container
        mx-auto
        px-4
        relative
        z-20
        ">

          <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          ">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              {/* TAG */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                inline-flex
                items-center
                gap-3

                bg-green-500/10
                border
                border-green-400/20

                px-6
                py-3

                rounded-full

                backdrop-blur-xl

                mb-8
                "
              >

                <Leaf
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
                  Organic Lifestyle
                </span>

              </motion.div>

              {/* TITLE */}
              <h1 className="
              text-6xl
              md:text-8xl

              font-black

              leading-[0.9]
              ">

                Fresh <br />

                <motion.span
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                  text-green-400
                  italic
                  "
                >
                  Healthy
                </motion.span>

                <br />

                Market

              </h1>

              {/* DESC */}
              <p className="
              mt-8
              max-w-2xl

              text-xl
              leading-relaxed

              text-gray-300
              ">

                Experience premium organic shopping with
                modern futuristic design, healthy foods,
                farm fresh vegetables and immersive shopping.

              </p>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
              relative
              h-[700px]
              hidden
              lg:block
              "
            >

              {/* MAIN IMAGE */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-10
                left-10

                w-[500px]
                h-[620px]

                rounded-[40px]
                overflow-hidden

                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover

                  hover:scale-110
                  transition-transform
                  duration-1000
                  "
                />

                <div className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
                " />

              </motion.div>

              {/* SIDE IMAGE */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
                className="
                absolute
                -right-10
                top-32

                w-[260px]
                h-[340px]

                rounded-[35px]
                overflow-hidden

                border
                border-white/10

                shadow-[0_20px_80px_rgba(0,0,0,0.5)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

              </motion.div>

              {/* BOTTOM IMAGE */}
              <motion.div
                animate={{
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-0
                right-20

                w-[320px]
                h-[220px]

                rounded-[35px]
                overflow-hidden

                border
                border-white/10

                shadow-[0_20px_80px_rgba(0,0,0,0.5)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SHOP CONTENT */}
      {/* ================================================= */}

      <section className="
      relative
      z-20

      container
      mx-auto
      px-4
      pb-24
      ">

        {/* TOPBAR */}
        <div className="
        bg-white/5
        backdrop-blur-3xl

        border
        border-white/10

        rounded-[35px]

        p-6

        mb-12

        flex
        flex-col
        xl:flex-row
        xl:items-center
        justify-between
        gap-5
        ">

          {/* SEARCH */}
          <div className="
          relative
          flex-1
          max-w-xl
          ">

            <Search
              size={20}
              className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search healthy products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
              w-full
              h-16

              rounded-3xl

              bg-white/5

              border
              border-white/10

              pl-14
              pr-5

              text-white

              outline-none

              focus:ring-2
              focus:ring-green-400
              "
            />
          </div>

          {/* RIGHT */}
          <div className="
          flex
          flex-wrap
          items-center
          gap-4
          ">

            {/* FILTER */}
            <button
              onClick={() =>
                setShowFilters(!showFilters)
              }
              className="
              lg:hidden

              h-14
              px-5

              rounded-2xl

              bg-white/5

              border
              border-white/10

              flex
              items-center
              gap-2
              "
            >

              <SlidersHorizontal size={18} />

              Filters

            </button>

            {/* SORT */}
            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(e.target.value)
              }
              className="
              h-14
              px-5

              rounded-2xl

              bg-white/5

              border
              border-white/10

              outline-none
              "
            >

              <option value="newest">
                Newest
              </option>

              <option value="low">
                Price: Low → High
              </option>

              <option value="high">
                Price: High → Low
              </option>

            </select>

            {/* GRID */}
            <div className="
            flex
            items-center
            gap-2
            ">

              <button
                onClick={() =>
                  setGridCols(2)
                }
                className={`
                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                transition-all

                ${
                  gridCols === 2
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-300'
                }
                `}
              >

                <LayoutGrid size={20} />

              </button>

              <button
                onClick={() =>
                  setGridCols(4)
                }
                className={`
                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                transition-all

                ${
                  gridCols === 4
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-300'
                }
                `}
              >

                <Grid2X2 size={20} />

              </button>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="
        grid
        lg:grid-cols-[300px_1fr]
        gap-10
        ">

          {/* SIDEBAR */}
          <AnimatePresence>

            {(showFilters ||
              window.innerWidth >= 1024) && (

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                }}
              >

                <div className="
                sticky
                top-28

                bg-white/5
                backdrop-blur-3xl

                border
                border-white/10

                rounded-[35px]

                p-8
                ">

                  <h2 className="
                  text-4xl
                  font-black
                  mb-8
                  ">
                    Categories
                  </h2>

                  <div className="space-y-4">

                    {categories.map(
                      (category) => (

                        <motion.button
                          key={category}
                          whileHover={{
                            scale: 1.04,
                            x: 5,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                          onClick={() => {

                            setSelectedCategory(
                              category
                            );

                            setSearchParams(
                              category === 'All'
                                ? {}
                                : { category }
                            );
                          }}
                          className={`
                          w-full
                          text-left

                          px-6
                          py-5

                          rounded-3xl

                          font-black

                          transition-all

                          ${
                            selectedCategory ===
                            category
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                              : 'bg-white/5 hover:bg-white/10 text-gray-200'
                          }
                          `}
                        >

                          {category}

                        </motion.button>
                      )
                    )}

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PRODUCTS */}
          <div>

            <motion.div
              layout
              className={`grid gap-8 items-stretch ${
                gridCols === 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}
            >

              <AnimatePresence mode="popLayout">

                {currentProducts.map(
                  (product) => (

                    <motion.div
                      key={product.id}
                      layout
                      initial={{
                        opacity: 0,
                        y: 60,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      whileHover={{
                        y: -15,
                      }}
                    >

                      <ProductCard
                        product={product}
                      />

                    </motion.div>
                  )
                )}

              </AnimatePresence>
            </motion.div>

            {/* PAGINATION */}
            <div className="
            flex
            items-center
            justify-center
            gap-3

            mt-20

            flex-wrap
            ">

              {/* PREV */}
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className="
                w-14
                h-14

                rounded-2xl

                bg-white/5

                border
                border-white/10

                flex
                items-center
                justify-center

                hover:bg-green-500

                transition-all

                disabled:opacity-40
                "
              >

                <ChevronLeft size={20} />

              </button>

              {/* NUMBERS */}
              {[...Array(totalPages)].map(
                (_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`
                    w-14
                    h-14

                    rounded-2xl

                    font-black

                    transition-all

                    ${
                      currentPage ===
                      index + 1
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }
                    `}
                  >

                    {index + 1}

                  </button>
                )
              )}

              {/* NEXT */}
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      totalPages
                    )
                  )
                }
                disabled={
                  currentPage === totalPages
                }
                className="
                w-14
                h-14

                rounded-2xl

                bg-white/5

                border
                border-white/10

                flex
                items-center
                justify-center

                hover:bg-green-500

                transition-all

                disabled:opacity-40
                "
              >

                <ChevronRight size={20} />

              </button>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Grid2X2,
  LayoutGrid,
  Search,
  Sparkles,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
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

  /* CATEGORY */
  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const [searchParams, setSearchParams] =
    useSearchParams();

  /* SORT */
  const [sortOption, setSortOption] =
    useState('newest');

  /* GRID */
  const [gridCols, setGridCols] =
    useState(4);

  /* SEARCH */
  const [searchTerm, setSearchTerm] =
    useState('');

  /* MOBILE FILTER */
  const [showFilters, setShowFilters] =
    useState(false);

  /* PAGINATION */
  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 8;

  /* CATEGORIES */
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

  /* FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {

    let filtered =
      selectedCategory === 'All'
        ? [...products]
        : products.filter(
            (product) =>
              product.category ===
              selectedCategory
          );

    /* SEARCH */
    filtered = filtered.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

    /* SORT */
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

  /* RESET PAGE */
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    searchTerm,
    sortOption,
  ]);

  /* PAGINATION */
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
    bg-gradient-to-b
    from-[#f7fff8]
    via-white
    to-[#f9fafb]
    ">

      {/* HERO */}
      <section className="
      relative
      overflow-hidden
      py-16
      ">

        {/* BLUR BG */}
        <div className="
        absolute
        -top-20
        -left-20
        w-72
        h-72
        bg-green-200
        rounded-full
        blur-[120px]
        opacity-40
        " />

        <div className="
        absolute
        top-0
        right-0
        w-72
        h-72
        bg-lime-200
        rounded-full
        blur-[120px]
        opacity-40
        " />

        <div className="
        container
        mx-auto
        px-4
        relative
        z-10
        ">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center"
          >

            {/* BADGE */}
            <div className="
            inline-flex
            items-center
            gap-2
            bg-white
            shadow-lg
            border
            border-gray-100
            rounded-full
            px-5
            py-2
            mb-6
            ">

              <Sparkles
                size={16}
                className="text-yellow-500"
              />

              <span className="
              text-sm
              font-bold
              text-gray-700
              ">
                Organic Premium Collection
              </span>
            </div>

            {/* TITLE */}
            <h1 className="
            text-5xl
            md:text-7xl
            font-black
            text-gray-900
            leading-tight
            ">

              Fresh Organic

              <span className="
              block
              bg-gradient-to-r
              from-green-500
              to-lime-500
              bg-clip-text
              text-transparent
              ">
                Healthy Products
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="
            max-w-2xl
            mx-auto
            text-gray-500
            text-lg
            mt-6
            leading-8
            ">

              Discover fresh organic foods,
              healthy vegetables, fruits,
              dairy products and groceries.

            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className="
      container
      mx-auto
      px-4
      pb-20
      ">

        {/* TOPBAR */}
        <div className="
        bg-white/80
        backdrop-blur-xl
        border
        border-white/40
        shadow-xl
        rounded-[36px]
        p-6
        mb-10

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
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
              w-full
              h-16
              rounded-2xl
              bg-gray-50
              border
              border-gray-100
              pl-14
              pr-5
              text-gray-700
              font-semibold
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

            {/* MOBILE FILTER */}
            <button
              onClick={() =>
                setShowFilters(!showFilters)
              }
              className="
              lg:hidden
              h-14
              px-5
              rounded-2xl
              bg-white
              border
              border-gray-200
              flex
              items-center
              gap-2
              font-bold
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
              bg-white
              border
              border-gray-200
              font-bold
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
                    : 'bg-white border border-gray-200 text-gray-500'
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
                    : 'bg-white border border-gray-200 text-gray-500'
                }
                `}
              >

                <Grid2X2 size={20} />

              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="
        grid
        lg:grid-cols-[280px_1fr]
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

                bg-white/80
                backdrop-blur-xl

                border
                border-white/50

                rounded-[36px]

                shadow-xl

                p-6
                ">

                  <h2 className="
                  text-3xl
                  font-black
                  text-gray-900
                  mb-8
                  ">
                    Categories
                  </h2>

                  <div className="space-y-3">

                    {categories.map(
                      (category) => (

                        <motion.button
                          key={category}
                          whileHover={{
                            scale: 1.03,
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

                          px-5
                          py-4

                          rounded-2xl

                          font-black

                          transition-all

                          ${
                            selectedCategory ===
                            category
                              ? 'bg-gradient-to-r from-green-500 to-lime-500 text-white shadow-lg'
                              : 'bg-gray-50 hover:bg-green-50 text-gray-700'
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
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
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
            mt-16
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
                w-12
                h-12

                rounded-2xl

                bg-white

                border
                border-green-100

                flex
                items-center
                justify-center

                shadow-sm

                hover:bg-green-500
                hover:text-white

                transition-all

                disabled:opacity-40
                "
              >

                <ChevronLeft size={18} />

              </button>

              {/* PAGE NUMBERS */}
              {[...Array(totalPages)].map(
                (_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`
                    w-12
                    h-12

                    rounded-2xl

                    font-black

                    transition-all

                    ${
                      currentPage ===
                      index + 1
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-white text-slate-700 border border-green-100 hover:bg-green-50'
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
                w-12
                h-12

                rounded-2xl

                bg-white

                border
                border-green-100

                flex
                items-center
                justify-center

                shadow-sm

                hover:bg-green-500
                hover:text-white

                transition-all

                disabled:opacity-40
                "
              >

                <ChevronRight size={18} />

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
import {
  Package,
  PlusCircle,
  Pencil,
  Trash2,
  ShoppingBag,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const AdminDashboard = () => {

  return (

    <div className="
    min-h-screen
    bg-[#050816]
    text-white
    px-4
    lg:px-10
    py-10
    ">

      {/* HEADER */}
      <div className="mb-14">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <div className="
          inline-flex
          items-center
          gap-3

          px-6
          py-3

          rounded-full

          bg-white/5

          border
          border-white/10

          mb-8
          ">

            <ShoppingBag
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

              Admin Panel

            </span>

          </div>

          <h1 className="
          text-6xl
          font-black
          leading-tight
          ">

            Admin Dashboard

          </h1>

          <p className="
          text-gray-400
          text-lg
          mt-4
          ">

            Manage products and ecommerce operations.

          </p>

        </motion.div>

      </div>

      {/* CARDS */}
      <div className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-8
      ">

        {/* ADD PRODUCT */}
        <Link to="/admin/add-product">

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="
            bg-white/5
            backdrop-blur-3xl

            border
            border-white/10

            rounded-[35px]

            p-8

            hover:border-green-500/40

            transition-all
            "
          >

            <div className="
            w-20
            h-20

            rounded-3xl

            bg-gradient-to-br
            from-green-500
            to-emerald-600

            flex
            items-center
            justify-center

            mb-6
            ">

              <PlusCircle size={35} />

            </div>

            <h2 className="
            text-3xl
            font-black
            mb-3
            ">

              Add Product

            </h2>

            <p className="
            text-gray-400
            leading-relaxed
            ">

              Upload new products to your store.

            </p>

          </motion.div>

        </Link>

        {/* EDIT PRODUCT */}
        <motion.div
          whileHover={{
            y: -10,
          }}
          className="
          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[35px]

          p-8
          "
        >

          <div className="
          w-20
          h-20

          rounded-3xl

          bg-gradient-to-br
          from-blue-500
          to-cyan-500

          flex
          items-center
          justify-center

          mb-6
          ">

            <Pencil size={35} />

          </div>

          <h2 className="
          text-3xl
          font-black
          mb-3
          ">

            Edit Product

          </h2>

          <p className="
          text-gray-400
          leading-relaxed
          ">

            Update existing product details.

          </p>

        </motion.div>

        {/* DELETE */}
        <motion.div
          whileHover={{
            y: -10,
          }}
          className="
          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[35px]

          p-8
          "
        >

          <div className="
          w-20
          h-20

          rounded-3xl

          bg-gradient-to-br
          from-red-500
          to-pink-500

          flex
          items-center
          justify-center

          mb-6
          ">

            <Trash2 size={35} />

          </div>

          <h2 className="
          text-3xl
          font-black
          mb-3
          ">

            Delete Product

          </h2>

          <p className="
          text-gray-400
          leading-relaxed
          ">

            Remove products from your store.

          </p>

        </motion.div>

        {/* PRODUCTS */}
        <motion.div
          whileHover={{
            y: -10,
          }}
          className="
          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          rounded-[35px]

          p-8
          "
        >

          <div className="
          w-20
          h-20

          rounded-3xl

          bg-gradient-to-br
          from-purple-500
          to-fuchsia-500

          flex
          items-center
          justify-center

          mb-6
          ">

            <Package size={35} />

          </div>

          <h2 className="
          text-3xl
          font-black
          mb-3
          ">

            All Products

          </h2>

          <p className="
          text-gray-400
          leading-relaxed
          ">

            Manage all available store products.

          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default AdminDashboard;
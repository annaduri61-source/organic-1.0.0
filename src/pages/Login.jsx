import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Leaf,
} from 'lucide-react';

import { motion } from 'framer-motion';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-white to-green-100 flex items-center justify-center px-4 py-10 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white shadow-2xl rounded-[40px] overflow-hidden grid lg:grid-cols-2"
      >

        {/* LEFT */}
        <div className="hidden lg:flex bg-gradient-to-br from-green-500 to-lime-500 text-white p-14 flex-col justify-center relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20"></div>
          <div className="absolute w-72 h-72 bg-black/10 rounded-full -bottom-20 -right-20"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-6">
              <Leaf size={48} />
              <h1 className="text-5xl font-black">
                Organic
              </h1>
            </div>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Welcome
              <br />
              Back
            </h2>

            <p className="text-lg text-white/90 leading-8">
              Login to continue shopping premium organic foods and fresh products.
            </p>

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-3xl mt-10 shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-4xl font-black text-gray-800">
              Login Account
            </h2>

            <p className="text-gray-500 mt-3">
              Enter your credentials to continue
            </p>
          </div>

          <form className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-green-500 transition-all">
                <Mail className="text-green-500 mr-3" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-green-500 transition-all">

                <Lock className="text-green-500 mr-3" size={20} />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="w-full outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-400" />
                  ) : (
                    <Eye size={20} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* REMEMBER */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-green-500" />
                Remember me
              </label>

              <button className="text-green-600 font-semibold hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* BUTTON */}
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300">
              Login Now
            </button>
          </form>

          {/* REGISTER */}
          <div className="text-center mt-8">

            <p className="text-gray-600">
              Don't have an account?

              <Link
                to="/register"
                className="ml-2 text-green-600 font-bold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
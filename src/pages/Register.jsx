import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  Leaf,
} from 'lucide-react';

import { motion } from 'framer-motion';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-100 flex items-center justify-center px-4 py-10 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white shadow-2xl rounded-[40px] overflow-hidden grid lg:grid-cols-2"
      >

        {/* LEFT */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-4xl font-black text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-3">
              Join our organic store today
            </p>
          </div>

          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Full Name
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                <User className="text-green-500 mr-3" size={20} />

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Phone Number
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                <Phone className="text-green-500 mr-3" size={20} />

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">
                <Mail className="text-green-500 mr-3" size={20} />

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-5 py-4">

                <Lock className="text-green-500 mr-3" size={20} />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create password"
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

            {/* TERMS */}
            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="accent-green-500 mt-1"
              />

              I agree with Terms & Conditions and Privacy Policy.
            </label>

            {/* BUTTON */}
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300">
              Create Account
            </button>
          </form>

          {/* LOGIN */}
          <div className="text-center mt-8">

            <p className="text-gray-600">
              Already have an account?

              <Link
                to="/login"
                className="ml-2 text-green-600 font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex bg-gradient-to-br from-lime-500 to-green-600 text-white p-14 flex-col justify-center relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -right-20"></div>
          <div className="absolute w-72 h-72 bg-black/10 rounded-full -bottom-20 -left-20"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-6">
              <Leaf size={48} />
              <h1 className="text-5xl font-black">
                Organic
              </h1>
            </div>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Fresh Food
              <br />
              Healthy Life
            </h2>

            <p className="text-lg text-white/90 leading-8">
              Create your account and enjoy premium quality organic products daily.
            </p>

            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-3xl mt-10 shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
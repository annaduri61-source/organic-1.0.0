import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

/* ======================================= */
/* COMPONENTS */
/* ======================================= */

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

/* ======================================= */
/* PAGES */
/* ======================================= */

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Shop from './pages/Shop';
import Categories from './pages/Categories';
import SingleProduct from './pages/SingleProduct';

import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

import Login from './pages/Login';
import Register from './pages/Register';

import AdminDashboard from './pages/AdminDashboard';

/* ======================================= */
/* CONTEXT */
/* ======================================= */

import { WishlistProvider } from './context/WishlistContext';

function App() {

  return (

    <WishlistProvider>

      <Router>

        {/* SCROLL TO TOP */}
        <ScrollToTop />

        <div className="
        min-h-screen
        flex
        flex-col
        app-shell
        text-slate-950
        ">

          {/* ======================================= */}
          {/* NAVBAR */}
          {/* ======================================= */}

          <Navbar />

          {/* ======================================= */}
          {/* MAIN CONTENT */}
          {/* ======================================= */}

          <main className="flex-grow">

            <Routes>

              {/* ======================================= */}
              {/* PUBLIC ROUTES */}
              {/* ======================================= */}

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/shop"
                element={<Shop />}
              />

              <Route
                path="/categories"
                element={<Categories />}
              />

              <Route
                path="/product/:id"
                element={<SingleProduct />}
              />

              {/* ======================================= */}
              {/* AUTH ROUTES */}
              {/* ======================================= */}

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/register"
                element={<Register />}
              />

              {/* ======================================= */}
              {/* PROTECTED USER ROUTES */}
              {/* ======================================= */}

              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />

              {/* ======================================= */}
              {/* ADMIN ROUTES */}
              {/* ======================================= */}

              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />

            </Routes>

          </main>

          {/* ======================================= */}
          {/* FOOTER */}
          {/* ======================================= */}

          <Footer />

        </div>

      </Router>

    </WishlistProvider>
  );
}

export default App;
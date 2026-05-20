import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';

// Context
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>

          <div className="min-h-screen flex flex-col app-shell text-slate-950">

            <Navbar />

            <main className="flex-grow">

              <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/shop" element={<Shop />} />

                <Route path="/categories" element={<Categories />} />

                <Route path="/product/:id" element={<SingleProduct />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/wishlist" element={<Wishlist />} />

                {/* AUTH */}
                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

              </Routes>

            </main>

            <Footer />

          </div>

        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
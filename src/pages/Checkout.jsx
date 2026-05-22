import {
  Truck,
  CreditCard,
  MapPin,
} from 'lucide-react';

import { useCart } from '../context/CartContext';

import { useState } from 'react';

const Checkout = () => {

  const { cartItems, cartTotal } =
    useCart();

  const [formData, setFormData] =
    useState({
      fullName: '',
      phone: '',
      address: '',
      city: '',
      pincode: '',
    });

  const changeHandler = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {

    e.preventDefault();

    alert(
      'Checkout Saved Successfully'
    );
  };

  return (

    <div className="
    min-h-screen
    bg-[#050816]
    text-white
    px-4
    py-10
    ">

      <div className="
      max-w-7xl
      mx-auto

      grid
      lg:grid-cols-[1fr_420px]
      gap-10
      ">

        {/* LEFT */}
        <div>

          <div className="
          flex
          items-center
          gap-4
          mb-10
          ">

            <Truck
              size={40}
              className="text-green-400"
            />

            <div>

              <h1 className="
              text-5xl
              font-black
              ">
                Checkout
              </h1>

              <p className="
              text-gray-400
              mt-2
              ">
                Complete your order
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={submitHandler}
            className="
            bg-white/5
            border
            border-white/10
            rounded-[35px]
            p-8
            space-y-6
            "
          >

            {/* NAME */}
            <div>

              <label className="
              block
              mb-3
              font-semibold
              ">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={changeHandler}
                required
                className="
                w-full
                h-16
                rounded-2xl
                bg-white/5
                border
                border-white/10
                px-5
                outline-none
                focus:ring-2
                focus:ring-green-400
                "
              />
            </div>

            {/* PHONE */}
            <div>

              <label className="
              block
              mb-3
              font-semibold
              ">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
                required
                className="
                w-full
                h-16
                rounded-2xl
                bg-white/5
                border
                border-white/10
                px-5
                outline-none
                focus:ring-2
                focus:ring-green-400
                "
              />
            </div>

            {/* ADDRESS */}
            <div>

              <label className="
              block
              mb-3
              font-semibold
              ">
                Address
              </label>

              <textarea
                rows="4"
                name="address"
                value={formData.address}
                onChange={changeHandler}
                required
                className="
                w-full
                rounded-2xl
                bg-white/5
                border
                border-white/10
                p-5
                outline-none
                focus:ring-2
                focus:ring-green-400
                "
              />
            </div>

            {/* CITY */}
            <div className="
            grid
            md:grid-cols-2
            gap-5
            ">

              <div>

                <label className="
                block
                mb-3
                font-semibold
                ">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={changeHandler}
                  required
                  className="
                  w-full
                  h-16
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  px-5
                  outline-none
                  focus:ring-2
                  focus:ring-green-400
                  "
                />
              </div>

              <div>

                <label className="
                block
                mb-3
                font-semibold
                ">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={changeHandler}
                  required
                  className="
                  w-full
                  h-16
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  px-5
                  outline-none
                  focus:ring-2
                  focus:ring-green-400
                  "
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
              w-full
              h-16

              rounded-2xl

              bg-gradient-to-r
              from-green-500
              to-emerald-600

              text-xl
              font-black

              flex
              items-center
              justify-center
              gap-3
              "
            >

              <CreditCard size={22} />

              Continue Payment

            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div>

          <div className="
          sticky
          top-28

          bg-white/5
          border
          border-white/10

          rounded-[35px]

          p-8
          ">

            <div className="
            flex
            items-center
            gap-3
            mb-8
            ">

              <MapPin
                size={26}
                className="text-green-400"
              />

              <h2 className="
              text-3xl
              font-black
              ">
                Order Summary
              </h2>
            </div>

            {/* ITEMS */}
            <div className="space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-20
                    h-20
                    rounded-2xl
                    object-cover
                    "
                  />

                  <div className="flex-1">

                    <h3 className="
                    font-bold
                    ">
                      {item.name}
                    </h3>

                    <p className="
                    text-gray-400
                    text-sm
                    ">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <h4 className="
                  font-black
                  text-green-400
                  ">
                    ₹
                    {item.price * item.qty}
                  </h4>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="
            border-t
            border-white/10
            mt-8
            pt-8
            ">

              <div className="
              flex
              items-center
              justify-between
              text-2xl
              font-black
              ">

                <span>Total</span>

                <span className="
                text-green-400
                ">
                  ₹{cartTotal}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
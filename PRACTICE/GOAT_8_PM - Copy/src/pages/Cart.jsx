import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedProducts } from "../redux/slice/cartSlice";

const sampleProduct = {
  id: 0,
  title: "Gildan Men's Crew T-Shirts, Multipack, Style G1100",
  category: "Men",
  photo: "https://m.media-amazon.com/images/I/710o0VupScL._AC_UL320_.jpg",
  price: 19.97,
};

const Cart = () => {
  const product = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("There is product in main: ", product);
  }, [product])
  const [cart, setCart] = useState([]);
  useEffect(() => {
    dispatch(fetchedProducts(10))
  }, [dispatch])

  const addToCart = () => {
    setCart([...cart, { ...sampleProduct, id: Date.now() }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">🛍 Your Cart</h1>

        <button
          className="mb-6 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition duration-200"
          onClick={addToCart}
        >
          + Add Sample Product
        </button>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-lg font-bold text-gray-700">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 border-t pt-4 text-right text-xl font-bold text-gray-800">
            Total: ${total}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

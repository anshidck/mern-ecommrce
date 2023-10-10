import React from "react";
import CartItems from "../components/user/CartItems";
import { useSelector } from "react-redux";
import Navbar from "../components/user/Navbar";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:grid md:grid-cols-4 p-3 gap-3">
        <div className="col-span-3 flex flex-col gap-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItems key={item._id} item={item} />)
          ) : (
            <h1 className="flex my-auto text-3xl font-bold text-teal-700 justify-center">Cart Empty</h1>
          )}
        </div>
        <div className="col-span-1 bg-teal-700 text-white rounded p-3 h-[90px] flex flex-col gap-3">
          <h1 className="font-bold text-lg">
            Sub Total ({cartTotalQuantity} items): ${cartTotalAmount}
          </h1>
          <Link to='/checkout' className="flex items-center justify-center w-full font-bold bg-white text-teal-700 rounded">
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;

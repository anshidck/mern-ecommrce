import React from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../features/cart/cartSlice";
import { ImCross } from 'react-icons/im'

function CartItems({ item }) {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 border-2 border-teal-700 rounded gap-6 p-3">
      <img
        className="h-[250px] w-full md:h-[200px] object-cover rounded"
        src={item.image}
        alt="car"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-sm md:text-lg font-bold text-teal-950">
          {item.description}
        </h1>
        <Rating rating={item.rating} numReviews={item.numReviews} />
        <p className="font-bold text-xl">{item.brand}</p>
        <p className="text-2xl text-teal-950 font-semibold">$ {item.price}</p>
        <div className="flex item-center ">
          <button onClick={() => dispatch(addToCart(item))} className="text-lg font-bold bg-teal-700 p-3 w-[20px] h-[20px] text-white flex items-center justify-center rounded ">+</button>
          <p className="font-bold text-lg border border-teal-700 px-2 rounded">{item.cartQuantity}</p>
          <button onClick={() => dispatch(decreaseCart(item))} className="text-lg font-bold bg-teal-700 p-3 w-[20px] h-[20px] text-white flex items-center justify-center rounded ">-</button>
        </div>
      </div>
      <button onClick={() => dispatch(removeFromCart(item))}  className="flex justify-end"><ImCross/></button>
    </div>
  );
}

export default CartItems;

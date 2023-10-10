import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { getproductById } from "../../features/product/productSlice";
import { addToCart } from "../../features/cart/cartSlice";

function Card({ item }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleItem = (item) => {
    dispatch(getproductById(item))
  }
  const handleAddItem = (item) => {
    if (user) {
      dispatch(addToCart(item))
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      <div className="shadow-sm shadow-black md:p-2 rounded bg-white border md:border-2 border-teal-700 flex flex-col justify-between">
        <div>
          <img
            className="p-2 w-full h-[150px] md:h-[200px] object-cover "
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="px-2 md:py-3">
          <h1 className="font-bold text-base sm:text-xl text-teal-900 flex items-center justify-center">
            {item.name}
          </h1>
          <div className="flex items-center justify-center">{item.description}</div>
          <div className="flex justify-center">
            <Rating rating={item.rating} numReviews={item.numReviews} />
          </div>
          <div className="font-bold text-teal-900 text-base sm:text-3xl flex items-center justify-center gap-2">
            ${item.price} <span className="text-[7px] md:text-base text-black">FREE delivery By E-shop</span>
          </div>
        </div>
        <div className="grid grid-cols-2 px-2 gap-2 my-3">
          <button
            className="bg-teal-700 text-white col-span-1 py-2 px-2 rounded font-bold text-[8px] sm:text-sm"
            onClick={() => handleAddItem(item)}
          >
            Add to Cart
          </button>
          <Link
            onClick={() => handleItem(item._id)}
            to={`/details/${item._id}`}
            className="bg-white col-span-1 text-teal-700 border border-teal-700 font-bold rounded flex justify-center items-center text-sm sm:text-lg"
          >
            view
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;

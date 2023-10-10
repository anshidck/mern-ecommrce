import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getproductById } from "../../features/product/productSlice";

function Details() {
  const id = useParams()
  const {item} = useSelector((state) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getproductById(id))
  },[dispatch, id])
  return (
    <div className="p-3 py-4 w-full flex flex-col items-center gap-2 bg-white  ">
      <div className="w-[90%] gap-10 justify-center flex flex-col md:grid md:grid-cols-3">
        <img
          className="w-full h-[250px] md:h-[400px]  col-span-1"
          src={item.image}
          alt="car"
        />
        <div className="flex flex-col gap-2  col-span-1">
          <h1 className="text-5xl font-bold text-teal-950">
            {item.name}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <Rating rating={item.rating} numReviews={item.numReviews} />
          <p className="font-bold text-xl">{item.brand}</p>
          <p className="text-2xl text-teal-950 font-semibold">$ {item.price}</p>
          <div className="flex justify-between">
            <p className="flex flex-col  text-teal-700">
              <FaRegMoneyBillAlt size={23} /> <span>PAY on Delivery</span>
            </p>
            <p className="flex flex-col text-teal-700">
              <FaRotate size={23} /> <span>Return & Exchange</span>
            </p>
            <p className="flex flex-col text-teal-700">
              <TbTruckDelivery size={23} /> <span>FREE Delivery</span>
            </p>
            <p className="flex flex-col text-teal-700">
              <BsShieldCheck size={23} /> <span>7 Days Warranty</span>
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          {item.countInStock > 0 ? (<p className="bg-green-500 text-white flex justify-center items-center p-1 rounded">in Stock</p>) : (<p className="bg-red-700 text-white flex justify-center items-center p-1 rounded">out of Stock</p>)}
          <p className="text-teal-700 font-bold">$ {item.price} FREE Delivery</p>
          <button className="font-bold text-white bg-teal-700 p-3">
            Buy Now
          </button>
          <Link
            to="/home"
            className="p-3 text-teal-700 border border-teal-700 font-bold flex justify-center"
          >
            Add To Cart
          </Link>
          <p>Secure Transation</p>
        </div>
      </div>
    </div>
  );
}

export default Details;

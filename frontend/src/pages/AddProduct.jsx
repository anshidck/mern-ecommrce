import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../features/product/productSlice";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    countInStock: "",
    rating: "",
    numReviews: "",
  });

  const {
    name,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
    rating,
    numReviews,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, message, isSuccess } = useSelector((state) => state.product);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message, isSuccess, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      image,
      brand,
      category,
      description,
      price,
      countInStock,
      rating,
      numReviews,
    };
    dispatch(createProduct(productData));
    toast.success('New Product Added')
    navigate("/admin");
  };

  return (
    <div className="p-4 w-full md:w-[60%] mx-auto ">
      <div className="border-4 border-teal-700 rounded p-6 flex flex-col gap-5">
        <h1 className="font-bold text-3xl md:text-6xl flex gap-1 justify-center items-center">
          Add your Product
        </h1>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-3 items-center p-3"
        >
          <input
            value={name}
            name="name"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="text"
            placeholder="Enter Your product Name"
          />
          <input
            value={image}
            name="image"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="text"
            placeholder="Product Image..."
          />
          <input
            value={brand}
            name="brand"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="text"
            placeholder="product Brand"
          />
          <input
            value={category}
            name="category"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="text"
            placeholder="Category"
          />
          <input
            value={description}
            name="description"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="text"
            placeholder="Description"
          />
          <input
            value={price}
            name="price"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="number"
            placeholder="Price"
          />
          <input
            value={countInStock}
            name="countInStock"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="number"
            placeholder="Product Stock"
          />
          <input
            value={rating}
            name="rating"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="number"
            placeholder="Product Rating"
          />
          <input
            value={numReviews}
            name="numReviews"
            onChange={onChange}
            className="w-[80%] md:w-[50%] p-3 rounded-sm border outline-teal-700"
            type="number"
            placeholder="numReviews"
          />
          <button
            type="submit"
            className="w-[80%] md:w-[50%] p-3 bg-teal-700 text-white rounded-sm font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

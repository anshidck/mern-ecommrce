import React from 'react'
import { useState, useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getproductById, updateProduct } from '../features/product/productSlice'
import { toast } from 'react-toastify'


function EditProduct() {
    const { id } = useParams();
    const { products } = useSelector((state) => state.product)
    const item = products.find(product => product._id === id) 
    const [formData, setFormData] = useState({
        name: item?.name,
        image: item?.image,
        brand: item?.brand,
        category: item?.category,
        description: item?.description,
        price: item?.price,
        countInStock: item?.countInStock,
        rating: item?.rating,
        numReviews: item?.numReviews,
    })
    
    const {  
        name,
        image,
        brand,
        category,
        description,
        price,
        countInStock,
        rating,
        numReviews, } = formData;

  
      const dispatch = useDispatch()
      const navigate = useNavigate()    
    
      useEffect(() => {
        dispatch(getproductById(id));   
      }, [dispatch, id]);
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ id: id, productData: formData }));
        toast.success('Product was changed')
        navigate('/admin')
      };
    
    
      return (
        <div className="p-4 w-full md:w-[60%] mx-auto ">
      <div className="border-4 border-teal-700 rounded p-6 flex flex-col gap-5">
        <h1 className="font-bold text-3xl md:text-6xl flex gap-1 justify-center items-center">
          Edit your Product
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
      )
}

export default EditProduct
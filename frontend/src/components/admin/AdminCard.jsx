import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, fetchAll } from '../../features/product/productSlice'

function AdminCard({ item }) {
  const dispatch = useDispatch()

  const handleDeleteItem = async(itemId) => {
    await dispatch(deleteProduct(itemId))
    dispatch(fetchAll())
  }
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 border-2 border-teal-700 rounded gap-6 p-3">
      <img
        className="h-[250px] w-[85%] md:h-[150px] object-cover rounded"
        src={item.image}
        alt="car"
      />
      <div className="flex flex-col justify-between ">
        <h1 className="text-sm md:text-lg font-bold text-teal-950">{item.name}</h1>
        <p className="font-bold text-xl">{item.brand}</p>
        <p className="text-2xl text-teal-950 font-semibold">$ {item.price}</p>
      </div>
      <div className='flex gap-14 items-center justify-center'>
        <button onClick={() => handleDeleteItem(item._id)} className='font-bold text-xl text-red-600'>Delete</button>
        <Link to={`/editProduct/${item._id}`} className='font-bold text-xl text-green-600'>Edit</Link>
        <button className='font-bold text-xl text-blue-600'>View</button>
      </div>
    </div>
  )
}

export default AdminCard
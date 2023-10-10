import React, { useEffect } from 'react'
import AdminCard from '../components/admin/AdminCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../features/product/productSlice'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

function AdminDashboard() {
    const { products, isLoading } = useSelector((state) => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAll())
    },[dispatch])

  return (
    <>
    {isLoading ? (<Spinner  type={`spin`} color={`#0e7479`}/>) :
     (
     <div className='flex flex-col gap-4 p-4'>
        <Link to='/add' className='w-full bg-teal-700 flex items-center justify-center p-2 rounded font-bold text-white'>+ Add Product</Link>
       {products && products.map((item) => (
        <AdminCard key={item._id} item={item}/>
       ))}
    </div>)}
    </>
  )
}

export default AdminDashboard;
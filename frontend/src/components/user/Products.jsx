import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../features/product/productSlice';
import Spinner from '../Spinner';

function Products() {
  const { products, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
    {isLoading ?
     (<Spinner  type={`spin`} color={`#0e7479`}/>) : (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 p-3 md:p-9'>
      {products &&
        products.map((item) => (
          <Card item={item} key={item._id} />
        ))}
    </div>
    )}
    </>
  );
}

export default Products;

import React from 'react';
import ReactLoading from 'react-loading';
 
const Spin = ({ type, color }) => (
    <ReactLoading className='mx-auto' type={type} color={color} height={47} width={45} />
);
 
export default Spin;
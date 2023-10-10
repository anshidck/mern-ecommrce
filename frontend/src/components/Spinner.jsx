import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = ({ type, color }) => (
    <div className='py-52'>
        <ReactLoading className='mx-auto' type={type} color={color} height={207} width={105} />
    </div>
);
 
export default Spinner;
import React, { useState, useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if(isLoading) {
    <Spinner  type={`spin`} color={`#0e7479`}/>
  }

  return (
    <div className='flex flex-col items-center gap-2 w-full mt-20'>
      <h1 className='font-bold text-4xl sm:text-6xl flex gap-1 justify-center items-center'>
        <FiLogIn /> LOGIN
      </h1>
      <p className='font-semibold text-teal-700'>Please login to continue</p>
      <form onSubmit={onSubmit} className='w-full flex flex-col gap-3 items-center p-3'>
        <input
          value={email}
          name='email'
          onChange={onChange}
          className='w-[80%] md:w-[50%] p-3 rounded-sm'
          type='text'
          placeholder='Enter Your Email'
        />
        <input
          value={password}
          name='password'
          onChange={onChange}
          className='w-[80%] md:w-[50%] p-3 rounded-sm'
          type='password' 
          placeholder='Enter Your Password'
        />
        <button
          type='submit'
          className='w-[80%] md:w-[50%] p-3  bg-teal-700 text-white rounded-sm font-bold'
        >
          Submit
        </button>
      </form>
      <p>
        Don't have an account? <Link to='/register' className='text-teal-700'>Register</Link>
      </p>
    </div>
  );
}

export default Login;
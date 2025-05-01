import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post('http://localhost:9000/user/register', value);
     
      setValue({ name: '', email: '', password: '' });
      toast.success('User register successful!');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
     toast.error('register failed');
    }
  };

  return (
    <div className='flex sm:justify-center justify-self items-center h-screen bg-slate-900 w-full'>
      <div>
        <h1 className='text-center py-5 font-medium sm:text-2xl text-xl text-white'>Signup</h1>

        <form
          className='sm:w-[30rem] bg-black text-white w-[270px] text-center sm:py-5 sm:px-10 px-auto shadow-2xl hover:bg-amber-950 border-4 border-white rounded-xl ml-5 mb-45'
          onSubmit={handleSubmit}
        >
          <label className='block sm:text-xl text-xs font-medium py-2 '>Name:</label>
          <input
            className='sm:w-full w-auto h-10 border px-3 bg-slate-900 rounded'
            type='text'
            placeholder='Enter name'
            name='name'
            required
            onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
            value={value.name}
          /><br /><br />

          <label className='block sm:text-xl text-xs font-medium py-2'>Email:</label>
          <input
            className='sm:w-full w-auto  h-10 border px-3 bg-slate-900 rounded'
            type='email'
            placeholder='Enter email'
            name='email'
            required
            onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
            value={value.email}
          /><br /><br />

          <label className='block sm:text-xl text-xs font-medium py-2'>Password:</label>
          <input
            className='sm:w-full w-auto  h-10 border px-3 bg-slate-900 rounded'
            type='password'
            placeholder='Enter password'
            name='password'
            required
            onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
            value={value.password}
          /><br /><br />

          <button
            className='bg-amber-700 sm:w-full w-20  text-white rounded-full border-2 h-10 cursor-pointer mb-3'
            type='submit'
          >
            Signup
          </button>

          <p className='text-sm text-white'>
            Already have an account?
            <span className='text-amber-400 underline ml-2'>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
        <ToastContainer/>
       
      </div>
    </div>
  );
};

export default Signup;

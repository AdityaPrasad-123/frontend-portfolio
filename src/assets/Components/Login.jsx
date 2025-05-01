import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [value, setValue] = useState({ email: '', password: '' });
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const register = await axios.post('http://localhost:9000/user/login', value);
         toast.success('User login successful!');
         setTimeout(() => navigate('/home'), 500);

      } catch (error) {
        toast.error("login failed");
      }
    };
  
    return (
      <div className='flex sm:justify-center justify-self-auto items-center h-screen bg-slate-900'>
        <div>
          <h1 className='text-center py-5 font-medium sm:text-2xl text-xl text-white'>Login</h1>
          <form
            className='sm:w-[30rem] bg-black text-white w-[280px] text-center sm:py-5 sm:px-10 px-auto mx-auto shadow-2xl hover:bg-amber-950 border-4 border-white rounded-xl ml-3 mb-45'
            onSubmit={handleLogin}
          >
            <label className='block sm:text-xl text-xs font-medium py-2'>Email:</label>
            <input
              className='sm:w-full w-auto h-10 border px-3 bg-slate-900 rounded'
              type='email'
              name='email'
              value={value.email}
              onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
              required
            /><br /><br />

            <label className='block sm:text-xl text-xs font-medium py-2'>Password:</label>
            <input
              className='sm:w-full w-auto h-10 border px-3 bg-slate-900 rounded'
              type='password'
              name='password'
              value={value.password}
              onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
              required
            /><br /><br />
           

  
            <button
              className='bg-amber-700 w-full text-white rounded-full border-2 h-10 cursor-pointer mb-3'
              type='submit'
            >
              Login
            </button>
  
            <p className='text-sm text-white'>
              Don't have an account?
              <span className='text-amber-400 underline ml-2'>
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </form>
          <ToastContainer/>
        </div>
      </div>
    );
  };
  
  export default Login;
  
import React from 'react'
import Aditya from '../../assets/Aditya.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex flex-col items-center w-full h-auto bg-black'>
        <img className='mt-2 py-16 rounded-full hover:border-amber-700 hover:w-80' src={Aditya} alt=''/>
        <h1 className='sm:text-3xl text-xl font-medium hover:text-amber-700'>Hello,My Name is Aditya Prasad Yadav</h1>
        <h2 className='sm:text-2xl text-xl font-medium hover:text-amber-700 py-5'> MERN Stack Developer</h2>
        <div className='gap-8 flex'>
        <button className='border-3 rounded-xl text-xl  font-medium bg-amber-700 sm:w-42 cursor-pointer hover:border-green-900 h-12 w-auto'><Link to='/contact'>Contact with me</Link></button>
        <button className='border-3 rounded-xl text-xl font-medium  bg-amber-700 sm:w-35 w-auto cursor-pointer hover:border-green-900'><Link to='/resume'>My resume</Link></button>
        </div>
      
         
    </div>
  )
}

export default Hero
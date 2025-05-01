import React from 'react'
import Navbar from "../src/assets/Components/Navbar";

const Skill = () => {
  return (
    <>
    <Navbar/>
   
    <div className='bg-black h-screen text-white w-auto'>
           <h1 className=' text-3xl font-medium text-center text-amber-900 py-10'>skills</h1><br/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>Html</h2>
            <hr className='sm:w-[700px] w-[350px] font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>CSS</h2>
            <hr className='sm:w-[680px] w-[350px] font-extrabold font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>Javascript</h2>
            <hr className='sm:w-[600px] w-[290px] font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>Reactjs</h2>
            <hr className='sm:w-[580px] w-[270px] font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>Nodejs</h2>
            <hr className='sm:w-[550px] w-[300px] font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>Expressjs</h2>
            <hr className='sm:w-[520px] w-[250px] font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
            <h2 className='text-xl py-3 sm:ml-130 ml-5  hover:text-amber-700 hover:text-2xl'>Mongodb</h2>
            <hr className='sm:w-[500px] w-[200px] font-stretch-50% text-3xl sm:ml-130 ml-5 text-shadow-amber-300 transform duration-500 hover:scale-1'/>
    </div>

    </>
  )
}

export default Skill
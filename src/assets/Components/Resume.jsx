import React from 'react'
import Resume1 from '../../assets/Resume1.png'
import Navbar from './Navbar'

const Resume = () => {
  return (
    <>
    <Navbar/>
    
    <div className='bg-black text-white h-full'>
        <h1 className='font-medium text-2xl py-10 text-center'>MY-Resume</h1>
        <div>
        <img className=' mx-auto' src={Resume1} alt=''/>
        </div>
        
    </div>
    </>
  )
}

export default Resume
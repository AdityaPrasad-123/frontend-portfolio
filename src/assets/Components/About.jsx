import React from 'react'
import Aditya from '../../assets/Aditya.png'


const About = () => {
  return (
    <div className=' bg-black h-auto text-white sm:block hidden '><br/><br/>
        <h1 className='text-center font-medium text-3xl text-amber-600 mt-15'>About<span className='text-white'>me</span></h1>


        <div className='grid sm:grid-cols-2 grid-cols-1 py-8 mt-4'>


        <div className='w-auto'>
            <img className='sm:h-90 h-60  sm:w-[300px] w-[10px] sm:ml-15  rounded-2xl hover:border-amber-700 hover:border-3' src={Aditya} alt=''/>
        </div>
        <div className='w-[700px] ml-2 px-2'>
            <br/>
            <h1 className='  sm:text-3xl text-2xl py-0 hover:text-emerald-300 sm:hover:text-4xl hover:text-2xl'> Hello,My name is Aditya Prasad Yadav</h1><br/>
            <span className=' text-xl  py-2'>I am experienced Mern Stack developer with over a decode of professional expertise in the fieldl.<br/>
            Throughout my carrer,i have had the privilege of collaborating with prestigious organiztions,<br/>
            My passions for Mern Stack Development is not only reflected in my extenseive experience <br/> but also in the enthusiasm and dedicating i bring to each project.</span>
        </div>

    </div>
    
    </div>
  )
}
    
    export default About;
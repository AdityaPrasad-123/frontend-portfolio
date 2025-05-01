import React from 'react'
import Aditya from '../src/assets/Aditya.png'
import Navbar from "../src/assets/Components/Navbar";

const About = () => {
  return (
    <>
    <Navbar/>

    <div className=' bg-black h-full text-white'><br/><br/>
         <h1 className='text-center font-medium text-3xl text-amber-600 mt-15'>About<span className='text-white'>me</span></h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 py-8 mt-4'>
                <div className='w-auto'>
                    <img className='sm:h-90 h-80  w-[300px] ml-15  rounded-2xl hover:border-amber-700 hover:border-3' src={Aditya} alt=''/>
                </div>
                <div className='w-[700px] ml-2 px-2'>
                    <br/>
                    <h1 className='sm:text-3xl text-2xl px-15 hover:text-emerald-300 sm:hover:text-4xl hover:text-2xl'> Hello,My name is<br/>Aditya Prasad Yadav</h1><br/>
                    <p className='w-[400px] sm:w-[800px]'><span className=' text-xl  py-2'>I am experienced Mern Stack developer with over a decode of professional expertise in the field.
                    Throughout my carrer,i have had the privilege of collaborating with prestigious organiztions,
                    My passions for Mern Stack Development is not only reflected in my extenseive experience but also in the enthusiasm and dedicating i bring to each project.</span></p>
                </div>
            </div>
            
            <br/>
            <br/>

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
            <div className='flex justify-around'>
            <div className='mb-8'>
              <h1 className='sm:text-3xl text-2xl font-medium px-11'>0-1</h1>
              <h2 className='sm:text-2xl text-xl font-medium text-black bg-amber-50 rounded-full h-9 w-35 text-center'>Experience</h2>
              
            </div>
            <div>
              <h1 className='sm:text-3xl text-2xl font-medium px-11'>0-1</h1>
              <h2 className='sm:text-2xl text-xl font-medium text-black bg-amber-50 rounded-full h-9 w-35 text-center'>Experience</h2>
            </div>

            

            </div>

    </div>
    </>
  );
};
    

    export default About;
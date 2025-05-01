import React from 'react'
import Navbar from '../src/assets/Components/Navbar'

const Projects = () => {
  return (
    <>
   <Navbar/>

  
   <div className="bg-black text-white h-auto"> <br /><br />
    <h1 className="text-center text-3xl font-medium text-amber-700 ">My-Projects</h1>
    <br />
    <br />

    <div className="between grid sm:grid-cols-3 grid-cols-1 gap-2 sm:ml-2 mx-auto px-8 ">
    
    <div className="w-auto h-60 bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[500px]">
      <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">E-learning</h1>
      <p className="sm:text-xl text-xl font-medium text-center">
        Technology use:
        <br />
        HTML,CSS,Javascript,<br/>mongodb,nodejs,express
      </p>
      <button className="sm:font-medium font-medium text-xl  bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25  mt-6 py-3 ">
        see more
      </button>
      </div>
      
      <div className="w-auto h-60 bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[500px]">
      <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">My-Portfolio</h1>
      <p className="sm:text-xl text-xl font-medium text-center">
        Technology use:
        <br />
        HTML,CSS,Javascript,<br/>mongodb,nodejs,express
      </p>
      <button className="sm:font-medium font-medium text-xl  bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25  mt-6 py-3 ">
        see more
      </button>
      </div>

      <div className="w-auto h-60 bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[500px]">
      <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">Hospital Management System</h1>
      <p className="sm:text-xl text-xl font-medium text-center">
        Technology use:
        <br />
        HTML,CSS,Javascript,<br/>mongodb,nodejs,express
      </p>
      <button className="sm:font-medium font-medium text-xl  bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25  mt-6 py-3 ">
        see more
      </button>
      </div>

      <div className="w-auto h-60 bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[500px]">
      <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">Clinic Web Application</h1>
      <p className="sm:text-xl text-xl font-medium text-center">
        Technology use:
        <br />
        HTML,CSS,Javascript,<br/>mongodb,nodejs,express
      </p>
      <button className="sm:font-medium font-medium text-xl  bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25  mt-6 py-3 ">
        see more
      </button>
      </div>

      <div className="w-auto h-60 bg-slate-700 text-white hover:border-amber-700 hover:border-3 sm:w-[500px]">
      <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">Gym Management System</h1>
      <p className="sm:text-xl text-xl font-medium text-center">
        Technology use:
        <br />
        HTML,CSS,Javascript,<br/>mongodb,nodejs,express
      </p>
      <button className="sm:font-medium font-medium text-xl  bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25  mt-6 py-3 ">
        see more
      </button>
      </div>

    </div>
  </div>
   </>

  
  )
}

export default Projects
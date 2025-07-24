import React from "react";

const Education = () => {
  return (
    <div className="bg-black h-auto text-white">
      <br />
      <br />
      <h1 className="text-center text-3xl font-medium text-amber-700 mt-25">
        Education
      </h1>
      <br />
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-3 justify-evenly gap-2 px-8">

      <div className="sm:w-[500px] w-auto h-60 bg-slate-700 text-white shadow-5xl  hover:border-amber-700 hover:border-3 ">

       <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">
           10<sup>th</sup>(General)</h1>
           <p className="sm:text-xl text-xl text-center">
         Shree.Nepal Ratriya Highger Secondary School<br /> Bakuliya Bhawanipur,Bara Neapl</p>
         <button className="font-medium text-xl bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25 mt-6 py-3">
          <a href="https://photos.google.com/photo/AF1QipOR6L5eaiZJ_YHyfP3eUbC0luv6Q7ziPIDmlMIY">see more</a>
         </button>
          </div> 

        <div className="sm:w-[500px] w-auto h-60 bg-slate-700 text-white shadow-5xl  hover:border-amber-700 hover:border-3 ">

        <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">
          +2(Science)</h1>
        <p className="sm:text-xl text-xl text-center">
          Shree.Nepal Ratriya Highger Secondary School<br /> Bakuliya Bhawanipur,Bara Neapl</p>
      <button className="font-medium text-xl bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25 mt-6 py-3">
          <a href="https://photos.google.com/photo/AF1QipMyKM_G3qOAZelJr9tnFbdwAVCmiakZhe9xoNhU">see more</a>
        </button>
     </div> 

          <div className="sm:w-[500px] w-auto h-60 bg-slate-700 text-white shadow-5xl  hover:border-amber-700 hover:border-3">

         <h1 className="sm:text-2xl text-xl font-medium hover:text-amber-600 text-center py-2">
          B-Tech(Cse)</h1>
         <p className="sm:text-xl   text-xl  text-center">
            Panipat Institute of Engineering & Technology<br /> Samalkha,Haryana</p>
          <button className="font-medium text-xl bg-amber-700 rounded-full w-30 cursor-pointer sm:ml-45 ml-25 mt-6 py-3">
           <a href="https://photos.google.com/photo/AF1QipNUEVA61yMfkvJhIe20v2ABu68MjzANfUMCXzx1">see more</a>
        </button>
      </div> 

      </div>

    </div>
  );
};

export default Education;

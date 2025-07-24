import React from 'react'
import Aditya from '../src/assets/Aditya.png'
import Navbar from "../src/assets/Components/Navbar";

const About = () => {
  return (
   <>
  <Navbar />
  <div className="bg-black text-white px-4 py-10">
    <h1 className="text-center font-medium text-3xl text-amber-600">
      About <span className="text-white">me</span>
    </h1>

    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center mt-10 max-w-6xl mx-auto">
      <img
        src={Aditya}
        alt="Aditya"
        className="rounded-2xl hover:border-amber-700 hover:border-2 w-full max-w-xs mx-auto"
      />
      <div className="text-left">
        <h2 className="text-2xl md:text-3xl hover:text-emerald-300 mb-4">
          Hello, My name is <br /> Aditya Prasad Yadav
        </h2>
        <p className="text-lg leading-relaxed">
          I am an experienced MERN Stack developer with over a decade of
          professional expertise in the field. Throughout my career, I have had
          the privilege of collaborating with prestigious organizations. My
          passion for MERN Stack development is reflected not only in my
          extensive experience but also in the enthusiasm and dedication I bring
          to each project.
        </p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-3xl font-medium text-center text-amber-500 mb-10">
        Skills
      </h1>
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ].map((skill, i) => (
        <div key={i} className="mb-4">
          <h2 className="text-xl hover:text-amber-700">{skill}</h2>
          <hr className="border-amber-500 w-full max-w-[90%]" />
        </div>
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-around items-center py-8 gap-6">
      {[1, 2].map((_, i) => (
        <div key={i} className="text-center">
          <h1 className="text-3xl font-medium">0-1</h1>
          <h2 className="text-xl font-medium bg-amber-50 text-black rounded-full px-4 py-2 mt-2">
            Experience
          </h2>
        </div>
      ))}
    </div>
  </div>
</>

  );
};
    

    export default About;
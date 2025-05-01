import React from 'react'
import Hero from './Hero'
import About from './About'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import Project from './Project'




const Home = () => {
  return (
    <div className="bg-black text-white h-screen w-auto">
      <Navbar/>
     <Hero/>
     <About/>
     <Education/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
    
  )
}

export default Home
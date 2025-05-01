import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './assets/Components/Home';
import Education from '../Pages/Education';
import Projects from '../Pages/Projects';
import Skill from '../Pages/Skill';
import Contact from '../Pages/Contact';
import Resume from './assets/Components/Resume';
import Signup from './assets/Components/Signup';
import Login from './assets/Components/Login';
import About from '../Pages/About';
import Certificate from '../Pages/Certificate';






const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/certificate' element={<Certificate/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      
      </div>
      
  );
};

export default App;

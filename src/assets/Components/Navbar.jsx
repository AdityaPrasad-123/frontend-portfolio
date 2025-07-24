import React, { useState } from 'react';
import Aditya from '../../assets/Aditya.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    toast.success('User logout successful!');
    setTimeout(() => navigate('/login'), 800);
  };

  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
         <Link to='/' className='cursor-pointer'><img
            className="rounded-full w-14 h-14 mr-2"
            src={Aditya}
            alt="Logo"
          /></Link> 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-xl font-medium">
          <li><Link className="hover:text-amber-700" to="/">Home</Link></li>
          <li><Link className="hover:text-amber-700" to="/about">About Me</Link></li>
          <li><Link className="hover:text-amber-700" to="/education">Education</Link></li>
          <li><Link className="hover:text-amber-700" to="/project">Projects</Link></li>
          <li><Link className="hover:text-amber-700" to="/certificate">Certificates</Link></li>
          <li><Link className="hover:text-amber-700" to="/skill">Skills</Link></li>
          <li><Link className="hover:text-amber-700" to="/contact">Contact Me</Link></li>
        </ul>

        {/* Buttons */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/signup">
            <button className="px-4 py-1 bg-blue-800 rounded-full hover:bg-green-500 transition-all">
              Signup
            </button>
          </Link>
          <button
            onClick={logout}
            className="px-4 py-1 bg-blue-800 rounded-full hover:bg-green-500 transition-all"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 text-lg font-medium">
          <Link className="block hover:text-amber-700" to="/">Home</Link>
          <Link className="block hover:text-amber-700" to="/about">About Me</Link>
          <Link className="block hover:text-amber-700" to="/education">Education</Link>
          <Link className="block hover:text-amber-700" to="/project">Projects</Link>
          <Link className="block hover:text-amber-700" to="/certificate">Certificates</Link>
          <Link className="block hover:text-amber-700" to="/skill">Skills</Link>
          <Link className="block hover:text-amber-700" to="/contact">Contact Me</Link>
          <div className="pt-2 space-x-2">
            <Link to="/signup">
              <button className="px-4 py-1 bg-blue-800 rounded-full hover:bg-green-500 transition-all">
                Signup
              </button>
            </Link>
            <button
              onClick={logout}
              className="px-4 py-1 bg-blue-800 rounded-full hover:bg-green-500 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </nav>
  );
};

export default Navbar;

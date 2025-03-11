import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#6F4E37] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img className="h-16 w-40" src={logo}  />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:bg-yellow-400 px-4 py-2 rounded-md shadow transform hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"> Home</li>
          <li className="hover:bg-yellow-400 px-4 py-2 rounded-md shadow transform hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">Gallery</li>
          <li className="hover:bg-yellow-400 px-4 py-2 rounded-md shadow transform hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">Menu</li>
          <li className="hover:bg-yellow-400 bg-yellow-500 shadow transform hover:scale-105 transition-all ease-in-out duration-300 px-4 py-2 rounded-md cursor-pointer">Order Now</li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "x" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#6F4E37] p-4">
          <li className="block py-2">Home</li>
          <li className="block py-2">Gallery</li>
          <li className="block py-2">Menu</li>
          <li className="block py-2 bg-yellow-500 rounded-md text-center">Order Now</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

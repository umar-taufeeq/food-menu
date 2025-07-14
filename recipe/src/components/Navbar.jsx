// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='flex justify-center gap-x-10 text-md mb-10'>
//         <NavLink className={(e)=> e.isActive ?"text-red-300" :"" } to="/">Home</NavLink>
//         <NavLink  className={(e)=> e.isActive ?"text-red-300" :"" } to="/recipes">Recipes</NavLink>
//         <NavLink  className={(e)=> e.isActive ?"text-red-300" :"" } to="/about">About</NavLink>
//         <NavLink  className={(e)=> e.isActive ?"text-red-300" :"" } to="/create">Create Recipe</NavLink>
//         <NavLink  className={(e)=> e.isActive ?"text-red-300" :"" } to="/fav">Favorite</NavLink>
       
//     </div>
//   )
// }

// export default Navbar
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use Heroicons/Lucide for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
      : "hover:text-orange-500 transition";

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500">🍲 Recipe App</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-md font-medium text-gray-700">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/recipes" className={navLinkStyle}>Recipes</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/create" className={navLinkStyle}>Create Recipe</NavLink>
          <NavLink to="/fav" className={navLinkStyle}>Favorite</NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center text-gray-700 font-medium">
          <NavLink to="/" className={navLinkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/recipes" className={navLinkStyle} onClick={() => setIsOpen(false)}>Recipes</NavLink>
          <NavLink to="/about" className={navLinkStyle} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/create" className={navLinkStyle} onClick={() => setIsOpen(false)}>Create Recipe</NavLink>
          <NavLink to="/fav" className={navLinkStyle} onClick={() => setIsOpen(false)}>Favorite</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

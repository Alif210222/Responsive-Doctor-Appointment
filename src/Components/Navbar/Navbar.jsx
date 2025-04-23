import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo (1).png'
 

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm md:px-18">
  <div className="navbar-start flex justify-between gap-20">
    <a className="btn btn-ghost md:text-2xl font-bold md:ml-0 ml-4"><span className='md:w-10'><img src={logo}  alt="" /></span > Dhaka Medical</a>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='font-bold text-lg'><NavLink className={({isActive})=> isActive ? "text-blue border-b-2" : "" } to='/' >Home</NavLink></li>
      <li className='font-bold text-lg'><NavLink className={({isActive})=> isActive ? "text-blue border-b-2" : "" } to='/booking'>My Booking</NavLink></li>
      <li className='font-bold text-lg'><NavLink className={({isActive})=> isActive ? "text-blue border-b-2" : "" } to='/blogs'>Blogs</NavLink></li>
      <li className='font-bold text-lg'><NavLink className={({isActive})=> isActive ? "text-blue border-b-2" : "" } to='/contact'>Contacts</NavLink></li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex ml-6">
    <ul className="menu menu-horizontal px-1 ">
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/'>Home</NavLink></li>
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/booking'>My booking</NavLink></li>
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/blogs'>Blogs</NavLink></li>
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/contact'>Contacts</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn hidden md:flex text-white hover:text-blue-500 md:text-lg font-bold rounded-2xl bg-blue-600 hover:bg-white"> Emergency</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
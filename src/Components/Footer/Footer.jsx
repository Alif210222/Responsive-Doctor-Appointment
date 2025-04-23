import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo (1).png'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
         
            <div className="">
                     <a className="btn btn-ghost text-2xl font-bold"><span className='w-10'><img src={logo}  alt="" /></span > Dhaka Medical</a>
               </div>
       
            <div className="navbar-center hidden lg:flex ml-6">
    <ul className="menu menu-horizontal px-1 ">
      <li  className='font-bold text-[16px] lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-3" : "" } to='/'>Home</NavLink></li>
      <li  className='font-bold text-[16px] lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-3" : "" } to='/booking'>My booking</NavLink></li>
      <li  className='font-bold text-[16px] lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-3" : "" } to='/blogs'>Blogs</NavLink></li>
      <li  className='font-bold text-[16px] lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-3" : "" } to='/contact'>Contacts</NavLink></li>
    </ul>
  </div>

  <div className=' w-full border border-d border-gray-300'></div>

  <nav>
    <div className="grid grid-flow-col gap-8">
      <a href='https://x.com/AlifSarkerRony1?t=B6S77Cb5pMKWkt418ShW3A&s=09'  target="_blank" rel="noopener noreferrer">
      <FaTwitter size={25} />
      </a>

      <a  href='https://www.linkedin.com/in/alif-sarker-rony-aa50802a7' target="_blank" rel="noopener noreferrer"> <FaLinkedin size={26} />  </a>

      <a href="https://www.facebook.com/share/1BfGgdJkwN/"  target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;
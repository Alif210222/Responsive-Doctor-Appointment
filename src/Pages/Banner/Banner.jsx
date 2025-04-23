import React from 'react';
import bannerImage from '../../assets/banner-img-1.png'
import banner from '../../assets/banner-2.jpg'

import { NavLink } from 'react-router';
 
const Banner = () => {
    return (
        <div className='md:p-10 ' >
            {/* banner container */}
            <div className="hero  md:px-20 border-3 border-white rounded-xl bg-gradient-to-r from-[#e8e8e8]   to-[#fffefe] ">
  <div className="hero-content text-center ">
    <div className=" space-y-3 ">
      <h1 className="md:text-5xl font-bold mt-9">Dependable Care, Backed by Trusted Professionals.</h1>
      <p className="py-6 max-w-full">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br className='hidden' /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p> 

   {/* search btn */}
      <div className='text-center '>
          <form className='flex justify-center gap-2  '>
             <input type="text "  placeholder='Search any doctor' className='border  bg-white border-gray-300 rounded-xl 
             shadow-md md:w-3/6 p-4 h-12 md:mr-6' />
            <NavLink>  <button className='bg-blue-600 text-sm md:text-[16px] font-semibold text-white rounded-2xl md:p-3 p-3 hover:bg-white hover:text-blue-600 duration-1000 shadow mt-1' >Search  </button></NavLink>
         </form>
      </div>
     
     {/* banner image  */}
      <div className='md:flex justify-center items-center mt-10 gap-8 mb-8'>
      <img src={bannerImage} className='w-lg shadow-3xl shadow-white ' alt="" />
        <img  src={banner} className='hidden md:flex w-lg border-none rounded-xl h-78 shadow-3xl shadow-white' alt="" />
       
       
      </div>

    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;
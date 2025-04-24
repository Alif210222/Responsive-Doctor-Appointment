import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const InvalidRoute = () => {
    return (
        <div>
         <Navbar></Navbar>
              <div id="default-card" className='flex items-center justify-center p-14  h-[420px]'>
                          <div className='border-2 p-6 bg-[#e8e5e5] border-none  rounded-2xl text-center '>
                             <h1 className='text-2xl text-center font-bold'>No Doctor Found </h1>
                             <p className='mt-4'> No Doctor Found the registetion number .</p>
                             <Link to="/"><button className='text-center cursor-pointer  bg-blue-600 text-white p-3 rounded-xl mt-10 hover:bg-blue-400 duration-700'>See All Doctor </button>  </Link>
                          </div>
                        </div>
                        <Footer></Footer>
        </div>
    );
};

export default InvalidRoute;
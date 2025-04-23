import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { useNavigation } from 'react-router';
import Loader from '../../Pages/Loader/Loader';




const Root = () => {
    const  navigation = useNavigation()
    if(navigation.state ===  "loading" ){
        return (<Loader></Loader>)
    }


    return (
        <div>

              <Navbar></Navbar>
              <div className='min-h-[calc(100vh-180px)] bg-[#f0efef] px-6 md:px-12 py-10'>
                  <Outlet></Outlet>
              </div>
              <ToastContainer />
              <Footer></Footer>
              <ScrollRestoration></ScrollRestoration>
              

        </div>
    );
};

export default Root;
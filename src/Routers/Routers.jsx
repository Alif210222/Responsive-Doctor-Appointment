import React, { Component } from 'react';

import {createBrowserRouter} from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Pages/Home/Home';
import Booking from '../Pages/Booking/Booking';
import Blogs from '../Pages/Blogs/Blogs';
import Contacts from '../Pages/Contact/Contacts';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';
import InvalidRoute from '../Pages/InvalidRoute/InvalidRoute';



  export const router = createBrowserRouter([
    {
      path: "/",
     Component: Root,
     errorElement : <InvalidRoute></InvalidRoute>,
     children: [
        {
            index:true,
            Component:Home,
            loader: () => fetch("../doctors.json"),
             hydrateFallbackElement:  <span className="loading  loading-xl loading-dots mt-[200px] ml-[50%]  "></span>
        },
        {
           path:"/booking",
           loader:() => fetch("../doctors.json"),          
           Component:Booking
        },
      
        {
            path:"/Contact",
            Component:Contacts
        },
        {
           path:"/doctorDetails/:id",
           loader:() => fetch("../doctors.json"),       
           Component:DoctorDetails
        },
        {
            path:"/blogs",          
            loader:() => fetch("../doctors.json"),
            Component:Blogs
        }
        
     ]
          
    },
  ]);

 
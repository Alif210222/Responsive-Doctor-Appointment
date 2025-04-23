import React from 'react';

import { Link } from 'react-router';

const Doctor = ({doctor}) => {
    const{name,experience,registration_number,available,education,image,id}=doctor
    // console.log(doctor)
    return (
        <div>
          
           <div className="card bg-base-100 w-screen-full shadow-sm p-5 max-w-full shadow-sm">

  <figure>
    <div className='h-[265px] border-none rounded-2xl'>
    <img 
    className='h-60'
      src={image}
      alt="Shoes" />
    </div>
  </figure>

   <div className='flex gap-4 ml-2'>
        <p className='border rounded-2xl p-1 text-sm text-green-600 bg-green-100 mt-5'>{available}</p>
        <p className='border rounded-2xl p-1 text-sm text-blue-500 bg-blue-100 mt-5'>{experience}</p>
   </div>

  <div className="card-body -ml-2">
    <h2 className="card-title">{name}</h2>
    <h2>{education}</h2>

    <hr className='my-3'/>
    <div className='flex gap-4'>
       <span className='border-2 border-gray-500 rounded-full w-6 h-6 text-center'>R</span>
       <p> Reg No . {registration_number}</p>
    </div>

   
    <div className="card-actions  mt-5 ">
     <Link to={`/doctorDetails/${id}`}> <button className=" md:w-80 ml-23 md:ml-0 text-center border-2 border-blue-500 p-1 rounded-2xl text-[15px] font-semibold  cursor-pointer hover:bg-blue-100 duration-300">View Details</button></Link>
    </div>
  </div>
</div>

    

        </div>
    );
};

export default Doctor;
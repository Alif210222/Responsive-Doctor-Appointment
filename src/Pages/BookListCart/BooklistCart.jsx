import React from 'react';
// import { removeBookList } from '../../Utilities/addToDB';



const BooklistCart = ({booked , handleDelete}) => {


    // console.log(booked.id)

    return (
        <div className='md:p-8'>
              
             <div className='mt-10 md:px-10  '>
           <div className="card w-full bg-base-100 card-lg  p-14 border-2 border-[#efeded] shadow-xl shadow-[#d1d0d0]">
                      <div className="">
                       
                        <h2 className="card-title mb-4">{booked.name}</h2>
                        <div className=' md:flex  justify-between mb-4'>
                        <p>{booked.education}</p>
                        <p className='mb-4 text-lg  text-green-600 font-bold md:mt-0 mt-3'>Appoinments Fee :  <span className='text-red-600 font-bold'> {booked.fees} </span>  Taka + Vat</p>
                        </div>
                        
                        <hr/>
                        <div  onClick={()=>handleDelete(booked.id)} className=" card-actions mt-8">
                          <button className="w-full  border-2 p-2 border-red-500 text-red-600 rounded-3xl hover:bg-red-500 hover:text-white duration-700">  Cancel Appointment</button>
                        </div>
                      </div>
                  </div>


           </div>
        </div>
    );
};

export default BooklistCart;
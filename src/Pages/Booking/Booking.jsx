import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoredBooking, removeBookList } from '../../Utilities/addToDB';
import BooklistCart from '../BookListCart/BooklistCart';
import { ToastContainer, toast } from 'react-toastify';
import Rechart from '../../Components/Rechart/Rechart';




const Booking = () => {
      const[bookList , setBookList ] = useState([])
      const data = useLoaderData()
      
      

      useEffect(()=>{

            const storeBookData =  getStoredBooking() 
            const convertStoreBookDataToNum = storeBookData.map(id => parseInt(id))
            const myBookList = data.filter(doctor=>convertStoreBookDataToNum.includes(doctor.id))
            setBookList(myBookList) 
            console.log(myBookList)

            // toast( 
            //   <div>
            //      <p className='text-lg font-bold text-black'>   Appoinment Booking successfull .</p> 
            //   </div>   
            //   )
      },[])




// delete doctor from local storage
     const handleDelete = (id)=>{
      // console.log(typeof (id) )
       removeBookList(id)
       const remainBookList = bookList.filter(book => book.id != id )
       setBookList(remainBookList)

       toast( 
        <p className='text-lg font-bold text-black'>  Appointment  cancel successfull .</p> 
        )

      
}
 



    return (
        <div>

                 {/* if no booking item in booking page then show this text */}
                      {
                        (!bookList.length) && ( <div id="default-card" className='flex items-center justify-center md:p-14'>
                          <div className='border-2 p-6 bg-white border-none  rounded-2xl text-center'>
                             <h1 className='text-2xl text-center font-bold'>You have no booked any appointment yet </h1>
                             <p className='mt-4'>Our authority contacts you with verified . Thank you.Have a safe life !</p>
                             <Link to="/"><button className='text-center text-lg bg-blue-600 text-white p-3 mb-4 rounded-xl mt-10 hover:bg-blue-400 duration-700 '>Book an appointment </button>  </Link>
                          </div>
                        </div>
                      ) 
                      }


                 

                    {
                      (bookList.length > 0) && (<Rechart bookList={bookList} ></Rechart> )
                    }
              

                      {
                        (bookList.length > 0) && (        
                             
                     <div className='md:p-0 p-4'>
                     <h1 className=' text-center text-[22px] md:text-[30px] font-bold'>My Today's Appoinment</h1>
                     <p className='text-[#5c5b5b] text-center mt-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                      </div>
                        )
                      }
        
        
        
                       {
                        bookList.map((booked , index) => <BooklistCart key={index} booked={booked}  handleDelete={ handleDelete} ></BooklistCart> )
                       }
          

          {/* <ToastContainer /> */}
        </div>
    );
};

export default Booking;
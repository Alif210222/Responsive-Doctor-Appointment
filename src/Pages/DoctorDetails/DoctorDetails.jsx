import React from 'react';
import { useLoaderData, useParams , useNavigate } from 'react-router';
import { addToStoreDB, getStoredBooking } from '../../Utilities/addToDB';
import { ToastContainer, toast } from 'react-toastify';
import InvalidRoute from '../InvalidRoute/InvalidRoute';



const DoctorDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    // const idarr = [1,2,3,4,5,6,7,8,9,10,11,12]
    // if(!idarr.includes(id)){
    //       throw new Error(" NEW ERROR FOUND ")
    // }




    const  bookId = parseInt(id)
    // console.log(bookId)
    // console.log(data)
    const singleDoctor = data.find(doctor => doctor.id === bookId )

    if(!singleDoctor){
      throw new Error(" NEW ERROR FOUND ")
    } 

    
    // console.log(singleDoctor)

    const {name,registration_number,education,image,fees,designation,workplace} = singleDoctor || {}


    const navigate = useNavigate();

const handleAddToBookList = id =>{
      const getData = getStoredBooking()
      if (getData.includes(id)){
        toast(
          <div>
               <p className='font-bold'>{name}'s  appointment is already booked . </p>
          </div>
        )
        return ; 
        
     
       }
        else{     
            addToStoreDB(id)
            toast(
                  <div>
                     <p className='font-bold'>{name}'s  appointment  booked successfull . </p>
                  </div>
                  )
           setTimeout(()=> {navigate('/booking') },600 )
       
   } 
  
}





    return (
        <div className='md:p-10'>
              <div className='bg-white md:p-16 p-6 text-center border-none rounded-2xl ' >
                   <h1 className='text-[32px] font-bold'>Doctor’s Profile Details</h1>
                   <p className='font-medium  mt-4'>Doctors are highly trained medical professionals dedicated to  treating, and preventing illnesses. They play a <br/>crucial role in maintaining public health and  clinical expertise and compassionate care.</p>
              </div>


{/* // doctor details */}
              <div className='md:mt-20 mt-13 '>
                   
              <div className="hero bg-white  p-8 border-none rounded-2xl md:h-[580px]">
  <div className="hero-content flex-col lg:flex-row md:gap-10 -ml-4 md:-ml-0">
    <div className=' '>
    <img
      src={image}
      className=" md:max-w-lg  rounded-lg shadow-2xl shadow-[#7f7e7e]"
    />
    </div>
   

    <div className='mt-8 md:mt-0'>
      <h1 className="text-3xl font-bold text-black">{name}</h1>

      <div className='mt-4'>
      <h3 className='text-[14px] text-[#4f4d4d]'>{education}</h3>
      <h3  className='text-[14px] text-[#4f4d4d]'>{designation}</h3>
      </div>
      
      <div className="py-6">
           <h4  className='text-[14px] font-bold text-[#4f4d4d] '>Working at </h4>
           <p className='font-bold text-lg text-amber-7 00'>{workplace}</p>
      </div>
      <hr className='mb-3 mt- text-[#4f4d4d]'/>
      <div className='flex gap-4 '>
       <span className='border-2 border-gray-500 rounded-full w-6 h-6 text-center text-sm'>R</span>
       <p className='text-md'> Reg No . {registration_number}</p>
    </div>
    <hr className='mt-3 text-[#4f4d4d]'/>

    {/* <p className='mt-6 font-semibold '>Avaibility : <span className='border-none bg-amber-100 text-amber-500 p-2 rounded-xl md:ml-2 '>Sunday</span>
                                                     <span className='border-none bg-amber-100 text-amber-500 p-2 rounded-xl ml-2'>Monday</span>
                                                     <span className='border-none bg-amber-100 text-amber-500 p-2 rounded-xl ml-2'>Wednusday</span> </p> */}


        <div className='md:flex'>
        <p className='mt-6 font-semibold '>Avaibility :</p>
        <div className='flex mt-4'>
        <p className='border-none bg-amber-100 text-amber-500 p-2 rounded-xl md:ml-2 '>Sunday</p>
                                                     <p className='border-none bg-amber-100 text-amber-500 p-2 rounded-xl ml-2'>Monday</p>
                                                     <p className='border-none bg-amber-100 text-amber-500 p-2 rounded-xl ml-2'>Wednusday</p>   
        </div>
            
        </div>
                                               


    <p className='mt-8 text-[17px] font-semibold'>Consultation Fee : <span className='text-blue-700 ml-2'>Taka : {fees} </span > <span className='text-[#4f4d4d] ml-2'>(incl. vat) </span> <span className="text-blue-700 ml-2">Per Consultation</span> </p>

     
    </div>
  </div>
</div>


              </div>


         {/* booking appoinment  */}

         <div className='bg-white p-8 md:p-14 text-center border-none rounded-2xl mt-8' >
                   <h1 className='text-[22px] md:text-[32px] font-bold mb-8 '>Book an Appointment</h1>
                   <hr className='text-amber-600 my-5' ></hr>
                   <div className='md:flex  justify-between'>
                       <p className='text-[18px] md:mb-0 mb-4  font-bold '>Avaibility</p>
                       <p className='bg-green-100 text-green-600 border-none  rounded-2xl md:w-fit py-1 px-2'>Doctor Avaibility Today</p>

                   </div>
                   
                   <hr className='text-amber-600 my-6' ></hr>
                   <p className='border-none bg-amber-100 text-amber-500 p-2 rounded-2xl mt-3 mb-10 text-sm'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

    

                  <button   onClick={()=>handleAddToBookList(id)} className='border w-full bg-blue-600 text-white text-lg font-bold py-2 rounded-2xl md:mt-6 hover:bg-blue-400 duration-700'>Book An Apoinment </button>
             
             

              </div>
          

        </div>
    );
};

export default DoctorDetails;
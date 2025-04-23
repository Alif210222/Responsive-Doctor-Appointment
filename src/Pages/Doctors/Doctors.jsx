import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = ({doctors}) => {
     const [displayAll , setDisplayAll] = useState([])
     const [showAll , setShowAll] = useState(false)


     useEffect(()=>{
        if(showAll){
            setDisplayAll(doctors)
        }
        else{
            setDisplayAll(doctors.slice(0,6)) 
        }
       

     },[doctors,showAll])

    // console.log(doctors)

    return (
        <div className=''>
          <h1 className='text-[30px] font-bold mt-20 text-center  bg-[#f0efef] px-12'>Our Best Doctors</h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 md:p-20'>
              {
               displayAll.map((doctor , index) => <Doctor  key={index} doctor={doctor}></Doctor>)
              }
           </div>

             <button onClick={()=>{
                setShowAll(!showAll)

                if(showAll)window.scrollTo(0,800)
           }}  className='bg-blue-600 text-[16px] font-semibold text-white rounded-2xl p-3  hover:bg-blue-400  shadow mt-4 md:mt-0 ml-30 md:ml-[45%] mb-16 ' >{showAll? " View less" : "View All Doctor"} </button>
        </div>
    );
};

export default Doctors;
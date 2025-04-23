import React from 'react';

import rev from "../../assets/success-review.png"
import patient from "../../assets/success-patients.png"
import stuff from "../../assets/success-staffs.png"
import doctor from "../../assets/success-doctor.png"
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='text-center '>
            <h1 className='md:text-[30px] text-[24px] font-bold mb-4'>We Provide Best Medical Services</h1> 
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            {/* counter card */}
            <div className='grid  grid-cols-2 lg:grid-cols-4 md:ml-16 gap-4 justify-center my-16 md:p-10'>
                 <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 md:h-64 space-y-5 shadow-2xl'>
                    <img className='ml-2 ' src={doctor} alt="" />
                    <h1 className='text-4xl -ml-12 font-extrabold'>
                    <CountUp duration={13} end={269}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                     {({ countUpRef }) => <span ref={countUpRef} />}
                   </CountUp>
                     </h1>
                    <h3 className='-ml-6 text-lg font-bold'>Total Doctors</h3>
                 </div>
                 <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 md:h-64 space-y-5 shadow-2xl'>
                    <img className='ml-2 ' src={rev} alt="" />
                    <h1 className='text-4xl -ml-12 font-extrabold'>
                    <CountUp duration={15} end={654}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                     {({ countUpRef }) => <span ref={countUpRef} />}
                   </CountUp>
                     </h1>
                    <h3 className='-ml-6 text-lg font-bold'>Successfull Review</h3>
                 </div>
                 <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 md:h-64 space-y-5 shadow-2xl'>
                    <img className='ml-2 ' src={patient} alt="" />
                    <h1 className='text-4xl -ml-12 font-extrabold'>
                    <CountUp duration={5} end={499}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                     {({ countUpRef }) => <span ref={countUpRef} />}
                   </CountUp>
                     </h1>
                    <h3 className='md:-ml-6 -ml-5 text-lg font-bold'>Success patient</h3>
                 </div>
                 <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 md:h-64 space-y-5 shadow-2xl'>
                    <img className='ml-2 ' src={stuff} alt="" />
                    <h1 className='text-4xl -ml-12 font-extrabold'>
                     <CountUp duration={5} end={199}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                     {({ countUpRef }) => <span ref={countUpRef} />}
                   </CountUp>
              </h1>
                    <h3 className='-ml-6 text-lg font-bold'>Success Stuf</h3>
                 </div>
             
            </div>
        </div>
    );
};

export default Counter;
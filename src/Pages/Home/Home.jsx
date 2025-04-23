import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Counter from '../../Components/Counter/Counter';

const Home = () => {
     const doctors = useLoaderData()
    //  console.log(doctors)

    return (
        <div className=''>
           
            <Banner></Banner>
            <Doctors  doctors={ doctors}></Doctors>
            <Counter></Counter>
            
            
        </div>
    );
};

export default Home;
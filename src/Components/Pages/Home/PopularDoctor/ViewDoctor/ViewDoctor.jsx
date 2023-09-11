import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewDoctor = ({ doctor }) => {

    useEffect(() => {
        Aos.init();
      }, [])
    
    return (
        <div className='shadow-xl p-10' data-aos="fade-right">
            <img className='w-[300px] h-[300px] mb-3' src={doctor.img} alt="" />
            <h1 className='text-2xl'>{doctor.name}</h1>
            <h3 className='text-xl'>Specialist: {doctor.category}</h3>
            <h3 className='text-xl'>Experience: {doctor.experience}</h3>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl'>Rating: {doctor.rating}</h3>
                <Link to='/doctors'>
                <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                        <path d="M0-.25h24v24H0z" fill="none" />
                    </svg>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ViewDoctor;
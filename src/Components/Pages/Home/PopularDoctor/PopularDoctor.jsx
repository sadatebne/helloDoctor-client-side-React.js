import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import ViewDoctor from './ViewDoctor/ViewDoctor';

const PopularDoctor = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('popularDoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={"popular Doctor"}></SectionTitle>
            <div className='grid grid-cols-1 sm:ml-5 md:grid-cols-3 gap-10 my-20'>
                {
                    doctors.map(doctor => <ViewDoctor key={doctor.id} doctor={doctor}></ViewDoctor>)
                }
            </div>
        </div>
    );
};

export default PopularDoctor;
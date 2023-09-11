import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const AllDoctor = () => {
    const { id } = useParams()
    const [doctorInfos, setDoctorInfos] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/doctor/${id}`)
            .then(res => res.json())
            .then(data => setDoctorInfos(data))
    }, [])

    return (
        <div>
            {
                doctorInfos.map(doctorInfo =>
                    <div key={doctorInfo._id} className='grid grid-cols-4 gap-10'>

                        <div className='my-10 col-span-3'>
                            <img className='w-[400px] h-[400px]' src={doctorInfo.img} alt="" />
                            <h1 className='text-3xl font-bold my-5'>{doctorInfo.name}</h1>
                            <h3 className='text-2xl font-semibold my-5'>{doctorInfo.category} specialest</h3>

                            <h3 className='text-2xl font-semibold my-5 flex gap-2 items-center'><FaStar color='orange'></FaStar> {doctorInfo.rating}</h3>

                            <h1 className='text-4xl font-bold my-15'>About of <span className='text-3xl font-bold my-5 text-green-500'>{doctorInfo.name}</span></h1>
                            <h3 className='text-2xl my-5'>{doctorInfo.about}</h3>
                        </div>
                        <div className='mr-3'>
                            <h1 className='text-3xl uppercase font-bold mt-20'>Visiting Details</h1>
                            <h1 className='text-2xl uppercase mt-5'>Available Time :</h1>

                            <h3 className='text-xl my-5'>Mon-Thus: {doctorInfo.visiting_time[0]}</h3>
                            <h3 className='text-xl my-5'>Sat-Sun: {doctorInfo.visiting_time[1]}</h3>
                            <h3 className='text-xl my-5 text-red-600'>Friday Closed</h3>

                            <h3 className='text-xl my-5 font-bold'>Doctor Charge: <span className='text-green-700 text-2xl'>{doctorInfo.visiting_price} BDT</span></h3>

                            <Link to={`/payment/${doctorInfo._id}`}>
                                <button className="text-xl w-full btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">BOOK NOW</button>
                            </Link>


                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllDoctor;
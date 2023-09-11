import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DoctorReview = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='flex flex-col mx-5 md:flex-row items-center justify-center gap-20 '>
            <div data-aos="fade-right">
                <img className='w-[2000px]' src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" alt="" />
            </div>
            <div className='text-left space-y-10' data-aos="fade-left">
                <h1 className='font-semibold text-4xl'>Proud to best the Best Platform</h1>
                <h3 className='text-lg'>Welcome to HelloDoctor, where we bring the expertise of seasoned medical professionals directly to your fingertips. At HelloDoctor, we understand that your health is your most valuable asset, and we're dedicated to making quality healthcare accessible and convenient for you.</h3>
                <h3 className='text-lg'>Our team of experienced and caring doctors is here to provide you with the personalized care you deserve, all from the comfort of your home. Whether you have a pressing medical concern, need a second opinion, or simply seek expert advice on your well-being, our online platform connects you with a network of dedicated physicians who are ready to assist you.</h3>

                <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">Enroll Now</button>
            </div>
        </div>
    );
};

export default DoctorReview;
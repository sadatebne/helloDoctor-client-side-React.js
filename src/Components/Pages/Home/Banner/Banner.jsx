import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Banner.css'
import 'swiper/css';
import 'swiper/css/pagination';



const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide-container'>
                        <img className='img' src="https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?w=740&t=st=1693705393~exp=1693705993~hmac=48f872deff45f19d15bb79ece4f4f76092cec4edbd4fe9ee5e345476e14b57f7" alt="" />
                        {/* <div className='text'>
                            <h1>Welcome To HelloDoctor</h1>
                            <h3>Find Your Doctor And Get Treatment</h3>
                        </div> */}
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/medium-shot-health-workers-with-masks_23-2148894844.jpg?w=740&t=st=1693765576~exp=1693766176~hmac=2f855438ac81fbd37106e7feba7ae3a1976e2eb623fc51eb3cfdc067d8cb90bf" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/medium-shot-health-worker-helping-patient_23-2148894881.jpg" alt="" />

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import img1 from "../../../../../public/AnimationImg1.json"
import Aos from 'aos';


const UserQuestions = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div className='flex flex-col mx-5 md:flex-row items-center justify-between my-10'>
            <div data-aos="fade-right">
                <Lottie animationData={img1}></Lottie>
            </div>

            {/*  */}

            <div data-aos="fade-left">

                <div>

                    <div className="w-1/2 text-center mx-auto my-9">
                        <h3 className="text-2xl font-semibold uppercase border-b-4 py-4 border-green-500">Most Asked Question</h3>
                    </div>
                </div>


                <div className="w-[700px] collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked"/>
                    <div className="collapse-title text-xl font-medium">
                    "Doctor, I've been feeling really tired lately, and I can't seem to shake it off. What could be causing my fatigue?"
                    </div>
                    <div className="collapse-content">
                        <p>Fatigue can have many causes, from lack of sleep to medical conditions. We'll need to do a thorough evaluation to pinpoint the exact cause. Let's start with some blood tests to check for common issues like anemia or thyroid problems.</p>
                    </div>
                </div>
                <div className="w-[700px] collapse collapse-plus bg-base-200 mt-5">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    "Doctor, I've been experiencing a persistent cough for the past two weeks. Should I be worried?"
                    </div>
                    <div className="collapse-content">
                        <p>"A persistent cough could be due to various reasons, such as infections, allergies, or even a lingering cold. It's essential to examine your medical history and perform a physical exam to determine the cause. We'll proceed accordingly after the evaluation."</p>
                    </div>
                </div>
                <div className="w-[700px] collapse collapse-plus bg-base-200 mt-5">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    "Doctor, I've noticed some unusual skin changes, like new moles and changes in the color and shape of existing ones. Is this something to be concerned about?"
                    </div>
                    <div className="collapse-content">
                        <p>"Skin changes, especially in moles, should be monitored closely. While some changes can be benign, others might indicate skin cancer. I recommend scheduling a dermatology appointment for a professional assessment and potentially a biopsy if necessary. Early detection is crucial for successful treatment."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserQuestions;
import React from 'react';
import Banner from '../Banner/Banner';
import PopularDoctor from '../PopularDoctor/PopularDoctor';
import DoctorReview from '../DoctorReview/DoctorReview';
import UserQuestions from '../UserQuestions/UserQuestions';
import Breaking from '../Breaking/Breaking';
import About from '../About/About.jsx';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Breaking></Breaking>
            <PopularDoctor></PopularDoctor>
            <DoctorReview></DoctorReview>
            <UserQuestions></UserQuestions>
            <About></About>
        </div>
    );
};

export default Home;
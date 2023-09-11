import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_stripe_key)
const Payment = () => {
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
                doctorInfos.map(doctorInfo => <div>
                    <SectionTitle heading={'payment'}></SectionTitle>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={doctorInfo.
                            visiting_price} doctorName={doctorInfo.name}></CheckoutForm>
                    </Elements>
                </div>)
            }


        </div>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, doctorName }) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('')

    const navigate =useNavigate()

    const { user } = useAuth()

    // console.log(price)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({price: price}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.displayName || "anonymous",
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
        }
       
        console.log('paymentIntent', paymentIntent)

        if(paymentIntent.status ==='succeeded'){
            setTransactionId(paymentIntent.id)
            const transactionId=paymentIntent.id

            const payment={email: user?.email, name: user?.displayName,transactionId:paymentIntent.id,
            price, Doctor: doctorName}

            fetch('http://localhost:3000/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.insertedId){
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Payment Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
            })
        }
    }
    return (
        <>
            <form className='w-full space-y-4 mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary my-10' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 text-center">{cardError}</p>}
            {transactionId && <p className="text-green-600 text-center">Successfully Payment and TransactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
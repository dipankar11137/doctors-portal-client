import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1qoRHptux7TSyCTlbI9nx3AjQiVgLugq7xrEXkN2vpYAvD7STzzybgZQ13nOWR8Nce678znV1MTjbv2rHawOI700nW883wJo');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-3 '>
            <h1 className='text-2xl text-purple-500'>Please Pay For : </h1>

            <div class="card w-50 max-w-md bg-white text-black shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold text-2xl'>Hello , {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay For {appointment.treatment}</h2>
                    <p>Your Appointment <span className='text-orange-700'>{appointment.date} </span> at {appointment.slot} </p>
                    <p>Please Pay : ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl ">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;
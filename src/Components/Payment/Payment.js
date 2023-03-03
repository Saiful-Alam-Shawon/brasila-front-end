import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';

const Payment = () => {

    const data = useLoaderData();
    const stripePromise = loadStripe('pk_test_51MAQCQFQ87m4QnJ0whHlzBOxZcTypWvk4vL6MrH0H31KhXXyPbpRYDK1xglR2Z1uPSRh5rWro3ZDUwygWmEzOwjy00fyNMPxe1');

    return (
        <div className='p-24 w-2/4'>
            {/* Payment Request for {data._id} */}
            {/* Payment Request for */}

            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>




        </div>
    );
};

export default Payment;
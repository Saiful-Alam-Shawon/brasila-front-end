import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { AuthShare } from '../Context/AuthContext';
import './profile.css'

const Profile = () => {

    const { user } = useContext(AuthShare);
    const useremail = user?.email;
    const navigate = useNavigate();
    const [isreload, setIsreload] = useState(true);


    const [bookingData, setBookingData] = useState([]);
    const id = bookingData[0]?._id
    const status = bookingData[0]?.status
    // console.log(images);


    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const handlePayment = id => {
        // console.log(id);
        fetch(`https://brasila-server.vercel.app/booking/status/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0)
                    setIsreload(!isreload);
            })
    };

    const handleDelete = id => {
        // console.log(id);
        fetch(`https://brasila-server.vercel.app/deleteBooking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0)
                    setIsreload(!isreload);
                navigate('/');
            });
    };


    const onToken = (token) => {
        if (!token.id) {
            // console.log('No token');
            alert(`Something wrong, Please try Again`);
        } else {
            handlePayment(id);
        }
    }


    useEffect(() => {
        fetch(`https://brasila-server.vercel.app/mybookings?email=${useremail}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setBookingData(data))
    }, [useremail]);






    return (
        <div>

            <Layout className="layout">
                <Content
                    style={{
                        padding: '0 50px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item  >
                            <Link to='/profile'>
                                Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href=''>
                            <Link to='/review'>
                                Rate Us
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href=''>
                            <Link to='/myreview'>
                                My Reviews
                            </Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-content"
                        style={{
                            background: colorBgContainer,
                        }}
                    >

                        <div className='grid grid-cols-1 gap-3'>
                            {
                                bookingData.length > 0 ?
                                    <>
                                        {
                                            bookingData.map(bookings =>


                                                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/VBXVfrM/h-b1.jpg")` }}
                                                    key={bookings._id}
                                                >
                                                    <div className="hero-overlay bg-opacity-60"></div>
                                                    <div className="hero-content text-center text-neutral-content">
                                                        <div className="max-w-md">
                                                            <h1 className="mb-5 text-5xl font-bold">{bookings?.title}</h1>
                                                            <p className='mb-2'>You are staying from {bookings.fromDate} to {bookings?.toDate} with {bookings?.people} members
                                                            </p>
                                                            <p className='mb-5'>Your Cost is ${bookings?.totalPrice}</p>

                                                            <div>
                                                                {bookings?.status === 'Paid' ?
                                                                    <>
                                                                        <Link to='/review'>
                                                                            <button className='bg-yellow-300 py-2 px-6 my-3 text-black mr-3 uppercase'>Rate Us</button>
                                                                        </Link>

                                                                    </>
                                                                    :
                                                                    <>
                                                                        <button className='bg-yellow-300 py-2 px-6 my-3 text-black mr-3 uppercase'
                                                                            onClick={() => { handleDelete(bookings._id) }}
                                                                        >Cancel Booking</button>

                                                                        <StripeCheckout
                                                                            currency='USD'
                                                                            amount={bookings?.totalPrice * 100}
                                                                            token={onToken}
                                                                            stripeKey="pk_test_51MAQCQFQ87m4QnJ0whHlzBOxZcTypWvk4vL6MrH0H31KhXXyPbpRYDK1xglR2Z1uPSRh5rWro3ZDUwygWmEzOwjy00fyNMPxe1"

                                                                        >
                                                                            <button className='bg-yellow-300 py-2 px-6 my-3 text-black mr-3 uppercase'
                                                                            >
                                                                                Pay Now
                                                                            </button>
                                                                        </StripeCheckout>
                                                                    </>

                                                                }

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                            )
                                        }
                                    </>
                                    :
                                    <>
                                        <p className='text-3xl font-bold text-center text-orange-700'>You Have No Booking !!!</p>
                                    </>
                            }

                        </div>







                    </div>
                </Content>
            </Layout>


        </div>
    );
};

export default Profile;
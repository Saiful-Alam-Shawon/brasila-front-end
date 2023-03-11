import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import { AuthShare } from '../Context/AuthContext';
import './profile.css'

const Profile = () => {

    const { user } = useContext(AuthShare);
    const useremail = user?.email;
    const navigate = useNavigate();
    const [isreload, setIsreload] = useState(true);


    const [bookingData, setBookingData] = useState([]);
    // const { email, fromDate, toDate, price, totalPrice, img1 } = [0]?.email;
    // console.log(bookingData[0]);
    const id = bookingData[0]?._id
    const status = bookingData[0]?.status
    // console.log(images);


    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const handlePayment = id => {
        // console.log(id);
        fetch(`http://localhost:5000/booking/status/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.modifiedCount > 0)
                    // setLoading(false);
                    setIsreload(!isreload);
                // toast.success('User Updated')
            })
    };

    const handleDelete = id => {
        // console.log(id);
        fetch(`http://localhost:5000/deleteBooking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.modifiedCount > 0)
                    // setLoading(false);
                    setIsreload(!isreload);
                // toast.success('User Updated')
                navigate('/');
            });
    };


    const onToken = (token) => {
        // console.log("Every");
        // console.log(token.id);

        if (!token.id) {
            // console.log('No token');
            alert(`Something wrong, Please try Again`);
        } else {
            // console.log(token.id, id);
            handlePayment(id);
        }
    }


    useEffect(() => {
        fetch(`http://localhost:5000/mybookings?email=${useremail}`)
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
                        {/* </Link> */}
                        {/* <Link to='/review'> */}
                        <Breadcrumb.Item href=''>
                            <Link to='/review'>
                                Rate Us
                            </Link>
                        </Breadcrumb.Item>
                        {/* </Link> */}
                        {/* <Link to='/myreview'> */}
                        <Breadcrumb.Item href=''>
                            <Link to='/myreview'>
                                My Reviews
                            </Link></Breadcrumb.Item>
                        {/* </Link> */}
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
                                                    {/* <div className="hero min-h-screen" style={{ backgroundImage: { images } }}> */}
                                                    {/* <div className="hero min-h-screen" style={{ backgroundImage: `url('`bookingData[0]?.img1`')` }}> */}
                                                    <div className="hero-overlay bg-opacity-60"></div>
                                                    <div className="hero-content text-center text-neutral-content">
                                                        <div className="max-w-md">
                                                            <h1 className="mb-5 text-5xl font-bold">{bookings?.title}</h1>
                                                            <p className='mb-2'>You are staying from {bookings.fromDate} to {bookings?.toDate} with {bookings?.people} members
                                                            </p>
                                                            <p className='mb-5'>Your Cost is ${bookings?.totalPrice}</p>
                                                            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
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
                                                                            // email={useremail}
                                                                            stripeKey="pk_test_51MAQCQFQ87m4QnJ0whHlzBOxZcTypWvk4vL6MrH0H31KhXXyPbpRYDK1xglR2Z1uPSRh5rWro3ZDUwygWmEzOwjy00fyNMPxe1"
                                                                        // secret key= 'sk_test_51MAQCQFQ87m4QnJ0AQXjIKe3hGtA7q1yNQnXJHfZdS76SbFcgXyNjaB57ABKmUloLsQTeKqdcybUcpPqjzAx3kvn00hv4PwSr0'
                                                                        >
                                                                            <button className='bg-yellow-300 py-2 px-6 my-3 text-black mr-3 uppercase'
                                                                            >
                                                                                Pay Now
                                                                            </button>
                                                                        </StripeCheckout>
                                                                    </>

                                                                }
                                                                {/* <button className='bg-yellow-300 py-2 px-6 my-3 text-black mr-3 uppercase'>Rate Us</button> */}






                                                                {/* <button className="text-xs text-black uppercase bg-yellow-300 px-5 py-2 ">Pay Now</button> */}

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
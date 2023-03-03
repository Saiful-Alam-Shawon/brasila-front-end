import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillStopwatchFill } from 'react-icons/bs';
import image from '../../image/res-b-1.jpg'
import herb from '../../image/res-body-herbs.jpg'
import captain from '../../image/res-body-herbs.jpg';
import '../Header/Banner.css'
import BookingModal from '../Modal/BookingModal';

const Restaurant = () => {

    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/restaurantInfo')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setRestaurant(data))
    }, [])

    console.log(restaurant[1])


    return (
        <div>
            {/* Banner */}
            <BookingModal></BookingModal>
            <div className='grid lg:grid-cols-12 m-6'>


                <div className='col-span-8' >
                    {/* <img className='h-96 w-full' src={image} alt="" /> */}
                    <img className='h-96 w-full' src={restaurant[0]?.img1} alt="" />
                </div>

                <div className='bg-slate-900 col-span-4 '>

                    <div className='m-12'>
                        <p className='text-3xl font-bold text-white'>
                            {restaurant[0]?.resh1}
                        </p>

                        <p className='mt-4 text-sm text-white '>
                            {restaurant[0]?.restext1}
                        </p>
                        <label htmlFor="my-modal-3" className='mt-2 rounded-full px-3 py-1 w-2/5 button text-sm bg-yellow-300'>
                            DISCOVER
                        </label>
                    </div>

                </div>
            </div>

            {/* Category */}

            <div className='m-6'>
                <ul className='flex justify-center'>
                    <li className='mx-1 uppercase'><a href=" "> Herbs</a></li>
                    {/* <li className='mx-1'><a href=" #"> Herbs</a></li>
                    <li className='mx-1'><a href=" #"> Herbs</a></li> */}
                </ul>
                <p className='h-1 w-full bg-gray-400 '></p>
            </div>

            {/* Herbs Restaurant */}

            <div className='m-6'>

                <div id='herb' className='grid lg:grid-cols-2'>
                    <div className='bg-slate-900 text-white '>
                        <div className=' m-12'>
                            <h1 className='text-4xl font-bold'>
                                {restaurant[1]?.restext}
                            </h1>
                            <p className='my-5 text-xs'>
                                {restaurant[1]?.text}
                            </p>
                            <p className='ml-7 mt-7 text-sm'>
                                <span>Location:</span> <span className='text-yellow-300'>1st Floor</span>
                            </p>
                            <p className='ml-7 mt-2 text-sm'>
                                <span>Booking:</span> <span className='text-yellow-300'> 55 61 34247000</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={restaurant[1]?.img} alt="" />
                    </div>
                </div>

                {/* Text */}


                <div className='m-3'>
                    <h1 className='text-2xl font-bold my-7 '>
                        Practical information
                    </h1>
                    <p className='mx-3 font-bold'>
                        Opening hours
                    </p>

                    <div className='mt-4 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                {/* <p className='text-sm'>icn</p> */}
                                <BsFillStopwatchFill />
                                <h1 className='ml-2 text-sm'>
                                    Monday
                                </h1>
                            </div>
                            <div className='flex '>

                                <div className='text-sm mr-6'>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-sm mx-6 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <h1 className=''>
                                Tuesday
                            </h1>
                            <div className='flex '>
                                <div>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-sm mx-6 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <h1>
                                Wednesday
                            </h1>
                            <div className='flex '>
                                <div>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-sm mx-6 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <h1>
                                Thursday
                            </h1>
                            <div className='flex '>
                                <div>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-sm mx-6 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <h1>
                                Friday
                            </h1>
                            <div className='flex '>
                                <div>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-sm mx-6 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <h1>
                                Sunday
                            </h1>
                            <div className='flex '>
                                <div>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-sm mx-6 pb-1 border-b border-dotted  border-gray-300'>
                        <div className='flex justify-between'>
                            <h1>
                                Saturday
                            </h1>
                            <div className='flex '>
                                <div>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p>12:00 PM - 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </div>



        </div>
    );
};

export default Restaurant;
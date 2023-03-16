import React from 'react';
import image from '../../image/meeting.jpg'
import contact from '../../image/m-contact-meeting-default.jpg'
import event from '../../image/allkinds.jpg'
import { FaSearchLocation, FaPhoneAlt, FaVoicemail } from 'react-icons/fa';
import BookingModal from '../Modal/BookingModal';
import '../Header/Banner.css'

const Meetings = () => {
    return (
        <div>
            {/* Banner */}

            <div className='grid lg:grid-cols-12 m-6'>
                <div className='col-span-8' >
                    <img className='h-96 w-full' src={image} alt="" />
                </div>
                <div className='bg-slate-900 col-span-4 '>
                    <div className='m-11'>
                        <h1 className='text-white text-sm '>
                            With more than 26 meeting facilities, we have a Convention Center with 13 rooms, a 1.415 m² foyer and a theatre for 500 people, multifunctional rooms with 6.4m height for up to 1,500 people simultaneously, besides other spaces with panoramic view to the Paranoa Lake.
                        </h1>
                        <label htmlFor="my-modal-3" className='mt-4 rounded-full px-3 py-1 w-3/5 text-sm bg-yellow-300'>
                            REQUEST A QUOTE
                        </label>
                    </div>
                </div>
            </div>

            {/* Category */}

            <div className='m-6'>
                <ul className='flex justify-center'>
                    <li className='mx-1'><a href=" "> Events</a></li>
                </ul>
                <p className='h-1 w-full bg-gray-400 '></p>
            </div>

            <BookingModal></BookingModal>

            <div className='m-6 meeting'>
                <div className='grid lg:grid-cols-2 mt-12'>
                    <div>
                        <img src={event} alt="" />
                    </div>
                    <div className='p-8'>
                        <h1 className='font-bold'>
                            ALL KINDS OF EVENTS.
                        </h1>
                        <p className='text-xs my-4'>
                            The Royal Tulip Brasilia Alvorada hotel is the ideal place to host congresses, conferences, seminars, weddings and all kind of events. Furthermore, you count with a business center with two support rooms and a VIP Lounge, ideal for interviews and press debates.
                        </p>
                        <label htmlFor="my-modal-3" className='mt-2 rounded-full px-10 py-1 w-4/5 text-sm bg-yellow-300'>
                            REQUEST A QUOTE
                        </label>
                    </div>
                </div>
            </div>


            {/* Contact to The Hotel */}

            <div className='grid lg:grid-cols-12   m-6'>
                <div className='col-span-4 comment'>
                    <img className='' src={contact} alt="" />
                </div>
                <div className='col-span-8 meeting bg-slate-900 '>

                    <h1 className='text-4xl text-white  mt-12 mx-12'>
                        Contact the hotel
                    </h1>

                    <div className='lg:m-12 meeting'>
                        <div className='flex'>
                            <div className=' text-yellow-300'>
                                <FaSearchLocation />
                            </div>
                            <div >
                                <p className='text-sm ml-2 text-white'>
                                    SHTN - TRECHO 01 CONJ 1B - BLOCOS C <br /> 70800-200 BRASILIA, Brazil <br /> <span className='text-yellow-300'>6</span> km from the city center
                                </p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <div className=' text-yellow-300'>
                                <FaPhoneAlt />
                            </div>
                            <div className='text-sm ml-2'>
                                <span className='text-white'>Call the hotel:</span> <span className='text-yellow-300'>+55 61 34247000</span>
                            </div>
                        </div>
                        <div className='flex mt-1'>
                            <div className=' text-yellow-300'>
                                <FaVoicemail />
                            </div>
                            <div className='text-sm ml-2'>
                                <span className='text-white'>E-mail address:</span> <span className='text-yellow-300'>
                                    rtbsba.reservas@goldentulip.com.br
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Meetings;
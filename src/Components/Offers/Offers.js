import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/offers-b1.jpg';
import weekend from '../../image/offers-body-1.jpg'
import semiFlex from '../../image/offers-body-2.jpg'
import senior from '../../image/offers-body-3.jpg'
import longStay from '../../image/offers-body-4.jpg';
import '../Header/Banner.css'
import PromotionModal from '../Modal/PromotionModal';

const Offers = () => {
    return (
        <div className='margin'>
            <PromotionModal></PromotionModal>

            <div className='grid lg:grid-cols-12 m-6'>
                <div className='col-span-8' >
                    <img className='' src={image} alt="" />
                </div>
                <div className='bg-slate-900 col-span-4 '>

                    <div className='m-10'>

                        <p className='text-white font-bold'>Super deal</p>
                        <h1 className='text-white text-3xl font-bold mb-4'>
                            WEEKEND OFFER Breakfast Included
                        </h1>
                        <p className='text-white text-sm'>
                            Book your weekend at a special rate with breakfast included, come to live the Golden experience with us.
                        </p>
                        <Link to='/specialOffer'>
                            <button className='mt-4 rounded-full px-3 py-1 button w-2/4 text-sm bg-yellow-300'>
                                SEE THE OFFER
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            {/* All Our Offers */}

            <div className='m-6'>
                <h1 className='text-xl font-bold m-2'>
                    All Our Offers
                </h1>

                <div className='grid lg:grid-cols-3 gap-4'>


                    <div>
                        <img className='w-full h-72' src={weekend} alt="" />

                        <div className='p-4'>
                            <h1 className='text-lg my-3'>
                                WEEKEND OFFER BREAKFAST INCLUDED
                            </h1>
                            <p className='text-sm'>
                                Book your weekend at a special rate with breakfast included, come to live the Golden experience with us.
                            </p>
                            <Link to='/specialOffer'>
                                <button className='mt-4 rounded-full px-3 py-1 button w-2/4 text-sm bg-yellow-300'>
                                    SEE THE OFFER
                                </button>
                            </Link>
                        </div>

                    </div>

                    <div>
                        <img className='w-full h-72' src={semiFlex} alt="" />

                        <div className='p-4'>
                            <h1 className='text-lg my-3'>
                                SEMI-FLEXIBLE
                            </h1>
                            <p className='text-sm'>
                                Travel stress-free: you can cancel up to three days before your stay without being charged.
                            </p>
                            <Link to='/specialOffer'>
                                <button className='mt-4 rounded-full px-3 py-1 button w-2/4 text-sm bg-yellow-300'>
                                    SEE THE OFFER
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <img className='w-full h-72' src={senior} alt="" />

                        <div className='p-4'>
                            <h1 className='text-lg my-3'>
                                SENIOR OFFER
                            </h1>
                            <p className='text-sm'>
                                – 10% on the daily rate, for all people over the age of 60 in Golden Tulip hotels!
                            </p>
                            <Link to='/specialOffer'>
                                <button className='mt-4 rounded-full px-3 py-1 button w-2/4 text-sm bg-yellow-300'>
                                    SEE THE OFFER
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <img className='w-full h-72' src={longStay} alt="" />
                        <div className='p-4'>
                            <h1 className='text-lg my-3'>
                                LONG STAY OFFER
                            </h1>
                            <p className='text-sm'>
                                Beach or hiking? Food truck or restaurant? Tandem or solo bike? Enjoy all our Golden moments with our Long Stay offer. Receive a 20% discount on stays of three days or more. Free cancellation up to three days before your stay.
                            </p>
                            <Link to='/specialOffer'>
                                <button className='mt-4 rounded-full px-3 py-1 button w-2/4 text-sm bg-yellow-300'>
                                    SEE THE OFFER
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
};

export default Offers;
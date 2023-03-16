import React, { } from 'react';
import image from '../../image/ser-b1.jpg'
import pools from '../../image/ser-body-spa.jpg'
import spa from '../../image/ser-body-spa1.jpg'
import fitness from '../../image/ser-body-fitness.jpg'
import kids from '../../image/ser-doby-kids.jpg'
import { useEffect } from 'react';
import '../Header/Banner.css'


const Services = () => {


    useEffect(() => {
        fetch('https://brasila-server.vercel.app/servicesInfo')
            .then(res => res.json())
            .then(data => console.log(data))
        // .then(data=>setServices(data))
    }, [])

    // console.log(object);



    return (
        <div className='meeting'>
            {/* Banner */}

            <div className='grid lg:grid-cols-12 m-6'>
                <div className='col-span-8' >
                    <img className='h-96 lg:w-full' src={image} alt="" />
                </div>
                <div className='bg-slate-900 col-span-4 text-white'>

                    <div className='p-12'>
                        <h1 className='text-3xl font-bold'>
                            Our services
                        </h1>
                        <p className='text-sm mt-6'>
                            A great experience! After a busy day (or not) guests can relax at the swimmingpools facing the Paranoá Lake or exercice at the hotel fitness center. And for those who loves massages, the Spa is the ideal choice.
                        </p>
                    </div>


                </div>
            </div>

            {/* Cards */}

            <div className='grid lg:grid-cols-3 promotions gap-4 w-11/12 mx-auto'>
                <div>
                    <img className='w-96 h-72 meeting' src={pools} alt="" />
                    <div className='p-4'>
                        <p className='text-sm'>THE BIGGEST SWIMMING POOL</p>
                        <p className='text-lg my-3'>SWIMMING POOLS</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio hic pariatur aspernatur. Commodi voluptates distinctio veniam obcaecati magnam quo cupiditate expedita cum, sed, ipsam harum odio fuga a laudantium.</p>
                    </div>
                </div>
                <div>
                    <img className='w-96 h-72 meeting' src={spa} alt="" />
                    <div className='p-4'>
                        <p className='text-sm'>SPA & WELLNESS</p>
                        <p className='text-lg my-3'>SPA ! </p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio hic pariatur aspernatur. Commodi voluptates distinctio veniam obcaecati magnam quo cupiditate expedita cum, sed, ipsam harum odio fuga a laudantium.</p>
                    </div>
                </div>
                <div>
                    <img className='w-96 h-72 meeting' src={fitness} alt="" />
                    <div className='p-4'>
                        <p className='text-sm'>EXCERCISE & FEEL GOOD</p>
                        <p className='text-lg my-3'>Excercise Zone</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio hic pariatur aspernatur. Commodi voluptates distinctio veniam obcaecati magnam quo cupiditate expedita cum, sed, ipsam harum odio fuga a laudantium.</p>
                    </div>
                </div>
                <div>
                    <img className='w-96 h-72 meeting' src={kids} alt="" />
                    <div className='p-4'>
                        <p className='text-sm'>KIDS FEEL GOOD</p>
                        <p className='text-lg my-3'>KIDS CLUB</p>
                        <p className='text-sm'>Golden Tulip celebrates 60 years in bed with you! From December 16 to January 1, 2023, let’s toast this new era together with 20% off on the daily rate! The party is on!</p>
                    </div>
                </div>



            </div>


            {/* Upto Footer */}

            <div className='grid grid-cols-2 m-6 bg-gray-300 rounded '>
                <div className='grid lg:grid-cols-3 gap-4 p-6'>
                    <div>
                        <h1 className='text-xl'>Valet Parking</h1>
                        <p className='text-sm my-2'>Valet parking extra paid. Check prices and conditions at reception.</p>
                    </div>
                    <div>
                        <h1 className='text-xl'>
                            Free wifi
                        </h1>
                        <p className='text-sm my-2'>
                            Wifi free in all areas of the hotel.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-xl'>
                            Business Center
                        </h1>
                        <p className='text-sm my-2'>
                            Available 7 days a week.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;
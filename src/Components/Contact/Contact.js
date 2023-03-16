import React from 'react';
import image from '../../image/Sight_Seeing_GT.svg'

const Contact = () => {
    return (
        <div>

            {/* Banner */}

            <div className='grid grid-cols-12 m-6'>
                <div className='col-span-8' >
                    <h1 className='text-3xl font-bold'>
                        MAP WILL BE ADDED HERE
                    </h1>
                </div>
                <div className='bg-slate-900 col-span-4 text-white'>
                    <div class="flex items-center ...">
                        <div>01</div>
                        <div >02</div>
                        <div className='p-7'>03</div>
                    </div>

                </div>
            </div>

            <div >
                <h1 className='text-3xl font-bold m-3 ml-6'>
                    Discover nearby points of interest
                </h1>
                <div className='grid grid-cols-3 m-8'>
                    <div className='bg-slate-800 h-72 w-72 mx-auto'>
                        <div className=' flex  text-white'>
                            <img className='h-5 ml-6 mt-8 ' src={image} alt="" />
                            <span className='ml-2 mt-8'>Sightseeing</span>

                        </div>
                        <div className='text-yellow-400  ml-6 m-3'>
                            <h1 className='font-bold'>PARANOÁ LAKE</h1>
                        </div>
                        <p className='text-white ml-6'>
                            On the shores of Lake Paranoá
                        </p>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/Untitled design1.png'

const Upper = () => {
    return (
        <div className='h-16 bg-slate-900'>
            {/* <button className='hover:bg-slate-400 '> */}
            <div className='w-80'>
                <Link to='/'>
                    <div className='flex items-center ml-8 '>

                        <img className='h-12 w-15   mt-2' src={image} alt="" />
                        <p className='text-yellow-500 text-3xl font-bold mb-0 uppercase'>Royal Hotel</p>

                    </div>
                </Link>
            </div>
            <div></div>



            {/* </button> */}

        </div>
    );
};

export default Upper;
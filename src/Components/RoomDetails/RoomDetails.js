import { Menu } from '@headlessui/react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { AuthShare } from '../Context/AuthContext';

const list = [

    { name: "1 Adult", value: 1 },
    { name: "2 Adults", value: 2 },
    { name: "3 Adults", value: 3 },
    { name: "4 Adults", value: 4 }
]


const RoomDetails = () => {
    const { user } = useContext(AuthShare);
    const data = useLoaderData();
    const { imgh, people, price, text, title, _id } = data;
    const email = user?.email;
    const navigate = useNavigate();
    // console.log(data);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const staDate = moment(fromDate, 'DD-MM-YYYY');
    const enDate = moment(toDate, 'DD-MM-YYYY');
    const totalDays = moment.duration(enDate.diff(staDate)).asDays() + 1;
    const totalPrice = price * totalDays;
    const { RangePicker } = DatePicker;
    const dataRange = (dates) => {
        setFromDate(dates[0].format('DD-MM-YYYY'));
        setToDate(dates[1].format('DD-MM-YYYY'));
    };
    const [adults, setAdults] = useState('Adults');
    const [person, setPerson] = useState("2");

    const bookingData = {
        fromDate, toDate, totalDays, people, price, text, title, email, totalPrice,
    }

    const handleAdults = (ok) => {
        setAdults(ok);
        setPerson(ok);
    };

    const handleBookWithUser = () => {

        console.log(bookingData);

        fetch('https://brasila-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    navigate('/profile');
                }
            })
            .catch(error => console.log(error.message));


    };

    const handleBookWithoutUser = () => {
        alert('Please Log In First')
        // console.log('No User Presented');
    };
    const handleBookWithoutUser1 = () => {
        alert('Please Log In First');
        navigate('/login');
        // console.log('No User Presented');
    };



    const handlePayment = _id => {
        console.log("Handle Payment is hited", bookingData, _id);

        fetch('https://brasila-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...bookingData, status: "Paid" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    console.log("Posted");
                    navigate('/profile');
                }
            })
            .catch(error => console.log(error.message));
    }

    const onToken = (token, totalDays) => {
        // console.log(token.id);

        if (!totalDays) {
            console.log('No token');
            alert(`Something went wrong ..... Please Check, or Select Enter Date & Exit Date `);
        }
        else {
            // console.log(token.id, id);
            handlePayment(_id);
        }
    }





    return (
        <div className='mx-6'>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={imgh} alt='' className="w-2/4 rounded-lg shadow-2xl" />
                    <div>
                        <div>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{text}</p>
                            <p className='font-bold text-red-900'>{price}/day</p>
                        </div>
                        <div className='w-2/4  '>

                            {/* Start DatePicker from AntD */}

                            <Space direction="vertical" size={12}>
                                <RangePicker className='px-4 py-[10px] bg-yellow-300 rounded-none' format='DD-MM-YYYY' onChange={dataRange} />
                            </Space>

                            {/* Clsoe DatePicker from AntD */}

                        </div>
                        <div>
                            <Menu as='div' className=' text-black relative my-5' >
                                <Menu.Button className='bg-yellow-300 w-2/4 h-full px-4 py-3 flex items-center justify-between'>
                                    {adults}
                                    <BsChevronDown className='text-base' />
                                </Menu.Button>
                                <Menu.Items as='ul' className='bg-white w-full flex-col z-40 absolute'>
                                    {
                                        list.map((li, index) => {
                                            return <Menu.Item as='li' className='border-b last-of-type:border-b-0 h-12 hover:bg-yellow-100 w-full flex items-center justify-center cursor-pointer' key={index}
                                                onClick={() => handleAdults(li.value, "Adults")}
                                            > {li.name}</Menu.Item>
                                        })
                                    }
                                </Menu.Items>
                            </Menu>
                        </div>
                        <div className='grid lg:grid-cols-2 w-2/4'>
                            <div>
                                <StripeCheckout
                                    currency='USD'
                                    amount={price * totalDays * 100}
                                    token={onToken}
                                    // token={onToken1}
                                    stripeKey="pk_test_51MAQCQFQ87m4QnJ0whHlzBOxZcTypWvk4vL6MrH0H31KhXXyPbpRYDK1xglR2Z1uPSRh5rWro3ZDUwygWmEzOwjy00fyNMPxe1"
                                >
                                    {
                                        email ?
                                            <>
                                                <button className='bg-yellow-300 py-2 px-6  text-black '
                                                >
                                                    Pay Now
                                                </button>
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                </StripeCheckout>
                                {!email &&


                                    <>
                                        <button className='bg-yellow-300 py-2 px-6  text-black mr-3'
                                            onClick={handleBookWithoutUser1} >
                                            Pay Now
                                        </button>
                                    </>
                                }
                            </div>


                            {/* </StripeCheckout> */}
                            {
                                email ?
                                    <>
                                        <button className='bg-yellow-300 px-6 py-2 w-full mx-auto text-black '
                                            onClick={handleBookWithUser}
                                        >
                                            Book Now
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button className='bg-yellow-300 py-2 px-6  text-black mr-3'
                                            onClick={handleBookWithoutUser}
                                        >
                                            Book Now
                                        </button>
                                    </>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
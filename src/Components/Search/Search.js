import { Menu } from '@headlessui/react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { toast, ToastContainer } from 'react-toastify';
import { AuthShare } from '../Context/AuthContext';


const list = [

    { name: "1 Adult", value: 1 },
    { name: "2 Adults", value: 2 },
    { name: "3 Adults", value: 3 },
    { name: "4 Adults", value: 4 }
]

const Search = () => {
    const data = useLoaderData();
    const { img1, people, price, text, title, _id } = data[0]
    const { fromDate, toDate, totaldays, person, user } = useContext(AuthShare);
    const email = user?.email;
    const totalPrice = price * totaldays;
    const navigate = useNavigate();
    // console.log(email);

    // console.log("fromDate", fromDate, "Todate", toDate, "totalDays", totaldays, "TotalPerson", person);

    const id = data._id
    console.log(_id);
    // const [fromDate, setFromDate] = useState('');
    // const [toDate, setToDate] = useState('');
    // const staDate = moment(fromDate, 'DD-MM-YYYY');
    // const enDate = moment(toDate, 'DD-MM-YYYY');
    // const totalDays = moment.duration(enDate.diff(staDate)).asDays() + 1;
    // const { RangePicker } = DatePicker;
    // const dataRange = (dates) => {
    // console.log(moment(dates[0]).format('DD-MM-YYYY'));
    // console.log(moment(dates[1]).format('DD-MM-YYYY'));
    //     setFromDate(dates[0].format('DD-MM-YYYY'));
    //     setToDate(dates[1].format('DD-MM-YYYY'));
    // };
    // const [adults, setAdults] = useState('Adults');
    // const [person, setPerson] = useState("2");


    // const handleAdults = (ok) => {
    //     setAdults(ok);
    //     setPerson(ok);
    // };



    const handleBookWithoutUser = () => {
        // toast.warn('Please, Log In first');
        // toast('User Created Successfully')
        alert('Please Log In First');
        navigate('/login');
        // console.log('No User Presented');
    };

    const bookingData = {
        fromDate, toDate, totaldays, img1, people, price, text, title, email, totalPrice,
    }

    const handleBookWithUser = () => {

        // console.log(bookingData);

        fetch('http://localhost:5000/booking', {
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
                    // setLoading(false);
                    // setIsreload(!isreload);
                    // toast.success('Successfully User Created')
                }
            })
            .catch(error => console.log(error.message));


    };

    const handlePayment = _id => {
        // console.log("Handle Payment is hited", _id);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...bookingData, status: "Paid" })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    // console.log("Posted");
                    navigate('/profile');
                    // setLoading(false);
                    // setIsreload(!isreload);
                    // toast.success('Successfully User Created')
                }
            })
            .catch(error => console.log(error.message));




        // fetch(`http://localhost:5000/booking/status/${_id}`, {
        //     method: 'PUT'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //         if (data.modifiedCount > 0)
        // navigate('/profile');
        // setLoading(false);
        // setIsreload(!isreload);
        // toast.success('User Updated')
        // })
    };

    const onToken = (token) => {
        // console.log("Every");
        // console.log(token.id);

        if (!token.id) {
            console.log('No token');
            alert(`Something wrong, Please try Again`);
        } else {
            // console.log(token.id, id);
            handlePayment(_id);
        }
    }
    const handleBookWithoutUser1 = () => {
        // toast.warn('Please, Log In first');
        // toast('User Created Successfully')
        alert('Please Log In First');
        navigate('/login');
        // console.log('No User Presented');
    };



    return (
        <div className='mx-6'>
            <ToastContainer

            />
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} alt='' className="w-2/4 rounded-lg shadow-2xl" />
                    <div>
                        <div>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{text}</p>
                        </div>
                        <div>
                            <p>You have Selected</p>
                            <p>Fromdate {fromDate}</p>
                            <p>To {toDate}</p>
                            <p>Total {totaldays} Days</p>
                            <p>And Total {person} Persons </p>
                            <p>Rent  {price} <span>/day</span> </p>
                            <p>And Total Cost {totalPrice} </p>
                        </div>

                        <div className='grid lg:grid-cols-2 w-2/4'>
                            <div>
                                <StripeCheckout
                                    currency='USD'
                                    amount={price * totaldays * 100}
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
                                        <button className='bg-yellow-300 py-2 px-6  text-black '
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

export default Search;
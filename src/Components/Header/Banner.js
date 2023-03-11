import React, { useState } from 'react';
import image from '../../image/h-b1.jpg';
import image2 from '../../image/h-body.jpg';
import wifi from '../../image/ICONS_GT_SA_WIFI.svg'
import aircondition from '../../image/ICONS_GT_PF_AIRCONDITIONNED.svg'
import restaurant from '../../image/ICONS_GT_PF_RESTAURANT.svg'
import bar from '../../image/ICONS_GT_PF_BAR.svg'
import parking from '../../image/ICONS_GT_SA_PARKINGGARAGE.svg'
import securedParking from '../../image/ICONS_GT_SA_SECUREDPARKING.svg'
import outdoorPool from '../../image/ICONS_GT_RP_OUTDOORPOOL.svg'
import spa from '../../image/ICONS_GT_RP_SPA.svg'
import barImage from '../../image/h-restaurant.jpg'
import senior from '../../image/offers-body-3.jpg'
import image4 from '../../image/h-promtions-2.jpg';
import image5 from '../../image/h-promtions-3.jpg';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { FaBeer, FaPhoneAlt, FaPhoneSquareAlt, FaSearchLocation, FaStar, FaStarHalfAlt, FaUserAlt, FaVoicemail } from 'react-icons/fa';
import { BsCalendar, BsChevronDown } from 'react-icons/bs';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PromotionModal from '../Modal/PromotionModal';
import { useContext } from 'react';
import { AuthShare } from '../Context/AuthContext';
import { DatePicker, Space } from 'antd';
import 'antd/dist/reset.css';
import moment from 'moment';
import './Banner.css'
import { stringify } from 'postcss';
import Loading from '../Loading';



const list = [

    { name: "1 Member", value: 1 },
    { name: "2 Members", value: 2 },
    { name: "3 Members", value: 3 },
    { name: "4 Members", value: 4 },
    { name: "More Members", value: 6 }
]


const Banner = () => {

    // const [startDate, setStartDate] = useState(new Date());
    // const [startDate, setStartDate] = useState(false);
    // const [endDate, setEndDate] = useState(false);
    // const [isreload, setIsreload] = useState(true);
    const [homePageInfo, setHomePageInfo] = useState([]);
    const [promotionInfo, setPromotionInfo] = useState([]);
    const [reviews, setReviews] = useState([]);
    // const [modal, setModal] = useState();
    const { setModal, user } = useContext(AuthShare);
    const [showAlert, setShowAlert] = useState();
    const email = user?.email;
    const [loading, setLoading] = useState(true);



    // const { imgbody, imgh, imgrestaurant } = homePageInfo[0];



    useEffect(() => {
        fetch('http://localhost:5000/homeInfo')
            .then(res => res.json())
            .then(data => setHomePageInfo(data))
        // setIsreload(!isreload)
        // .then(data => console.log(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/homePromtions')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setPromotionInfo(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/allreviews')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setReviews(data))
    }, []);

    // console.log(reviews[0]);
    // console.log(promotionInfo[0]);
    // console.log(promotionInfo[0]?.img);
    // console.log(promotionInfo[0]?.text);
    // console.log(promotionInfo[0]?.title);

    // console.log(modal);


    // const [fromDate, setFromDate] = useState('');
    // const [toDate, setToDate] = useState('');
    // const [totaldays, setTotaldays] = useState('');
    const { fromDate, setFromDate, toDate, setToDate, totaldays, setTotaldays } = useContext(AuthShare);
    const staDate = moment(fromDate, 'DD-MM-YYYY');
    const enDate = moment(toDate, 'DD-MM-YYYY');
    // const totalDays = moment.duration(enDate.diff(staDate)).asDays() + 1;
    setTotaldays(moment.duration(enDate.diff(staDate)).asDays() + 1);

    const { RangePicker } = DatePicker;
    const dataRange = (dates) => {
        // console.log(moment(dates[0]).format('DD-MM-YYYY'));
        // console.log(moment(dates[1]).format('DD-MM-YYYY'));
        setFromDate(dates[0].format('DD-MM-YYYY'));
        setToDate(dates[1].format('DD-MM-YYYY'));
        // setTotaldays(moment.duration(enDate.diff(staDate)).asDays() + 1);
    }
    // console.log('FromDate', staDate, 'ToDate', enDate);
    // console.log(totalDays);


    const [adults, setAdults] = useState('Select Member/Members Here');
    const [person, setPerson] = useState();


    const handleAdults = (ok) => {
        setAdults(ok);
        setPerson(ok);
    };

    const handleWithoutData = () => {
        // alert("Please, select Date & Persons. ")
        setShowAlert('To, Get Room. Please, Select Date & Member');
    }


    // console.log("fromDate", fromDate, "Todate", toDate, "totalDays", totaldays, "TotalPerson", person);
    // const handleKids = (ok) => {
    //     setChilds(ok);
    //     setTotalChild(ok);
    //     const total = totalPerson + totalChild;
    //     setPerson(total);

    // };

    // const handleFind = (persons) => {
    // }

    // console.log("adults", adults, "child", childs, "input-adults", totalChild, 'input-child', totalChild, "totalPersons", person);
    // setTotalPerson(adults + childs);

    //

    // const numTotalPerson = Number(totalPerson);

    // promotionInfo
    // console.log(totalPerson);






    return (

        <>
            {
                promotionInfo.length > 0 ?
                    <>
                        <div>

                            {/* <p className='text-xs text-center text-green-600 uppercase'>Cautions: Design Concept & Some content Collected from Royal Tulip Brasila</p> */}

                            {/* Home Banner */}

                            <div id='home' className='grid md:grid-cols-12 m-6 mt-0'>

                                <div className='col-span-8' >
                                    {/* <img className='' src={image} alt="" /> */}
                                    <img className='' src={homePageInfo[0]?.imgh} alt="" />
                                </div>

                                <div className='bg-slate-900 col-span-4   '>

                                    <div className='py-12 '>
                                        {/* <div> */}
                                        <div className='mb-10'>
                                            <h1 className='text-3xl text-center text-white'>Your Stay</h1>
                                        </div>

                                        {/* <div className='w-4/5 mx-auto m-3 grid grid-cols-2 gap-2'> */}
                                        {/* <button className='bg-yellow-500 py-3 px-10 text-black text-sm '>
                    Sat. 1/1/22
                </button> */}
                                        {/* <div className='relative flex items-center justify-end text-center  text-black text-sm '>
                    <div className='absolute z-20 pr-4'>
                        <BsCalendar className='text-ascent text-base ' />
                    </div>
                    <DatePicker className='pl-2 w-11/12 py-3 bg-yellow-300'
                        selected={startDate}
                        placeholderText='Check In'
                        onChange={(date) => setStartDate(date)}
                    />
                </div> */}

                                        {/* <button className='bg-yellow-500 py-3 px-10  text-sm'>
                    Sun. 1/3/23
                </button> */}

                                        {/* <div className='relative flex items-center justify-end  text-center  text-black text-sm '>

                    <div className='absolute z-20 pr-4'>
                        <BsCalendar className='text-ascent text-base ' />
                    </div>

                    <DatePicker className='pl-2 w-11/12 py-3 bg-yellow-300'
                        selected={endDate}
                        placeholderText='Check Out'
                        onChange={(date) => setEndDate(date)}
                    />
                </div> */}

                                        {/* </div> */}

                                        {/* Start DatePicker from AntD */}
                                        <div className='w-3/4 mx-auto mt-3 mb-6 '>
                                            <Space direction="vertical" size={12}>
                                                <RangePicker className='px-4 py-[10px] bg-yellow-300 rounded-none' format='DD-MM-YYYY' onChange={dataRange} />
                                            </Space>
                                        </div>

                                        {/* Start DatePicker from AntD */}




                                        <div className=' w-3/4 mx-auto'>
                                            {/* <button className='bg-slate-600 py-4 px-16  text-black '>

                    <div className='flex justify-start'>
                        <div className='text-sm'>

                            1 chambre - 1 occupant

                        </div>
                        <div className='text-sm'>
                            amie
                        </div>
                    </div>

                </button> */}
                                            <div>
                                                <Menu as='div' className='bg-yellow-300 text-black relative' >
                                                    <Menu.Button className='w-full h-full px-4 py-3 flex items-center justify-between'>
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

                                            {/* <div> */}
                                            {/* <Menu as='div' className='bg-yellow-300 text-black relative' >
                        <Menu.Button className='w-full h-full px-4 py-3 flex items-center justify-between'> */}
                                            {/* {childs} */}
                                            {/* <BsChevronDown className='text-base' />
                        </Menu.Button>
                        <Menu.Items as='ul' className='bg-white w-full flex-col z-40 absolute'>
                            {
                                list.map((li, index) => {
                                    return <Menu.Item as='li' className='border-b last-of-type:border-b-0 h-12 hover:bg-yellow-100 w-full flex items-center justify-center cursor-pointer' key={index} */}
                                            {/* // onClick={() => handleKids(li.value, "Kids")} */}
                                            {/* > {li.name}</Menu.Item>
                                })
                            }
                        </Menu.Items>
                    </Menu>
                </div> */}
                                        </div>

                                        {/* {totalDays && numTotalPerson ?
                <p className='text-xs text-white'>You Have Select from {fromDate} to {toDate} & Total {totalPerson} Persons</p>
                :
                <></>
            } */}
                                        {
                                            person && totaldays ?
                                                <>
                                                </>
                                                :
                                                <>
                                                    <p className='uppercase text-xs text-red-400 text-center mt-5'>{showAlert}</p>
                                                </>
                                        }
                                        {/* <p>{showAlert}</p> */}
                                        <div className='w-3/4 mx-auto mt-6'>

                                            {
                                                person && totaldays ?

                                                    <>
                                                        <Link to={`/search/${person}`}>
                                                            <button className='bg-yellow-300 px-7 py-[12px] w-full mx-auto text-black '
                                                            // onClick={() => handleFind(adults)}
                                                            >
                                                                FIND A ROOM
                                                            </button>
                                                        </Link>
                                                    </>
                                                    :
                                                    <>
                                                        <button className='bg-yellow-300 px-7 py-[12px] w-full mx-auto text-black '
                                                            onClick={handleWithoutData}
                                                        >
                                                            FIND A ROOM
                                                        </button>
                                                    </>
                                            }

                                            {/* <Link to={`/search/${person}`}>
                    <button className='bg-yellow-300 py-3 px-24 text-black '
                    // onClick={() => handleFind(adults)}
                    >
                        FIND A ROOM
                    </button>
                </Link> */}
                                        </div>

                                        {/* </div> */}

                                    </div>
                                </div>

                            </div>

                            {/* Home Contact */}

                            <div id='contact' className='grid md:grid-cols-12 m-6'>

                                <div className='bg-slate-800 col-span-4 text-white'>
                                    <h4 className='text-xl font-bold m-6'>
                                        Remarkable
                                    </h4>
                                    <p className='text-xs mx-6'>
                                        The Royal Tulip Brasilia Alvorada hotel is certainly one of the most imposing hotels in Brasilia. With its architecture signed by Ruy Ohtake, it is located on the shores of Lake Paranoá, next to the Alvorada Palace and less than 10 minutes away from the commercial center of Brasilia and Esplanada dos Ministérios and 15 minutes away from the airport.
                                    </p>
                                    <p className='mx-6 mt-3 mb-1 text-amber-300 text-xl'>
                                        Timetable
                                    </p>
                                    <p className='mx-6 text-sm'>Checkin 14:00</p>
                                    <p className='ml-6 text-sm'>Checkout 12:00</p>
                                    <p className='mx-6 mt-2 mb-1  text-amber-300 text-xl '>Pets:</p>
                                    <p className='mx-6 text-sm'>Not accepted</p>
                                </div>

                                <div className=' col-span-4 text-white'>
                                    {/* <img src={image2} alt="" /> */}
                                    {/* <img src={imgbody} alt="" /> */}
                                    <img src={homePageInfo[0]?.imgbody} alt="" />

                                </div>

                                <div className=' col-span-4 bg-slate-800 text-white'>


                                    <h1 className='text-4xl  m-6 text-center'>
                                        Contact
                                    </h1>


                                    <div className='flex'>
                                        <div className='ml-6 text-yellow-300'>
                                            <FaSearchLocation />
                                            {/* <Geolocation /> */}
                                        </div>
                                        <div >
                                            <p className='text-sm ml-2'>
                                                SHTN - TRECHO 01 CONJ 1B - BLOCOS C <br /> 70800-200 BRASILIA, Brazil <br /> 6 km from the city center
                                            </p>
                                        </div>
                                    </div>


                                    <div className='flex mt-2'>
                                        <div className='ml-6 ' >
                                            <div className='text-yellow-300'>
                                                <FaPhoneAlt />
                                            </div>
                                        </div>
                                        <div className=''>
                                            <span className='ml-2 text-sm'>Booking:</span> <span className='text-sm'>(+33) 1 70 98 61 18</span>
                                            <p className='ml-2 text-xs'>
                                                (7 days a week from 8:00 a.m. to 10:00 p.m. (Paris time) - Cost of a local call (Available in English))
                                            </p>
                                        </div>
                                    </div>


                                    <div className='flex mt-1'>
                                        <div className='ml-6 text-yellow-300'>
                                            <FaPhoneAlt />
                                        </div>
                                        <div className='text-sm ml-2'>
                                            <span>Call the hotel:</span> +55 61 34247000
                                        </div>
                                    </div>


                                    <div className='flex mt-1'>
                                        <div className='ml-6 text-yellow-300'>
                                            <FaVoicemail />
                                        </div>
                                        <div className='text-sm ml-2'>
                                            <span>E-mail address:</span> rtbsba.reservas@goldentulip.com.br
                                        </div>
                                    </div>


                                    <div className='ml-6 mt-2'>
                                        <a href="#comments">
                                            <button className='px-4 w-3/4 py-2 text-sm bg-yellow-300 rounded-full text-black'>
                                                SEE OPINIONS
                                            </button>
                                        </a>
                                    </div>

                                    <div className='ml-6 mt-2 border-gray-500'>
                                        <button className='px-4 w-3/4 py-2 text-sm   rounded-full'>
                                            See on a map
                                        </button>
                                    </div>

                                </div>

                            </div>

                            {/* Icons */}

                            <div className='grid lg:grid-cols-8 small md:grid-cols-4 m-6 w-4/5 mx-auto mb-14 mt-8'>
                                <div>
                                    <img className='h-16' src={wifi} alt="" />
                                    <div className='w-3/5 mx-auto m-2'>
                                        <p className='text-xs  '>Wifi</p>
                                    </div>

                                </div>

                                <div>
                                    <img className='h-16' src={aircondition} alt="" />
                                    {/* <div className='w-full mx-auto'> */}
                                    <p className='text-xs mt-2 mr-2'>Air Conditionned</p>
                                    {/* </div> */}
                                </div>
                                <div>
                                    <img className='h-16' src={restaurant} alt="" />
                                    <div className=' mt-2'>
                                        <p className='text-xs  '>Restaurant</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='h-16' src={bar} alt="" />
                                    <div className='w-3/5 mx-auto mt-2'>
                                        <p className='text-xs  '>Bar</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='h-16' src={parking} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-xs  '>Parking garage</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='h-16' src={securedParking} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-xs  '>Secured parking</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='h-16' src={outdoorPool} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-xs  '>Outdoor pool</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='h-16' src={spa} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-xs  '>Spa access</p>
                                    </div>
                                </div>

                            </div>


                            {/* Restaurant & Bar */}


                            <div className='grid md:grid-cols-12 m-6 '>


                                <div className=' col-span-4 bg-slate-800 text-white '>
                                    <p className=' mx-auto text-xs font-bold w-4/5  mt-12'>
                                        IMMERSE YOURSELF IN A NEW WORLD OF FLAVORS.
                                    </p>
                                    <div>
                                        <h1 className=' text-4xl mx-11 font-bold mt-2  '>
                                            Restaurants &
                                        </h1>
                                        <p className='text-4xl mx-11 font-bold mt-3'>Bar</p>
                                    </div>
                                    <Link to='/restaurant'>
                                        <h1 className='mx-11 mt-6 text-xs font-bold text-yellow-300'>
                                            EXPLORE OUR RESTAURANT SERVICES
                                        </h1>
                                    </Link>
                                </div>


                                <div className='col-span-8'>
                                    {/* <img className='h-80 w-full' src={barImage} alt="" /> */}
                                    <img className='h-80 w-full' src={homePageInfo[0]?.imgrestaurant} alt="" />
                                </div>
                            </div>

                            {/* Promotions */}

                            <h1 className='text-center mt-8 text-4xl'>Promotions</h1>

                            <div className='grid lg:grid-cols-3 mx-6 '>
                                <div></div>
                                <div >
                                    {/* <p>Take advantage of our exceptional offers</p> */}
                                    <p className='text-center my-4 text-xl'>Take advantage of our exceptional offers</p>
                                </div>
                                <div className='flex lg:justify-end offers'>
                                    <button to='/specialOffer' className='border border-black text-xs px-2 py-3 h-fit'>
                                        VIEW OUR OFFERS
                                    </button>
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-3 promotions gap-5 m-6'>

                                {
                                    // promotionInfo.map(promotion => console.log(promotion.img))
                                    promotionInfo.map(promotion =>
                                        <div key={promotion._id}
                                        // modal={promotion}
                                        >
                                            <img className='h-64 w-full' src={promotion.img} alt="" />
                                            <p className='m-4'>{promotion.title}</p>
                                            <p className='text-sm ml-4 mr-2 '>{promotion.text}</p>
                                            <div className='mt-4'>

                                                <label onClick={() => setModal(promotion)} htmlFor="my-modal-5" className='ml-4 px-5 w-2/5 py-2  bg-yellow-300 text-xs rounded-full btn-warning text-black '>
                                                    SEE THE OFFER
                                                </label>

                                            </div>
                                        </div>
                                    )

                                }


                            </div>

                            <PromotionModal></PromotionModal>



                            {/* Commnets Sections */}

                            <div className='w-3/4 mx-auto' id='comments'>
                                <h1 className='mt-12 text-2xl font-bold text-center'>Comments</h1>
                                <h1 className='text-2xl font-bold mb-4 text-center'>What They Say About Us </h1>

                                {/* <div className='flex'>
        <div className='w-8 h-6 bg-lime-600 font-bold text-white px-1 '>
            4.7
        </div>
        <div>
            <h1 className='ml-1 text-xl font-bold'>
                Excellent
            </h1>
            <div className='flex'>
                <FaStar className='text-lime-600'></FaStar>
                <FaStar className='text-lime-600'></FaStar>
                <FaStar className='text-lime-600'></FaStar>
                <FaStar className='text-lime-600'></FaStar>
                <FaStarHalfAlt className='text-lime-600'></FaStarHalfAlt>
            </div>




        </div>
        <div className='ml-8'>
            <h1 className='text-lg'>   Summary of 5,282 reviews</h1>
        </div>
    </div> */}

                                <div className='grid lg:grid-cols-4 small gap-1 mt-6'>

                                    <div >
                                        <Link className='px-2 py-3 flex border border-slate-300 bg-gray-200 text-center rounded' >
                                            {/* <div>icn</div> */}
                                            <div className='ml-4'>
                                                <h4>All Reviews</h4>
                                                {/* <h4>100%</h4> */}
                                            </div>
                                        </Link>
                                    </div>

                                    <div >
                                        <Link className='px-2 py-3 flex border border-slate-300 bg-gray-200 text-center rounded' >
                                            {/* <div>icn</div> */}
                                            <div className='ml-4'>
                                                <h4> Food review </h4>
                                                {/* <h4>100%</h4> */}
                                            </div>
                                        </Link>
                                    </div>

                                    <div >
                                        <Link className='px-2 py-3 flex border border-slate-300 bg-gray-200 text-center rounded' >
                                            {/* <div>icn</div> */}
                                            <div className='ml-4'>
                                                <h4> Environment  </h4>
                                                {/* <h4>100%</h4> */}
                                            </div>
                                        </Link>
                                    </div>

                                    <div >
                                        <Link className='px-2 py-3 flex border border-slate-300 bg-gray-200 text-center rounded' >
                                            {/* <div>icn</div> */}
                                            <div className='ml-4'>
                                                <h4>Families </h4>
                                                {/* <h4>100%</h4> */}
                                            </div>
                                        </Link>
                                    </div>


                                </div>

                                <div className='grid grid-cols-12 m-6 gap-8'>

                                    <div className='col-span-8'>

                                        <div className='border-slate-400 bg-gray-100 m-3 px-4 pt-4 pb-2 rounded comment '>
                                            {/* <h1 className='text-lg'>Rated <span className='font-bold'>4.7</span>/5 based on reviews from <span className='font-bold'>all travelers.</span> </h1> */}
                                            <h2>Excellent lake hotel. Great rooms in excellent location. Great pool. Awesome vibe.</h2>
                                        </div>
                                        <div className=''>

                                            <div className='mt-4 border-dotted border-t-2 border-slate-300'>

                                                {reviews &&
                                                    reviews.map(review =>
                                                        <div className='flex  border-dotted border-b-2 border-slate-300 mt-3'
                                                            key={review._id}>

                                                            <div className='w-32'>
                                                                <div>
                                                                    <h1 className='uppercase'>{review.category}</h1>

                                                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-lime-500">
                                                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                                                        </svg>
                                                                        <span className="text-xl text-lime-500 font-bold">{review.rating}</span>
                                                                    </div>




                                                                    <p className='text-[8px] text-gray-400 uppercase'>{review.category} Review</p>

                                                                </div>
                                                            </div>

                                                            <div className=''>
                                                                <div className='ml-6 '>
                                                                    <div className='flex items-center gap-2'>
                                                                        <div className="chat-image avatar">
                                                                            <div className=" rounded-full">
                                                                                {/* <FaUserAlt></FaUserAlt> */}
                                                                                <FaUserAlt></FaUserAlt>
                                                                                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                                                            </div>
                                                                        </div>
                                                                        <h1 className=' text-slate-900 mb-0'>
                                                                            {email}
                                                                        </h1>
                                                                    </div>

                                                                    <p className='text-sm mt-1 '>{review.review}</p>
                                                                </div>
                                                            </div>






                                                        </div>
                                                    )
                                                }





                                            </div>





                                        </div>



                                    </div>


                                    <div className='col-span-4 comment'>

                                        <div >

                                            <div>
                                                <span className='text-blue-600 '>Excellent</span> <span className='text-sm font-bold'>Overall Ranking</span>
                                                <p className='text-sm'>Top 2% in city</p>
                                            </div>
                                        </div>

                                        <div >

                                            <div>
                                                <span className='text-blue-600 '>Excellent</span> <span className='text-sm font-bold'>Lake Hotels</span>
                                                <p className='text-sm'>Top 1% in city</p>
                                            </div>
                                        </div>

                                        <div >

                                            <div>
                                                <span className='text-blue-600 '>Excellent</span> <span className='text-sm font-bold'>Resort Hotels</span>
                                                <p className='text-sm'>Top 1% in city</p>
                                            </div>
                                        </div>

                                        <div className='flex'>

                                            <div>
                                                <span className='text-blue-600'>Excellent</span> <span className='text-sm font-bold'>Views</span>
                                                <p className='text-sm'>Top 3% in city</p>
                                            </div>
                                        </div>

                                        <div >

                                            <div>
                                                <span className='text-blue-600 '>Excellent</span> <span className='text-sm font-bold'>Hotel Buildings</span>
                                                <p className='text-sm'>Top 4% in city</p>
                                            </div>

                                        </div>


                                        <div className='mt-5 '>
                                            <h1 className='mb-3'>  Good to Know</h1>

                                            <div >

                                                <div className='text-sm ml-2'>Great view</div>
                                            </div>
                                            <div >

                                                <div className='text-sm ml-2'>Pleasant hotel grounds</div>
                                            </div>
                                            <div >

                                                <div className='text-sm ml-2'>Rooms need regular maintenance</div>
                                            </div>
                                            <div >

                                                <div className='text-sm ml-2'>Comfortable beds</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            {/* Frequentl Asked Questions */}

                            <div className='m-8'>

                                <div>
                                    <p className='text-center text-sm'>FREQUENTLY ASKED QUESTIONS ABOUT HOTEL ROYAL TULIP BRASILIA ALVORADA
                                    </p>
                                    <h1 className='text-3xl text-center'>
                                        Your questions, our answers
                                    </h1>
                                </div>

                                <div className='m-10'>
                                    <div >
                                        <h1 className='text-sm'>
                                            Can events or seminars be hosted at Royal Tulip Brasilia Alvorada?
                                        </h1>
                                        <p className='text-sm text-gray-400'>
                                            With more than 26 meeting facilities, we have a Convention Center with 13 rooms, a 1.415 m² foyer and a theatre for 500 people, multifunctional rooms with 6.4m height for up to 1,500 people simultaneously, besides other spaces with panoramic view to the Paranoa Lake.
                                        </p>
                                        <Link to='/meeting'>
                                            <button className="btn btn-link text-sm">DISPLAY HOTEL CONFERENCING PAGE</button>
                                        </Link>
                                    </div>

                                    <div >
                                        <h1 className='text-sm'>
                                            What facilities and types of rooms are available at Royal Tulip Brasilia Alvorada?
                                        </h1>
                                        <p className='text-sm text-gray-400'>
                                            Our hotel has 395 rooms divided in 4 categories: Standard, Superior, Deluxe and Suites. All have balcony and are fully equipped. Our bathrooms have shower and bathtub, amenities, telephone and hairdryer.
                                        </p>
                                        <Link to='/rooms'>

                                            <button className="btn btn-link text-sm">DISPLAY ALL HOTEL ROOM AMENITIES</button>
                                        </Link>
                                    </div>

                                    <div>
                                        <h1 className='text-sm'>
                                            What types of meals are provided at Royal Tulip Brasilia Alvorada?
                                        </h1>
                                        <p className='text-sm text-gray-400'>
                                            The Herbs restaurant is specialized in International cuisine. At the Capitao Bar, guests can taste sandwiches, snacks and drinks. At night, The Old Barr is the ideal place to relax listening to jazz, blues or rock music.
                                        </p>
                                        <Link to='/restaurant'>
                                            <button className="btn btn-link text-sm">DISPLAY HOTEL RESTAURANT PAGE</button>
                                        </Link>

                                    </div>

                                    <div>
                                        <h1 className='text-sm'>
                                            What is the telephone number of Royal Tulip Brasilia Alvorada?
                                        </h1>
                                        <p className='text-sm text-gray-400'>
                                            +55 61 34247000
                                        </p>
                                        <button className="btn btn-link text-sm">LEARN MORE</button>
                                    </div>
                                </div>




                                <p className='text-xs my-10'>
                                    Enjoy the best of the Brazilian capital by staying at the hotel Royal Tulip Brasília Alvorada. Perfectly located in the heart of Brasília, the hotel has a unique architectural style with contemporary and traditional touches. At the Royal Tulip Brasília Alvorada, you are just a short distance from the center of Brasília, but you also have the opportunity to take advantage of the hotel's series of luxury amenities and services.

                                    <p className='my-4'>
                                        It is among the best hotels 5 Brasilia stars. Featuring a total of 395 4-star luxury rooms, all equipped with amenities such as air conditioning, high-speed Internet access, cable TV and electronic safe, the rooms also feature balconies so you can admire the skyline of Brasilia in a truly luxurious setting. Even though Brasilia's countless cultural, political and economic attractions leave you wanting more, whether you're in the city for business or pleasure, the hotel's services and amenities will leave you more than satisfied.
                                    </p>


                                    Featuring a total of 3 swimming pools, spa, fitness center and tennis courts, to name just a few of the conveniences, there is never a dull moment when you stay at the Royal Tulip Brasília Alvor ada.The hotel is in the heart of the capital, a 10-minute walk from the Palácio da Alvorada (residence of the Brazilian president) and adjacent to the beautiful Lake Paranoá. As the capital, Brasília is filled with countless cultural attractions and fantastic architecture, as well as a seemingly endless amount of restaurants and bars, all within easy reach of the hotel.
                                </p>
                            </div>

                            {/* Footer */}



                        </div>
                    </>
                    :
                    <>
                        <Loading></Loading>
                    </>
            }


        </>


    );
};

export default Banner;
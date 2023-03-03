import { DatePicker, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/reset.css';
import image from '../../image/r-b-1.jpg'
import roomImage1 from '../../image/r-body-1.jpg'
import roomImage2 from '../../image/r-body-2.jpg'
import roomImage3 from '../../image/r-body-3.jpg'
import roomImage4 from '../../image/r-body-4.jpg'
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { AuthShare } from '../Context/AuthContext';
import '../Header/Banner.css'
import moment from 'moment';


const list = [

    { name: "1 Member", value: 1 },
    { name: "2 Members", value: 2 },
    { name: "3 Members", value: 3 },
    { name: "4 Members", value: 4 },
    { name: "More Members", value: 6 }
]




const Rooms = () => {
    const { fromDate, setFromDate, toDate, setToDate, totaldays, setTotaldays } = useContext(AuthShare);
    const [roomInfo, setRoomInfo] = useState([]);
    const [allRooms, setAllRooms] = useState([]);
    const [showAlert, setShowAlert] = useState();
    const [adults, setAdults] = useState('Select Member/Members Here');
    const [person, setPerson] = useState();
    const { RangePicker } = DatePicker;
    const staDate = moment(fromDate, 'DD-MM-YYYY');
    const enDate = moment(toDate, 'DD-MM-YYYY');
    setTotaldays(moment.duration(enDate.diff(staDate)).asDays() + 1);

    const dataRange = (dates) => {
        // console.log(moment(dates[0]).format('DD-MM-YYYY'));
        // console.log(moment(dates[1]).format('DD-MM-YYYY'));
        setFromDate(dates[0].format('DD-MM-YYYY'));
        setToDate(dates[1].format('DD-MM-YYYY'));

    }

    const handleAdults = (ok) => {
        setAdults(ok);
        setPerson(ok);
    };

    console.log(totaldays);

    const handleWithoutData = () => {
        // alert("Please, select Date & Persons. ")
        setShowAlert('To, Get Room. Please, Select Date & Member');
    }


    useEffect(() => {
        fetch('http://localhost:5000/roomPageInfo')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setRoomInfo(data))
    }, [])

    // console.log(roomInfo[0].imgh);

    useEffect(() => {
        fetch('http://localhost:5000/allRooms')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setAllRooms(data))
    }, [])



    return (
        <div>

            {/* Banner */}

            <div className='grid md:grid-cols-12 m-6'>

                <div className='col-span-8' >
                    <img className='h-96 w-full' src={roomInfo[0]?.imgh} alt="" />
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

            {/* Text */}

            <div className='m-6'>
                <h1 className='text-xl font-bold  bg-slate-200 m-2 rounded px-3 py-5'>
                    {roomInfo[0]?.titleh}
                </h1>
                <p className='m-8 text-sm'>
                    {roomInfo[0]?.txt}
                </p>
                <p className='h-1 bg-yellow-500 m-4'></p>



                {/* Rooms */}


                <div className='grid grid-rows-4 promotions'>

                    {allRooms &&
                        // allRooms.map(room => console.log(room))
                        allRooms.map(room =>
                            <div className='h-48' key={room._id} >
                                <div className='lg:flex mx-6 '>

                                    <div className='w-96'>
                                        <img className='lg:h-40 rounded m-0' src={room.imgh} alt="" />
                                    </div>
                                    <div className='m-4'>
                                        <h1 className='text-lg' >
                                            {room.title}
                                        </h1>
                                        <p className='text-sm my-2'>
                                            {room.text}
                                        </p>
                                        <Link to={`/rooms/${room._id}`}>
                                            <button className='m-2 w-1/4 px-4 py-1 rounded border-solid border text-sm border-slate-300 text-gray-600'>MORE INFO</button>
                                        </Link>
                                    </div>
                                </div>
                                <p className='h-1 bg-yellow-500 m-4'></p>
                            </div>
                        )
                    }


                    {/* <div className='h-48' >
                        <div className='flex mx-6 '>

                            <div className='w-96'>
                                <img className='h-40 rounded m-0' src={roomImage1} alt="" />
                            </div>
                            <div className='m-4'>
                                <h1 className='text-lg' >
                                    Standard Room
                                </h1>
                                <p className='text-sm my-2'>
                                    Standard rooms are equipped with, air conditioning, Smart TV, Free WIFI, safe, nespresso machine ,telefone, Trousseau 300-thread count bedding sheet set and minibar. Bathrooms are equipped with telephone and hair dryer.
                                </p>
                                <button className='m-2 w-1/4 px-4 py-1 rounded border-solid border text-sm border-slate-300 text-gray-600'>MORE INFO</button>
                            </div>
                        </div>
                        <p className='h-1 bg-yellow-500 m-4'></p>
                    </div>



                    <div className='h-48'>
                        <div className='flex mx-6 '>

                            <div className=''>
                                <img className='rounded' src={roomImage2} alt="" />
                            </div>

                            <div className='m-4'>
                                <h1 className='text-lg'>
                                    Superior Room
                                </h1>
                                <p className='text-sm my-2'>
                                    The superior rooms have a king size bed. Accommodation with differentiated design, desk, Smart TV, telephone and nightstand. In addition, this category has a Nespresso coffee machine, lighted makeup mirror and Trousseau 300-thread count bedding sheet set. External balcony overlooking the pool, designed by Burle Marx and Lago Paranoá.
                                </p>
                                <button className='m-2 w-1/4 px-4 py-1 rounded border-solid border text-sm border-slate-300 text-gray-600'>MORE INFO</button>
                            </div>
                        </div>
                        <p className='h-1 bg-yellow-500'></p>
                    </div>



                    <div className='h-48'>
                        <div className='flex mx-6 '>

                            <div >
                                <img className=' rounded' src={roomImage3} alt="" />
                            </div>
                            <div className='m-4'>
                                <h1 className='text-lg' >
                                    Deluxe Room
                                </h1>
                                <p className='text-sm my-2'>
                                    For those who value maximum comfort, space and exclusivity, the Luxury category apartments have carpet, king size bed, premium design, large closet, Smart TV, telephone, nightstand and a comfortable work area. In addition, this category has a Nespresso machine, with 3 courtesy capsules, a lighted makeup mirror, bathrobes, slippers and a Trousseau 400-thread...
                                </p>
                                <button className='m-2 w-1/4 px-4 py-1 rounded border-solid border text-sm border-slate-300 text-gray-600'>MORE INFO</button>
                            </div>
                        </div>
                        <p className='h-1 bg-yellow-500'></p>
                    </div>

                    <div className='h-48'>
                        <div className='flex mx-6 '>

                            <div className=''>
                                <img className='w-full rounded' src={roomImage4} alt="" />
                            </div>
                            <div className='m-4'>
                                <h1 className='text-lg'>
                                    Suite
                                </h1>
                                <p className='text-sm my-2'>
                                    Suite featuring a separate living room with 1 king size bed, couch, armchair, Smart TV, telephone and a toilet. It also offers a Nespresso machine with 3 complimentary capsules, a lighted makeup mirror, bathrobes, slippers and a Trousseau 400-thread count bedding sheet set. It has 2 balconies, overlooking the pool, designed by Burle Marx and Lake Paranoá.
                                </p>
                                <button className='m-2 w-1/4 px-4 py-1 rounded border-solid border text-sm border-slate-300 text-gray-600'>MORE INFO</button>
                            </div>
                        </div>

                    </div> */}

                </div>


            </div>

        </div>
    );
};

export default Rooms;
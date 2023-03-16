import { DatePicker, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/reset.css';
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
        setFromDate(dates[0].format('DD-MM-YYYY'));
        setToDate(dates[1].format('DD-MM-YYYY'));

    }

    const handleAdults = (ok) => {
        setAdults(ok);
        setPerson(ok);
    };

    console.log(totaldays);

    const handleWithoutData = () => {
        setShowAlert('To, Get Room. Please, Select Date & Member');
    }


    useEffect(() => {
        fetch('https://brasila-server.vercel.app/roomPageInfo')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setRoomInfo(data))
    }, [])

    // console.log(roomInfo[0].imgh);

    useEffect(() => {
        fetch('https://brasila-server.vercel.app/allRooms')
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
                        <div className='mb-10'>
                            <h1 className='text-3xl text-center text-white'>Your Stay</h1>
                        </div>

                        {/* Start DatePicker from AntD */}

                        <div className='w-3/4 mx-auto mt-3 mb-6 '>
                            <Space direction="vertical" size={12}>
                                <RangePicker className='px-4 py-[10px] bg-yellow-300 rounded-none' format='DD-MM-YYYY' onChange={dataRange} />
                            </Space>
                        </div>

                        {/*Closing of DatePicker from AntD */}




                        <div className=' w-3/4 mx-auto'>
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
                        </div>
                        {
                            person && totaldays ?
                                <>
                                </>
                                :
                                <>
                                    <p className='uppercase text-xs text-red-400 text-center mt-5'>{showAlert}</p>
                                </>
                        }
                        <div className='w-3/4 mx-auto mt-6'>

                            {
                                person && totaldays ?

                                    <>
                                        <Link to={`/search/${person}`}>
                                            <button className='bg-yellow-300 px-7 py-[12px] w-full mx-auto text-black '
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
                        </div>

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

                </div>


            </div>

        </div>
    );
};

export default Rooms;
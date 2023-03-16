import { Breadcrumb, Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthShare } from './../Context/AuthContext';

const Review = () => {
    const { user } = useContext(AuthShare);
    const email = user?.email;
    const [foodRatings, setfoodRatings] = useState();
    const [environmentRatings, setEnvironmentRatings] = useState();
    const [hospitalityRatings, setOverAllRatings] = useState();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleRating = (number) => {
        // console.log('Ratings', number);
        setfoodRatings(number);
    };

    const handleRating1 = (number) => {
        setEnvironmentRatings(number);
    };

    const handleRating2 = (number) => {
        setOverAllRatings(number);
    };

    const handlefoodSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = e.target.email.value;
        const foodData = {
            rating: hospitalityRatings,
            review: data,
            category: "food",
            email
        }
        // console.log(foodData);

        fetch('https://brasila-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    // navigate('/');
                }
            })
            .catch(error => console.log(error.message));

        form.reset();
    };
    const handleEnvironmentSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = e.target.email.value;
        // console.log("Submiting Food All", foodRatings, data);

        const environmentData = {
            rating: environmentRatings,
            review: data,
            category: "environment",
            email
        }

        fetch('https://brasila-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(environmentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // navigate('/');
                }
            })
            .catch(error => console.log(error.message));

        form.reset();
    };
    const handlehospitalitySubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = e.target.email.value;

        const hospitalityData = {
            rating: foodRatings,
            review: data,
            category: "hospitality",
            email
        }

        fetch('https://brasila-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(hospitalityData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // navigate('/');
                }
            })
            .catch(error => console.log(error.message));

        form.reset();
    };


    return (
        <div>
            <Layout className="layout">
                <Content
                    style={{
                        padding: '0 50px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item  >
                            <Link to='/profile'>
                                Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href=''>
                            <Link to='/review'>
                                Rate Us
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href=''>
                            <Link to='/myreview'>
                                My Reviews
                            </Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-content"
                        style={{
                            background: colorBgContainer,
                        }}
                    >
                        <div className='grid grid-cols-1 lg:grid-cols-3'>


                            <div>

                                <div>Rate Us Our Hospitality</div>


                                <div>
                                    <form onSubmit={handlehospitalitySubmit} className="rating rating-lg rating-half">
                                        <input onClick={() => { handleRating(0) }} type="radio" name="rating-10" className="rating-hidden" />
                                        <input onClick={() => { handleRating(.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" defaultChecked />
                                        <input onClick={() => { handleRating(1) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                        <input onClick={() => { handleRating(1.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                        <input onClick={() => { handleRating(2) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                        <input onClick={() => { handleRating(2.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                        <input onClick={() => { handleRating(3) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                        <input onClick={() => { handleRating(3.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                        <input onClick={() => { handleRating(4) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                        <input onClick={() => { handleRating(4.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                        <input onClick={() => { handleRating(5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                        <div>
                                            <div className="form-control">
                                                <textarea placeholder="Bio" name='email' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                                            </div>
                                            <div className='flex  justify-center mr-8 mt-3'>
                                                <button className="text-xs text-black uppercase bg-yellow-300 px-5 py-2 ">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div>

                                <div>Rate Us Our Environment</div>

                                <form onSubmit={handleEnvironmentSubmit} className="rating rating-lg rating-half">
                                    <input onClick={() => { handleRating1(0) }} type="radio" name="rating-10" className="rating-hidden" />
                                    <input onClick={() => { handleRating1(.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" defaultChecked />
                                    <input onClick={() => { handleRating1(1) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating1(1.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating1(2) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating1(2.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating1(3) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating1(3.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating1(4) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating1(4.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating1(5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />

                                    <div>
                                        <div className="form-control">
                                            <textarea placeholder="Bio" name='email' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                                        </div>
                                        <div className='flex  justify-center mr-8 mt-3'>
                                            <button className="text-xs text-black uppercase bg-yellow-300 px-5 py-2 ">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div>

                                <div>Rate Us Our Food</div>



                                <form onSubmit={handlefoodSubmit} className="rating rating-lg rating-half">
                                    <input onClick={() => { handleRating2(0) }} type="radio" name="rating-10" className="rating-hidden" />
                                    <input onClick={() => { handleRating2(.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" defaultChecked />
                                    <input onClick={() => { handleRating2(1) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating2(1.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating2(2) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating2(2.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating2(3) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating2(3.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating2(4) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <input onClick={() => { handleRating2(4.5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                    <input onClick={() => { handleRating2(5) }} type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                    <div>
                                        <div className="form-control">
                                            <textarea placeholder="Bio" name='email' className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                                        </div>
                                        <div className='flex  justify-center mt-3'>
                                            <button className="text-xs text-black uppercase bg-yellow-300 px-5 py-2 ">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </Content>
            </Layout>

        </div>
    );
};

export default Review;
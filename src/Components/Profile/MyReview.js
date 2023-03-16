import { Breadcrumb, Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import '../Header/Banner.css'

const MyReview = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

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
                        <div>

                            <div className='grid lg:grid-cols-3 promotions'>
                                <div>
                                    <div className="chat chat-start">
                                        <div className="chat-image avatar">
                                            <div className=" rounded-full">
                                                {/* <FaUserAlt></FaUserAlt> */}
                                                <FaUserAlt></FaUserAlt>
                                                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                            </div>
                                        </div>
                                        <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.It was said that you would, destroy the Sith, not join them.It was said that you would, destroy the Sith, not join them.It was said that you would, destroy the Sith, not join them.</div>
                                    </div>
                                    <div className='felx items-end justify-end mt-2'>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </Content>
            </Layout>

        </div>

    );
};

export default MyReview;
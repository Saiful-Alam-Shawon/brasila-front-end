import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthShare } from '../Context/AuthContext';
import Upper from '../Upper/Upper';

const Navbar = () => {

    const { user, logOut } = useContext(AuthShare);
    const email = user?.email;

    const handleLogOut = () => {
        logOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    };




    return (
        <div>
            <Upper></Upper>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li><a href=" #">Item 1</a></li> */}
                            <Link to='/rooms' className='px-4 py-3'>
                                <li>Rooms</li>
                            </Link>
                            <Link to='/restaurant' className='px-4 py-3'>
                                <li>Restaurant</li>
                            </Link>
                            <Link to='/meeting' className='px-4 py-3'>
                                <li>Meeting</li>
                            </Link>
                            <Link to='/service' className='px-4 py-3'>
                                <li>Service</li>
                            </Link>
                            <Link to='/offer' className='px-4 py-3'>
                                <li>Offer</li>
                            </Link>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/rooms' className='px-4 py-3'>
                            <li>Rooms</li>
                        </Link>
                        <Link to='/restaurant' className='px-4 py-3'>
                            <li>Restaurant</li>
                        </Link>
                        <Link to='/meeting' className='px-4 py-3'>
                            <li>Meeting</li>
                        </Link>
                        <Link to='/service' className='px-4 py-3'>
                            <li>Service</li>
                        </Link>
                        <Link to='/offer' className='px-4 py-3'>
                            <li>Offer</li>
                        </Link>

                    </ul>
                </div>
                <div className="navbar-end">

                    {email ?
                        <>
                            <div className="dropdown dropdown-end text-center mr-5">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
                                    <div className="w-10 rounded-full">
                                        <div className="chat-image avatar btn">
                                            <div >
                                                <FaUserAlt className=' mt-3 mr-20 ' ></FaUserAlt>
                                            </div>
                                        </div>
                                    </div>

                                </label>
                                <ul tabIndex={0} className="mt-3 text-white p-2 bg-slate-900 shadow menu menu-compact dropdown-content  rounded-box w-52">

                                    <Link to='/profile' className='px-4 py-3'>
                                        <li>Profile</li>
                                    </Link>
                                    <Link to='/'>
                                        <li onClick={handleLogOut} className='px-4 py-3'>LogOut</li>
                                    </Link>
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn mr-6">
                                Login
                            </Link>
                        </>
                    }










                </div>
            </div>
        </div>
    );
};

export default Navbar;
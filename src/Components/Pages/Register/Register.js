import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthShare } from '../../Context/AuthContext';

const Register = () => {

    const navigate = useNavigate();
    const { createUser } = useContext(AuthShare);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        const user = {
            email
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });




        fetch('https://brasila-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    navigate('/');
                }
            })
            .catch(error => console.log(error.message));

        console.log(email, password);
    }





    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">

                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Register</h1>
                        </div>

                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Login
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-yellow-300 text-black px-4 py-2">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
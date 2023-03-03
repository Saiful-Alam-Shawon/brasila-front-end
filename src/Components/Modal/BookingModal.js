import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookingModal = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // console.log('form is here', form);
        const date = form.date.value
        const email = form.email.value
        const attendence = form.attendence.value
        const number = form.number.value
        // console.log("It's Checkup Session", date, email, attendence, number);
        const bookingData = {
            date, email, attendence, number
        };


        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    alert('THANKS FOR PROVIDING YOUR INFORMATION WELL CONTACT YOU SOON')
                    navigate('/');
                    // setLoading(false);
                    // setIsreload(!isreload);
                    // toast.success('Thanks for Submitting Your Information')
                }
            })
            .catch(error => console.log(error.message));



        // console.log(data);
        form.reset('');

    }


    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col ">
                                <p className='text-xs uppercase p-1
                                text-black bg-yellow-200'>Provide your Information we'll contact you Soon</p>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                    <form onSubmit={handleSubmit} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Date</span>
                                            </label>
                                            <input type="text" name='date' placeholder="DD/MM/YYYY" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Attendence</span>
                                            </label>
                                            <input type="text" name='attendence' placeholder="120 People" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Contact Number</span>
                                            </label>
                                            <input type="text" name='number' placeholder="01XXXXXXXX" className="input input-bordered" />

                                        </div>
                                        <div className="form-control mt-6">
                                            <button className='bg-yellow-300 text-black px-4 py-2'>Submit Information</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>











                </div>
            </div>
        </div>

    );
};

export default BookingModal;
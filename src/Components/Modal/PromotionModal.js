import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthShare } from '../Context/AuthContext';

const PromotionModal = () => {

    const { modal } = useContext(AuthShare);
    // console.log(modal);

    const handlePromotionalsAlert = () => {
        alert('Thanks for Checking. It is An Example of Context API, For this Cause We do not Design Extra Booking Part')
    };


    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="my-modal-5" className="bg-yellow-300 btn btn-sm text-black hover:bg-yellow-400 btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid lg:grid-cols-2 '>
                        <div>
                            <img className='w-[900px] h-96' src={modal.img} alt="" />
                            <p></p>
                        </div>

                        <div className='p-16'>
                            <h3 className="font-bWikipedia for freeold text-2xl">{modal.title}</h3>
                            <p className="pt-4 text-[15px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut provident</p>
                            <div className='ml-3'>
                                <p className='text-[15px]'>Only Twice Book is allowed per year <br />
                                    Get 10% less in all booking <br className='my-2' />
                                    Breakfast is included
                                </p>
                            </div>

                            <div className="modal-action">
                                {/* <label htmlFor="my-modal-5" className="btn">Yay!</label> */}
                                <Link to='/specialOffer'>
                                    <button onClick={handlePromotionalsAlert} className='text-xs uppercase bg-yellow-300 px-3 py-4'>
                                        let's process to booking
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromotionModal;
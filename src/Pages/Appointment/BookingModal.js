import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-white ">
                <div className="modal-box bg-white text-black">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg ">Booking for : <span className='text-secondary'>{name}</span></h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-7'>
                        <input type="text" disabled value={format(date, 'PP')} className="input shadow-2xl disabled:bg-slate-300 input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered bg-white border-black w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input shadow-2xl disabled:bg-slate-300 border-black input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input shadow-2xl disabled:bg-slate-300  border-black input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input shadow-2xl bg-white border-black input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
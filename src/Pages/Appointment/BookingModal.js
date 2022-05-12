import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle text-white ">
                <div class="modal-box bg-white text-black">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg ">Booking for : <span className='text-secondary'>{name}</span></h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-7'>
                        <input type="text" disabled value={format(date, 'PP')} class="input shadow-2xl disabled:bg-slate-300 input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered bg-white border-black w-full max-w-xs">
                            {
                                slots.map(slot => <option key={_id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input shadow-2xl bg-white border-black input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input shadow-2xl bg-white border-black input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input shadow-2xl bg-white border-black input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
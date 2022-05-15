import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slots)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    toast(`Appointment is set,${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                // to close the model
                setTreatment(null);
            })


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
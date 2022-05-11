import React from 'react';

const Services = ({ service, setTreatment }) => {
    const { name, slots, id } = service;
    return (

        <div class="card lg:max-w-lg  shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        class="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>

    );
};

export default Services;
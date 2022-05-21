import React from 'react';

const Services = ({ service, setTreatment }) => {
    const { slots, name, price } = service;


    return (

        <div className="card lg:max-w-lg  shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p><small>Fee : $ {price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>

    );
};

export default Services;
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Services from './Services';


const AvailableAppointment = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-xl text-secondary font-bold text-center'>Available Appointment on {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                {
                    services?.map(service => <Services
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Services>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;
import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center pt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis suscipit, officia delectus recusandae, facere expedita eveniet eum minus dolor laboriosam, doloremque numquam sint blanditiis officiis odit omnis quisquam dolores rerum ipsum voluptate voluptatibus. Laboriosam obcaecati expedita eum. Autem, quisquam asperiores.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
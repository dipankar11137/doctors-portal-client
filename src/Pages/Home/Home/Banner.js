import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../Shared/PrimaryButton';


const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-2xl rounded-lg shadow-5xl" />
                <div>
                    <h1 className="text-7xl font-bold text-black">Your New Smile Starts Here</h1>
                    <p className="py-6 text-black">Find Us Telemedicine at Shopwebly, the Website to Compare Prices! Find and Compare Us Telemedicine Online. Save Now at Shopwebly! Easy Acces.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import chair from '../../../assets/images/chair.png'


const Banner = () => {
    return (
        <div class="hero min-h-screen px-2">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-2xl rounded-lg shadow-5xl" />
                <div>
                    <h1 class="text-7xl font-bold text-black">Your New Smile Starts Here</h1>
                    <p class="py-6 text-black">Find Us Telemedicine at Shopwebly, the Website to Compare Prices! Find and Compare Us Telemedicine Online. Save Now at Shopwebly! Easy Acces.</p>
                    <button class="btn btn-accent font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
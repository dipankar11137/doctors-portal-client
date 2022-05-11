import React from 'react';

const InfoCard = ({ img, cartTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl pt-5 ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cartTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;
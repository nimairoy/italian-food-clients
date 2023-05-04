import React from 'react';
import image1 from '../../assets/3b2af8a5-bfd3-4aff.jpg';
import image2 from '../../assets/42bec22b-de92-4e04.jpg';
import image3 from '../../assets/lampions.jpg';
import { Link } from 'react-router-dom';

const ExploreCard = () => {
    return (
        <div className='my-container  pb-24'>
            <h2 className='text-4xl font-bold mb-4'>More to Explore !</h2>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img src={image1} alt="" />
                    <Link><h4 className='text-xl font-semibold hover:underline mt-2 text-center'>The perfect 2 days in New Orleans</h4></Link>
                </div>
                <div>
                    <img src={image2} alt="" />
                    <Link><h4 className='text-xl font-semibold hover:underline mt-2 text-center'>The perfect 2 days in New Orleans</h4></Link>
                </div>
                <div>
                    <img src={image3} alt="" />
                    <Link><h4 className='text-xl font-semibold hover:underline mt-2 text-center'>The perfect 2 days in New Orleans</h4></Link>
                </div>
            </div>
        </div>
    );
};

export default ExploreCard;
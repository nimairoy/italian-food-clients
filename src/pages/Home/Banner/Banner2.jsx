import React from 'react';
import banner2 from '../../../assets/banner2.jpg';

const Banner2 = () => {
    return (
        <div style={{marginBottom : "90px"}} className='my-container rounded md:grid grid-cols-2 gap-4 items-center py-12 px-4 bg-gray-200'>
            <div>
                <img className='w-full' src={banner2} alt="" />
            </div>
            <div className='pl-2'>
                <h2 className='text-3xl mt-3 md:mt-0 md:text-4xl font-bold'>Italian Food Brick Oven Faves</h2>
                <h4 className='text-2xl my-3 font-semibold'>Artisan pizza, oven baked pastas and more!</h4>
                <p>Make it an impromptu pizza night or order in everyone’s favorite oven baked pastas to make any meal memorable! Try our Artisan Hand-Stretched or Signature Brick Oven Pizzas, Oven-Baked Rigatoni & Meatballs or a Craft Your Own Calzones with all the fillings with melty Pecorino Romano and mozzarella. Your favorite neighborhood Italian restaurant is preparing family favorites for dine-in, takeout and delivery!</p>
                <div className="md:text-left text-center"><button className='btn btn-primary mt-4'>Order now</button></div>
            </div>
        </div>
    );
};

export default Banner2;
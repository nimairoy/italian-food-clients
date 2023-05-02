import React from 'react';
import banner from '../../../assets/banner.png';
import background from '../../../assets/background.jpg';

const Banner = () => {
    return (
        <div style={{ background: `url('${background}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
            <div className='wrapper'>
                <div className='my-container md:flex justify-between py-24 items-center'>
                    <div className='text-white'>
                        <h3 className="text-2xl font-bold mb-2">Let's See About</h3>
                        <h1 className="text-7xl my-6 font-bold">
                            Healthy Food <br />& <span className='text-warning'>Tasty</span>
                        </h1>
                        <p className='text-xl mt-4'>Pasto Pizza with Extra Cheesy flavour Cheese Toppings addings</p>
                        <button className='btn-primary btn mt-6'> See our Chef</button>
                    </div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
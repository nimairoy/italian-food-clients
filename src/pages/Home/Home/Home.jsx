import React from 'react';
import banner from '../../../assets/banner.png';
import background from '../../../assets/background.jpg';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';

const Home = () => {

    const chefs = useLoaderData();
    console.log(chefs)

    return (
        <div>
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
            <div className='py-20 my-container'>
                <h2 className="text-4xl font-bold mb-12 text-center">Top Most Chefs</h2>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        chefs.slice(0, 6).map(chef => <ChefsCard
                            key={chef.id}
                            chef={chef}
                        ></ChefsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
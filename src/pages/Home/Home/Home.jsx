import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChefsCard from '../ChefsCard/ChefsCard';

const Home = () => {

    const chefs = useLoaderData();
    // console.log(chefs)

    return (
        <>
            <Banner></Banner>
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
        </>
    );
};

export default Home;
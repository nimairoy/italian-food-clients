import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChefsCard from '../ChefsCard/ChefsCard';
import Banner2 from '../Banner/Banner2';
import ExploreCard from '../../ExploreCard/ExploreCard';

const Home = () => {

    const chefs = useLoaderData();
    // console.log(chefs)

    return (
        <>
            <Banner></Banner>
            <div className='py-20 my-container'>
                <h2 className="text-4xl font-bold mb-12 text-center">Top Most Chefs</h2>
                <div className='md:grid md:grid-cols-3 p-2 md:p-0 md:gap-4'>
                    {
                        chefs.slice(0, 6).map(chef => <ChefsCard
                            key={chef.id}
                            chef={chef}
                        ></ChefsCard>)
                    }
                </div>
            </div>
            <Banner2></Banner2>
            <ExploreCard></ExploreCard>
        </>
    );
};

export default Home;
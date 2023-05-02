import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const ChefsCard = ({ chef }) => {

    const { id, chef_picture, chef_name, likes, experience_years, number_of_recipes } = chef;

    return (
        <div className="card w-full bg-base-100 drop-shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={chef_picture} alt="Chef" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{chef_name}</h2>
                <p> <small><span>Experiences {experience_years} years</span></small> </p>
                <p><small><span className='flex items-center'><FaThumbsUp className='text-primary mr-2'></FaThumbsUp> {likes}</span></small></p>
                <p><small><span>Recipes: {number_of_recipes}</span></small> </p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;
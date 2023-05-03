import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipesCard from '../Recipes/RecipesCard/RecipesCard';

const ChefDetails = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/recipes/')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const chef = useLoaderData();

    const { id, chef_picture, chef_name, likes, experience_years, number_of_recipes, biography, description } = chef;

    // filter recipes according to random chef
    const selectRecipes = recipes.filter(rcp => rcp.recipe_id === id)

    // console.log(selectRecipes)
    return (
        <div className='my-container'>
            <div className="card w-full bg-base-100 rounded-none my-6 drop-shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={chef_picture} alt="Chef" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p> <small><span>Experiences: {experience_years} years</span></small> </p>
                    <p><strong>Description: </strong><small>{description}</small></p>
                    <p><strong>Biography: </strong><small>{biography}</small></p>
                    <p><small><span className='flex items-center'><FaThumbsUp className='text-primary mr-2'></FaThumbsUp> {likes}</span></small></p>
                    <p><small><span>Recipes: {number_of_recipes}</span></small> </p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    selectRecipes.map(rcp => <RecipesCard
                        key={rcp.cca}
                        rcp={rcp}
                    ></RecipesCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;
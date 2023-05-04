import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import { addToDb } from '../../../utilites/fakedb';
import { toast } from 'react-toastify';

const RecipesCard = ({ rcp }) => {
    const [selected, setSelected] = useState([]);

    const { recipe_id, recipe_image, name, ingredients, rating, cooking_method } = rcp;
    
    const handleFavouriteIcon = recipe => {
        console.log(recipe.recipe_id)
        let newRecipe = [];
        const exists = selected.find(rcps => rcps.recipe_id===recipe.recipe_id);

        if(exists){
            toast.error("You have already selected !", {
                position: toast.POSITION.TOP_CENTER
              });
               
               return;  
            }
        else{
            newRecipe = [...selected, recipe];
            setSelected(newRecipe);
            toast.success("Successfully Selected", {
                position: toast.POSITION.TOP_CENTER
              });
        }
        
        console.log(selected)
        addToDb(recipe.recipe_id)
    }

    return (
        <div className="card w-full bg-base-100 drop-shadow-2xl mb-8">
            <figure className="px-10 pt-10 -mb-2">
                <img src={recipe_image} alt="Chef" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p> <strong>Cooking Method:</strong><small> {cooking_method.length < 100 ? <> {cooking_method}</> : <>{cooking_method.slice(0, 100)}.....</>}</small> </p>
                <p> <strong>Ingredients:</strong> <small>{ingredients.map((ind, index) => <li key={index}>{ind}</li>)} </small> </p>
                <p className='flex justify-between mb-4'>
                    <span><strong>Rating: </strong><small> {rating} </small></span>
                    <span onClick={()=> handleFavouriteIcon(rcp)}> <AiOutlineHeart className='text-2xl cursor-pointer'></AiOutlineHeart> </span>
                </p>
                <div className="card-actions mx-auto">
                    <Link className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;
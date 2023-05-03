import React from 'react';
import { Link } from 'react-router-dom';

const RecipesCard = ({rcp}) => {

    const {recipe_id, recipe_image, name, ingredients, rating, cooking_method} = rcp;
    console.log(rcp)

    return (
        <div className="card w-full bg-base-100 drop-shadow-2xl mb-8">
            <figure className="px-10 pt-10 -mb-2">
                <img src={recipe_image} alt="Chef" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p> <strong>Cooking Method:</strong><small> {cooking_method.length < 100 ? <> {cooking_method}</>: <>{cooking_method.slice(0, 100)}.....</> }</small> </p>
                <p> <strong>Ingredients:</strong> <small>{ingredients.map((ind, index) => <li key={index}>{ind}</li>)} </small> </p>                
                <p> <strong>Rating: </strong><small> {rating} </small> </p>                
                <div className="card-actions mx-auto">
                    <Link className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;
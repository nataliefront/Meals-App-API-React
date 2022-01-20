import React, { useEffect, useContext } from 'react';
import './Random.css';
import { myContext } from '../context/context';

const Random = () => {
    const { fetchRandomMeal, randomMeal } = useContext(myContext);

    useEffect(() => {
        fetchRandomMeal();
    }, [fetchRandomMeal]);

    return (
        <div className='random'>
                {randomMeal.map((meal) => (
                    <div className='random-meal' key={meal.idMeal}>
                        <button onClick={fetchRandomMeal}>Generate another Meal</button>
                        <div>
                            <div className='random-meal-img'>
                                <img src={meal.strMealThumb} />
                            </div>
                            <h3>{meal.strMeal}</h3>
                            <p>{meal.strInstructions}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Random;

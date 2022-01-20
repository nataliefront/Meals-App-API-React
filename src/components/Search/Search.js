import React, { useState, useCallback, useContext } from 'react';
import './Search.css';
import { myContext } from '../context/context';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { fetchSearch, meals } = useContext(myContext);

    const fetchMealsHandler = useCallback(() => {
        fetchSearch(searchTerm);
    }, [searchTerm, fetchSearch]);

    return (
        <div className='search'>
            <div className='search-input'>
                <input type="text" placeholder="Type a meal..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={fetchMealsHandler}>Search meal</button>
            </div>
            <div className='search-meal-div'>
                {meals? (
                    meals.map((meal)=>(
                    <div className='search-meal' key={meal.idMeal}>
                        <div>
                        <img src={meal.strMealThumb} alt="#" />
                        </div>
                        <h3>{meal.strMeal}</h3>
                    </div>
                    ))
                    ): (<h2>No meals found. Try another word...</h2>)}
            </div>
        </div>
    )
}

export default Search;

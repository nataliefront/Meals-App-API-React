import React, { createContext, useState, useCallback } from "react";
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);

    const fetchCategories = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res) => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
        });
    }, []);

    const fetchSearch = useCallback((searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`).then((res) => {
            console.log(res.data.meals);
            setMeals(res.data.meals);
        });
    }, []);

    const fetchRandomMeal = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then((res) => {
            console.log(res.data.meals);
            setRandomMeal(res.data.meals);
        });
    }, []);

    return <myContext.Provider value={{fetchCategories, categories, fetchSearch, meals, fetchRandomMeal, randomMeal}}>{children}</myContext.Provider>
};
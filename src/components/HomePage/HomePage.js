import React, { useEffect, useContext } from 'react';
import './HomePage.css';
import { myContext } from '../context/context';

const HomePage = () => {
    const { fetchCategories, categories } = useContext(myContext);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <div className='home'>
            <div className='home-category-div'>
            {categories.map(category => (
                <div className='home-category' key={category.idCategory}>
                    <div>
                    <img src={category.strCategoryThumb} />
                    </div>
                    <h3>{category.strCategory}</h3>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HomePage;

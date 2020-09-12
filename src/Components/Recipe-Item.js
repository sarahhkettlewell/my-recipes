import React from 'react';

const RecipeItem = ({ title, imageUrl, size }) => (
    <div className={`${size} recipe-item`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />  
        <div className='recipe'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>RECIPES</span>
        </div>
    </div>
);

export default RecipeItem;
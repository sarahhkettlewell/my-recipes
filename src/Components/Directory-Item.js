import React, { useState } from 'react';

import RecipeItem from './Recipe-Item';

const Directory = () => {
    const [RecipeItem, setRecipeItem] = useState('');

    return (
        <h1> {RecipeItem} </h1>
    )
}
 
export default Directory;
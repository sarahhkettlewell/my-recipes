import React from 'react';
import Navigation from './Navigation';


function Header(){
    return  (
        <header className="bg-teal-500 p-6 bg-opacity-75 text-white border-b p-3 flex justify-between items-center">
            <span className="font-bold text-2xl">
                My Recipes
            </span>
            <Navigation />
        </header>
    )
}

export default Header
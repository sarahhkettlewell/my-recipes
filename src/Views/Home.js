import React from 'react'
import Directory from '../Components/Directory-Item'
import Loader from '../Components/Loader'

import './homepage.styles.scss'

function Home(){
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>Meat</div>
                        <span className='subtitle'>Recipe</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>Curry</div>
                        <span className='subtitle'>Recipes</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>Fish</div>
                        <span className='subtitle'>Recipes</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>Side</div>
                        <span className='subtitle'>Recipes</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>Dessert</div>
                        <span className='subtitle'>Recipes</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
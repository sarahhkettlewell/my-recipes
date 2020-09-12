import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function NavigationMenu(props){
    return (
        <div>
            <div className="bg-teal-500 p-6 bg-opacity-50 text-white border-b p-3 font-bold text-2xl">
                Menu
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-teal-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        <span className="text-2xl p-3">
                            <FontAwesomeIcon 
                                icon={faHome}
                            />
                        </span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-teal-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        <span className="text-2xl p-3">
                            <FontAwesomeIcon 
                                icon={faAddressCard}
                            />
                        </span>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
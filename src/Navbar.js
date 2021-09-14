import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-link'>
            <nav>
            <ul>
                <Link to='/Home'>
                    <li>Home</li>
                </Link>
                <Link to="/Login">
                    <li>Login</li>
                </Link>
                <Link to='/Shoping'> 
                    <li>Shoping</li>
                </Link>
                <Link to='/About'>
                    <li>About</li>
                </Link>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar

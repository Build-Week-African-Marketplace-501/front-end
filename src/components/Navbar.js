import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
            <div className="left-links">
            <Link to='/'><h1>AM</h1></Link>
            </div>
            <div className='right-links'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Sign Up</Link>
            </div>
            </nav>
        </div>
    )
}

export default Navbar

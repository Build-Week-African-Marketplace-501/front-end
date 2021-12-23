import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const isLoggedIn = localStorage.getItem('token')
    return (
        <div className='navbar'>
            <nav>
            <div className="left-links">
            <Link to='/'><h1>AM</h1></Link>
            </div>
            <div className='right-links'>
            <Link to='/'>Home</Link>
            {
                isLoggedIn ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>
            }
            {
                isLoggedIn ? <Link to='/products'>Products</Link> : ''
            }
            <Link to='/register'>Sign Up</Link>
            </div>
            </nav>
        </div>
    )
}

export default Navbar

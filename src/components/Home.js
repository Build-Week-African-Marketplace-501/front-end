import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <div className="something">
            <div className="homeInfo">
            <h2>AN OLD STORY DOES NOT OPEN THE EAR AS A NEW ONE DOES. -BENINESE PROVERB</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima, dolor distinctio odit tempore provident hic quas ad vero? </p>
            <Link to='register'><button>Sign Up</button></Link>
            </div>            
            <img src="https://i.etsystatic.com/18992193/r/il/66baf6/1744970833/il_1140xN.1744970833_mf7u.jpg" alt="Africa"/>
            </div>
        </div>
    )
}

export default Home

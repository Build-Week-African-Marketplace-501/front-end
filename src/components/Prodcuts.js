import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
const Prodcuts = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axiosWithAuth().get('https://bw-african-marketplace-501.herokuapp.com/api/items')
        .then(res => {
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <button><Link to='/addproduct'>Add a Product</Link></button>
            
        </div>
    )
}

export default Prodcuts

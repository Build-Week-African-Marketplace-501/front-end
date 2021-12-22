import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {useParams} from 'react-router-dom'

const Product = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        if (id) {axiosWithAuth().get(`/items/${id}`)
        .then(res => {
            console.log(res.data)
            setItem(res.data.item)
        })
        .catch(err => {
            console.log(err)
        })
    } else {
        setItem(props.item) 
    }
    }, [])
    
    return (
        <div className='product container'>
            <h2>{item.item_name}</h2>
            <p>Description: {item.item_description}</p>
            <p>Price: {item.item_price}</p>
        </div>
    )
}

export default Product

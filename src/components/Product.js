import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {useParams} from 'react-router-dom'

const Product = (props) => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axiosWithAuth().get(`https://bw-african-marketplace-501.herokuapp.com/api/items/${id}`)
        .then(res => {
            console.log(res.data)
            setItem(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default Product

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import Product from './Product'

const Products = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/items')
        .then(res => {
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='products-page'>
        <div className='products-container'>

            {
                items && items.map(itm => {
                    return (
                        <Product key={itm.item_id} item={itm} />
                    )
                })
            }

        </div>

        <Link to='/addproduct' ><button className='add-product-button'>Add a Product</button></Link>
        </div>
    )
}

export default Products;

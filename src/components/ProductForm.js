import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'
const initialFormValues = {
    product: '',
    description: '',
    price: 0,
    location: ''
}

export default function ProductForm (props) {

    const {push} = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues);

    const {id} = useParams()
    const postNewItem = newItem => {
        axiosWithAuth().post(`/items`, newItem)
            .then(res => {
                console.log(res)
                push('/products')
            })
            .catch(err => {
                console.error(err)
            })
    }

    const onChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
      }


    const submitItem = () => {
        const newItem = {
            item_name: formValues.product,
            item_description: formValues.description,
            item_price: formValues.price,
            item_location: formValues.location
        }
        postNewItem(newItem)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submitItem()

    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Product</h2>

                <div className='form-group inputs'>

                    <label>Product
                        <input 
                            name='product'
                            type='text'
                            value={formValues.product}
                            onChange={onChange}
                            id='product-input'
                        />
                    </label>

                    <label>Description
                        <input 
                            name='description'
                            type='text'
                            value={formValues.description}
                            onChange={onChange}
                            id='price-input'
                        />
                    </label>

                    <label>Price
                        <input
                            name='price' 
                            type='text'
                            value={formValues.price}
                            onChange={onChange}
                            id='price-input'
                        />
                    </label>

                    <label>Location
                        <input
                        name='location' 
                        type="text"
                        value={formValues.location}
                        onChange={onChange}
                        id='location-input'
                        />
                    </label>
                </div>

                <button className='form-group submit' id='submit-button'>
                    Add Product
                </button>
            
            </div>
        </form>
    )




}
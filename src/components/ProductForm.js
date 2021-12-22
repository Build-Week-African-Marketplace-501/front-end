import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
    product: '',
    description: '',
    price: '',
}

export default function ProductForm (props) {

    // const [product, setProduct] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    const [formValues, setFormValues] = useState(initialFormValues);

    const [items, setItems] = useState([]);

    const postNewItem = newItem => {
        axiosWithAuth().post('https://bw-african-marketplace-501.herokuapp.com/api/items', newItem)
            .then(res => {
                setItems([res.data, ...items]);
                console.log(res.data, items)
            }).catch(err => console.error(err))
    }

    const validateForm = () => {
        return formValues.product.length > 0 && formValues.price.length > 0 && formValues.description.length > 0;
      }

    const onChange = event => {
        const {name, value} = event.target;
        validateForm();
        setFormValues({...formValues, [name]: value});
      }

    const onSubmit = evt => {
        const newItem = {
            product: formValues.product,
            description: formValues.description,
            price: formValues.price,
        }
        
        console.log(newItem);
        evt.preventDefault()
        postNewItem(newItem)
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
                            id='product input'
                        />
                    </label>

                    <label>Description
                        <input 
                            name='description'
                            type='text'
                            value={formValues.description}
                            onChange={onChange}
                            id='price input'
                        />
                    </label>

                    <label>Price
                        <input
                            name='price' 
                            type='text'
                            value={formValues.price}
                            onChange={onChange}
                            id='price input'
                        />
                    </label>
                </div>

                <button className='form-group submit' id='submit-button' disabled={!validateForm()} >
                    <Link to='/products'>Add Product</Link>
                </button>
            
            </div>
        </form>
    )




}
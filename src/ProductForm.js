import React, { useState, useEffect } from 'react';
// import { useRouteMatch } from 'react-router-dom'

export default function ProductForm (props) {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');

    // const { url } = useRouteMatch;

    const onSubmit = evt => {
        console.log(product, price);
        evt.preventDefault()
    }

    const validateForm = () => {
        return product.length > 0 && price.length > 0;
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Product</h2>

                <div className='form-group inputs'>

                    <label>Product
                        <input 
                            type='text'
                            value={product}
                            onChange={(evt) => setProduct(evt.target.value)}
                            id='product input'
                        />
                    </label>

                    <label>Price
                        <input 
                            type='text'
                            value={price}
                            onChange={(evt) => setPrice(evt.target.value)}
                            id='price input'
                        />
                    </label>
                </div>

                <button className='form-group submit' id='submit-button' disabled={!validateForm()}>
                    Add Product
                </button>
            
            </div>
        </form>
    )




}
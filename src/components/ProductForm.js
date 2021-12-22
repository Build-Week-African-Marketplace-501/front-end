import React, { useState, useEffect } from 'react';

export default function ProductForm (props) {

    const { submit } = props;

    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState([]);
    const [description, setDescription] = useState([]);

    const onSubmit = evt => {
        console.log(product, price, description);
        evt.preventDefault()
        submit()
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

                    <label>Description
                        <input 
                            type='text'
                            value={description}
                            onChange={(evt) => setDescription(evt.target.value)}
                            id='price input'
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

                <button className='form-group submit' id='submit-button' disabled={!validateForm()} >
                    Add Product
                </button>
            
            </div>
        </form>
    )




}
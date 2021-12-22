import React, {useState, useEffect} from 'react'
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
            
        </div>
    )
}

export default Prodcuts

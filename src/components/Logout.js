import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';

const Logout = (props)=> {
    const {push} = useHistory()
    useEffect(() =>{
        const token = localStorage.getItem("token")
        localStorage.removeItem('token')
        push('./login')
        window.location.reload()
    }, [])
    
    return(<div></div>);
}

export default Logout;
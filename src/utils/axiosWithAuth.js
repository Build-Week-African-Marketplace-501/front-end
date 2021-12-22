import axios from 'axios';
const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://bw-african-marketplace-501.herokuapp.com/api'
    }) 
}
export default axiosWithAuth;
import React, {useState, useEffect} from "react";
import * as yup from 'yup';
import '../styles/Register.css';
import axios from "axios";
import {useHistory} from 'react-router-dom'

const initialValues = {
  username: '',
  password: ''
}

const initialErrors = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup.string().trim().required('Name is required').min(3, 'Name has to be at least three characters'),
  password: yup.string().required('Password is required').min(6, 'Password has to be at least six characters')
})

export default function Register() {
  const [user, setUser] = useState(initialValues)
  const [errors, setErrors] = useState({initialErrors})
  const [disabled, setDisabled] = useState(false);

  const {push} = useHistory()

  const validation = (name, value) => {
    yup.reach(validationSchema, name)
      .validate(value)
      .then(() => setErrors({...initialErrors, [name]: ''}))
      .catch(err => setErrors({...initialErrors, [name]: err.errors[0]}))
  }

  const onChange = event => {
    const {name, value} = event.target;
    validation(name, value);
    setUser({...user, [name]: value});
  }

  const onSubmit = event => {
    event.preventDefault();
    axios.post('https://bw-african-marketplace-501.herokuapp.com/api/auth/register', user)
    .then(res => {
      setUser(initialValues)
      push('/login')

    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    validationSchema.isValid(user).then(valid => setDisabled(!valid))
  }, [user])

  return (
    <div className='container'>
      <h1>User Registration</h1>
      <form onSubmit={onSubmit} className='register-form'>
        <label>Username: </label>
          <input
            type='text'
            name='username'
            value={user.name}
            onChange={onChange}
          />
        
        <label>Password: </label>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={onChange}
          /><br />

          <div className='errors'>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
          </div>

          <button disabled={disabled}>Register</button>

      </form>
    </div>
  )
}
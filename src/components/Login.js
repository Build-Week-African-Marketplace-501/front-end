import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login.css";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const {push} = useHistory()

  const onChange = (e) => {
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }
  function validateForm() {
    return values.username.length > 0 && values.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://bw-african-marketplace-501.herokuapp.com/api/auth/login', values)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      push('/products')

    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <div className="Login">
          {/* <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
            <input 
            type="text"
            id='username'
            name='username'
            value={values.username}
            onChange={onChange}
            />
          <label htmlFor="password">Password</label>  
            <input 
            type="password"
            id='password'
            name='password'
            value={values.password}
            onChange={onChange}
            />
           <button disabled={!validateForm()}>Login</button>
          </form> */}

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            // id='username'
            name='username'
            value={values.username}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // id='password'
            name='password'
            value={values.password}
            onChange={onChange}
          />
        </Form.Group>
        <Button size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
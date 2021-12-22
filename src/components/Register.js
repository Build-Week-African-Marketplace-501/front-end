import React, {useState, useEffect} from "react";
import * as yup from 'yup';
import '../Register.css';

const initialFormValues = {
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
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({initialErrors})
  const [disabled, setDisabled] = useState(false);

  const validation = (name, value) => {
    yup.reach(validationSchema, name)
      .validate(value)
      .then(() => setErrors({...initialErrors, [name]: ''}))
      .catch(err => setErrors({...initialErrors, [name]: err.errors[0]}))
  }

  const onChange = event => {
    const {name, value} = event.target;
    validation(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const onSubmit = event => {
    event.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }

    console.log(newUser);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    validationSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <h1>User Registration</h1>
      <form onSubmit={onSubmit} className='register-form'>
        <label>Username: </label>
          <input
            type='text'
            name='username'
            value={formValues.name}
            onChange={onChange}
          />
        
        <label>Password: </label>
          <input
            type='password'
            name='password'
            value={formValues.password}
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
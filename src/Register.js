import React, {useState} from "react";

const initialFormValues = {
  name: '',
  email: '',
  password: ''
}

export default function Register() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = event => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const onSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email,
      password: formValues.password.trim()
    }

    console.log(newUser);
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
          <input
            type='text'
            name='name'
            value={formValues.name}
            onChange={onChange}
          />
    
        <label>Email</label>
          <input
            type='email'
            name='email'
            value={formValues.email}
            onChange={onChange}
          />
        
        <label>Password</label>
          <input
            type='password'
            name='password'
            value={formValues.password}
            onChange={onChange}
          />

          <button>Register</button>
      </form>
    </div>
  )
}
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  function validateForm() {
    return values.username.length > 0 && values.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "https://bw-african-marketplace-501.herokuapp.com/api/auth/login",
        values
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/products");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Login</h1>
          <div className='form-group'>
            <label htmlFor="username">Username</label>
              <input
                type="text"
                id="user-input"
                name="username"
                value={values.username}
                onChange={onChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="pass-input"
                name="password"
                value={values.password}
                onChange={onChange}
              />
          </div>
        <button disabled={!validateForm()} className='login-button'>Login</button>
      </form>

    </div>
  );
}

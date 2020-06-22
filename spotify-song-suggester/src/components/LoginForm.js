import React from "react";
import "./LoginForm.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = () => {

  const initialValues = {
      username: "",
      password: ""
  };
  const onSubmit = (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.get("something", values)
        .post(resp => console.log(resp))
        .catch(err => console.log(err))
  };

  //https://spotifysongsbw.herokuapp.com/

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("*Enter your username"),
    password: Yup.string().required("*Must enter password")
  });

  return (
    <div className="login">
      <h1>Log In</h1>
      <Formik {...{initialValues, onSubmit}} validationSchema={validationSchema}>
        {({ values, handleChange, touched, handleBlur, errors}) => (
          <Form className="form">
            <div className="field-wrap">
              <label htmlFor="username">Username</label>
              <Field 
                type="text" 
                id="username" 
                className="field" 
                name="username" 
              />
              <span className="errors">
                {touched["username"] && errors["username"]}
              </span>
            </div>

            <div className="field-wrap">
              <label htmlFor="password">Password</label>
              <Field 
                type="password" 
                id="password" 
                className="field" 
                name="password" 
              />
              <span className="errors">
                {touched["password"] && errors["password"]}
              </span>
            </div>  

            <p className="redirect">Not a member? Register <a>here</a></p>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default LoginForm;
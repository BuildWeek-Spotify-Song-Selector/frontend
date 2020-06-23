import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


import './LoginForm.css'
const Login = () => {

  const onSubmit = (val) => {
    alert(JSON.stringify(val));
    axios.post( "https://spotifysongsbw.herokuapp.com/api/user/login" ,val).then(resp => console.log(resp))
    .catch(err => console.log(err))
    
};

  const initialValues = {
    email: "",
    password: ""
};


  const SignupSchema =
    Yup.object().shape({
    email: Yup.string().required("add a email"),
    password: Yup.string().required("add a password")
  });

  return (
    <div className="login">
      <h1>Log In</h1>
      <Formik {...{initialValues, onSubmit}} 
      validationSchema={SignupSchema}>
        {() => (
          <Form className="form">
            <div className="input-box">
              <label htmlFor="email">email</label>
              <Field type="text" id="email" name="email" />
            </div>

            <div className="input-box">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
            </div>  
            <div>
              <button type="submit" >Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default Login;
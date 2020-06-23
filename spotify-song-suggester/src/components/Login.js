import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


import './Login.css'
const Login = () => {

  const HandleSub = (val) => {
    alert(JSON.stringify(val));
    axios.get("", val).post(resp => console.log(resp)).catch(err => console.log(err))
    
};

  const initialValues = {
    username: "",
    password: ""
};


  const SignupSchema =
    Yup.object().shape({
    username: Yup.string().required("add a username"),
    password: Yup.string().required("add a password")
  });

  return (
    <div className="login">
      <h1>Log In</h1>
      <Formik {...{initialValues, HandleSub}} 
      validationSchema={SignupSchema}>
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
            </div>

            <div>
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
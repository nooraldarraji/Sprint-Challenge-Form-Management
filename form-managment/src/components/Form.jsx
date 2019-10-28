import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const NewUser = ({ errors, touched, values, status}) => {
  return (
    <div className="users-form">
      <h1>User registeration form</h1>
      <Form className="user-form">
        <Field type="text" name="username" placeholder="username" />
         {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="password" name="password" placeholder="password" />
         {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};
 const Users = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string()
      .min(6, 'Password needs to be at least 6 characters')
      .required('Password is required')
  }),
  handleSubmit(values) {
    axios
      .post(`http://localhost:5000/api/register`, values)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err.response));
  }
})(NewUser);
 export default Users;
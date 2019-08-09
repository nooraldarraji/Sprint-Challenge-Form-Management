import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const NewUser = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <div className="users-form">
      <h1>User registration Form</h1>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && <p className="error">{errors.username}</p>}

        <Field type="text" name="password" placeholder="password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit!</button>
      </Form>

    </div>
  );
};


const Users = withFormik({
  mapPropsToValues({ username, password}) {
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().min(8, "The password must be at least 8 characters").required(),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('http://localhost:5000/api/register', values)
      .then(data => {
        setStatus(data.data);
      })
      .catch(err => console.log(err.response));
  }
})(NewUser);

export default Users;

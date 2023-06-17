import React from 'react';
import { useUsers } from './UserProvider.js';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddUser() {
  const { users, addUser } = useUsers();
  const requiredText = 'This field is required.';

  const addUserSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must be more than 2 characters and less than 51')
      .max(50, 'Must be more than 2 characters and less than 51')
      .required(requiredText),
    firstname: Yup.string()
      .min(2, 'Must be more than 2 characters and less than 51')
      .max(50, 'Must be more than 2 characters and less than 51')
      .required(requiredText),
    lastname: Yup.string()
      .min(2, 'Must be more than 2 characters and less than 51')
      .max(50, 'Must be more than 2 characters and less than 51')
      .required(requiredText),
    email: Yup.string().email('Invalid email address').required(requiredText),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          firstname: '',
          lastname: '',
          email: '',
        }}
        validationSchema={addUserSchema}
        onSubmit={(values) => {
          console.log(values);
          addUser(values.name, values.email, values.firstname, values.lastname);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name: </label>
            <Field id="name" name="name" type="name" />
            {touched.name && errors.name ? <div>{errors.name}</div> : null}{' '}
            <br />
            <label htmlFor="firstname">Firstname: </label>
            <Field id="firstname" name="firstname" type="firstname" />
            {touched.firstname && errors.firstname ? (
              <div>{errors.firstname}</div>
            ) : null}{' '}
            <br />
            <label htmlFor="lastname">Lastname: </label>
            <Field id="lastname" name="lastname" type="lastname" />
            {touched.lastname && errors.lastname ? (
              <div>{errors.lastname}</div>
            ) : null}{' '}
            <br />
            <label htmlFor="email">Email Address: </label>
            <Field id="email" name="email" type="email" />
            {touched.email && errors.email ? (
              <div>{errors.email}</div>
            ) : null}{' '}
            {touched.date && errors.date ? <div>{errors.date}</div> : null}{' '}
            <br />
            <input type="submit" value="Dodaj Pracownika" />
            <br />
            <br />
          </Form>
        )}
      </Formik>
    </div>
  );
}

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const SignUp = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={yup.object().shape({
          firstName: yup.string().required(),
          lastName: yup.string().required(),
          userName: yup.string().required(),
          email: yup.string().email().required(),
          password: yup.string().min(8).required(),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='firstName'
              id='firstName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              placeholder='First Name'
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <input
              type='text'
              name='lastName'
              id='lastName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder='Last Name'
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <input
              type='text'
              name='userName'
              id='userName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              placeholder='Username'
            />
            {errors.userName && touched.userName && errors.userName}
            <input
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='email'
            />
            {errors.email && touched.email && errors.email}
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='password'
            />
            {errors.password && touched.password && errors.password}
            <input
              type='password'
              name='confirmPassword'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder='confirm password'
            />
            {errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword}
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { auth } from '../store/context/FireContext';

const SignUp = () => {
  return (
    <Container
      className='d-flex justify-content-center
    align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
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
            password: yup
              .string(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
              )
              .min(8)
              .required(),
            confirmPassword: yup
              .string()
              .oneOf([yup.ref('password'), null], 'Passwords must match')
              .required(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            auth.createUserWithEmailAndPassword(values.email, values.password);
            setSubmitting(false);
            console.log(values, 'teeeeest');
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
                className='col-12'
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
                className='col-12'
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
                className='col-12'
              />
              {errors.userName && touched.userName && errors.userName}
              <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='email'
                className='col-12'
              />
              {errors.email && touched.email && errors.email}
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='password'
                className='col-12'
              />
              {errors.password && touched.password && errors.password}
              <input
                type='password'
                name='confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder='confirm password'
                className='col-12'
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
    </Container>
  );
};

export default SignUp;

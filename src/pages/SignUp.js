import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Container } from "react-bootstrap";
import { auth, db } from "../store/context/FireContext";
import { addDoc, collection } from "firebase/firestore";
import signUp_img from "../assets/man-using-pc-login-concept-illustration-sign-in-screen-login-application-with-password-stock-illustration-online-registration-and-sign-up-concept-young-man-signing-up-or-login-to-online-account-free-vector.webp";
import "../sass/signUp.scss"

const SignUp = () => {
  return (
    <Container
      className=" signUp" >
      <div className="row align-items-center">
        <div className="signUp_img col-6">
          <img src={signUp_img} alt="" className="w-100" />
        </div>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
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
              .oneOf([yup.ref("password"), null], "Passwords must match")
              .required(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            auth.createUserWithEmailAndPassword(values.email, values.password);
            setSubmitting(false);

            const docRef = collection(db, "users");
            const payload = {
              userName: values.userName,
              email: values.email,
              password: values.password,
            };
            addDoc(docRef, payload);
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
            <form onSubmit={handleSubmit} className="col-6  ">
              {/* <div className=" row justify-content-between"> */}
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="First Name"
                className="col-5 rounded "
              />
              {errors.firstName && touched.firstName && errors.firstName}
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Last Name"
                className="col-5 rounded lastName"
              />
              {errors.lastName && touched.lastName && errors.lastName}
              {/* </div> */}
              <input
                type="text"
                name="userName"
                id="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                placeholder="Username"
                className="col-12 rounded"
              />
              {errors.userName && touched.userName && errors.userName}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
                className="col-12 rounded"
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
                className="col-12 rounded"
              />
              {errors.password && touched.password && errors.password}
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder="confirm password"
                className="col-12 rounded"
              />
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
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

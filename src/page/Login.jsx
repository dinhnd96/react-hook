import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      passwordconfirmation: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Register</h1>
      <label htmlFor="firstName">userName</label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="passwordComfirmation">passwordComfirmation</label>
      <input
        id="passwordComfirmation"
        name="passwordComfirmation"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.passwordComfirmation}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;

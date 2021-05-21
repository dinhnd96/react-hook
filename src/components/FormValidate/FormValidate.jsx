import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidXNlcm5hbWUiLCJwYXNzd29yZCI6IkxvbmdAITEyMyJ9LCJpYXQiOjE2MjE1ODQ1MzZ9.jpqfHMBayNNF9A2XFxQ-2K_WxQ-86uA3R4wcnh0zMfI";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ValidationSchemaExample = () => {
  useEffect(async () => {
    // await login();
    await changePassword();
    // await getItem();
  }, []);
  const getItem = async () => {
    try {
      const { data } = await axios.get("http://localhost:2017/house", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const changePassword = async () => {
    try {
      const { data } = await axios.put(
        "http://localhost:2017/user/update-password/60a71379238df5419488db23",

        {
          currentPassword: "Long@!12345",
          newPassword: "Long@!123",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:2017/user/login", {
        username: "username",
        password: "Long@!123",
      });
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ValidationSchemaExample;

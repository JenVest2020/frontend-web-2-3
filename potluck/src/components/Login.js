import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from 'react-redux';
import { postingLogin } from './actions/actionsIndex';

const Schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required and must be over three characters long")
    .min(3),
  password: yup.string().required("Please enter your password"),
});

function Login(props) {
  //setting up state

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setFormState({ username: "", password: "", remember: false });
    console.log("form submitted!");
    const credentials = {
      username: formState.username,
      password: formState.password
    }
    props.postingLogin(credentials);

    // axios
    //   .post("https://reqres.in/api/users", formState)
    //   .then((res) => console.log("Success!!!", res.data))
    //   .catch((err) => console.log("Failed", err));
  };

  const validate = (e) => {
    yup
      .reach(Schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const onChange = (e) => {
    e.persist();
    console.log("input changed", e.target.value);

    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    validate(e);
    setFormState(newFormData);
  };

  useEffect(() => {
    Schema.isValid(formState).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [formState]);

  return (
    <>
      <h1 className='heading'>Log In</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          Username
        <input
            type="text"
            name="username"
            value={formState.username}
            placeholder="Please enter username"
            onChange={onChange}
          />
          {errorState.username.length > 0 ? (
            <p className="error">{errorState.username}</p>
          ) : null}
        </label>

        <label htmlFor="password">
          Password
        <input
            type="password"
            name="password"
            value={formState.password}
            placeholder="Please enter password"
            onChange={onChange}
          />
          {errorState.password.length > 0 ? (
            <p classname="error">{errorState.password}</p>
          ) : null}
        </label>

        <button className='btn' type="submit" disabled={buttonDisabled}>
          Submit
      </button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isPosting: state.isPosting,
    error: state.error
  }
}
export default connect(
  mapStateToProps,
  {
    postingLogin
  }
)(Login);

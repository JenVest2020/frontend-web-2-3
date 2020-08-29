import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

const Schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required and must be over three characters long")
    .min(3),
  password: yup.string().required("Please enter your password"),
});

function Event() {
  //setting up state

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [formState, setFormState] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [errorState, setErrorState] = useState({
    username: "",
    password: "",
    remember: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log("Success!!!", res.data))
      .catch((err) => console.log("Failed", err));
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
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
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
      <br></br>

      <label htmlFor="who">
        Are you the host or a guest?
        <input type="radio" value="host" name="host" id="host" /> Host
        <input type="radio" value="guest" name="guest" id="guest" /> Guest
      </label>
      <br></br>

      <label htmlFor="why">
        What type of event are you hosting?
        <select name="why" onchange={onchange} id="why">
          <option>Fundraiser</option>
          <option>Church Event</option>
          <option>Family Gathering</option>
          <option>Work Event</option>
          <option>Celebration</option>
          <option>Other</option>
        </select>
      </label>
      <br></br>

      <label htmlFor="when">
        When will the event be held?
        <input
          type="datetime-local"
          id="when"
          value="when"
          onChange={onChange}
        />
      </label>
      <br></br>

      <label htmlFor="where">
        Where will the event be held?
        <input
          type="text"
          name="where"
          value={formState.where}
          placeholder="Please enter your address"
          onChange={onChange}
        />
      </label>
      <br></br>

      <label htmlFor="what">
        What do you need to be brought?
        <input
          type="text"
          name="what"
          value={formState.what}
          placeholder="What do you need attendees to supply?"
          onChange={onChange}
        />
      </label>

      <br></br>
      <button disabled={buttonDisabled} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Event;

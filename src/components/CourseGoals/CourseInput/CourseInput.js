import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import { styled } from "styled-components";

const FormControlWrapper = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.inValid ? "red" : "")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border-color: ${(props) => (props.inValid ? "red" : "#ccc")};
    background-color: ${(props) => (props.inValid ? "salmon" : "transparent")};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {console.log(`form-control ${!isValid ? "invalid" : ""}}`)}
      <FormControlWrapper inValid={!isValid}>
        <label>Add Task</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControlWrapper>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

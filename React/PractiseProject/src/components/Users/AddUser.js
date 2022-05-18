import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandleer = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty value.)'
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age ( >0.)'
        })
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () =>{
      setError(null);
  }
  
  return (
      <Wrapper>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> } 
    <Card cssclass={classes.input}>
      <form onSubmit={AddUserHandleer}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={userNameHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={enteredAge}
          onChange={userAgeHandler}
        />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </Wrapper>
  );
}

export default AddUser;

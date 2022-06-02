import { useRef, useState } from "react";
import useInput from '.../hooks/use-input';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsvalid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event =>{
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsvalid(false);
      return;
    }
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsvalid(false);
      return;
    }
    setEnteredNameIsvalid(true);
    console.log(enteredName);
    const enteredNameValue = nameInputRef.current.value;

    console.log(enteredNameValue);
    setEnteredName("");
  };

  const nameInpoutIsValid = !enteredNameIsValid && enteredNameTouched
const nameInputClass = nameInpoutIsValid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          // onBlur={}
          value={enteredName}
        />
        {nameInpoutIsValid && (
          <p className="error-text">Please enter a valid inpute</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

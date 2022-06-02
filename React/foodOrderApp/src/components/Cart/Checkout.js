import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setInputFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setInputFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name:enteredName,
      street:enteredStreet,
      city:enteredCity,
      postalCode:enteredPostalCode
    });
  };

  const nameControlledClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlledClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const cityControlledClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const postalCodeControlledClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlledClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlledClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlledClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={postalCodeInput} />
        {!formInputValidity.postalCode &&
          <p>Please enter a valid postal code(5 characters long).</p>
        }
      </div>
      <div className={cityControlledClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

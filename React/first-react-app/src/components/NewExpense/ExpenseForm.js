import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDAte] = useState("");

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
    // console.log(event.target.value)
  };
  const DateChangeHandler = (event) => {
    SetEnteredDAte(event.target.value);
    // console.log(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

  props.onSaveExpenseData(expenseData);
  SetEnteredTitle('');
  SetEnteredAmount('');
  SetEnteredDAte('');

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text"  value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-21"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

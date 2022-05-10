import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card.js";

function Expenseitem(props) {
  // const expenseDate =  new Date(2022, 5, 10);
  // const title = "Car insurence";
  // const expenseAmount = 234.3;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}


export default Expenseitem;

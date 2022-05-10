import React from "react";
import Card from '../Ui/Card.js';
import Expenseitem from "./ExpenseItem.js";
import "./Expenses.css";

function Expense(props) {
  return (
    <Card className="expenses">
      <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
    </Card>
  );
}

export default Expense;

import React, { useState } from "react";
import Card from "../Ui/Card.js";
import ExpenseFIlter from "./ExpenseFIlter.js";
import Expenseitem from "./ExpenseItem.js";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.js";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFIlter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        {filteredExpenses.length === 0 ? (
          <h2>No expenses found</h2>
        ) : (
          filteredExpenses.map((expense) => (
            <Expenseitem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expense;

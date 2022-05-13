import './App.css';
import React,{useState} from 'react';
import Expense from './components/Expenses/Expense.js';
import NewExpense from './components/NewExpense/NewExpense';

const DUNNY_EXPENSES = [
  {id : "e1", title:" Car inspuremce", amount:342, date: new Date(2022, 3, 12)},
  {id : "e2", title:" Bus inspuremce", amount:542, date: new Date(2022, 5, 12)},
]

function App() {
 
  const [expenseData, setExpenseData] = useState(DUNNY_EXPENSES);
const addExpenseHandler = expense =>{
 setExpenseData(prevExpenses =>{
   return [expense, ...prevExpenses];
 });
}

  return (
   <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
    <Expense items={expenseData}/>
    </div>
  );
}

export default App;

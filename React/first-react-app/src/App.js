import './App.css';
import Expense from './components/Expenses/Expense.js';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenseData = [
    {id : "e1", title:" Car inspuremce", amount:342, date: new Date(2022, 3, 12)},
    {id : "e2", title:" Bus inspuremce", amount:542, date: new Date(2022, 5, 12)},
  ]

const addExpenseHandler = expense =>{
  console.log("in app .js")
  console.log(expense)
}

  return (
   <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
    <Expense items={expenseData}/>
    </div>
  );
}

export default App;

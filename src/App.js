import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

// function App() {
const App = () => {  // Arrow funtion
  const initialExpenses = [
    {
      id: 'e1',
      title: 'des1',
      amount: "40",
      date: new Date(2023, 5, 3),
      location: 'shahdol'
    },
    {
      id: 'e2',
      title: 'des2',
      amount: "90",
      date: new Date(2023, 2, 3),
      location: 'bhopal'
    },
    {
      id: 'e3',
      title: 'des3',
      amount: "200",
      date: new Date(2023, 1, 3),
      location: 'indore'
    },
    {
      id: 'e4',
      title: 'des4',
      amount: "10",
      date: new Date(2023, 4, 3),
      location: 'shahdol'
    }
  ];
   // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Expenses, {items: expenses})
  // )
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    // expenses.push(expense);
    // console.log(expenses)
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses]
    })
  }
  // console.log(expenses, initialExpenses)
  
 


  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;

import React from 'react';
import Expenses from './components/Expenses/Expenses';

// function App() {
const App = () => {  // Arrow funtion
  const expenses = [
    {
      id: 'e1',
      title: 'des1',
      amount: 'price1',
      date: new Date(2023, 5, 3),
      location: 'shahdol'
    },
    {
      id: 'e2',
      title: 'des2',
      amount: 'price2',
      date: new Date(2023, 2, 3),
      location: 'bhopal'
    },
    {
      id: 'e3',
      title: 'des3',
      amount: 'price3',
      date: new Date(2023, 1, 3),
      location: 'indore'
    },
    {
      id: 'e4',
      title: 'des4',
      amount: 'price4',
      date: new Date(2023, 4, 3),
      location: 'shahdol'
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Expenses, {items: expenses})
  // )


  return (
    <div>
      <Expenses items = {expenses}/> 
    </div>
  );
}

export default App;

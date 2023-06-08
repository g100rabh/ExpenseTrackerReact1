
import ExpenseItem from './components/ExpenseItem';


function App() {
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
  ]
  return (
    <div>
      {/* single notations */}
      {/* <ExpenseItem title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date} 
      location={expenses[0].location}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date} 
      location={expenses[1].location}></ExpenseItem>
       <ExpenseItem title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date} 
      location={expenses[2].location}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date} 
      location={expenses[3].location}></ExpenseItem> */}
      
      {/* We can loop this also */}

      {expenses.map((item,index) => (
      <ExpenseItem title={expenses[index].title} 
      amount={expenses[index].amount} 
      date={expenses[index].date} 
      location={expenses[index].location}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;

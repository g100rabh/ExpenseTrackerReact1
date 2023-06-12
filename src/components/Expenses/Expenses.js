import React, {useState} from 'react';


import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';


// function Expenses(props){
const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2021')

const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
}

const filteredExpenses = props.items.filter((expense) => {
  if(expense.date.getFullYear().toString() === filteredYear)
    return expense
});

    return (
    <Card className="exp">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map(expense => (
      <ExpenseItem
        key ={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
        location={expense.location}>
      </ExpenseItem>
      ))}
    </Card>
    );
}
export default Expenses;
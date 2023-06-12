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

    return (
    <Card className="exp">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map(expense => (
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
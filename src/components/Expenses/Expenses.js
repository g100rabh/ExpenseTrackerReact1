import React, {useState} from 'react';


import ExpenseList from './ExpenseList';
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';


// function Expenses(props){
const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2022')

const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
}

const filteredExpenses = props.items.filter((expense) => {
  if(expense.date.getFullYear().toString() === filteredYear)
    return expense
});

let expenseContent = <p className='para'>No expenses found!</p>



    return (
    <Card className="exp">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
    );
}
export default Expenses;
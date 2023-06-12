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
      {props.items.map((item,index) => (
      <ExpenseItem
        key ={props.items[index].id} 
        title={props.items[index].title} 
        amount={props.items[index].amount} 
        date={props.items[index].date} 
        location={props.items[index].location}>
      </ExpenseItem>
      ))}
    </Card>
    );
}
export default Expenses;
import React from 'react';


import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';



// function Expenses(props){
const Expenses = (props) => {
    return (
    <Card className="exp">
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
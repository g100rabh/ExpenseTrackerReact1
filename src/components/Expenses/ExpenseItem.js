import React from 'react';

import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails.js'
import Card from '../UI/Card.js'
import './ExpenseItem.css'

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 6, 1);
    // const expenseTitle = 'description';
    // const expenseAmount = "price";
    // const expenseLocation = "location";

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        </Card>
    
    );
}

export default ExpenseItem;
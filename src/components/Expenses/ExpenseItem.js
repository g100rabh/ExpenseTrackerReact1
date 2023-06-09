import React from 'react';

import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails.js'
import Card from '../UI/Card.js'
import './ExpenseItem.css'


// function ExpenseItem(props) {
const ExpenseItem = (props) => {

    const clickRemoveHandler = () => {
        
        const expenseEle = document.querySelector('.expense-item');
        expenseEle.remove();
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
            <button className='delete' onClick={clickRemoveHandler}>Delete</button> 
        </Card>
    
    );
}

export default ExpenseItem;
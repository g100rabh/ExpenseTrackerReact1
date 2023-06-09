import React from 'react';

import './ExpenseItem.css'

// function ExpenseDetails(props) {
const ExpenseDetails = (props) => {
   

    return (
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className='expense-item__location'>{props.location}</div>
            <div className="expense-item__price">{'\u20B9'}{props.amount}</div>
        </div>
    );
}

export default ExpenseDetails;
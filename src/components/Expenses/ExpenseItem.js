import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails.js'
import Card from '../UI/Card.js'
import './ExpenseItem.css'
import { keyboard } from '@testing-library/user-event/dist/keyboard';


// function ExpenseItem(props) {
const ExpenseItem = (props) => {
    
    // Delete button functionality by DOM
    const clickRemoveHandler = (event) => {
        const expenseEle = event.target.parentElement;
        expenseEle.remove();  
    };
    // console.log(useState(props))
    const [title, setTitle] = useState(props.title);

    const clickChangeHandler = () => {
        setTitle('Updated!');
    }
    const [amount, setamount] = useState(props.amount);
    const clickAddHandler = () =>{
        setamount(parseInt(amount) + 100);
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <ExpenseDetails title={title} amount={amount} location={props.location}/>
                <button className='delete' onClick={clickRemoveHandler}>Delete</button>
                <button className='chngTitle' onClick={clickChangeHandler}>Change Title</button>
                <button className='Add' onClick={clickAddHandler}>Add {'\u20B9'}100</button> 
            </Card>
        </li>
        
    
    );
}

export default ExpenseItem;
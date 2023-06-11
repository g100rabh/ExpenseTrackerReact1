import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredlocation, setEnteredLocation] = useState('');

    const inputChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return (
        <form>
            <div className='expense-input'>
                <div className='expense-input'>
                    <label>Title:</label>
                    <input type="text" onChange={inputChangeHandler}/>
                </div>
                <div className='expense-input'>
                    <label>Location:</label>
                    <input type="text"onChange={locationChangeHandler} />
                </div>
                <div className='expense-input'>
                    <label>Amount:</label>
                    <input type="number" onChange={amountChangeHandler}/>
                </div>
                <div className='expense-input'>
                    <label>Date:</label>
                    <input type="date" min="2022-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='expense-input'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
       
    );
}

export default ExpenseForm;
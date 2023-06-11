import React from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {

    const inputChangeHandler = (event) => {
        console.log(event.target.value);
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
                    <input type="text" />
                </div>
                <div className='expense-input'>
                    <label>Amount:</label>
                    <input type="number" />
                </div>
                <div className='expense-input'>
                    <label>Date:</label>
                    <input type="date" min="2022-01-01"/>
                </div>
            </div>
            <div className='expense-input'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
       
    );
}

export default ExpenseForm;
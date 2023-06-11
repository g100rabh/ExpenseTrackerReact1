import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredlocation, setEnteredLocation] = useState('');

    // const[userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    //     enteredlocation: ''
    // });

    const inputChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return{...prevState, enteredTitle: event.target.value
        //     };
        // });
    }

    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredlocation: event.target.value
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }
    // console.log(enteredTitle)
    const form = document.querySelector('.form');
    const clickSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(enteredTitle, enteredDate, enteredAmount, enteredlocation);
        form.reset();
        
    }
    

    return (
        <form className='form' >
            <div className='expense-input' >
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
                <button type='submit' onClick={clickSubmitHandler}>Add Expense</button>
            </div>
        </form>
       
    );
}

export default ExpenseForm;
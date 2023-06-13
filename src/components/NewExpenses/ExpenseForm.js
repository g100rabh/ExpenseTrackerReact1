import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false); // making form visibility so that we can use two more buttons Add new expense and canel.
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

    // const form = document.querySelector('.form');
    const clickSubmitHandler = (event) =>{
        event.preventDefault();
        // console.log(enteredTitle, enteredDate, enteredAmount, enteredlocation);
        
        const expenseData = {
            title: enteredTitle,
            date: new Date (enteredDate),
            amount: enteredAmount,
            location: enteredLocation
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        // form.reset();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');
    }
    
    const clickHandler = (event) =>{
        event.preventDefault();
        console.log('s')
        setIsFormVisible(true);
        
    }
    const cancelCLickHandler = (event) => {
        event.preventDefault();
        console.log("c")
        setIsFormVisible(false);
    }
    
    

    return (
        <div>
            {!isFormVisible && <button type='submit' onClick={clickHandler}>Add New Expense</button>}
            {isFormVisible && <form className='form' onSubmit={clickSubmitHandler}>
                <div className='expense-input' >
                    <div className='expense-input'>
                        <label>Title:</label>
                        <input type="text" onChange={inputChangeHandler} value={enteredTitle}/>
                    </div>
                    <div className='expense-input'>
                        <label>Location:</label>
                        <input type="text"onChange={locationChangeHandler} value={enteredLocation}/>
                    </div>
                    <div className='expense-input'>
                        <label>Amount:</label>
                        <input type="number" onChange={amountChangeHandler} value={enteredAmount}/>
                    </div>
                    <div className='expense-input'>
                        <label>Date:</label>
                        <input type="date" min="2020-01-01" onChange={dateChangeHandler} value={enteredDate}/>
                    </div>
                </div>
                <div className='expense-input'>
                    <button type='submit' onClick={cancelCLickHandler}>Cancel</button>
                    <button type='submit' >Add Expense</button> {/*  onClick={clickSubmitHandler} */}
                </div>
            </form>}  
        </div> 
    );
}

export default ExpenseForm;
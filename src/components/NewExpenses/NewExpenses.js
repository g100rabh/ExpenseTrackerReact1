import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) => {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData)
        props.onAddExpense(expenseData);
    };
    
    const [isFormVisible, setIsFormVisible] = useState(false);

    // const clickHandler = (event) =>{
    //     event.preventDefault();
    //     console.log('s')
    //     setIsFormVisible(true);
        
    // }

    return <div className='new-expense'>
        {/* {!isFormVisible && <button type='submit' onClick={clickHandler}>Add New Expense</button>} */}
        {/* {isFormVisible && <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>} */}
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
};

export default NewExpenses;
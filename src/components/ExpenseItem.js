import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails.js'
import './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 6, 1);
    // const expenseTitle = 'description';
    // const expenseAmount = "price";
    // const expenseLocation = "location";

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
        </div>
    
    );
}

export default ExpenseItem;
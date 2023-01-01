import React, {  useState } from 'react'; // , { useState } is a "named" import
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


// function
function ExpenseItem(props) {
    // allows to define values as state where changes to values are reflected in component function
    // first value in array is what it is currently, second is what you want it to change to(called array destructoring)
    const [title, setTitle] = useState(props.title);
    console.log("Expense Item Evaluated by React")

    // function logs when button is being clicked
    const clickHandler = () => {
        // telling react you want to assign a new value
        // calling const[title, setTitle]
        setTitle('Updated!');
        console.log(title);
    };

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick = {clickHandler}>Change Title</button>
     </Card>
    );
}

export default ExpenseItem;
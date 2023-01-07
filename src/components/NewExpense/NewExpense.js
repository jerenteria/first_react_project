import React , { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
             // copy all the entered expenseData which will be from the submitHandler in ExpenseForm.js
            ...enteredExpenseData,
            // Create an id using random and turn it into a string
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className="new-expense">
        {!isEditing && <button onClick={setIsEditing}>Add New Expense</button>}
        {/* pass new prop to expense form use "on" bc want to make it clear that it should be a function that cam be called inside
        the expense form and something should happen inside of this component */}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
};

export default NewExpense;
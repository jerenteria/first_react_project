import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
             // copy all the entered expenseData which will be from the submitHandler in ExpenseForm.js
            ...enteredExpenseData,
            // Create an id using random and turn it into a string
            id: Math.random().toString()
        }
    }
    return <div className="new-expense">
        {/* pass new prop to expense form use "on" bc want to make it clear that it should be a function that cam be called inside
        the expense form and something should happen inside of this component */}
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;
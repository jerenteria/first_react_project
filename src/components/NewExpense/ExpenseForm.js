import React, { useState } from 'react'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Used as one state object managed as one piece of state instead of 3 seperate slices like above
    // now you have to update all 3 properties not just one when updating this state
        // const [userInput, setUserInput] = useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: ''
        // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // WHENEVER YOU UPDATE STATE AND DEPEND ON PREV STATE YOU SHOULD NOT DO IT LIKE THIS USE A FUNCTION

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })

        // With this approach it will be automatically executed by react and will receive prev state snapshot for that state which
        // you are calling the updating function
        // guarantees you are on the latest state snapshot
            // setUserInput((prevState) => {
                // return new state snapshot
            //     return { ...prevState, enteredTitle: event.target.value };
            // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({...userInput,
        // enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredData: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        // prevent default of page automatically sending request to prevent page from reloading when user submits form; keep handling
        // with javascript
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        // WHen form is submitted set back to empty string like initial state(override what user input after form is submitted and 
        // clear input in input bar)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    // listen to submit using onSubmit
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                {/* onChange checks for whenever something in the input bar changes */}
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
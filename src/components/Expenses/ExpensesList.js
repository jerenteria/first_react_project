import React from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css';

const ExpensesList = props => {
  
  // If there are no expenses render "found no expenses"
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

  return <ul className="expenses-list">
      {props.items.map((expense) => ( 
      <ExpenseItem 
      // key will tell react where the new items should go otherwise react will add it at the end, loop through all items
      // in list change the first item to be the new item and change all the other items in the list to match what it was before
      // this is not good for time complexity 
      key = {expense.id}
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      />
    ))}
  </ul>
};

export default ExpensesList;
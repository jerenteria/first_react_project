import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
// filter the array to year selected; return new array does not edit original array
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <div>
        {/* render items dynamically */}
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter = { filterChangeHandler }/>
            {filteredExpenses.map((expense) => ( 
            <ExpenseItem 
            //  key will tell react where the new items should go otherwise react will add it at the end, loop through all items
            // in list change the first item to be the new item and change all the other items in the list to match what it was before
            // this is not good for time complexity 
            key = {expense.id}
            title={expense.title} 
            amount={expense.amount}
            date={expense.date}
            />
          ))}
        </Card>
      </div>
    );
};

export default Expenses;
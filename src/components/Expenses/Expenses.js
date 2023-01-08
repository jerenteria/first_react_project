import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpenseList items = {filteredExpenses}/>
        </Card>
      </div>
    );
};

export default Expenses;
import React from 'react';

const ExpenseItem = (props) => (
    <div>
        <h3>{props.expense.description}</h3>
        <p>{props.expense.amount}-{props.expense.createdAt}</p>
    </div>
);

export default ExpenseItem;
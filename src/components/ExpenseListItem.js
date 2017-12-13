import React from 'react';

const ExpenseItem = ({description = '', amount = 0, createdAt = 0}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount}-{createdAt}</p>
    </div>
);

export default ExpenseItem;
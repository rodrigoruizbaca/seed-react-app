import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseForm from './ExpenseForm';

const ExpenseDashboard = () => {
    return ( 
        <div>
            <ExpenseForm/>
            <p/>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    );
};

export default ExpenseDashboard;
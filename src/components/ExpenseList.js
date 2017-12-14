import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenses';

export const ExpenseList = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense}/>
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {'expenses': expenseSelector(state.expenses, state.filters)};
};


export default connect(mapStateToProps)(ExpenseList);

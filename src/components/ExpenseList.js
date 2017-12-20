import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenses';
import {populateExpenses} from '../actions/expenses';

class ExpenseList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.expenses.map((expense) => {
                        return <ExpenseItem key={expense.id} expense={expense}/>
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatch(populateExpenses());
    }
}

const mapStateToProps = (state) => {
    return {'expenses': state.expenses};//expenseSelector(state.expenses, state.filters)};
};


export default connect(mapStateToProps)(ExpenseList);

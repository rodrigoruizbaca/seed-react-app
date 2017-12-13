import React from 'react';
import {addExpense} from '../actions/expenses';
import {connect} from 'react-redux';

class ExpenseFormComponent extends React.Component {



    state =  {
        description: '',
        amount: 0
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {description};
        });
    };    

    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => {
            return {amount};
        });
    };       

    handleSubmit = (e) => {
        e.preventDefault();
        const expense = {description: this.state.description, amount: this.state.amount};
        this.props.dispatch(addExpense(expense));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Description:
                        <input type="text" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    </label>
                    <label>
                        Amount:
                        <input type="number" value={this.state.amount} onChange={this.onAmountChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(ExpenseFormComponent);

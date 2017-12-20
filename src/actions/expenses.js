import uuid from 'uuid';
import moment from 'moment';
import db from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    };
};

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    };
};

export const populateExpenses = () => {
    return (dispatch) => {        
        db.ref('expenses').on('child_added', (snapshot) => {
            dispatch(addExpense({
                id: snapshot.key,
                ...snapshot.val()
            }));
        });
        
    };
};

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const  {
            description = '',
            note = '',
            amount = 0,
            createdAt = moment().milliseconds()
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        db.ref('expenses').push(expense).then((ref) => {
            /*dispatch(addExpense({
                id: ref.key,
                ...expense
            }));*/
        });
    };
};
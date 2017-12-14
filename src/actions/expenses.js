import uuid from 'uuid';
import moment from 'moment';

export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = moment()
    }) => {
        return {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
              }
        };
};
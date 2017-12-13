
const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EXPENSES': {
            return state;
        }
        case 'ADD_EXPENSE': {
            const expense = action.expense;
            return [...state, expense];
        }
        default:
            return state;
    }
};

export default expensesReducer;
import { addExpense } from '../../actions/expenses';

test ('should add expense', ()=> {
    const expense = {
        description: 'Hola', note: 'Note', amount: 12, createdAt: 0
    };
    const action = addExpense(expense);
    expect(action.type).toBe("ADD_EXPENSE"); 
    expect(action.expense).toEqual({...expense, id: expect.any(String)}); 
});
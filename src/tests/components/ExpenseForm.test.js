import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseFormComponent} from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import uuid from 'uuid';

test('should create expense form', () => {
    const wrapper = shallow(<ExpenseFormComponent/>);
    expect(wrapper).toMatchSnapshot();
});

test('should desc be set', () => {
    const wrapper = shallow(<ExpenseFormComponent/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value: 'rorro'}
    });
    expect(wrapper.state('description')).toBe('rorro');
});

test('call submit properly', () => {
    const dispatchSpy = jest.fn();
    const wrapper = shallow(<ExpenseFormComponent dispatch={dispatchSpy}/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value: 'rorro'}
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('description')).toBe('rorro');
    expect(dispatchSpy).toHaveBeenLastCalledWith({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'rorro',
            amount: 0,
            note: '',
            id: uuid(),
            createdAt: moment()
        }
    });

});
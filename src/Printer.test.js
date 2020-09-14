import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Printer } from './Printer'

describe('input field', () => {

    it('renders correctly',() => {
        // Here we destructure a new query provided by React Testing Library that
        // looks for the placeholder text in our input field. 
        const { queryByPlaceholderText } = render(<Printer />);
    
        // In this example, we are taking a different approach by not using a variable.
        // We simply pass in the entire query with the string we are looking for into 
        // our expectation.
        expect(queryByPlaceholderText('Type a message!')).toBeInTheDocument();
    });

    it('updates on change', () => {

        // We destructure our query
        const { queryByPlaceholderText } = render(<Printer />);

        // Assign the current value of the placeHolder 
        // to our message variable
        const mssgInput = queryByPlaceholderText('Type a message!');

        // Here we use the 'change' event and pass it
        // the curent placeHolder and the new value to submit.
        fireEvent.change(mssgInput, {target: {value: 'hello world'}});

        // We are expecting the new value to be what we submitted. 
        expect(mssgInput.value).toBe('hello world');
    });

});

describe('print button', () => {
    describe('with data inside the message', () => {
        it('prints the message to the screen', () => {
            const { 
                getByText, 
                getByRole, 
                getByPlaceholderText 
            } = render(<Printer />);

            const mssgInput = getByPlaceholderText('Type a message!');

            fireEvent.change(mssgInput, {target: {value: 'hello world'}});

            fireEvent.click(getByRole('button'));
            
            const message = getByText('hello world')

            expect(message).toBeInTheDocument();
        });
        it('is not disabled', () => {
            const { getByRole, queryByPlaceholderText } = render(<Printer />);

            const mssgInput = queryByPlaceholderText('Type a message!');

            fireEvent.change(mssgInput, {target: {value: 'hello world'}});

            const btn = getByRole('button');

            expect(btn).not.toBeDisabled();
        });
    });
    describe('without data inside message', () => {
        it('is disabled', () => {
            const { getByRole } = render(<Printer />);

            const btn = getByRole('button');

            expect(btn).toBeDisabled();
        });
    });
});


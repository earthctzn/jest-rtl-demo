import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Counter }  from './Counter'

it("renders properly",() => {
    const { getByText } = render(<Counter />);
    let num = getByText('0');
    expect(num).toBeInTheDocument();
});

it("increments count by one when up is clicked.", () => {

    // Destructure our query functions
    const { getByText, getByTestId } = render(<Counter />);

    // Simulate a click event on the 'up' button.
    fireEvent.click(getByTestId('up'));

    // Create the variable with the value we are expecting.
    let num = getByText('1');

    // We expect our test to find the number 1 and return a truthy value.
    expect(num).toBeInTheDocument();
})

it("decrements count by one when down is clicked.", () => {

    // Destructure our query functions
    const { getByText, getByTestId } = render(<Counter />);

    // Simulate a click event on the 'up' button.
    fireEvent.click(getByTestId('up'));

    // Create the variable with the value we are expecting.
    let num = getByText('1');

    // Simulate a click event on the 'down' button.
    fireEvent.click(getByTestId('down'));

    // We expect our test to find the number 1 in the document.
    expect(num).toBe('0');
})
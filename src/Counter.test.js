import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Counter }  from './Counter'

it("increments count by one when up is clicked.", () => {

    // Destructure our query functions
    const { getByText, getByTestId } = render(<Counter />);

    // Simulate a click event on the 'up' button.
    fireEvent.click(getByTestId('up'));

    // With this we make sure the number 1 is in the document
    // after clicking the 'Up' button. 
    // If it is not found the test will fail at this point.
    let num = getByText('1');

    // We expect our test to find the number 1 and pass.
    expect(num).toBeInTheDocument();
})

it("decrements count by one when down is clicked.", () => {

    // Destructure our query functions
    const { getByText, getByTestId } = render(<Counter />);

    // Simulate a click event on the 'up' button.
    fireEvent.click(getByTestId('up'));

    // With this we make sure the number 1 is in the document
    // after clicking the 'Up' button. 
    // If it is not found the test will fail at this point.
    let num = getByText('1');

    // Simulate a click event on the 'down' button.
    fireEvent.click(getByTestId('down'));

    // We expect that our test will NOT find the number 1 
    // in the document.
    expect(num).not.toBeInTheDocument();
})
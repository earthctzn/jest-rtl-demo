import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Counter }  from './Counter'

it("renders properly",() => {
    const { getByText } = render(<Counter />);
    let num = getByText('0');
    expect(num).toBeInTheDocument();
} )
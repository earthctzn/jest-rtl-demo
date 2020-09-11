import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  // We destructure the getByText query and render the App component.
  const { getByText } = render(<App />);

  // Matching a string:
  const upButton = getByText('up', { exact: false }); // {exact: false} ignores case.

  // Matching a regex:
  const dnButton = getByText(/down/i); // matches a substring, i ignores case.
  const pntButton = getByText(/^print$/i); // matches the full string, i ignores case.

  // Our Expectations are just that, what we expect the outcome to be. 
  // In this case, we expect to find the text from all our buttons in the document.  
  expect(upButton).toBeInTheDocument();
  expect(dnButton).toBeInTheDocument();
  expect(pntButton).toBeInTheDocument();
});

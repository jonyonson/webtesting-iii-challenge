import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

describe('Dashboard', () => {
  it('should render display', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Close Gate/);
    getByText(/Lock Gate/);
    getByText(/Unlocked/);
    getByText(/Open/);
  });
});

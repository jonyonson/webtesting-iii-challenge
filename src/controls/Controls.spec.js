import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';

describe('Controls', () => {
  it('should disable the lock gate button if gate is open', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls locked={false} closed={false} toggleLocked={mockFn} />
    );
    const LockButton = getByText(/Lock Gate/);
    // expect(lockButton.hasAttribute('disabled')).toBeTruthy();
    fireEvent.click(LockButton);
    expect(mockFn).not.toBeCalled();
  });

  it('should disable the open gate button if gate is locked', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggleClosed={mockFn} />
    );
    const openButton = getByText(/Open Gate/);
    // expect(openButton.hasAttribute('disabled')).toBeTruthy();
    fireEvent.click(openButton);
    expect(mockFn).not.toBeCalled();
  });

  it.skip('should toggle close and open gate when clicked', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const closeButton = getByText(/Close Gate/);
    fireEvent.click(closeButton);
    getByText(/Open Gate/);
  });
});

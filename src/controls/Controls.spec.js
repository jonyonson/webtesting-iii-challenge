import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';

describe('Controls', () => {
  it('should disable the lock gate button if gate is open', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={false} toggleLocked={mockFn} />
    );
    const lockButton = getByText(/Unlock Gate/);
    // expect(lockButton.hasAttribute('disabled')).toBeTruthy();
    fireEvent.click(lockButton);
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
    const mockFn = jest.fn();
    // const { getByText } = render(<Controls locked={false} closed={true} />);

    const { getByText } = render(
      <Controls closed={false} toggleClosed={mockFn} />
    );
    const closeGateButton = getByText(/Close Gate/);
    fireEvent.click(closeButt);
    getByText(/Open Gate/);
  });
});

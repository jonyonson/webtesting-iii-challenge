import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('Dashboard', () => {
  it('should have green-led class for unlocked and open', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(open.classList).toContain('green-led');
    expect(unlocked.classList).toContain('green-led');
  });

  it('should have red-led class for locked and close', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);
    expect(locked.classList).toContain('red-led');
    expect(closed.classList).toContain('red-led');
  });
});

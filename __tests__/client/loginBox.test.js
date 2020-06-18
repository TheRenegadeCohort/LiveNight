import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginBox from '../../src/client/components/LoginBox';

describe('Sanity Check', () => {
  it('should hold to reality', () => {
    expect(true).toBeTruthy();
  });
});

describe('LoginBox component', () => {
  it('renders without crashing', () => {
    render(<LoginBox />);
    expect(screen.queryByText(/LiveTonight/gi)).toBeDefined();
  });
});

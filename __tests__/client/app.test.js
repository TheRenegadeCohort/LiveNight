import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../../src/client/components/App';

describe('Sanity Check', () => {
  it('should hold to reality', () => {
    expect(true).toBeTruthy();
  });
});

describe('APP component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.queryByText(/LiveTonight/gi)).toBeDefined();
  });
});

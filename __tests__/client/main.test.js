import React from 'react';
import { render, screen } from '@testing-library/react';

import Main from '../../src/client/components/main';

describe('Sanity Check', () => {
  it('should hold to reality', () => {
    expect(true).toBeTruthy();
  });
});

describe('Main component', () => {
  it('renders without crashing', () => {
    render(<Main />);
    expect(screen.getByTestId('main')).toBeDefined();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import Banner from '../../src/client/components/banner';

describe('Sanity Check', () => {
  it('should hold to reality', () => {
    expect(true).toBeTruthy();
  });
});

describe('Banner component', () => {
  it('renders without crashing', () => {
    render(<Banner />);
    expect(screen.queryByText(/LiveTonight/gi)).toBeDefined();
  });
});

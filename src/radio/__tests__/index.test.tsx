import { render, screen } from '@testing-library/react';
import React from 'react';
import { Radio } from '..';

describe('Radio', () => {
  test('render Radio', () => {
    render(<Radio>TEXT</Radio>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import { Checkbox } from '..';

describe('Checkbox', () => {
  test('render Checkbox', () => {
    render(<Checkbox>TEXT</Checkbox>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });
});

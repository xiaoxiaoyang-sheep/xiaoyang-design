import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Grid from '..';

describe('Grid', () => {
  test('render Grid', () => {
    render(<Grid>TEXT</Grid>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Grid onClick={onClick}>text</Grid>);
    const linkElement = screen.getByText(/text/i);
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

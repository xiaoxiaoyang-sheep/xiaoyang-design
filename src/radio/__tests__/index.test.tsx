import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Radio from '..';

describe('Radio', () => {
  test('render Radio', () => {
    render(<Radio>TEXT</Radio>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Radio onClick={onClick}>text</Radio>);
    const linkElement = screen.getByText(/text/i);
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Input from '..';

describe('Input', () => {
  test('render Input', () => {
    render(<Input>TEXT</Input>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Input onClick={onClick}>text</Input>);
    const linkElement = screen.getByText(/text/i);
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

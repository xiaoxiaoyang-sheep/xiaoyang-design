import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Checkbox from '..';

describe('Checkbox', () => {
  test('render Checkbox', () => {
    render(<Checkbox>TEXT</Checkbox>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Checkbox onClick={onClick}>text</Checkbox>);
    const linkElement = screen.getByText(/text/i);
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

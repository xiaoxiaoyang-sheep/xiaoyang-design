import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Space from '..';

describe('Space', () => {
  test('render Space', () => {
    render(<Space>TEXT</Space>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Space onClick={onClick}>text</Space>);
    const linkElement = screen.getByText(/text/i);
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

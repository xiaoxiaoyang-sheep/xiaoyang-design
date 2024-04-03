import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Tag from '..';

describe('Tag', () => {
  test('render Tag', () => {
    render(<Tag>TEXT</Tag>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Tag onClick={onClick}>text</Tag>);
    const linkElement = screen.getByText(/text/i);
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

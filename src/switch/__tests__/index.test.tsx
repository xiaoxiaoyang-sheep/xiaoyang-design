import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Switch } from '..';

describe('Switch', () => {
  test('should support under control', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Switch onChange={onChange} data-testid="t1" />,
    );
    const linkElement = screen.getByTestId('t1');
    expect(
      container.querySelector('.xy-switch-checked'),
    ).not.toBeInTheDocument();

    fireEvent.click(linkElement);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.xy-switch-checked')).toBeInTheDocument();
  });

  test('should support control', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Switch checked onChange={onChange} data-testid="t2" />,
    );
    const linkElement = screen.getByTestId('t2');
    expect(container.querySelector('.xy-switch-checked')).toBeInTheDocument();

    fireEvent.click(linkElement);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(container.querySelector('.xy-switch-checked')).toBeInTheDocument();
  });

  test('should support disabled', () => {
    const { container } = render(<Switch disabled />);
    expect(container.querySelector('.xy-switch-disabled')).toBeInTheDocument();
  });

  test('should support loading', () => {
    const { container } = render(<Switch loading />);
    expect(
      container.querySelector('.xy-switch-loading-icon'),
    ).toBeInTheDocument();
  });
});

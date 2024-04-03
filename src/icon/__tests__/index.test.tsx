import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Icon from '..';

describe('Icon', () => {
  test('render Icon', () => {
    const { container } = render(<Icon type="copy" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('custom className', () => {
    const { container } = render(<Icon type="copy" className="custom" />);
    expect(container.querySelector('.custom')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Icon type="copy" onClick={onClick} className="custom" />,
    );
    const linkElement = container.querySelector('.custom') as Element;
    fireEvent.click(linkElement);
    expect(onClick).toHaveBeenCalled();
  });
});

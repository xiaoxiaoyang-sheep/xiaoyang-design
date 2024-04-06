import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Input } from '..';

describe('Input', () => {
  test('should support defaultValue', () => {
    const onChange = jest.fn();
    render(
      <Input defaultValue="default" onChange={onChange} data-testid="t1" />,
    );
    const linkElement = screen.getByTestId('t1');
    expect(linkElement.getAttribute('value')).toBe('default');

    fireEvent.change(linkElement, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(linkElement.getAttribute('value')).toBe('new value');
  });

  test('should support under control', () => {
    const onChange = jest.fn();
    render(<Input value="abce" onChange={onChange} data-testid="t2" />);
    const linkElement = screen.getByTestId('t2');
    expect(linkElement.getAttribute('value')).toBe('abce');

    fireEvent.change(linkElement, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(linkElement.getAttribute('value')).toBe('abce');
  });

  test('should support control', () => {
    const App = () => {
      const [value, setValue] = useState('aaa');
      const handleChange = (e: any) => {
        setValue(e.target.value);
      };
      return <Input value={value} onChange={handleChange} data-testid="t3" />;
    };
    const onChange = jest.fn();
    render(<App />);
    const linkElement = screen.getByTestId('t3');
    expect(linkElement.getAttribute('value')).toBe('aaa');

    fireEvent.change(linkElement, { target: { value: 'ttttt' } });
    expect(linkElement.getAttribute('value')).toBe('ttttt');
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('Button', () => {
  test('render Button', () => {
    render(<Button variant="text">TEXT</Button>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('render text Button', () => {
    const {container} = render(<Button></Button>)
    expect(container.querySelector('.xy-btn-text')).toBeInTheDocument()
  })

  test('render contained Button', () => {
    const {container} = render(<Button variant="contained"></Button>)
    expect(container.querySelector('.xy-btn-contained')).toBeInTheDocument()
  })

  test('render outlined Button', () => {
    const {container} = render(<Button variant="outlined"></Button>)
    expect(container.querySelector('.xy-btn-outlined')).toBeInTheDocument()
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(<Button variant="text" onClick={onClick}>text</Button>);
    const linkElement = screen.getByText(/text/i)
    fireEvent.click(linkElement)
    expect(onClick).toHaveBeenCalled()
  })

  test('should support blur', () => {
    const onBlur = jest.fn()
    render(<Button variant="text" onBlur={onBlur}>text</Button>);
    const linkElement = screen.getByText(/text/i)
    fireEvent.blur(linkElement)
    expect(onBlur).toHaveBeenCalled()
  })

  test('should support focus', () => {
    const onFocus = jest.fn()
    render(<Button variant="text" onFocus={onFocus}>text</Button>);
    const linkElement = screen.getByText(/text/i)
    fireEvent.focus(linkElement)
    expect(onFocus).toHaveBeenCalled()
  })

  test('render small Button', () => {
    const {container} = render(<Button variant="text" size="small"></Button>)
    expect(container.querySelector('.xy-btn-small')).toBeInTheDocument()
  })

  test('render medium Button', () => {
    const {container} = render(<Button variant="outlined"></Button>)
    expect(container.querySelector('.xy-btn-medium')).toBeInTheDocument()
  })

  test('render large Button', () => {
    const {container} = render(<Button variant="outlined" size="large"></Button>)
    expect(container.querySelector('.xy-btn-large')).toBeInTheDocument()
  })
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import { Avatar } from '..';

describe('Avatar', () => {
  test('render Avatar', () => {
    render(<Avatar>TEXT</Avatar>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('render small Avatar', () => {
    const { container } = render(<Avatar size="small"></Avatar>);
    expect(container.querySelector('.xy-avatar-sm')).toBeInTheDocument();
  });

  test('render large Avatar', () => {
    const { container } = render(<Avatar size="large"></Avatar>);
    expect(container.querySelector('.xy-avatar-lg')).toBeInTheDocument();
  });

  test('render square Avatar', () => {
    const { container } = render(<Avatar shape="square"></Avatar>);
    expect(container.querySelector('.xy-avatar-square')).toBeInTheDocument();
  });
});

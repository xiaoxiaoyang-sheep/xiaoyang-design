import { render, screen } from '@testing-library/react';
import React from 'react';
import { Tag } from '..';

describe('Tag', () => {
  test('render Tag', () => {
    render(<Tag>TEXT</Tag>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });
});

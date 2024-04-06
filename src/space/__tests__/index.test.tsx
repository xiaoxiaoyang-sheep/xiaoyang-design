import { render, screen } from '@testing-library/react';
import React from 'react';
import { Space } from '..';

describe('Space', () => {
  test('render Space', () => {
    render(<Space>TEXT</Space>);
    const linkElement = screen.getByText(/TEXT/i);
    expect(linkElement).toBeInTheDocument();
  });
});

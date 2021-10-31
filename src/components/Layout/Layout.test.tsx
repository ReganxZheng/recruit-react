import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from '.';

describe('<Layout /> Component', () => {
  it('should render a header with title', () => {
    render(<Layout />);
    const headerElement = screen.getByText('Register card form');
    expect(headerElement).toBeInTheDocument();
  });
});

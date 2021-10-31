import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header } from '.';
import { MenuToggleProvider, MenuToggleContext } from '../../store/context';

describe('<Header /> Component', () => {
  const renderHeader = () =>
    render(
      <MenuToggleProvider>
        <Header />
      </MenuToggleProvider>
    );

  beforeEach(() => {
    renderHeader();
  });

  it('should render a header component register title and burger icon', () => {
    const titleElement = screen.getByText('Register card form');
    const burgerIcon = screen.getByTestId('test-burgericon');

    expect(titleElement).toBeInTheDocument();
    expect(burgerIcon).toBeInTheDocument();
  });

  it('should change to back icon and menu title when burger icon is clicked', async () => {
    fireEvent.click(screen.getByTestId('test-burgericon'));

    await waitFor(() => screen.getByTestId('test-backicon'));
    const titleElement = screen.getByText('Menu');

    expect(titleElement).toBeInTheDocument();
  });
});

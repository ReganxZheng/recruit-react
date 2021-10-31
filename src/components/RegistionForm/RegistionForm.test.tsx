import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RegistionForm } from '.';

describe('<RegistionForm /> Component', () => {
  const handleSubmit = jest.fn();
  const renderForm = () => render(<RegistionForm onSubmit={handleSubmit} />);

  beforeEach(() => {
    renderForm();
  });

  it('should render a form and welcome message', () => {
    expect(screen.getByTestId('test-welcome')).toBeInTheDocument();
    expect(screen.getByTestId('test-form')).toBeInTheDocument();
  });

  it('should render 3 input for credit card/cvc numbr/expire date', () => {
    expect(screen.getByLabelText('Credit Card')).toBeInTheDocument();
    expect(screen.getByLabelText('CVC')).toBeInTheDocument();
    expect(screen.getByLabelText('Expire Date')).toBeInTheDocument();
  });

  it('should show error messages when submitting a invaild form', async () => {
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText('Credit Card is required')).toBeInTheDocument();
      expect(screen.getByText('CVC number is required')).toBeInTheDocument();
      expect(screen.getByText('Expire date is required')).toBeInTheDocument();
    });
  });

  it('should show related error message for any invaild input field when submitting', async () => {
    userEvent.type(screen.getByTestId('test-creditcard'), '001');
    userEvent.type(screen.getByTestId('test-cvcnumber'), '111');
    userEvent.type(screen.getByTestId('test-expiredate'), '1122');

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText('Credit Card is invaild')).toBeInTheDocument();
    });
  });

  it('should succuess submit the form when all input is vaild', async () => {
    userEvent.type(screen.getByTestId('test-creditcard'), '1234567801234567');
    userEvent.type(screen.getByTestId('test-cvcnumber'), '999');
    userEvent.type(screen.getByTestId('test-expiredate'), '1122');

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        creditCard: '1234567801234567',
        cvcNumber: '999',
        expireDate: '1122',
      });
    });
  });
});

import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './index';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ContactFormProps } from '../../../@types/props';

interface ChildrenProps {
  children: React.ReactNode
}

const Wrapper = ({children}: ChildrenProps) => {
  const formMethods = useForm<ContactFormProps>();

  return (
    <FormProvider {...formMethods}>
      {children}
    </FormProvider>
  );
};

describe('FormComponent', () => {
  const mockOnSubmit = jest.fn();
  it('should render the basic form fields', () => {
    render(
      <Wrapper>
        <Form onSubmit={mockOnSubmit} />
      </Wrapper>
    );
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subjects')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('should call the onSubmit function', async () => {
    render(
      <Wrapper>
        <Form onSubmit={mockOnSubmit} />
      </Wrapper>
    );

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Full name'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText('Email address'), { target: { value: 'jeff@gmail.com' } });
      fireEvent.change(screen.getByPlaceholderText('Subjects'), { target: { value: 'Pricing, availability' } });
      fireEvent.change(screen.getByPlaceholderText('Message'), { target: { value: 'A message that is being sent' } });
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
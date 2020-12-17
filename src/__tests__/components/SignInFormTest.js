import React, { useState } from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import SignInForm from '../../components/SignInForm';

describe('SignInForm', () => {
    it('calls function provided by onSubmit prop after pressing the submit button', async () => {
        const onSubmit = jest.fn();
        const initialValues = {
            user: '',
            password: '',
        };
        const { getByTestId } = render(<SignInForm onSubmit={onSubmit} initialValues={initialValues} />);


        await act(async () => {
            // call the fireEvent method here
            fireEvent.changeText(getByTestId('userNameField'), 'kalle');
            fireEvent.changeText(getByTestId('passwordField'), 'password');
            fireEvent.press(getByTestId('submitButton'));
        });

        expect(onSubmit).toHaveBeenCalledTimes(1);

        //   onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
            user: 'kalle',
            password: 'password',
        });
        expect(1).toBe(1);

    });
});
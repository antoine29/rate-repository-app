import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik, useField } from 'formik';
import FormikTextInput from './signForm/FormikTextInput';

const initialValues = {
    user: '',
    password: '',
};

const styles = StyleSheet.create({
    form: {
        margin: 15
    }
});

const onSubmit = values => {
    console.log(values);
};

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikTextInput name='user' label='user' placeholder='user' />
            <FormikTextInput name='password' label='password' placeholder='password' />
            <Button onPress={onSubmit} mode='contained'>
                SignIn
            </Button>
        </View>
    );
};

const SignIn = () => {
    const yup = require('yup');
    const validationSchema = yup.object().shape({
        user: yup
          .string()
          .length(3, 'User must be length greater than three charachters')
          .required('User is required'),
        password: yup
          .string()
          .length(3, 'Password must be length greater than three charachters')
          .required('Password is required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
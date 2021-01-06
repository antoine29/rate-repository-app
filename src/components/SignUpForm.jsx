import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import FormikTextInput from './signForm/FormikTextInput';

const Form = ({ onSubmit }) => {
    const styles = StyleSheet.create({
        form: {
            margin: 15
        }
    });
    
    return (
        <View style={styles.form}>
            <FormikTextInput name='user' label='user' placeholder='' testID='userNameField' />
            <FormikTextInput name='password' label='password' placeholder='' testID='passwordField' />
            <FormikTextInput name='passwordConfirmation' label='password confirmation' placeholder='' testID='passwordConfirmationField' />
            <Button onPress={onSubmit} mode='contained' testID='submitButton'>
                Sign Up
            </Button>
        </View>
    );
};

const SignUpForm = ({ initialValues, onSubmit, validationSchema,  }) => {    
    return (
        <Formik
            // style={{elevation :0}}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUpForm;
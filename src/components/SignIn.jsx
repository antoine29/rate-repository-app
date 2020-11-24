import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native-paper';
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
        // <View style={{ flex: 1}}>
        // </View>
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
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
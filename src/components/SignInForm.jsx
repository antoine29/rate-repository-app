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
            <FormikTextInput name='user' label='user' placeholder='user' testID='userNameField' />
            <FormikTextInput name='password' label='password' placeholder='password' testID='passwordField' />
            <Button onPress={onSubmit} mode='contained' testID='submitButton'>
                SignIn
            </Button>
        </View>
    );
};

const SignInForm = ({ initialValues, onSubmit, validationSchema,  }) => {    
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

export default SignInForm;
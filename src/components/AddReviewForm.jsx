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
            <FormikTextInput name='repositoryName' label='repository name' />
            <FormikTextInput name='repositoryOwnerName' label='repository owner name' />
            <FormikTextInput name='rating' label='rating' />
            <FormikTextInput name='review' label='review' multiline />
            <Button onPress={onSubmit} mode='contained' testID='submitButton'> Add Review </Button>
        </View>
    );
};

const AddReviewForm = ({ initialValues, onSubmit, validationSchema,  }) => {    
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

export default AddReviewForm;
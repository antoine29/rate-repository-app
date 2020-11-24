import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from '../Text';

const styles = StyleSheet.create({
    inputText: {
        // width: 's50%'
    },
    errorText: {
        marginTop: 5,
    },
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                style={styles.inputText}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;
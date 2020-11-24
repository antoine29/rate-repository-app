import React from 'react';
// import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native-paper';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
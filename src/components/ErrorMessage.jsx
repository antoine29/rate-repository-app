import React, { useContext, useState } from 'react';
import { Text } from 'react-native';

export let setErrorMessage = undefined;

const ErrorMessage = () => {
    const [errorMessage, _setErrorMessage] = useState('');
    setErrorMessage = (message, time) => {
        _setErrorMessage(message);
        setTimeout(() => { _setErrorMessage(''); }, time);
    };

    return errorMessage !== '' ? <Text>{errorMessage}</Text> : null;
};

export default ErrorMessage;
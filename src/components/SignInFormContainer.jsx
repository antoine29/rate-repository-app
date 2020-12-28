import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useSigIn from '../hooks/useSignIn';
import AuthStorageContext from '../contexts/AuthStorageContext';
import SignInForm from './SignInForm';

const initialValues = {
    user: '',
    password: '',
};

const SignInFormContainer = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const apolloClient = useApolloClient();
    const history = useHistory();
    const context = useContext(AuthStorageContext);
    const { signIn } = useSigIn();
    const yup = require('yup');
    
    const showErrorMessage = message => {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage('');
        }, 3000);
    };

    const onSubmit = async ({user, password}) => {
        try{
            const result = await signIn(user, password);
            if(result === undefined) throw {message: 'Communication error. Try again'};
            await context.authStorage.setAccessToken(result.authorize.accessToken);
            const storedToken = await context.authStorage.getAccessToken();
            console.log('Stored token:', storedToken);
            context.toastMessage = 'SignIn OK';
            apolloClient.resetStore();
            history.push('/');
        }
        catch(error){
            console.log('error:', error);
            console.log('error.message:', error.message);
            showErrorMessage(error.message);
        }
    };
    

    const validationSchema = yup.object().shape({
        user: yup
          .string()
          .min(3)
          .required('User is required'),
          password: yup
          .string()
          .min(3)
          .required('Password is required'),
    });

    return (
        <>
        <SignInForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit} />
        {/* <Toast message={'HIIIII'}/> */}
        {errorMessage !== '' && <Text>{errorMessage}</Text>}
        </>
    );
};

export default SignInFormContainer;
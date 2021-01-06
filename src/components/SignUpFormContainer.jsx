import React, { useContext } from 'react';
import { useHistory } from 'react-router-native';
import useCreateUser from '../hooks/useCreateUser';
import SignUpForm from './SignUpForm';
import ErrorMessage, { setErrorMessage } from './ErrorMessage';

const initialValues = {
    user: '',
    password: '',
    passwordConfirmation: '',
};

const SignUpFormContainer = () => {
    const history = useHistory();
    const { _createUser, result } = useCreateUser();
    const yup = require('yup');

    const onSubmit = async ({user, password, passwordConfirmation}) => {
        try{
            console.log(`creating user:: user:${user}, password:${password}, passwordConfirmation:${passwordConfirmation}`);
            await _createUser({ variables: { user: { username: user, password }}});
            const filteredResult = (({called, data, error, loading})=>({called, data, error, loading}))(result);
            console.log('createUser mutation result', filteredResult);
            history.push('/');
        }
        catch(error){
            console.log('error:', error);
            console.log('error.message:', error.message);
            setErrorMessage(error.message, 4000);
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
        passwordConfirmation: yup
          .string()
          .oneOf([yup.ref('password'), null])
          .required('Password confimation is required'),
    });

    return (
        <>
        <SignUpForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit} />
        <ErrorMessage />
        </>
    );
};

export default SignUpFormContainer;
import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';
import { useGetLazyRepositories } from '../hooks/useRepositories';
import * as yup from 'yup';
import AddReviewForm from './AddReviewForm';
import ErrorMessage, { setErrorMessage } from './ErrorMessage';

const initialValues = {
    repositoryName: '', 
    repositoryOwnerName: '',
    // rating: 0,
    review: '',
};


const AddReviewFormContainer = () => {
    const history = useHistory();
    const { _createReview, result } = useCreateReview();
    const [repoName, setRepoName] = useState('');
    const [repoOwner, setRepoOwner] = useState('');

    const searchRepo = ({repositories}) => repositories.edges.find(repo => repo.node.name === repoName && repo.node.ownerName === repoOwner);
    const [getRepositories, { loading, data, error, called }] = useGetLazyRepositories(
        () => {
            console.log(`searching values onCompleted mutation function:: name: ${repoName}, owner: ${repoOwner}`);
            let repo = searchRepo(data);
            if(repo) history.push(`repositories/${repo.node.id}`);
            else console.log(`no repo found!`);
        }
    );

    const onSubmit = async ({ repositoryName, repositoryOwnerName, rating, review }) => {
        setRepoName(repositoryName);
        setRepoOwner(repositoryOwnerName);
        try{
            console.log('adding review: ', repositoryName, repositoryOwnerName, rating, review);
            await _createReview({ variables: { repositoryName, ownerName: repositoryOwnerName, rating: Number(rating), text: review }});
            const filteredResult = (({called, data, error, loading})=>({called, data, error, loading}))(result);
            console.log('addReview hook result', filteredResult);
            if(result.data === undefined && result.error === undefined && result.loading === false){
                console.log('Error adding review, trying to reAdd in order to check if the review is already added');
                await _createReview({ variables: { repositoryName, ownerName: repositoryOwnerName, rating: Number(rating), text: review }});
            }else{
                console.log('addReview result:', result.data);
            }
        }
        catch(error){
            if(error.message === 'GraphQL error: User has already reviewed this repository'){
                console.log('review already added, try to go to the review page');
                console.log(`searching repo: name: ${repoName}, owner: ${repoOwner}`);
                getRepositories();
            }
            else{
                setErrorMessage(error.message, 4000);
                console.log('error.message:', error.message);
            }
        }
    };
    

    const validationSchema = yup.object().shape({
        repositoryName: yup
            .string()
            .required('Repository name is required'),
        repositoryOwnerName: yup
            .string()
            .required('Repository owner is required'),
        rating: yup
            .number()
            .integer()
            .min(0)
            .max(100)
            .required('Rating shoould be a number in 0-100 range.'),
        review: yup
            .string()
    });

    return (
        <>
            <AddReviewForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} />
            {/* {errorMessage !== '' && <Text>{errorMessage}</Text>} */}
            <ErrorMessage />
            {/* <Button title='state' onPress={()=>{
                console.log(`searching values onCompleted mutation function:: name: ${repoName}, owner: ${repoOwner}`);
            }}>state</Button> */}
        </>
    );
};

export default AddReviewFormContainer;
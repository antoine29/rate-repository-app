import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepoReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [getRepo, { loading, data, error }] = useLazyQuery(GET_REPOSITORY, { fetchPolicy: 'no-cache' });

    useEffect(()=>{
        if(data && data.repository){
            let nextReviews = data.repository.reviews.edges;
            setReviews([...reviews, ...nextReviews]);
        }
    }, [loading]);

    const fetchNextReviewPage = async (id, cursor=undefined) => {
        if(cursor){
            await getRepo({ variables: { id: id, first: 10, after: cursor } });
        }
        else{
            await getRepo({ variables: { id: id, first: 10 } });
        }
    };

    return {reviews, fetchNextReviewPage, loading, error};
};

export default useRepoReviews;
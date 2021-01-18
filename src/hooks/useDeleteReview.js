import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
    const [_deleteReview, result] = useMutation(
        DELETE_REVIEW,
        {refetchQueries: ['AUTHORIZED_USER']}
    );
    return { _deleteReview, result };
};

export default useDeleteReview;
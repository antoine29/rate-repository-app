import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [_createReview, result] = useMutation(CREATE_REVIEW);
    return { _createReview, result };
};

export default useCreateReview;
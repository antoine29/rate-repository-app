import { useLazyQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
    return useLazyQuery(GET_REPOSITORY);
};

export default useRepository;
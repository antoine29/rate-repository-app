import { useLazyQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
    return useLazyQuery(GET_REPOSITORY, { fetchPolicy: 'cache-and-network' });
};

export default useRepository;
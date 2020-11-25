import { useQuery } from '@apollo/client';
import GET_REPOSITORIES from '../graphql/queries';

const useRepositories = () => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    if (loading) return { repositories: [], loading };
    return { repositories: data.repositories, loading };
};

export default useRepositories;
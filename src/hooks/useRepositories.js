import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortCriteria, sortDirection) => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: { orderBy: sortCriteria, orderDirection: sortDirection}
    });

    if (loading || !data ) return { repositories: [], loading };
    return { response: data.repositories, loading };
};

export const useGetLazyRepositories = (onCompleted) => {
    return useLazyQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network', onCompleted: () => {onCompleted();} });
};

export default useRepositories;